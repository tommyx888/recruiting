# 🔔 Nastavenie pripomienkových e-mailov pre GM

## 📋 Prehľad

Tento systém automaticky posiela pripomienkové e-maily všetkým GM a Recruiterom, ak existujú žiadosti o nábor, ktoré:
- Sú vo stave "Pending" (čakajú na schválenie)
- Sú staršie ako **3 dni** - posiela sa mierna pripomienka
- Sú staršie ako **týždeň (7 dní)** - posiela sa urgentná pripomienka

## 🚀 Krok za krokom nastavenie

### 1. Pridanie stĺpcov do databázy

**Ak sa zobrazí chyba "column created_at does not exist":**

Spustite najprv `fix-reminder-setup.sql` v Supabase SQL Editor - tento skript automaticky pridá všetky potrebné stĺpce.

**Alebo manuálne spustite tento SQL príkaz v Supabase SQL Editor:**

```sql
-- Krok 1: Pridanie stĺpca pre sledovanie poslednej pripomienky
ALTER TABLE recruiting_requests 
ADD COLUMN IF NOT EXISTS last_reminder_sent TIMESTAMPTZ;

-- Krok 2: Pridanie stĺpca created_at, ak neexistuje
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'recruiting_requests' 
        AND column_name = 'created_at'
    ) THEN
        ALTER TABLE recruiting_requests 
        ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        
        -- Aktualizujte existujúce záznamy
        UPDATE recruiting_requests 
        SET created_at = NOW() 
        WHERE created_at IS NULL;
    END IF;
END $$;

-- Krok 3: Vytvorenie indexov pre lepšiu výkonnosť
CREATE INDEX IF NOT EXISTS idx_recruiting_requests_status_created 
ON recruiting_requests(status, created_at) 
WHERE status = 'Pending';

CREATE INDEX IF NOT EXISTS idx_recruiting_requests_last_reminder 
ON recruiting_requests(last_reminder_sent) 
WHERE status = 'Pending';
```

**POZNÁMKA:** Ak sa zobrazí chyba, že stĺpec `created_at` neexistuje, najprv spustite `check-table-structure.sql`, aby ste videli, aké stĺpce v tabuľke skutočne existujú. Ak má váš stĺpec s dátumom iný názov (napr. `created`, `date_created`), upravte názov v indexe a v edge function.

### 2. Nasadenie Edge Function

```bash
# Uistite sa, že ste prihlásení do Supabase
supabase login

# Prepojte projekt
supabase link --project-ref YOUR_PROJECT_REF

# Nasaďte novú edge function
supabase functions deploy check-pending-requests
```

### 3. Nastavenie automatického spúšťania (Cron Job)

#### Možnosť A: Použitie Supabase Dashboard (Odporúčané)

1. Choďte do **Supabase Dashboard** → **Database** → **Cron Jobs**
2. Kliknite na **"Create a new cron job"**
3. Nastavte:
   - **Name:** `check-pending-requests-daily`
   - **Schedule:** `0 9 * * *` (každý deň o 9:00 UTC)
   - **Command:** Pozri nižšie

#### Možnosť B: Použitie SQL (Vyžaduje superuser právomoci)

Spustite tento SQL v Supabase SQL Editor:

```sql
-- Povolenie pg_cron rozšírenia
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Nastavenie cron jobu (spúšťa sa každý deň o 9:00 UTC)
-- POZNÁMKA: Nahraďte YOUR_PROJECT_REF a YOUR_SERVICE_ROLE_KEY skutočnými hodnotami
SELECT cron.schedule(
    'check-pending-requests-daily',
    '0 9 * * *', -- Každý deň o 9:00 UTC
    $$
    SELECT
        net.http_post(
            url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/check-pending-requests',
            headers := jsonb_build_object(
                'Content-Type', 'application/json',
                'Authorization', 'Bearer YOUR_SERVICE_ROLE_KEY'
            ),
            body := '{}'::jsonb
        ) AS request_id;
    $$
);
```

**Ako získať hodnoty:**
- `YOUR_PROJECT_REF`: Nájdete v Supabase Dashboard → Settings → General → Reference ID
- `YOUR_SERVICE_ROLE_KEY`: Nájdete v Supabase Dashboard → Settings → API → service_role key (⚠️ DÔLEŽITÉ: Tento kľúč je tajný, nezdielajte ho!)

#### Možnosť C: Manuálne testovanie

Môžete manuálne spustiť kontrolu volaním edge function:

```bash
curl -X POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/check-pending-requests' \
  -H 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### 4. Overenie funkčnosti

1. **Vytvorte testovaciu žiadosť** so stavom "Pending"
2. **Upravte dátum vytvorenia** v databáze na dátum starší ako 3 dni:
   ```sql
   UPDATE recruiting_requests 
   SET created_at = NOW() - INTERVAL '4 days'
   WHERE id = YOUR_REQUEST_ID;
   ```
3. **Manuálne spustite kontrolu** (pozri Možnosť C vyššie)
4. **Skontrolujte e-maily** - mali by ste dostať pripomienku

## 📧 Formát e-mailov

### Pripomienka po 3 dňoch:
- **Predmet:** "Pripomienka: Žiadosť o nábor čaká na schválenie - [Pozícia] (X dní)"
- **Tón:** Mierny, informačný
- **Farba:** Oranžová (#f59e0b)

### Urgentná pripomienka po týždni:
- **Predmet:** "🚨 URGENTNÁ PRIPOMIENKA: Žiadosť o nábor čaká na schválenie už X dní - [Pozícia]"
- **Tón:** Urgentný, dôležitý
- **Farba:** Červená (#dc2626)

## 🔧 Konfigurácia

### Zmena časovania

Ak chcete zmeniť, kedy sa kontrolujú žiadosti, upravte cron schedule:

```sql
-- Každý deň o 8:00 UTC
'0 8 * * *'

-- Každý deň o 10:00 a 18:00 UTC
'0 10,18 * * *'

-- Každé 12 hodín
'0 */12 * * *'
```

### Zmena prahových hodnôt

Ak chcete zmeniť, kedy sa posielajú pripomienky (napr. 5 dní a 2 týždne), upravte v `supabase/functions/check-pending-requests/index.ts`:

```typescript
const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)
const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
```

## 🐛 Riešenie problémov

### Cron job sa nespúšťa

1. Skontrolujte, či máte povolené pg_cron rozšírenie
2. Overte, či máte správne oprávnenia (superuser)
3. Skontrolujte logy v Supabase Dashboard → Edge Functions → Logs

### E-maily sa neposielajú

1. Skontrolujte, či je nasadená edge function `send-email-resend`
2. Overte, či majú GM používatelia nastavené e-mailové adresy
3. Skontrolujte logy edge function `check-pending-requests`

### Žiadosti sa nenašli

1. Skontrolujte, či existujú žiadosti so stavom "Pending"
2. Overte dátumy vytvorenia v databáze
3. Skontrolujte, či nie je `last_reminder_sent` nastavený na nedávny dátum

## ✅ Kontrolný zoznam

- [ ] Pridaný stĺpec `last_reminder_sent` do tabuľky `recruiting_requests`
- [ ] Vytvorené indexy pre lepšiu výkonnosť
- [ ] Nasadená edge function `check-pending-requests`
- [ ] Nastavený cron job na automatické spúšťanie
- [ ] Otestovaná funkcionalita s testovacou žiadosťou
- [ ] Overené, že e-maily prichádzajú správnym GM používateľom

## 📝 Rýchly štart

1. **Spustite SQL migráciu:**
   ```sql
   -- Otvorte súbor setup-reminder-cron.sql a nahraďte YOUR_PROJECT_REF a YOUR_SERVICE_ROLE_KEY
   -- Potom spustite v Supabase SQL Editor
   ```

2. **Nasaďte edge function:**
   ```bash
   supabase functions deploy check-pending-requests
   ```

3. **Manuálne otestujte:**
   ```bash
   curl -X POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/check-pending-requests' \
     -H 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \
     -H 'Content-Type: application/json' \
     -d '{}'
   ```

## 📝 Poznámky

- Systém automaticky sleduje, kedy bola posledná pripomienka odoslaná, aby sa predišlo spamovaniu
- Pripomienky sa posielajú všetkým GM a Recruiterom s nastaveným e-mailom
- Odkazy v e-mailoch vedú priamo na sekciu GM Approval v systéme

