// Authentication module for the Recruiting Management System

class AuthManager {
    constructor() {
        this.supabase = null;
        this.userRole = '';
        this.userDepartment = '';
        this.userAllowedPositions = [];
        this.userSource = null; // Agency source for agency role users
        this.currentUser = null;
    }

    /**
     * @param {Object} supabaseInstance
     * @param {boolean} recoveryHintFromUrl - true if URL already contained type=recovery before client parsed the session (SPA + PKCE sometimes skip PASSWORD_RECOVERY)
     */
    init(supabaseInstance, recoveryHintFromUrl = false) {
        this.supabase = supabaseInstance;
        this.passwordRecoveryActive = false;
        this._recoveryHintFromUrl = !!recoveryHintFromUrl;
        if (this._authSubscription) {
            this._authSubscription.unsubscribe();
            this._authSubscription = null;
        }
        const { data: { subscription } } = this.supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                this.resetUserData();
                return;
            }
            if (event === 'PASSWORD_RECOVERY') {
                this.passwordRecoveryActive = true;
            }
            if (event === 'INITIAL_SESSION' && session?.user && this._recoveryHintFromUrl) {
                this.passwordRecoveryActive = true;
            }
            if (
                session?.user &&
                (event === 'INITIAL_SESSION' ||
                    event === 'SIGNED_IN' ||
                    event === 'TOKEN_REFRESHED' ||
                    event === 'USER_UPDATED' ||
                    event === 'PASSWORD_RECOVERY')
            ) {
                this.currentUser = session.user;
            }
        });
        this._authSubscription = subscription;
    }

    /**
     * Full URL for Supabase resetPasswordForEmail redirectTo (dedicated set-password page).
     */
    getPasswordResetRedirectUrl() {
        const explicit = typeof window !== 'undefined' && window.config?.app?.passwordResetRedirectUrl;
        if (explicit && String(explicit).trim().startsWith('http')) {
            return String(explicit).trim();
        }
        try {
            const site = typeof window !== 'undefined' && window.config?.app?.siteUrl;
            if (site && String(site).trim().startsWith('http')) {
                const u = new URL(String(site).trim());
                return `${u.origin}/reset-password.html`;
            }
        } catch (e) {
            /* ignore */
        }
        if (typeof window !== 'undefined' && window.location?.origin) {
            return `${window.location.origin}/reset-password.html`;
        }
        return '';
    }

    /**
     * Send password reset email via Resend Edge Function (login page).
     * Uses token_hash links so Outlook Safe Links do not burn the OTP.
     */
    async requestPasswordReset(email) {
        const config = typeof window !== 'undefined' ? window.config : null;
        if (!config?.supabase?.url || !config?.supabase?.anonKey) {
            throw new Error('Supabase configuration not found');
        }

        const response = await fetch(`${config.supabase.url}/functions/v1/send-password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.supabase.anonKey}`,
                'apikey': config.supabase.anonKey
            },
            body: JSON.stringify({ email })
        });

        let payload = null;
        try {
            payload = await response.json();
        } catch {
            payload = null;
        }

        if (!response.ok || payload?.success === false) {
            throw new Error(payload?.message || `HTTP ${response.status}`);
        }
    }

    /**
     * Set new password after following email recovery link (no current password)
     */
    async setNewPasswordAfterRecovery(newPassword) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { error } = await this.supabase.auth.updateUser({ password: newPassword });
        if (error) {
            throw error;
        }
    }

    /**
     * Login user with email and password
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {Promise<Object>} - Login result
     */
    async login(email, password) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({ 
                email, 
                password 
            });

            if (error) {
                throw error;
            }

            this.currentUser = data.user;

            // Fetch user role and permissions
            await this.fetchUserPermissions(data.user.id);

            this.passwordRecoveryActive = false;
            this._recoveryHintFromUrl = false;

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    /**
     * Logout current user
     * @returns {Promise<void>}
     */
    async logout() {
        if (!this.supabase) return;

        try {
            await this.supabase.auth.signOut();
            this.resetUserData();
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    /**
     * Check if user is authenticated
     * @returns {Promise<boolean>}
     */
    async checkAuth() {
        if (!this.supabase) return false;

        try {
            const { data: { user } } = await this.supabase.auth.getUser();
            
            if (user) {
                this.currentUser = user;
                await this.fetchUserPermissions(user.id);
                return true;
            } else {
                this.resetUserData();
                return false;
            }
        } catch (error) {
            console.error('Auth check error:', error);
            this.resetUserData();
            return false;
        }
    }

    /**
     * Fetch user permissions and role
     * @param {string} userId - User ID
     * @returns {Promise<void>}
     */
    async fetchUserPermissions(userId) {
        if (!this.supabase) return;

        try {
            const { data, error } = await this.supabase
                .from('users')
                .select('role, department, allowed_positions, source')
                .eq('id', userId)
                .single();

            if (data) {
                this.userRole = data.role;
                this.userDepartment = data.department;
                this.userSource = data.source || null; // Store agency source if available
                
                console.log('🔍 AuthManager: Loaded user data:', {
                    role: this.userRole,
                    department: this.userDepartment,
                    source: this.userSource,
                    rawData: data
                });
                
                // Parse allowed_positions - could be array, JSON string, or null
                let allowedPositions = [];
                if (data.allowed_positions) {
                    if (typeof data.allowed_positions === 'string') {
                        try {
                            // Try to parse as JSON string
                            allowedPositions = JSON.parse(data.allowed_positions);
                        } catch (e) {
                            console.error('Error parsing allowed_positions JSON:', e);
                            allowedPositions = [];
                        }
                    } else if (Array.isArray(data.allowed_positions)) {
                        allowedPositions = data.allowed_positions;
                    }
                }
                this.userAllowedPositions = allowedPositions;
                
                console.log('User permissions loaded:', {
                    role: this.userRole,
                    department: this.userDepartment,
                    allowedPositions: this.userAllowedPositions,
                    source: this.userSource
                });
            }
        } catch (error) {
            console.error('Error fetching user permissions:', error);
            // Set default values if fetch fails
            this.userRole = 'user';
            this.userDepartment = '';
            this.userAllowedPositions = [];
            this.userSource = null;
        }
    }

    /**
     * Resolve Supabase user into currentUser (getUser validates JWT; getSession reads persisted session).
     * @returns {Promise<Object|null>} Supabase User or null
     */
    async resolveAuthUser() {
        if (!this.supabase) {
            return null;
        }
        if (this.currentUser) {
            return this.currentUser;
        }
        const { data: getData, error: getErr } = await this.supabase.auth.getUser();
        if (getErr) {
            console.warn('AuthManager.resolveAuthUser: getUser failed', getErr);
        }
        if (getData?.user) {
            this.currentUser = getData.user;
            return this.currentUser;
        }
        const { data: sessData, error: sessErr } = await this.supabase.auth.getSession();
        if (sessErr) {
            console.warn('AuthManager.resolveAuthUser: getSession failed', sessErr);
        }
        if (sessData?.session?.user) {
            this.currentUser = sessData.session.user;
            return this.currentUser;
        }
        return null;
    }

    /**
     * Update user password
     * @param {string} currentPassword - Current password
     * @param {string} newPassword - New password
     * @returns {Promise<Object>}
     */
    async updatePassword(currentPassword, newPassword) {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized');
        }

        const user = await this.resolveAuthUser();
        if (!user || !user.email) {
            throw new Error('Not authenticated');
        }

        try {
            // Verify current password
            const { error: signInError } = await this.supabase.auth.signInWithPassword({
                email: this.currentUser.email,
                password: currentPassword
            });

            if (signInError) {
                throw new Error('Current password is incorrect');
            }

            // Update to new password
            const { error: updateError } = await this.supabase.auth.updateUser({
                password: newPassword
            });

            if (updateError) {
                throw updateError;
            }

            return { success: true };
        } catch (error) {
            console.error('Password update error:', error);
            throw error;
        }
    }

    /**
     * Reset user data
     */
    resetUserData() {
        this.userRole = '';
        this.userDepartment = '';
        this.userAllowedPositions = [];
        this.currentUser = null;
        this.passwordRecoveryActive = false;
    }

    /**
     * Check if user has permission for specific action
     * @param {string} action - Action to check
     * @param {string} resource - Resource being accessed
     * @returns {boolean}
     */
    hasPermission(action, resource = null) {
        switch (this.userRole) {
            case 'gm':
                return true; // GM has all permissions
            case 'recruiter':
                return ['view', 'create', 'update'].includes(action);
            case 'manager':
                if (action === 'view' && resource === 'own_department') {
                    return true;
                }
                return ['view', 'create', 'update'].includes(action);
            default:
                return false;
        }
    }

    /**
     * Check if user can access specific department
     * @param {string} department - Department to check
     * @returns {boolean}
     */
    canAccessDepartment(department) {
        if (this.userRole === 'gm' || this.userRole === 'recruiter') return true;
        return this.userDepartment === department;
    }

    /**
     * Check if user can access specific position
     * @param {string} position - Position to check
     * @returns {boolean}
     */
    canAccessPosition(position) {
        if (this.userRole === 'gm' || this.userRole === 'recruiter') return true;
        if (this.userAllowedPositions.length === 0) return true; // Department-level access
        return this.userAllowedPositions.includes(position);
    }

    /**
     * Get user info
     * @returns {Object}
     */
    getUserInfo() {
        return {
            user: this.currentUser,
            role: this.userRole,
            department: this.userDepartment,
            allowedPositions: this.userAllowedPositions,
            source: this.userSource // Agency source for agency role
        };
    }

    /**
     * Show login form
     */
    showLogin() {
        const loginForm = document.getElementById('login-form');
        const appContent = document.getElementById('app-content');
        
        if (loginForm) loginForm.style.display = 'block';
        if (appContent) appContent.style.display = 'none';
    }

    /**
     * Show app content (hide login)
     */
    showApp() {
        const loginForm = document.getElementById('login-form');
        const appContent = document.getElementById('app-content');
        
        if (loginForm) loginForm.style.display = 'none';
        if (appContent) {
            appContent.style.display = 'block';
            appContent.classList.add('visible');
        }
    }
}

// Create global instance
window.authManager = new AuthManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}
