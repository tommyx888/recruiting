// Authentication module for the Recruiting Management System

class AuthManager {
    constructor() {
        this.supabase = null;
        this.userRole = '';
        this.userDepartment = '';
        this.userAllowedPositions = [];
        this.currentUser = null;
    }

    /**
     * Initialize authentication with Supabase
     * @param {Object} supabaseInstance - Supabase client instance
     */
    init(supabaseInstance) {
        this.supabase = supabaseInstance;
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

            // Fetch user role and permissions
            await this.fetchUserPermissions(data.user.id);
            
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
                .select('role, department, allowed_positions')
                .eq('id', userId)
                .single();

            if (data) {
                this.userRole = data.role;
                this.userDepartment = data.department;
                this.userAllowedPositions = data.allowed_positions || [];
            }
        } catch (error) {
            console.error('Error fetching user permissions:', error);
            // Set default values if fetch fails
            this.userRole = 'user';
            this.userDepartment = '';
            this.userAllowedPositions = [];
        }
    }

    /**
     * Update user password
     * @param {string} currentPassword - Current password
     * @param {string} newPassword - New password
     * @returns {Promise<Object>}
     */
    async updatePassword(currentPassword, newPassword) {
        if (!this.supabase || !this.currentUser) {
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
        if (this.userRole === 'gm') return true;
        return this.userDepartment === department;
    }

    /**
     * Check if user can access specific position
     * @param {string} position - Position to check
     * @returns {boolean}
     */
    canAccessPosition(position) {
        if (this.userRole === 'gm') return true;
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
            allowedPositions: this.userAllowedPositions
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
