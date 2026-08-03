(function () {
    const STR = {
        sk: {
            'Set new password': 'Nastaviť nové heslo',
            'Recruiting Management System': 'Recruiting Management System',
            'New Password': 'Nové heslo',
            'Confirm New Password': 'Potvrďte nové heslo',
            'Save new password': 'Uložiť nové heslo',
            'Back to login': 'Späť na prihlásenie',
            'Updating...': 'Ukladám...',
            'Password updated successfully': 'Heslo bolo úspešne zmenené',
            'Error updating password. Please try again.': 'Nepodarilo sa zmeniť heslo. Skúste to znova.',
            'Password must be at least 8 characters long': 'Heslo musí mať aspoň 8 znakov',
            'Password does not meet all requirements': 'Heslo nespĺňa všetky požiadavky',
            'Passwords do not match': 'Heslá sa nezhodujú',
            'Reset link invalid': 'Odkaz na obnovenie nie je platný',
            'Invalid or expired reset link. Please request a new reset email from the login page.':
                'Neplatný alebo expirovaný odkaz. Požiadajte o nový e-mail na obnovenie hesla na prihlasovacej stránke.'
        },
        en: {
            'Set new password': 'Set new password',
            'Recruiting Management System': 'Recruiting Management System',
            'New Password': 'New Password',
            'Confirm New Password': 'Confirm New Password',
            'Save new password': 'Save new password',
            'Back to login': 'Back to login',
            'Updating...': 'Saving...',
            'Password updated successfully': 'Password updated successfully',
            'Error updating password. Please try again.': 'Error updating password. Please try again.',
            'Password must be at least 8 characters long': 'Password must be at least 8 characters long',
            'Password does not meet all requirements': 'Password does not meet all requirements',
            'Passwords do not match': 'Passwords do not match',
            'Reset link invalid': 'Reset link invalid',
            'Invalid or expired reset link. Please request a new reset email from the login page.':
                'Invalid or expired reset link. Please request a new reset email from the login page.'
        }
    };

    function getLang() {
        let lang = localStorage.getItem('language') || (window.config && window.config.app && window.config.app.defaultLanguage) || 'sk';
        if (!STR[lang]) lang = 'sk';
        return lang;
    }

    let lang = getLang();

    function tr(key) {
        return (STR[lang] && STR[lang][key]) || (STR.en && STR.en[key]) || key;
    }

    function translatePage() {
        document.querySelectorAll('[data-translate]').forEach((el) => {
            const key = el.getAttribute('data-translate');
            if (key && tr(key) !== key) {
                el.textContent = tr(key);
            }
        });
        document.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-translate-placeholder');
            if (key) el.placeholder = tr(key);
        });
    }

    function getAuthParams() {
        const search = new URLSearchParams(window.location.search || '');
        const hash = new URLSearchParams((window.location.hash || '').replace(/^#/, ''));
        return {
            token_hash: search.get('token_hash') || hash.get('token_hash'),
            type: search.get('type') || hash.get('type'),
            error: search.get('error') || hash.get('error'),
            error_code: search.get('error_code') || hash.get('error_code'),
            error_description: search.get('error_description') || hash.get('error_description')
        };
    }

    function isPasswordRecoveryFromLocation() {
        try {
            const params = getAuthParams();
            if (params.type === 'recovery' || params.token_hash) return true;
        } catch (e) {
            /* ignore */
        }
        return false;
    }

    function clearAuthParamsFromUrl() {
        try {
            history.replaceState(null, '', window.location.pathname);
        } catch (e) {
            /* ignore */
        }
    }

    async function exchangeTokenHashIfPresent(client) {
        const params = getAuthParams();

        if (params.error || params.error_code) {
            clearAuthParamsFromUrl();
            return { ok: false, expired: params.error_code === 'otp_expired' };
        }

        if (!params.token_hash || !params.type) {
            return { ok: true, exchanged: false };
        }

        const { data, error } = await client.auth.verifyOtp({
            token_hash: params.token_hash,
            type: params.type
        });
        clearAuthParamsFromUrl();

        if (error) {
            console.error('OTP verification error:', error);
            return { ok: false, expired: true };
        }

        if (params.type === 'recovery') {
            window.authManager.passwordRecoveryActive = true;
        }

        return { ok: true, exchanged: true, session: data?.session || null };
    }

    function validateRecoveryPasswords(newPw, confirmPw) {
        if (!newPw || newPw.length < 8) {
            return tr('Password must be at least 8 characters long');
        }
        const requirements = {
            uppercase: /[A-Z]/.test(newPw),
            lowercase: /[a-z]/.test(newPw),
            number: /[0-9]/.test(newPw),
            special: /[^A-Za-z0-9]/.test(newPw)
        };
        if (!Object.values(requirements).every(Boolean)) {
            return tr('Password does not meet all requirements');
        }
        if (newPw !== confirmPw) {
            return tr('Passwords do not match');
        }
        return null;
    }

    function createSupabaseClient() {
        const c = window.config && window.config.supabase;
        if (!c || !c.url || !c.anonKey) {
            throw new Error('Missing Supabase configuration');
        }
        return supabase.createClient(c.url, c.anonKey, {
            auth: {
                flowType: 'implicit',
                detectSessionInUrl: true
            }
        });
    }

    document.addEventListener('DOMContentLoaded', async () => {
        lang = getLang();
        translatePage();

        document.querySelectorAll('.reset-lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const next = btn.getAttribute('data-lang');
                if (next && STR[next]) {
                    localStorage.setItem('language', next);
                    lang = next;
                    translatePage();
                }
            });
        });

        const recoveryHint = isPasswordRecoveryFromLocation();
        let client;
        try {
            client = createSupabaseClient();
        } catch (e) {
            console.error(e);
            document.getElementById('reset-password-card').hidden = true;
            document.getElementById('reset-invalid').hidden = false;
            return;
        }
        window.supabase = client;
        window.authManager.init(client, recoveryHint);

        const exchangeResult = await exchangeTokenHashIfPresent(client);
        if (!exchangeResult.ok) {
            document.getElementById('reset-password-card').hidden = true;
            document.getElementById('reset-invalid').hidden = false;
            translatePage();
            return;
        }

        await client.auth.getSession();
        if (recoveryHint && !window.authManager.passwordRecoveryActive) {
            await new Promise((r) => setTimeout(r, 250));
        }
        await new Promise((resolve) => {
            if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(() => resolve());
            } else {
                setTimeout(resolve, 0);
            }
        });

        const inRecovery = recoveryHint || window.authManager.passwordRecoveryActive || exchangeResult.exchanged;
        const { data: { session } } = await client.auth.getSession();

        const card = document.getElementById('reset-password-card');
        const invalid = document.getElementById('reset-invalid');
        const form = document.getElementById('reset-password-form');
        const errEl = document.getElementById('reset-password-error');
        const hintEl = document.getElementById('reset-email-hint');

        if (!session || !session.user || !inRecovery) {
            if (card) card.hidden = true;
            if (invalid) invalid.hidden = false;
            translatePage();
            return;
        }

        window.authManager.currentUser = session.user;
        if (hintEl && session.user.email) {
            hintEl.textContent = session.user.email;
            hintEl.hidden = false;
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (errEl) errEl.textContent = '';

            const newPw = document.getElementById('reset-new-password').value.trim();
            const confirmPw = document.getElementById('reset-confirm-password').value.trim();
            const validationError = validateRecoveryPasswords(newPw, confirmPw);
            if (validationError) {
                if (errEl) errEl.textContent = validationError;
                return;
            }

            const btn = document.getElementById('reset-submit-btn');
            btn.disabled = true;
            btn.textContent = tr('Updating...');
            try {
                await window.authManager.setNewPasswordAfterRecovery(newPw);
                window.authManager.passwordRecoveryActive = false;
                history.replaceState(null, '', window.location.pathname);
                window.utils.showMessage(tr('Password updated successfully'), 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 600);
            } catch (error) {
                console.error(error);
                window.utils.showMessage(
                    `${tr('Error updating password. Please try again.')}${error.message ? ` (${error.message})` : ''}`,
                    'error'
                );
            } finally {
                btn.disabled = false;
                btn.textContent = tr('Save new password');
            }
        });
    });
})();
