/**
 * Email Notifications Module
 * Handles sending emails via Resend (Edge Function)
 */

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
     */
    async sendEmail(emailData) {
        try {
            console.log('📤 Attempting to send email via Resend...');
            console.log('📧 Email data:', { to: emailData.to, subject: emailData.subject });

            // Get Supabase configuration
            const config = window.config;
            if (!config || !config.supabase) {
                throw new Error('Supabase configuration not found');
            }

            // Call Resend Edge Function
            const response = await fetch(`${config.supabase.url}/functions/v1/send-email-resend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.supabase.anonKey}`
                },
                body: JSON.stringify({
                    to: emailData.to,
                    subject: emailData.subject,
                    html: emailData.html,
                    text: emailData.text,
                    from: this.fromEmail
                })
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
}

// Create global instance
window.emailManager = new EmailManager();
