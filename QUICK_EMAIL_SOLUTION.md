# 🚀 Rýchle riešenie email notifikácií

## 🔍 **Problém:**
Gmail SMTP Edge Function len simuluje posielanie emailov - skutočné emaily neprichádzajú.

## ✅ **Rýchle riešenia:**

### **Riešenie 1: Overenie domény v Resend (Najrýchlejšie)**

1. **Choďte na:** [resend.com/domains](https://resend.com/domains)
2. **Pridajte doménu:** `iacgroup.com`
3. **Pridajte DNS záznamy** do vašej domény
4. **Počkajte na overenie** (môže trvať až 24 hodín)
5. **Aktualizujte Edge Function:**

```typescript
// V supabase/functions/send-email/index.ts
from: 'noreply@iacgroup.com' // namiesto 'noreply@resend.dev'
```

6. **Deploy Edge Function:**
```bash
supabase functions deploy send-email
```

7. **Aktualizujte email.js:**
```javascript
// Zmeňte endpoint späť na pôvodný
const response = await fetch(`${config.supabase.url}/functions/v1/send-email`, {
```

### **Riešenie 2: SendGrid (5 minút setup)**

1. **Zaregistrujte sa na:** [sendgrid.com](https://sendgrid.com)
2. **Vytvorte API Key**
3. **Overte sender identity**
4. **Aktualizujte Edge Function:**

```typescript
// V supabase/functions/send-email-sendgrid/index.ts
const SENDGRID_API_KEY = 'SG.your-api-key-here'
const SENDGRID_FROM_EMAIL = 'noreply@iacgroup.com'
```

5. **Deploy SendGrid Edge Function:**
```bash
supabase functions deploy send-email-sendgrid
```

6. **Aktualizujte email.js:**
```javascript
const response = await fetch(`${config.supabase.url}/functions/v1/send-email-sendgrid`, {
```

### **Riešenie 3: Mailgun (5 minút setup)**

1. **Zaregistrujte sa na:** [mailgun.com](https://mailgun.com)
2. **Vytvorte API Key**
3. **Overte doménu**
4. **Aktualizujte Edge Function:**

```typescript
// V supabase/functions/send-email-mailgun/index.ts
const MAILGUN_API_KEY = 'your-api-key-here'
const MAILGUN_DOMAIN = 'your-domain.mailgun.org'
const MAILGUN_FROM_EMAIL = 'noreply@iacgroup.com'
```

5. **Deploy Mailgun Edge Function:**
```bash
supabase functions deploy send-email-mailgun
```

6. **Aktualizujte email.js:**
```javascript
const response = await fetch(`${config.supabase.url}/functions/v1/send-email-mailgun`, {
```

## 🎯 **Odporúčanie:**

**Riešenie 1 (Resend s overenou doménou)** je najrýchlejšie, pretože:
- ✅ Už máte Resend API key
- ✅ Už máte Edge Function
- ✅ Len potrebujete overiť doménu
- ✅ Žiadne ďalšie zmeny v kóde

## 📋 **Postup pre Riešenie 1:**

1. **Overte doménu v Resend**
2. **Aktualizujte `from` email v Edge Function**
3. **Deploy Edge Function**
4. **Aktualizujte email.js na pôvodný endpoint**
5. **Testujte posielanie**

**Ktoré riešenie si vyberiete?** 🚀





