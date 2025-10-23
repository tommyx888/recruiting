# 🌐 Resend Domain Verification - Rýchly Návod

## 🔍 **Problém:**
Resend API obmedzenie: "You can only send testing emails to your own email address (t.ficek@gmail.com)"

## ✅ **Riešenie: Overenie domény v Resend**

### **Krok 1: Choďte na Resend Domains**
1. Otvorte [resend.com/domains](https://resend.com/domains)
2. Kliknite "Add Domain"
3. Zadajte `iacgroup.com` (alebo vašu doménu)

### **Krok 2: Pridajte DNS záznamy**
Resend vám poskytne DNS záznamy, ktoré musíte pridať do vašej domény:

**TXT Record:**
```
Name: @
Value: resend-verification=abc123...
```

**CNAME Record:**
```
Name: resend
Value: resend.com
```

### **Krok 3: Počkajte na overenie**
- Môže trvať 5 minút až 24 hodín
- Resend overí DNS záznamy automaticky

### **Krok 4: Aktualizujte Edge Function**
Po overení domény aktualizujte:

```typescript
// V supabase/functions/send-email/index.ts
from: 'noreply@iacgroup.com' // namiesto 'onboarding@resend.dev'
```

### **Krok 5: Deploy Edge Function**
```bash
supabase functions deploy send-email
```

## 🚀 **Alternatívne rýchle riešenia:**

### **Riešenie 2: SendGrid (5 minút)**
1. Zaregistrujte sa na [sendgrid.com](https://sendgrid.com)
2. Vytvorte API Key
3. Overte sender identity
4. Použite `send-email-sendgrid` Edge Function

### **Riešenie 3: Mailgun (5 minút)**
1. Zaregistrujte sa na [mailgun.com](https://mailgun.com)
2. Vytvorte API Key
3. Overte doménu
4. Použite `send-email-mailgun` Edge Function

## 📧 **Dočasné riešenie:**
Zatiaľ môžete posielať testovacie emaily len na `t.ficek@gmail.com` - všetky notifikácie budú prichádzať tam.

