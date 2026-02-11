# 📧 Ako updatnúť Edge Function pre prílohy

## 🎯 Čo sa zmenilo

Edge Function `send-email-resend` bola upravená, aby podporovala prílohy (CV, Assessment, ICS súbory) v emailoch.

## 📋 Krok za krokom nasadenie

### **Metóda 1: Použitie Supabase CLI (Odporúčané)**

1. **Otvorte terminál/PowerShell** v priečinku projektu

2. **Prihláste sa do Supabase** (ak nie ste prihlásení):
   ```bash
   supabase login
   ```

3. **Prepojte projekt** (ak nie je prepojený):
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF
   ```
   *Nájdete PROJECT_REF v Supabase Dashboard → Settings → General → Reference ID*

4. **Nasaďte updatnutú Edge Function**:
   ```bash
   supabase functions deploy send-email-resend
   ```

5. **Overte nasadenie**:
   ```bash
   supabase functions list
   ```
   Mali by ste vidieť `send-email-resend` v zozname.

### **Metóda 2: Použitie Supabase Dashboard (Bez CLI)**

1. **Choďte do Supabase Dashboard**
   - [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Vyberte váš projekt

2. **Otvorte Edge Functions**
   - V ľavom menu kliknite na **"Edge Functions"**

3. **Nájdite funkciu `send-email-resend`**
   - Kliknite na ňu

4. **Upravte kód**
   - Skopírujte obsah z `supabase/functions/send-email-resend/index.ts`
   - Vložte ho do editora v Dashboard

5. **Deploy**
   - Kliknite na tlačidlo **"Deploy"** alebo **"Save"**

## ✅ Overenie funkčnosti

Po nasadení môžete otestovať:

1. **V systéme**: Keď agentúra rezervuje časový slot, recruiter by mal dostať email s prílohami
2. **V konzole**: Skontrolujte, či sa v konzole zobrazujú správne logy:
   ```
   📤 Attempting to send email via Resend...
   📧 Email data: { to: '...', subject: '...', hasAttachments: true }
   ✅ Email sent successfully via Resend
   ```

## 🔍 Čo Edge Function teraz podporuje

- ✅ **Prílohy v base64 formáte**
- ✅ **CV súbory** (PDF, DOC, DOCX)
- ✅ **Assessment súbory** (PDF, DOC, DOCX)
- ✅ **ICS súbory** (Outlook pozvánky)
- ✅ **Automatická konverzia** base64 → Buffer pre Resend API

## 📝 Formát príloh

Edge Function očakáva prílohy v tomto formáte:

```json
{
  "attachments": [
    {
      "filename": "CV_John_Doe.pdf",
      "content": "base64EncodedString...",
      "contentType": "application/pdf"
    }
  ]
}
```

## 🐛 Riešenie problémov

### **Chyba: "Function not found"**
- Skontrolujte, či je funkcia nasadená: `supabase functions list`
- Skontrolujte názov funkcie v `email.js` - mal by byť `send-email-resend`

### **Chyba: "Invalid attachment format"**
- Skontrolujte, či každá príloha má `filename` a `content` (base64)
- Skontrolujte, či `content` je skutočne base64 string

### **Chyba: "Missing RESEND_API_KEY"**
- Nastavte secret: `supabase secrets set RESEND_API_KEY=your_api_key`
- Alebo v Dashboard: Settings → Edge Functions → Secrets

### **Prílohy neprichádzajú**
- Skontrolujte, či Resend API podporuje prílohy vo vašom pláne
- Skontrolujte veľkosť príloh (Resend má limity)
- Skontrolujte logy v Supabase Dashboard → Edge Functions → Logs

## 📚 Ďalšie informácie

- [Resend API Dokumentácia](https://resend.com/docs/api-reference/emails/send-email)
- [Supabase Edge Functions Dokumentácia](https://supabase.com/docs/guides/functions)
