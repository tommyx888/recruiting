// UI management module for the Recruiting Management System

class UIManager {
    constructor() {
        this.currentLanguage = 'sk';
        this.isDarkMode = false;
        this.translations = null;
    }

    /**
     * Initialize UI manager
     * @param {Object} translations - Translation object
     */
    init(translations) {
        this.translations = translations;
        this.loadUserPreferences();
        this.setupEventListeners();
    }

    /**
     * Load user preferences from localStorage
     */
    loadUserPreferences() {
        // Load language preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }

        // Load dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            this.isDarkMode = JSON.parse(savedDarkMode);
            this.applyDarkMode();
        }
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Language switcher
        document.addEventListener('click', (e) => {
            if (e.target.closest('.lang-btn')) {
                const lang = e.target.closest('.lang-btn').id.replace('-lang', '');
                this.switchLanguage(lang);
            }
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }

        // Update password modal
        this.setupPasswordModal();
    }

    /**
     * Switch language
     * @param {string} lang - Language code
     */
    switchLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Translation for language "${lang}" not found`);
            return;
        }

        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`${lang}-lang`);
        if (activeBtn) activeBtn.classList.add('active');

        this.translatePage();

        // Re-render open Interview Pack in the new language (preserve answers)
        if (window._interviewPackState && typeof renderInterviewPackView === 'function') {
            try {
                if (typeof collectInterviewPackFormData === 'function') {
                    collectInterviewPackFormData();
                }
                renderInterviewPackView();
            } catch (e) {
                console.warn('Could not re-render interview pack after language switch:', e);
            }
        }
    }

    /**
     * Translate page elements
     */
    translatePage() {
        if (!this.translations[this.currentLanguage]) return;

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    /**
     * Get translation for key
     * @param {string} key - Translation key
     * @returns {string} - Translated text
     */
    translate(key) {
        if (!this.translations[this.currentLanguage]) {
            console.warn(`Translation for language "${this.currentLanguage}" not found`);
            return key;
        }
        return this.translations[this.currentLanguage][key] || key;
    }

    /**
     * Toggle dark mode
     */
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyDarkMode();
    }

    /**
     * Apply dark mode styles
     */
    applyDarkMode() {
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        this.updateDarkModeButton();
    }

    /**
     * Update dark mode button icon
     */
    updateDarkModeButton() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
        }
    }

    /**
     * Setup password update modal
     */
    setupPasswordModal() {
        const modal = document.getElementById('update-password-modal');
        const updatePasswordBtn = document.getElementById('update-password-btn');
        const closeBtn = modal?.querySelector('.close');
        const cancelBtn = document.getElementById('cancel-password-update');
        const newPasswordInput = document.getElementById('new-password');
        const confirmPasswordInput = document.getElementById('confirm-new-password');
        const currentPasswordInput = document.getElementById('current-password');

        // Open modal
        if (updatePasswordBtn) {
            updatePasswordBtn.onclick = () => {
                if (modal) {
                    modal.style.display = 'block';
                    // Reset form when opening
                    this.resetPasswordForm();
                    // Focus on current password
                    if (currentPasswordInput) {
                        setTimeout(() => currentPasswordInput.focus(), 100);
                    }
                }
            };
        }

        // Close modal handlers
        const closeModal = () => {
            if (modal) {
                modal.style.display = 'none';
                this.resetPasswordForm();
            }
        };

        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }

        if (cancelBtn) {
            cancelBtn.onclick = closeModal;
        }

        // Close modal when clicking outside
        if (modal) {
            modal.onclick = (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            };
        }

        // Toggle password visibility
        const toggleButtons = modal?.querySelectorAll('.toggle-password');
        if (toggleButtons) {
            toggleButtons.forEach(btn => {
                btn.onclick = () => {
                    const targetId = btn.getAttribute('data-target');
                    const input = document.getElementById(targetId);
                    if (input) {
                        const isPassword = input.type === 'password';
                        input.type = isPassword ? 'text' : 'password';
                        btn.querySelector('.eye-icon').textContent = isPassword ? '🙈' : '👁️';
                    }
                };
            });
        }

        // Password strength checker
        if (newPasswordInput) {
            newPasswordInput.addEventListener('input', () => {
                this.checkPasswordStrength(newPasswordInput.value);
                this.validatePasswordRequirements(newPasswordInput.value);
                this.validatePasswordMatch();
            });
        }

        // Confirm password match checker
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                this.validatePasswordMatch();
            });
        }

        // Handle password update form
        const updatePasswordForm = document.getElementById('update-password-form');
        if (updatePasswordForm) {
            updatePasswordForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handlePasswordUpdate();
            });
        }
    }

    /**
     * Reset password form
     */
    resetPasswordForm() {
        const form = document.getElementById('update-password-form');
        if (form) {
            // Clear all errors first
            this.clearPasswordErrors();
            
            // Reset form
            form.reset();
            
            // Reset all visual indicators
            this.resetPasswordStrength();
            this.resetPasswordRequirements();
            
            // Reset password visibility
            const toggleButtons = document.querySelectorAll('.toggle-password');
            toggleButtons.forEach(btn => {
                const targetId = btn.getAttribute('data-target');
                const input = document.getElementById(targetId);
                if (input) {
                    input.type = 'password';
                    btn.querySelector('.eye-icon').textContent = '👁️';
                }
            });
            
            // Remove all error/success classes from inputs
            const inputs = document.querySelectorAll('.password-input');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
        }
    }

    /**
     * Check password strength
     */
    checkPasswordStrength(password) {
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        
        if (!strengthFill || !strengthText) return;

        if (!password) {
            strengthFill.className = 'strength-fill';
            strengthFill.style.width = '0%';
            strengthText.textContent = this.translate('Password Strength');
            return;
        }

        let strength = 0;
        let strengthLabel = '';
        let strengthClass = '';

        // Check length
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;

        // Check for uppercase
        if (/[A-Z]/.test(password)) strength++;

        // Check for lowercase
        if (/[a-z]/.test(password)) strength++;

        // Check for numbers
        if (/[0-9]/.test(password)) strength++;

        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength <= 2) {
            strengthClass = 'weak';
            strengthLabel = this.translate('Weak');
        } else if (strength <= 4) {
            strengthClass = 'medium';
            strengthLabel = this.translate('Medium');
        } else {
            strengthClass = 'strong';
            strengthLabel = this.translate('Strong');
        }

        strengthFill.className = `strength-fill ${strengthClass}`;
        strengthText.textContent = `${this.translate('Password Strength')}: ${strengthLabel}`;
    }

    /**
     * Validate password requirements
     */
    validatePasswordRequirements(password) {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };

        const reqIds = {
            length: 'req-length',
            uppercase: 'req-uppercase',
            lowercase: 'req-lowercase',
            number: 'req-number',
            special: 'req-special'
        };

        Object.keys(requirements).forEach(key => {
            const reqElement = document.getElementById(reqIds[key]);
            if (reqElement) {
                const icon = reqElement.querySelector('.req-icon');
                if (requirements[key]) {
                    reqElement.classList.add('valid');
                    reqElement.classList.remove('invalid');
                    if (icon) icon.textContent = '✓';
                } else {
                    reqElement.classList.remove('valid');
                    reqElement.classList.add('invalid');
                    if (icon) icon.textContent = '✗';
                }
            }
        });
    }

    /**
     * Validate password match
     */
    validatePasswordMatch() {
        // Don't validate if modal is hidden or form is being reset
        const modal = document.getElementById('update-password-modal');
        if (!modal || modal.style.display === 'none') {
            return;
        }

        const newPassword = document.getElementById('new-password')?.value;
        const confirmPassword = document.getElementById('confirm-new-password')?.value;
        const confirmInput = document.getElementById('confirm-new-password');
        const errorElement = document.getElementById('confirm-password-error');

        // Double check modal is still visible
        if (modal.style.display === 'none') {
            return;
        }

        if (!confirmPassword) {
            this.clearError('confirm-password-error');
            if (confirmInput) confirmInput.classList.remove('error', 'success');
            return;
        }

        if (newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                if (confirmInput) {
                    confirmInput.classList.remove('error');
                    confirmInput.classList.add('success');
                }
                this.clearError('confirm-password-error');
            } else {
                // Only show error if modal is still visible
                if (modal.style.display !== 'none') {
                    if (confirmInput) {
                        confirmInput.classList.remove('success');
                        confirmInput.classList.add('error');
                    }
                    this.showError('confirm-password-error', this.translate('Passwords do not match'));
                }
            }
        }
    }

    /**
     * Show error message
     */
    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    /**
     * Clear error message
     */
    clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    }

    /**
     * Clear all password errors
     */
    clearPasswordErrors() {
        ['current-password-error', 'new-password-error', 'confirm-password-error'].forEach(id => {
            this.clearError(id);
        });
        const inputs = document.querySelectorAll('.password-input');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
    }

    /**
     * Reset password strength indicator
     */
    resetPasswordStrength() {
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        if (strengthFill) {
            strengthFill.className = 'strength-fill';
            strengthFill.style.width = '0%';
        }
        if (strengthText) {
            strengthText.textContent = this.translate('Password Strength');
        }
    }

    /**
     * Reset password requirements
     */
    resetPasswordRequirements() {
        const reqIds = ['req-length', 'req-uppercase', 'req-lowercase', 'req-number', 'req-special'];
        reqIds.forEach(id => {
            const reqElement = document.getElementById(id);
            if (reqElement) {
                reqElement.classList.remove('valid', 'invalid');
                const icon = reqElement.querySelector('.req-icon');
                if (icon) icon.textContent = '✗';
            }
        });
    }

    /**
     * Handle password update
     */
    async handlePasswordUpdate() {
        // Clear previous errors
        this.clearPasswordErrors();

        const currentPassword = document.getElementById('current-password')?.value.trim();
        const newPassword = document.getElementById('new-password')?.value.trim();
        const confirmNewPassword = document.getElementById('confirm-new-password')?.value.trim();
        const submitBtn = document.getElementById('submit-password-update');

        // Validate inputs
        let hasErrors = false;

        if (!currentPassword) {
            this.showError('current-password-error', this.translate('Current password is required'));
            document.getElementById('current-password')?.classList.add('error');
            hasErrors = true;
        }

        if (!newPassword) {
            this.showError('new-password-error', this.translate('New password is required'));
            document.getElementById('new-password')?.classList.add('error');
            hasErrors = true;
        } else if (newPassword.length < 8) {
            this.showError('new-password-error', this.translate('Password must be at least 8 characters long'));
            document.getElementById('new-password')?.classList.add('error');
            hasErrors = true;
        } else {
            // Check password requirements
            const requirements = {
                uppercase: /[A-Z]/.test(newPassword),
                lowercase: /[a-z]/.test(newPassword),
                number: /[0-9]/.test(newPassword),
                special: /[^A-Za-z0-9]/.test(newPassword)
            };

            const missingRequirements = Object.entries(requirements)
                .filter(([_, met]) => !met)
                .map(([key]) => key);

            if (missingRequirements.length > 0) {
                this.showError('new-password-error', this.translate('Password does not meet all requirements'));
                document.getElementById('new-password')?.classList.add('error');
                hasErrors = true;
            }
        }

        if (!confirmNewPassword) {
            this.showError('confirm-password-error', this.translate('Please confirm your new password'));
            document.getElementById('confirm-new-password')?.classList.add('error');
            hasErrors = true;
        } else if (newPassword !== confirmNewPassword) {
            this.showError('confirm-password-error', this.translate('Passwords do not match'));
            document.getElementById('confirm-new-password')?.classList.add('error');
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        // Disable submit button during processing
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = this.translate('Updating...');
        }

        try {
            await window.authManager.updatePassword(currentPassword, newPassword);
            
            // Close modal first to prevent any validation triggers
            const modal = document.getElementById('update-password-modal');
            if (modal) {
                modal.style.display = 'none';
            }
            
            // Clear all errors and reset form after modal is closed
            this.clearPasswordErrors();
            this.resetPasswordForm();
            
            // Show success message after everything is cleared
            setTimeout(() => {
                window.utils.showMessage(this.translate('Password updated successfully'), 'success');
            }, 100);
        } catch (error) {
            console.error('Password update error:', error);
            
            // Show specific error messages
            let errorMessage = this.translate('Error updating password. Please try again.');
            
            if (error.message) {
                if (error.message.includes('incorrect') || error.message.includes('Current password')) {
                    errorMessage = this.translate('Current password is incorrect');
                    this.showError('current-password-error', errorMessage);
                    document.getElementById('current-password')?.classList.add('error');
                } else if (error.message.includes('same')) {
                    errorMessage = this.translate('New password must be different from current password');
                    this.showError('new-password-error', errorMessage);
                    document.getElementById('new-password')?.classList.add('error');
                } else {
                    window.utils.showMessage(errorMessage, 'error');
                }
            } else {
                window.utils.showMessage(errorMessage, 'error');
            }
        } finally {
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = this.translate('Update Password');
            }
        }
    }

    /**
     * Show login form (hide app content)
     */
    showLogin() {
        const loginScreen = document.getElementById('login-screen');
        const appContent = document.getElementById('app-content');
        if (loginScreen) loginScreen.style.display = 'flex';
        if (appContent) {
            appContent.style.display = 'none';
            appContent.classList.remove('visible');
        }
    }

    /**
     * Show app content (hide login)
     */
    showApp() {
        const loginScreen = document.getElementById('login-screen');
        const appContent = document.getElementById('app-content');
        if (loginScreen) loginScreen.style.display = 'none';
        if (appContent) {
            appContent.style.display = 'block';
            appContent.classList.add('visible');
        }
    }

    /**
     * Show loading state
     * @param {string} message - Loading message
     */
    showLoading(message = 'Loading...') {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <div class="loading-container fade-in" style="text-align: center; padding: 50px;">
                    <div class="spinner" style="border: 4px solid #f3f3f3; border-top: 4px solid var(--primary-color); border-radius: 50%; width: 40px; height: 40px; animation: spin 2s linear infinite; margin: 0 auto 20px;"></div>
                    <p class="loading-message" style="color: var(--text-color); font-size: 1.1rem; font-weight: 500;">${message}<span class="loading-dots">...</span></p>
                </div>
            `;
        }
    }

    /**
     * Hide loading state (does nothing, loading is hidden by replacing app content)
     * This method exists for compatibility with code that calls hideLoading()
     */
    hideLoading() {
        // Loading is automatically hidden when app content is replaced
        // This method exists for API compatibility
        return;
    }

    /**
     * Show error state (full page error)
     * @param {string} message - Error message
     */
    showErrorPage(message) {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <div class="error-container" style="text-align: center; padding: 50px; color: #e74c3c;">
                    <h2>${this.translate('Error')}</h2>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="btn btn-primary">${this.translate('Reload Page')}</button>
                </div>
            `;
        }
    }

    /**
     * Create table with pagination
     * @param {Array} data - Table data
     * @param {Array} columns - Column definitions
     * @param {Object} pagination - Pagination info
     * @param {Function} onPageChange - Page change callback
     * @returns {HTMLElement} - Table container
     */
    createTableWithPagination(data, columns, pagination, onPageChange) {
        const container = document.createElement('div');
        container.className = 'table-container';

        // Create table
        const table = document.createElement('table');
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        columns.forEach(col => {
            const th = document.createElement('th');
            th.textContent = this.translate(col.header);
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create body
        const tbody = document.createElement('tbody');
        data.forEach(row => {
            const tr = document.createElement('tr');
            columns.forEach(col => {
                const td = document.createElement('td');
                if (col.render) {
                    td.innerHTML = col.render(row[col.key], row);
                } else {
                    td.textContent = row[col.key] || '';
                }
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        container.appendChild(table);

        // Add pagination if needed
        if (pagination && pagination.totalPages > 1) {
            const paginationContainer = window.pagination.createPagination(
                pagination.currentPage,
                pagination.totalPages,
                onPageChange
            );
            const paginationInfo = window.pagination.createPaginationInfo(pagination);
            
            container.appendChild(paginationInfo);
            container.appendChild(paginationContainer);
        }

        return container;
    }

    /**
     * Create form with validation
     * @param {Array} fields - Form field definitions
     * @param {Object} data - Initial data
     * @param {Function} onSubmit - Submit handler
     * @returns {HTMLElement} - Form element
     */
    createForm(fields, data = {}, onSubmit) {
        const form = document.createElement('form');
        form.className = 'form';

        fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            // Create label
            const label = document.createElement('label');
            label.textContent = this.translate(field.label);
            if (field.required) {
                label.classList.add('required');
            }
            formGroup.appendChild(label);

            // Create input
            const input = this.createInput(field, data[field.key]);
            formGroup.appendChild(input);

            form.appendChild(formGroup);
        });

        // Add submit button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = this.translate('Submit');
        form.appendChild(submitBtn);

        // Add submit handler
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = {};
            fields.forEach(field => {
                data[field.key] = formData.get(field.key);
            });
            onSubmit(data);
        });

        return form;
    }

    /**
     * Create input element
     * @param {Object} field - Field definition
     * @param {*} value - Initial value
     * @returns {HTMLElement} - Input element
     */
    createInput(field, value = '') {
        let input;

        switch (field.type) {
            case 'select':
                input = document.createElement('select');
                if (field.options) {
                    field.options.forEach(option => {
                        const opt = document.createElement('option');
                        opt.value = option.value;
                        opt.textContent = this.translate(option.label);
                        if (option.value === value) opt.selected = true;
                        input.appendChild(opt);
                    });
                }
                break;
            case 'textarea':
                input = document.createElement('textarea');
                input.value = value;
                break;
            case 'checkbox':
                input = document.createElement('input');
                input.type = 'checkbox';
                input.checked = value;
                break;
            default:
                input = document.createElement('input');
                input.type = field.type || 'text';
                input.value = value;
        }

        input.name = field.key;
        input.id = field.key;
        if (field.required) input.required = true;
        if (field.placeholder) input.placeholder = this.translate(field.placeholder);

        return input;
    }

    /**
     * Update navigation visibility based on user role
     */
    updateNavigationVisibility() {
        console.log('UIManager.updateNavigationVisibility() called');
        const userInfo = window.authManager.getUserInfo();
        console.log('User info:', userInfo);
        
        const navDashboard = document.getElementById('nav-dashboard');
        const navStatistics = document.getElementById('nav-statistics');
        const navReports = document.getElementById('nav-reports');
        const navGMApproval = document.getElementById('nav-gm-approval');
        const navTalentPool = document.getElementById('nav-talent-pool');
        const navRequests = document.getElementById('nav-requests');
        const navManageSlots = document.getElementById('nav-manage-slots');
        const navAgencyView = document.getElementById('nav-agency-view');
        const navAgencySubmissions = document.getElementById('nav-agency-submissions');

        console.log('Navigation elements found:', {
            navDashboard: !!navDashboard,
            navStatistics: !!navStatistics,
            navReports: !!navReports,
            navGMApproval: !!navGMApproval,
            navTalentPool: !!navTalentPool,
            navRequests: !!navRequests,
            navManageSlots: !!navManageSlots,
            navAgencyView: !!navAgencyView
        });

        if (userInfo.role === 'gm' || userInfo.role === 'recruiter') {
            if (navDashboard) navDashboard.style.display = 'inline';
            if (navGMApproval) navGMApproval.style.display = 'inline';
            if (navTalentPool) navTalentPool.style.display = 'inline';
            if (navRequests) navRequests.style.display = 'inline';
            if (navStatistics) navStatistics.style.display = 'inline';
            if (navReports) navReports.style.display = 'inline';
            if (navManageSlots) navManageSlots.style.display = 'inline';
            if (navAgencyView) navAgencyView.style.display = 'none';
            if (navAgencySubmissions) navAgencySubmissions.style.display = 'inline';
            console.log('GM/Recruiter navigation shown');
        } else if (userInfo.role === 'agency' || userInfo.role === 'agency-interim') {
            if (navDashboard) navDashboard.style.display = 'none';
            if (navGMApproval) navGMApproval.style.display = 'none';
            if (navTalentPool) navTalentPool.style.display = 'none';
            if (navRequests) navRequests.style.display = 'none';
            if (navStatistics) navStatistics.style.display = 'none';
            if (navReports) navReports.style.display = 'none';
            if (navManageSlots) navManageSlots.style.display = 'none';
            if (navAgencyView) navAgencyView.style.display = 'inline';
            if (navAgencySubmissions) navAgencySubmissions.style.display = 'none';
            console.log('Agency navigation shown (no dashboard)');
        } else if (userInfo.role === 'Manager') {
            // Managers see only Dashboard, Candidates, and Requests (filtered by department/positions)
            if (navGMApproval) navGMApproval.style.display = 'none';
            if (navTalentPool) navTalentPool.style.display = 'none';
            if (navRequests) navRequests.style.display = 'inline';
            if (navStatistics) navStatistics.style.display = 'none';
            if (navReports) navReports.style.display = 'none';
            if (navAgencySubmissions) navAgencySubmissions.style.display = 'none';
            console.log('Manager navigation shown (limited)');
        } else {
            if (navStatistics) navStatistics.style.display = 'none';
            if (navReports) navReports.style.display = 'none';
            if (navGMApproval) navGMApproval.style.display = 'none';
            if (navTalentPool) navTalentPool.style.display = 'none';
            if (navAgencySubmissions) navAgencySubmissions.style.display = 'none';
            if (navRequests) {
                navRequests.style.display = (userInfo.role === 'recruiter' || userInfo.allowedPositions.length === 0) ? 'inline' : 'none';
            }
            console.log('Non-GM navigation configured');
        }
    }
}

// Create global instance
window.uiManager = new UIManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIManager;
}
