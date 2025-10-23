# 🌐 Resend Domain Verification Guide

## **Krok 1: Overenie domény v Resend**

1. **Choďte na:** [resend.com/domains](https://resend.com/domains)
2. **Kliknite "Add Domain"**
3. **Zadajte vašu doménu** (napr. `iacgroup.com`)
4. **Pridajte DNS záznamy** do vašej domény:
   - TXT record pre verifikáciu
   - MX record pre email routing
5. **Počkajte na overenie** (môže trvať až 24 hodín)

## **Krok 2: Aktualizácia Edge Function**

Po overení domény aktualizujte `from` adresu:

```typescript
// V supabase/functions/send-email/index.ts
from: 'noreply@iacgroup.com'  // namiesto 'noreply@resend.dev'
```

## **Krok 3: Deploy Edge Function**

```bash
supabase functions deploy send-email
```

## **Krok 4: Testovanie**

Po overení môžete posielať na akékoľvek adresy!

