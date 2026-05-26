/**
 * Email Notifications Module
 * Handles sending emails via Resend (Edge Function)
 */

/** Encode UTF-8 string to base64 (safe for ICS and text with diacritics) */
function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

class EmailManager {
    constructor() {
        this.service = 'Resend API';
        this.fromEmail = 'nabor@iacslovakia.sk';
    }

    /**
     * Send email via Resend Edge Function
     * @param {Object} emailData - Email data
     * @param {string} emailData.to - Recipient email
     * @param {string} emailData.subject - Email subject
     * @param {string} emailData.html - HTML content
     * @param {string} emailData.text - Plain text content
     * @param {Array} emailData.attachments - Array of attachment objects {filename, content, contentType}
     */
    async sendEmail(emailData) {
        try {
            console.log('📤 Attempting to send email via Resend...');
            console.log('📧 Email data:', { to: emailData.to, subject: emailData.subject, hasAttachments: !!emailData.attachments });

            // Get Supabase configuration
            const config = window.config;
            if (!config || !config.supabase) {
                throw new Error('Supabase configuration not found');
            }

            // Prepare request body
            const requestBody = {
                to: emailData.to,
                subject: emailData.subject,
                html: emailData.html,
                text: emailData.text,
                from: this.fromEmail
            };

            // Add attachments if provided
            if (emailData.attachments && emailData.attachments.length > 0) {
                requestBody.attachments = emailData.attachments;
            }

            // Call Resend Edge Function
            const response = await fetch(`${config.supabase.url}/functions/v1/send-email-resend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.supabase.anonKey}`
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('❌ Resend error:', errorData);
                console.error('❌ Full error details:', JSON.stringify(errorData, null, 2));
                throw new Error(`Resend failed: ${JSON.stringify(errorData.error || errorData)}`);
            }

            const data = await response.json();
            console.log('✅ Email sent successfully via Resend:', data);
            return data;
        } catch (error) {
            console.error('❌ Error sending email via Resend:', error);
            throw error;
        }
    }

    /**
     * Send notification when new recruiting request is created
     * @param {Object} requestData - Request data
     * @param {string} gmEmail - General Manager email
     */
    async notifyNewRequest(requestData, gmEmail) {
        const subject = `Nová žiadosť o nábor - ${requestData.position}`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2e0de6;">Nová žiadosť o nábor</h2>
                <p>Dobrý deň,</p>
                <p>Bola vytvorená nová žiadosť o nábor, ktorá vyžaduje vaše schválenie:</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Detaily pozície:</h3>
                    <p><strong>Pozícia:</strong> ${requestData.position}</p>
                    <p><strong>Oddelenie:</strong> ${requestData.department}</p>
                    <p><strong>Typ:</strong> ${requestData.position_type}</p>
                    <p><strong>Kategória:</strong> ${requestData.category}</p>
                    <p><strong>Počet miest:</strong> ${requestData.headcount}</p>
                    <p><strong>Popis:</strong> ${requestData.description}</p>
                </div>
                
                <p>Prosím, prihláste sa do systému a schváľte alebo zamietnite túto žiadosť.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #2e0de6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                        Tento email bol odoslaný automaticky zo systému na riadenie náboru.<br>
                        <a href="https://recruiting.iacslovakia.sk/" style="color: #2e0de6;">https://recruiting.iacslovakia.sk/</a>
                    </p>
                </div>
            </div>
        `;

        const text = `
Nová žiadosť o nábor

Dobrý deň,

Bola vytvorená nová žiadosť o nábor, ktorá vyžaduje vaše schválenie:

Detaily pozície:
- Pozícia: ${requestData.position}
- Oddelenie: ${requestData.department}
- Typ: ${requestData.position_type}
- Kategória: ${requestData.category}
- Počet miest: ${requestData.headcount}
- Popis: ${requestData.description}

Prosím, prihláste sa do systému a schváľte alebo zamietnite túto žiadosť.

Otvoriť systém: https://recruiting.iacslovakia.sk/

Tento email bol odoslaný automaticky zo systému na riadenie náboru.
        `;

        return await this.sendEmail({
            to: gmEmail,
            subject: subject,
            html: html,
            text: text
        });
    }

    /**
     * Send notification when request is approved by GM
     * @param {Object} requestData - Request data
     * @param {string} managerEmail - Manager email who created the request
     */
    async notifyRequestApproved(requestData, managerEmail) {
        const subject = `Žiadosť o nábor schválená - ${requestData.position}`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #10b981;">Žiadosť o nábor schválená</h2>
                <p>Dobrý deň,</p>
                <p>Žiadosť o nábor bola schválená GM:</p>
                
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                    <h3 style="margin-top: 0; color: #333;">Detaily pozície:</h3>
                    <p><strong>Pozícia:</strong> ${requestData.position}</p>
                    <p><strong>Oddelenie:</strong> ${requestData.department}</p>
                    <p><strong>Typ:</strong> ${requestData.position_type}</p>
                    <p><strong>Kategória:</strong> ${requestData.category}</p>
                    <p><strong>Počet miest:</strong> ${requestData.headcount}</p>
                </div>
                
                <p>Teraz môžete začať s náborom kandidátov pre túto pozíciu.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                        Tento email bol odoslaný automaticky zo systému na riadenie náboru.<br>
                        <a href="https://recruiting.iacslovakia.sk/" style="color: #10b981;">https://recruiting.iacslovakia.sk/</a>
                    </p>
                </div>
            </div>
        `;

        const text = `
Žiadosť o nábor schválená

Dobrý deň,

Vaša žiadosť o nábor bola schválená GM:

Detaily pozície:
- Pozícia: ${requestData.position}
- Oddelenie: ${requestData.department}
- Typ: ${requestData.position_type}
- Kategória: ${requestData.category}
- Počet miest: ${requestData.headcount}

Teraz môžete začať s náborom kandidátov pre túto pozíciu.

Otvoriť systém: https://recruiting.iacslovakia.sk/

Tento email bol odoslaný automaticky zo systému na riadenie náboru.
        `;

        return await this.sendEmail({
            to: managerEmail,
            subject: subject,
            html: html,
            text: text
        });
    }

    /**
     * Send notification when new candidate is added
     * @param {Object} candidateData - Candidate data
     * @param {string} managerEmail - Department manager email
     */
    async notifyNewCandidate(candidateData, managerEmail) {
        const subject = `Nový kandidát pridaný - ${candidateData.name}`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #3b82f6;">Nový kandidát pridaný</h2>
                <p>Dobrý deň,</p>
                <p>Bol pridaný nový kandidát pre pozíciu <strong>${candidateData.position}</strong> v oddelení <strong>${candidateData.department}</strong>:</p>
                
                <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                    <h3 style="margin-top: 0; color: #333;">Detaily kandidáta:</h3>
                    <p><strong>Meno:</strong> ${candidateData.name}</p>
                    <p><strong>Pozícia:</strong> ${candidateData.position}</p>
                    <p><strong>Oddelenie:</strong> ${candidateData.department}</p>
                    <p><strong>Zdroj:</strong> ${candidateData.source}</p>
                    <p><strong>Status:</strong> ${candidateData.status}</p>
                    ${candidateData.notes ? `<p><strong>Poznámky:</strong> ${candidateData.notes}</p>` : ''}
                </div>
                
                <p>Prosím, prihláste sa do systému a pokračujte s procesom náboru.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                        Tento email bol odoslaný automaticky zo systému na riadenie náboru.<br>
                        <a href="https://recruiting.iacslovakia.sk/" style="color: #3b82f6;">https://recruiting.iacslovakia.sk/</a>
                    </p>
                </div>
            </div>
        `;

        const text = `
Nový kandidát pridaný

Dobrý deň,

Bol pridaný nový kandidát do vášho oddelenia:

Detaily kandidáta:
- Meno: ${candidateData.name}
- Pozícia: ${candidateData.position}
- Oddelenie: ${candidateData.department}
- Zdroj: ${candidateData.source}
- Status: ${candidateData.status}
${candidateData.notes ? `- Poznámky: ${candidateData.notes}` : ''}

Prosím, prihláste sa do systému a pokračujte s procesom náboru.

Otvoriť systém: https://recruiting.iacslovakia.sk/

Tento email bol odoslaný automaticky zo systému na riadenie náboru.
        `;

        return await this.sendEmail({
            to: managerEmail,
            subject: subject,
            html: html,
            text: text
        });
    }

    /**
     * Notify internal stakeholders about a new internal candidate note.
     * @param {Object} candidate - Candidate row
     * @param {Object} note - Internal note row
     * @param {string} toEmail - Recipient email
     * @returns {Promise<Object>}
     */
    async notifyInternalCandidateNote(candidate, note, toEmail) {
        const author = note?.created_by_email || note?.created_by_role || 'Internal user';
        const noteText = (note?.note_text || '').trim();
        const subject = `Nová interná poznámka - ${candidate.name} (${candidate.position})`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1d4ed8;">Nová interná poznámka ku kandidátovi</h2>
                <p>Dobrý deň,</p>
                <p>Ku kandidátovi bola pridaná nová interná poznámka.</p>
                <div style="background: #eff6ff; padding: 16px; border-radius: 8px; border-left: 4px solid #1d4ed8; margin: 16px 0;">
                    <p style="margin: 6px 0;"><strong>Kandidát:</strong> ${candidate.name}</p>
                    <p style="margin: 6px 0;"><strong>Pozícia:</strong> ${candidate.position}</p>
                    <p style="margin: 6px 0;"><strong>Oddelenie:</strong> ${candidate.department}</p>
                    <p style="margin: 6px 0;"><strong>Autor poznámky:</strong> ${author}</p>
                </div>
                <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #dbeafe;">
                    <p style="margin: 0; white-space: pre-wrap; color: #0f172a;">${noteText}</p>
                </div>
                <div style="text-align: center; margin: 24px 0 8px;">
                    <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #1d4ed8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 700;">Otvoriť systém</a>
                </div>
            </div>
        `;
        const text = `Nová interná poznámka ku kandidátovi

Kandidát: ${candidate.name}
Pozícia: ${candidate.position}
Oddelenie: ${candidate.department}
Autor poznámky: ${author}

Poznámka:
${noteText}

Otvoriť systém: https://recruiting.iacslovakia.sk/`;

        return await this.sendEmail({
            to: toEmail,
            subject,
            html,
            text
        });
    }

    /**
     * Nové podanie kandidáta od agentúry — čaká na potvrdenie recruiterom
     */
    async notifyRecruitersAgencyCandidateSubmission(candidate, recruiterEmail) {
        const subject = `Nové podanie od agentúry – ${candidate.name} (${candidate.position})`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0d47a1;">Nové podanie kandidáta od agentúry</h2>
                <p>Dobrý deň,</p>
                <p>Agentúra pridala nového kandidáta na schválenú pozíciu. Je potrebné ho v systéme <strong>potvrdiť</strong> alebo zamietnuť.</p>
                <div style="background: #e3f2fd; padding: 16px; border-radius: 8px; margin: 16px 0;">
                    <p style="margin: 6px 0;"><strong>Meno:</strong> ${candidate.name}</p>
                    <p style="margin: 6px 0;"><strong>Pozícia:</strong> ${candidate.position}</p>
                    <p style="margin: 6px 0;"><strong>Oddelenie:</strong> ${candidate.department}</p>
                    <p style="margin: 6px 0;"><strong>Zdroj (agentúra):</strong> ${candidate.source || '—'}</p>
                </div>
                <p>V aplikácii otvorte kandidátov a v stave „Čaká na schválenie recruiterom“ použite akciu Potvrdiť.</p>
                <div style="text-align: center; margin: 24px 0;">
                    <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #1976d2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                </div>
            </div>
        `;
        const text = `
Nové podanie kandidáta od agentúry

Meno: ${candidate.name}
Pozícia: ${candidate.position}
Oddelenie: ${candidate.department}
Zdroj: ${candidate.source || '—'}

Potvrďte alebo zamietnite podanie v systéme (stav: čaká na schválenie recruiterom).

https://recruiting.iacslovakia.sk/
        `;
        return await this.sendEmail({
            to: recruiterEmail,
            subject,
            html,
            text
        });
    }

    /**
     * Notify Recruiter about candidate status change
     * @param {Object} candidate - Candidate data
     * @param {string} status - New status
     * @param {string} notes - Additional notes
     * @param {string} toEmail - Recruiter email
     * @returns {Promise<Object>}
     */
    async notifyRecruiterStatusChange(candidate, status, notes, toEmail) {
        const subject = `Zmena statusu kandidáta - ${candidate.name}`;
        
        const statusTranslations = {
            'New': 'Nový',
            'In Process': 'V procese',
            'Interviewed': 'Pohovorovaný',
            'Rejected': 'Zamietnutý',
            'Hired': 'Prijatý',
            'Withdrawn': 'Odstúpil'
        };

        const translatedStatus = statusTranslations[status] || status;
        
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #2196f3; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">📋 Zmena statusu kandidáta</h1>
                </div>
                
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Kandidát: ${candidate.name}</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${candidate.position}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${candidate.department}</p>
                        <p style="margin: 5px 0;"><strong>Nový status:</strong> <span style="color: #2196f3; font-weight: bold;">${translatedStatus}</span></p>
                        <p style="margin: 5px 0;"><strong>Dátum zmeny:</strong> ${new Date().toLocaleDateString('sk-SK')}</p>
                    </div>
                    
                    ${notes ? `
                    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <h3 style="margin-top: 0; color: #856404;">Poznámky:</h3>
                        <p style="margin: 0; color: #856404;">${notes}</p>
                    </div>
                    ` : ''}
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
                        <p style="margin: 0; color: #1976d2;">
                            <strong>💡 Tip:</strong> Prehliadnite si aktualizované informácie o kandidátovi v systéme.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #2196f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Tento email bol odoslaný automaticky zo systému na nábor.<br>
                    <a href="https://recruiting.iacslovakia.sk/" style="color: #2196f3;">https://recruiting.iacslovakia.sk/</a></p>
                </div>
            </div>
        `;

        const text = `
Zmena statusu kandidáta - ${candidate.name}

Kandidát: ${candidate.name}
Pozícia: ${candidate.position}
Oddelenie: ${candidate.department}
Nový status: ${translatedStatus}
Dátum zmeny: ${new Date().toLocaleDateString('sk-SK')}

${notes ? `Poznámky: ${notes}` : ''}

Prehliadnite si aktualizované informácie o kandidátovi v systéme.

Otvoriť systém: https://recruiting.iacslovakia.sk/

---
Tento email bol odoslaný automaticky zo systému na nábor.
        `;

        return await this.sendEmail({
            to: toEmail,
            subject: subject,
            html: html,
            text: text
        });
    }

    /**
     * Notify Agency about candidate status change
     * @param {Object} candidate - Candidate data
     * @param {string} status - New status
     * @param {string|null} notes - Additional notes
     * @param {string} toEmail - Agency email
     * @returns {Promise<Object>}
     */
    async notifyAgencyCandidateStatusChange(candidate, status, notes, toEmail) {
        const subject = `Zmena statusu kandidáta - ${candidate.name}`;

        const statusTranslations = {
            'New': 'Nový',
            'In Process': 'V procese',
            'In Process - First Round': 'V procese - Prvé kolo',
            'In Process - Second Round': 'V procese - Druhé kolo',
            'Interviewed': 'Pohovorovaný',
            'Rejected': 'Zamietnutý',
            'Rejected - Inform Source': 'Zamietnutý - Informovať zdroj',
            'Hired': 'Prijatý',
            'Hired - Contact Source': 'Prijatý - Kontaktovať zdroj',
            'Withdrawn': 'Odstúpil'
        };

        const translatedStatus = statusTranslations[status] || status;

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #949C58; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">📋 Zmena statusu kandidáta (agentúra)</h1>
                </div>
                
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Kandidát: ${candidate.name}</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${candidate.position}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${candidate.department}</p>
                        <p style="margin: 5px 0;"><strong>Nový status:</strong> <span style="color: #949C58; font-weight: bold;">${translatedStatus}</span></p>
                        <p style="margin: 5px 0;"><strong>Dátum zmeny:</strong> ${new Date().toLocaleDateString('sk-SK')}</p>
                    </div>
                    
                    ${notes ? `
                    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <h3 style="margin-top: 0; color: #856404;">Poznámka od recruitera:</h3>
                        <p style="margin: 0; color: #856404;">${notes}</p>
                    </div>
                    ` : ''}
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
                        <p style="margin: 0; color: #1976d2;">
                            <strong>ℹ️ Informácia:</strong> Stav kandidáta, ktorého ste poslali, bol aktualizovaný v systéme. Detailný priebeh si môžete pozrieť po prihlásení.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #949C58; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť náborový systém</a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Tento email bol odoslaný automaticky zo systému na nábor.<br>
                    <a href="https://recruiting.iacslovakia.sk/" style="color: #949C58;">https://recruiting.iacslovakia.sk/</a></p>
                </div>
            </div>
        `;

        const text = `
Zmena statusu kandidáta - ${candidate.name}

Kandidát: ${candidate.name}
Pozícia: ${candidate.position}
Oddelenie: ${candidate.department}
Nový status: ${translatedStatus}
Dátum zmeny: ${new Date().toLocaleDateString('sk-SK')}

${notes ? `Poznámka od recruitera: ${notes}\n` : ''}

Stav kandidáta, ktorého ste poslali, bol aktualizovaný v systéme. Detailný priebeh si môžete pozrieť po prihlásení.

Otvoriť náborový systém: https://recruiting.iacslovakia.sk/

---
Tento email bol odoslaný automaticky zo systému na nábor.
        `;

        return await this.sendEmail({
            to: toEmail,
            subject: subject,
            html: html,
            text: text
        });
    }

    /**
     * Notify Recruiter about interview dates
     * @param {Object} candidate - Candidate data
     * @param {string} status - New status (First Round or Second Round)
     * @param {Array} interviewDates - Array of {date, time, duration} objects
     * @param {string|null} interviewType - Interview type (In Person or Teams) or null
     * @param {string|null} interviewerName - Interviewer name or null
     * @returns {Promise<Object>}
     */
    async notifyRecruiterInterviewDates(candidate, status, interviewDates, interviewType = null, interviewerName = null) {
        // Get recruiter emails from users table
        const config = window.config;
        if (!config || !config.supabase) {
            throw new Error('Supabase configuration not found');
        }

        const supabase = window.authManager?.supabase;
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }

        // Get recruiter emails
        const { data: recruiters, error: recruiterError } = await supabase
            .from('users')
            .select('email, role')
            .eq('role', 'recruiter')
            .not('email', 'is', null);

        if (recruiterError) {
            console.warn('Error fetching recruiter emails:', recruiterError);
            throw recruiterError;
        }

        if (!recruiters || recruiters.length === 0) {
            console.warn('No recruiters with emails found');
            throw new Error('No recruiters found');
        }

        const statusText = status === 'In Process - First Round' ? 'Prvé kolo' : 'Druhé kolo';
        
        // Format interview dates
        const datesHtml = interviewDates.map((item, index) => {
            const date = new Date(item.date);
            const dateStr = date.toLocaleDateString('sk-SK', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            const hours = Math.floor(item.duration / 60);
            const minutes = item.duration % 60;
            const durationStr = hours > 0 ? `${hours}h ${minutes > 0 ? minutes + 'min' : ''}` : `${minutes}min`;
            
            return `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #2196f3;">
                    <p style="margin: 5px 0;"><strong>Termín ${index + 1}:</strong></p>
                    <p style="margin: 5px 0;"><strong>Dátum:</strong> ${dateStr}</p>
                    <p style="margin: 5px 0;"><strong>Čas:</strong> ${item.time}</p>
                    <p style="margin: 5px 0;"><strong>Dĺžka:</strong> ${durationStr}</p>
                </div>
            `;
        }).join('');

        const datesText = interviewDates.map((item, index) => {
            const date = new Date(item.date);
            const dateStr = date.toLocaleDateString('sk-SK');
            const hours = Math.floor(item.duration / 60);
            const minutes = item.duration % 60;
            const durationStr = hours > 0 ? `${hours}h ${minutes > 0 ? minutes + 'min' : ''}` : `${minutes}min`;
            
            return `Termín ${index + 1}:
- Dátum: ${dateStr}
- Čas: ${item.time}
- Dĺžka: ${durationStr}`;
        }).join('\n\n');
        
        const additionalInfo = [];
        if (interviewType) {
            additionalInfo.push(`Typ pohovoru: ${interviewType === 'In Person' ? 'Osobne' : 'Teams'}`);
        }
        if (interviewerName) {
            additionalInfo.push(`Pohovorujúci: ${interviewerName}`);
        }
        const additionalInfoText = additionalInfo.length > 0 ? '\n\n' + additionalInfo.join('\n') : '';

        const subject = `Termíny na pohovor - ${candidate.name} (${statusText})`;
        
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #2196f3; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">📅 Termíny na pohovor</h1>
                </div>
                
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Kandidát: ${candidate.name}</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${candidate.position}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${candidate.department}</p>
                        <p style="margin: 5px 0;"><strong>Kolo:</strong> <span style="color: #2196f3; font-weight: bold;">${statusText}</span></p>
                        ${interviewType ? `<p style="margin: 5px 0;"><strong>Typ pohovoru:</strong> ${interviewType === 'In Person' ? 'Osobne' : 'Teams'}</p>` : ''}
                        ${interviewerName ? `<p style="margin: 5px 0;"><strong>Pohovorujúci:</strong> ${interviewerName}</p>` : ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333; margin-bottom: 15px;">Potenciálne termíny na pohovor:</h3>
                        ${datesHtml}
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
                        <p style="margin: 0; color: #1976d2;">
                            <strong>💡 Prosím:</strong> Vyberte vhodný termín a kontaktujte kandidáta.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #2196f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Tento email bol odoslaný automaticky zo systému na nábor.<br>
                    <a href="https://recruiting.iacslovakia.sk/" style="color: #2196f3;">https://recruiting.iacslovakia.sk/</a></p>
                </div>
            </div>
        `;

        const text = `
Termíny na pohovor - ${candidate.name} (${statusText})

Kandidát: ${candidate.name}
Pozícia: ${candidate.position}
Oddelenie: ${candidate.department}
Kolo: ${statusText}${additionalInfoText}

Potenciálne termíny na pohovor:

${datesText}

Prosím, vyberte vhodný termín a kontaktujte kandidáta.

Otvoriť systém: https://recruiting.iacslovakia.sk/

---
Tento email bol odoslaný automaticky zo systému na nábor.
        `;

        // Send email to all recruiters
        const results = [];
        for (const recruiter of recruiters) {
            try {
                const result = await this.sendEmail({
                    to: recruiter.email,
                    subject: subject,
                    html: html,
                    text: text
                });
                results.push({ email: recruiter.email, success: true, result });
            } catch (error) {
                console.warn(`Error sending email to recruiter ${recruiter.email}:`, error);
                results.push({ email: recruiter.email, success: false, error });
            }
        }

        return { success: true, results };
    }

    /**
     * Notify one agency (by email) that new interview slots are available for a position.
     * @param {string} agencyEmail - Agency user email from users table
     * @param {Object} request - Recruiting request { position, department }
     * @param {string} round - 'first' or 'second'
     * @param {Array} slots - Array of { startTime, endTime } (ISO strings)
     * @returns {Promise<Object>}
     */
    async notifyAgencyNewSlots(agencyEmail, request, round, slots = []) {
        const roundText = round === 'first' ? 'Prvé kolo' : 'Druhé kolo';
        const subject = `Nové termíny na pohovory – ${request.position} (${roundText})`;
        const siteUrl = 'https://recruiting.iacslovakia.sk/';

        const formatSlot = (start, end) => {
            const d = new Date(start);
            const e = new Date(end);
            const dateStr = d.toLocaleDateString('sk-SK', { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric' });
            const timeStr = `${d.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })} – ${e.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
            return `${dateStr}, ${timeStr}`;
        };
        const slotsListHtml = slots.length > 0
            ? `
            <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #949C58;">
                <p style="margin: 0 0 8px 0; font-weight: 600;">Výpis termínov:</p>
                <ul style="margin: 0; padding-left: 20px;">
                    ${slots.map(s => `<li style="margin: 4px 0;">${formatSlot(s.startTime, s.endTime)}</li>`).join('')}
                </ul>
            </div>
            `
            : '';

        const slotsListText = slots.length > 0
            ? slots.map(s => `  • ${formatSlot(s.startTime, s.endTime)}`).join('\n')
            : '';

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #949C58; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">Nové termíny na pohovory</h1>
                </div>
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <p>Dobrý deň,</p>
                    <p>Recruiter pridal nové termíny na pohovory pre pozíciu, na ktorú máte priradených kandidátov.</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${request.position || ''}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${request.department || ''}</p>
                        <p style="margin: 5px 0;"><strong>Kolo:</strong> ${roundText}</p>
                    </div>
                    ${slotsListHtml}
                    <p>Rezerváciu termínov pre svojich kandidátov môžete urobiť v náborovom systéme v sekcii „Rezervácia termínov“.</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${siteUrl}" style="display: inline-block; background-color: #949C58; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť náborový systém</a>
                    </div>
                    <p style="margin-top: 20px; font-size: 0.9rem; color: #555;">Odkaz na stránku: <a href="${siteUrl}" style="color: #949C58;">${siteUrl}</a></p>
                </div>
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Tento email bol odoslaný automaticky zo systému na nábor.</p>
                </div>
            </div>
        `;
        const text = `Nové termíny na pohovory – ${request.position}, ${request.department}, ${roundText}.\n${slotsListText ? '\nVýpis termínov:\n' + slotsListText + '\n' : ''}\nOtvorte systém a rezervujte termíny: ${siteUrl}`;
        return this.sendEmail({ to: agencyEmail, subject, html, text });
    }

    /**
     * Notify recruiter(s) and manager(s) when agency books an interview slot
     * @param {Object} slotData - Slot data with candidate and request info
     * @param {string|string[]} recruiterEmail - Recruiter email(s)
     * @param {string|string[]} managerEmail - Manager email(s)
     * @param {string} icsContent - ICS file content for calendar invitation
     * @returns {Promise<Object>}
     */
    async notifySlotBooked(slotData, recruiterEmail, managerEmail, icsContent) {
        const { slot, candidate, request } = slotData;
        const roundText = slot.round === 'first' ? 'Prvé kolo' : 'Druhé kolo';
        const startDate = new Date(slot.start_time);
        const endDate = new Date(slot.end_time);
        
        const dateStr = startDate.toLocaleDateString('sk-SK', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const timeStr = `${startDate.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
        
        const subject = `Rezervovaný termín na pohovor - ${candidate.name} (${request.position})`;
        
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #949C58; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">✅ Rezervovaný termín na pohovor</h1>
                </div>
                
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Kandidát: ${candidate.name}</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${request.position}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${request.department}</p>
                        <p style="margin: 5px 0;"><strong>Kolo:</strong> <span style="color: #949C58; font-weight: bold;">${roundText}</span></p>
                        <p style="margin: 5px 0;"><strong>Agentúra:</strong> ${slot.agency_source}</p>
                    </div>
                    
                    <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #949C58;">
                        <h3 style="color: #333; margin-top: 0;">📅 Termín pohovoru:</h3>
                        <p style="margin: 5px 0; font-size: 18px;"><strong>${dateStr}</strong></p>
                        <p style="margin: 5px 0; font-size: 16px;"><strong>${timeStr}</strong></p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #fff3e0; border-radius: 5px;">
                        <p style="margin: 0; color: #e65100;">
                            <strong>📎 Prílohy:</strong> V prílohe nájdete CV a Assessment kandidáta, ako aj Outlook pozvánku (.ics súbor), ktorú môžete importovať do kalendára.
                        </p>
                    </div>
                    
                    <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2196f3;">
                        <p style="margin: 0; color: #1976d2;">
                            <strong>💡 Tip:</strong> Dvojklikom na .ics súbor v prílohe vytvoríte udalosť v Outlook kalendári s automaticky vyplnenými údajmi o pohovore.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #949C58; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Tento email bol odoslaný automaticky zo systému na nábor.<br>
                    <a href="https://recruiting.iacslovakia.sk/" style="color: #949C58;">https://recruiting.iacslovakia.sk/</a></p>
                </div>
            </div>
        `;

        const text = `
Rezervovaný termín na pohovor - ${candidate.name} (${request.position})

Kandidát: ${candidate.name}
Pozícia: ${request.position}
Oddelenie: ${request.department}
Kolo: ${roundText}
Agentúra: ${slot.agency_source}

Termín pohovoru:
${dateStr}
${timeStr}

V prílohe nájdete CV a Assessment kandidáta, ako aj Outlook pozvánku (.ics súbor), ktorú môžete importovať do kalendára.

Tip: Dvojklikom na .ics súbor vytvoríte udalosť v Outlook kalendári s automaticky vyplnenými údajmi o pohovore.

Otvoriť systém: https://recruiting.iacslovakia.sk/

---
Tento email bol odoslaný automaticky zo systému na nábor.
        `;

        // Prepare attachments (ICS first so it always appears)
        const attachments = [];
        
        if (icsContent && typeof icsContent === 'string') {
            attachments.push({
                filename: `Interview_${candidate.name.replace(/[<>:"/\\|?*]/g, '_')}_${Date.now()}.ics`,
                content: utf8ToBase64(icsContent),
                contentType: 'text/calendar; charset=utf-8'
            });
        }
        
        // Get CV and Assessment files from Supabase Storage
        const config = window.config;
        if (!config || !config.supabase) {
            throw new Error('Supabase configuration not found');
        }
        
        const supabase = window.supabase;
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        // Download CV file if exists
        if (candidate.cv_file_path) {
            try {
                const { data: cvData, error: cvError } = await supabase.storage
                    .from('candidate-files')
                    .download(candidate.cv_file_path);
                
                if (!cvError && cvData) {
                    const arrayBuffer = await cvData.arrayBuffer();
                    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
                    const fileExtension = candidate.cv_file_path.substring(candidate.cv_file_path.lastIndexOf('.')).toLowerCase();
                    const sanitizedName = candidate.name.replace(/[<>:"/\\|?*]/g, '_');
                    
                    attachments.push({
                        filename: `CV_${sanitizedName}${fileExtension}`,
                        content: base64,
                        contentType: fileExtension === '.pdf' ? 'application/pdf' : 
                                   fileExtension === '.doc' ? 'application/msword' : 
                                   fileExtension === '.docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :
                                   'application/octet-stream'
                    });
                }
            } catch (error) {
                console.warn('Error downloading CV file:', error);
            }
        }
        
        // Download Assessment file if exists
        if (candidate.assesment_file_path) {
            try {
                const { data: assessmentData, error: assessmentError } = await supabase.storage
                    .from('candidate-files')
                    .download(candidate.assesment_file_path);
                
                if (!assessmentError && assessmentData) {
                    const arrayBuffer = await assessmentData.arrayBuffer();
                    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
                    const fileExtension = candidate.assesment_file_path.substring(candidate.assesment_file_path.lastIndexOf('.')).toLowerCase();
                    const sanitizedName = candidate.name.replace(/[<>:"/\\|?*]/g, '_');
                    
                    attachments.push({
                        filename: `Assessment_${sanitizedName}${fileExtension}`,
                        content: base64,
                        contentType: fileExtension === '.pdf' ? 'application/pdf' : 
                                   fileExtension === '.doc' ? 'application/msword' : 
                                   fileExtension === '.docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :
                                   'application/octet-stream'
                    });
                }
            } catch (error) {
                console.warn('Error downloading Assessment file:', error);
            }
        }
        
        // HTML already includes all necessary information

        // Send to all recruiters and managers (deduplicated)
        const results = [];
        const recruiterList = Array.isArray(recruiterEmail) ? recruiterEmail : (recruiterEmail ? [recruiterEmail] : []);
        const managerList = Array.isArray(managerEmail) ? managerEmail : (managerEmail ? [managerEmail] : []);
        const emails = [...new Set([...recruiterList, ...managerList].filter(Boolean))];

        for (const email of emails) {
            try {
                const result = await this.sendEmail({
                    to: email,
                    subject: subject,
                    html: html,
                    text: text,
                    attachments: attachments
                });
                results.push({ email, success: true, result });
            } catch (error) {
                console.warn(`Error sending email to ${email}:`, error);
                results.push({ email, success: false, error });
            }
        }

        return { success: true, results, icsContent };
    }

    /**
     * Notify recruiter(s) that agency cancelled a previously booked interview slot.
     * @param {Object} slotData - Slot data with candidate and request info
     * @param {string|string[]} recruiterEmail - Recruiter email(s)
     * @param {string} reason - Cancellation reason from agency
     * @returns {Promise<Object>}
     */
    async notifySlotCancelled(slotData, recruiterEmail, reason) {
        const { slot, candidate, request } = slotData;
        const roundText = slot.round === 'first' ? 'Prvé kolo' : 'Druhé kolo';
        const startDate = new Date(slot.start_time);
        const endDate = new Date(slot.end_time);
        const dateStr = startDate.toLocaleDateString('sk-SK', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const timeStr = `${startDate.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
        const safeReason = (reason || '').trim();

        const subject = `Zrušený termín pohovoru - ${candidate.name} (${request.position})`;
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">Zrušený termín pohovoru</h1>
                </div>
                <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Kandidát: ${candidate.name}</h2>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <p style="margin: 5px 0;"><strong>Pozícia:</strong> ${request.position}</p>
                        <p style="margin: 5px 0;"><strong>Oddelenie:</strong> ${request.department}</p>
                        <p style="margin: 5px 0;"><strong>Kolo:</strong> ${roundText}</p>
                        <p style="margin: 5px 0;"><strong>Agentúra:</strong> ${slot.agency_source || candidate.source || '-'}</p>
                        <p style="margin: 5px 0;"><strong>Pôvodný termín:</strong> ${dateStr}, ${timeStr}</p>
                    </div>
                    <div style="background-color: #fff1f2; border: 1px solid #fecdd3; padding: 15px; border-radius: 5px; margin: 15px 0;">
                        <h3 style="margin-top: 0; color: #9f1239;">Dôvod zrušenia:</h3>
                        <p style="margin: 0; color: #9f1239;">${safeReason || 'Neuvedený'}</p>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background-color: #ecfeff; border-radius: 5px;">
                        <p style="margin: 0; color: #0e7490;">
                            <strong>Info:</strong> Termín bol uvoľnený a kandidáta je možné naplánovať na iný voľný slot.
                        </p>
                    </div>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://recruiting.iacslovakia.sk/" style="display: inline-block; background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Otvoriť systém</a>
                    </div>
                </div>
            </div>
        `;

        const text = `
Zrušený termín pohovoru - ${candidate.name} (${request.position})

Kandidát: ${candidate.name}
Pozícia: ${request.position}
Oddelenie: ${request.department}
Kolo: ${roundText}
Agentúra: ${slot.agency_source || candidate.source || '-'}
Pôvodný termín: ${dateStr}, ${timeStr}

Dôvod zrušenia: ${safeReason || 'Neuvedený'}

Termín bol uvoľnený a kandidáta je možné naplánovať na iný voľný slot.
Otvoriť systém: https://recruiting.iacslovakia.sk/
        `;

        const recruiterList = Array.isArray(recruiterEmail) ? recruiterEmail : (recruiterEmail ? [recruiterEmail] : []);
        const emails = [...new Set(recruiterList.filter(Boolean))];
        const results = [];

        for (const email of emails) {
            try {
                const result = await this.sendEmail({ to: email, subject, html, text });
                results.push({ email, success: true, result });
            } catch (error) {
                console.warn(`Error sending cancellation email to ${email}:`, error);
                results.push({ email, success: false, error });
            }
        }

        return { success: true, results };
    }
}

// Create global instance
window.emailManager = new EmailManager();
