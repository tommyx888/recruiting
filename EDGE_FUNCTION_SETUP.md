# 🚀 Supabase Edge Function Setup

## 📋 Krok za krokom nasadenie

### **1. Nainštalujte Supabase CLI**

**Windows (PowerShell):**
```powershell
# Nainštalujte Scoop ak ho nemáte
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod get.scoop.sh | Invoke-Expression

# Nainštalujte Supabase CLI
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**macOS:**
```bash
brew install supabase/tap/supabase
```

**Linux:**
```bash
curl -fsSL https://supabase.com/install.sh | sh
```

### **2. Prihláste sa do Supabase**

```bash
supabase login
```

### **3. Prepojte projekt s existujúcim Supabase projektom**

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

*Nájdete PROJECT_REF v Supabase Dashboard → Settings → General → Reference ID*

### **4. Nasaďte Edge Function**

```bash
supabase functions deploy send-email
```

### **5. Skontrolujte nasadenie**

```bash
supabase functions list
```

### **6. Testujte funkciu**

```bash
curl -X POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-email' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "html": "<h1>Test</h1>",
    "text": "Test"
  }'
```

## 🔧 Alternatívne riešenie (bez CLI)

### **Použitie Supabase Dashboard:**

1. **Choďte do Supabase Dashboard**
2. **Kliknite na "Edge Functions" v ľavom menu**
3. **Kliknite "Create a new function"**
4. **Názov:** `send-email`
5. **Skopírujte obsah z `supabase/functions/send-email/index.ts`**
6. **Kliknite "Deploy"**

## ✅ Overenie funkčnosti

Po nasadení by ste mali vidieť v konzole:

```
📤 Sending email to GM: t.ficek@gmail.com
✅ Email sent to GM: t.ficek@gmail.com {success: true, data: {...}}
```

## 🐛 Riešenie problémov

### **Chyba: "Function not found"**
- Skontrolujte, či je funkcia nasadená: `supabase functions list`
- Skontrolujte názov funkcie v kóde

### **Chyba: "Unauthorized"**
- Skontrolujte, či máte správne nastavené API kľúče
- Skontrolujte, či je funkcia verejne dostupná

### **Chyba: "CORS"**
- Edge Functions automaticky riešia CORS problémy
- Ak stále vidíte CORS chyby, skontrolujte, či sa používa správna funkcia

## 📧 Testovanie emailov

1. **Vytvorte novú žiadosť**
2. **Skontrolujte konzolu pre logy**
3. **Skontrolujte emailovú schránku GM**

---

**Poznámka:** Toto riešenie je produkčne pripravené a rieši všetky CORS problémy! 🎯





