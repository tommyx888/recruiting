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
        const closeBtn = document.getElementsByClassName('close')[0];

        if (updatePasswordBtn) {
            updatePasswordBtn.onclick = () => {
                if (modal) modal.style.display = 'block';
            };
        }

        if (closeBtn) {
            closeBtn.onclick = () => {
                if (modal) modal.style.display = 'none';
            };
        }

        // Close modal when clicking outside
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

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
     * Handle password update
     */
    async handlePasswordUpdate() {
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmNewPassword = document.getElementById('confirm-new-password').value;

        if (newPassword !== confirmNewPassword) {
            window.utils.showMessage(this.translate('New passwords do not match'), 'error');
            return;
        }

        try {
            await window.authManager.updatePassword(currentPassword, newPassword);
            window.utils.showMessage(this.translate('Password updated successfully'), 'success');
            
            // Close modal and clear form
            const modal = document.getElementById('update-password-modal');
            if (modal) modal.style.display = 'none';
            
            document.getElementById('update-password-form').reset();
        } catch (error) {
            window.utils.showMessage(this.translate('Error updating password. Please try again.'), 'error');
        }
    }

    /**
     * Show login form (hide app content)
     */
    showLogin() {
        const loginForm = document.getElementById('login-form');
        const appContent = document.getElementById('app-content');
        
        if (loginForm) loginForm.style.display = 'block';
        if (appContent) {
            appContent.style.display = 'none';
            appContent.classList.remove('visible');
        }
    }

    /**
     * Show app content (hide login)
     */
    showApp() {
        console.log('UIManager.showApp() called');
        const loginForm = document.getElementById('login-form');
        const appContent = document.getElementById('app-content');
        
        console.log('Login form found:', !!loginForm);
        console.log('App content found:', !!appContent);
        
        if (loginForm) {
            loginForm.style.display = 'none';
            console.log('Login form hidden');
        }
        if (appContent) {
            appContent.style.display = 'block';
            appContent.classList.add('visible');
            console.log('App content shown');
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
                    <p style="color: var(--text-color); font-size: 1.1rem; font-weight: 500;">${message}</p>
                </div>
            `;
        }
    }

    /**
     * Show error state
     * @param {string} message - Error message
     */
    showError(message) {
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
        
        const navStatistics = document.getElementById('nav-statistics');
        const navReports = document.getElementById('nav-reports');
        const navGMApproval = document.getElementById('nav-gm-approval');
        const navRequests = document.getElementById('nav-requests');

        console.log('Navigation elements found:', {
            navStatistics: !!navStatistics,
            navReports: !!navReports,
            navGMApproval: !!navGMApproval,
            navRequests: !!navRequests
        });

        if (userInfo.role === 'gm' || userInfo.role === 'recruiter') {
            if (navGMApproval) navGMApproval.style.display = 'inline';
            if (navRequests) navRequests.style.display = 'inline';
            if (navStatistics) navStatistics.style.display = 'inline';
            if (navReports) navReports.style.display = 'inline';
            console.log('GM navigation shown');
        } else {
            if (navStatistics) navStatistics.style.display = 'none';
            if (navReports) navReports.style.display = 'none';
            if (navGMApproval) navGMApproval.style.display = 'none';
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
