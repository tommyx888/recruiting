-- ============================================
-- Nastavenie automatických pripomienok pre GM
-- ============================================
-- Tento skript nastaví automatické posielanie pripomienok
-- pre žiadosti o nábor, ktoré čakajú na schválenie viac ako 3 dni alebo týždeň
--
-- INŠTRUKCIE:
-- 1. Nahraďte YOUR_PROJECT_REF vašim Supabase Project Reference ID
--    (nájdete v Supabase Dashboard → Settings → General → Reference ID)
-- 2. Nahraďte YOUR_SERVICE_ROLE_KEY vašim Service Role Key
--    (nájdete v Supabase Dashboard → Settings → API → service_role key)
--    ⚠️ DÔLEŽITÉ: Tento kľúč je tajný, nezdielajte ho!
-- 3. Spustite tento skript v Supabase SQL Editor

-- Krok 1: Pridanie stĺpca pre sledovanie poslednej pripomienky
ALTER TABLE recruiting_requests 
ADD COLUMN IF NOT EXISTS last_reminder_sent TIMESTAMPTZ;

-- Krok 2: Skontrolujte, aký stĺpec s dátumom existuje
-- Najprv skontrolujte štruktúru tabuľky (spustite check-table-structure.sql)
-- Ak stĺpec created_at neexistuje, možno sa volá inak (napr. created, date_created, atď.)

-- Krok 2a: Pridanie stĺpca created_at, ak neexistuje (ak už existuje, tento príkaz nič neurobí)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'recruiting_requests' 
        AND column_name = 'created_at'
    ) THEN
        ALTER TABLE recruiting_requests 
        ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        
        -- Aktualizujte existujúce záznamy (ak nejaké sú)
        UPDATE recruiting_requests 
        SET created_at = NOW() 
        WHERE created_at IS NULL;
    END IF;
END $$;

-- Krok 2b: Vytvorenie indexov pre lepšiu výkonnosť
-- POZNÁMKA: Ak váš stĺpec s dátumom má iný názov, upravte 'created_at' na správny názov
CREATE INDEX IF NOT EXISTS idx_recruiting_requests_status_created 
ON recruiting_requests(status, created_at) 
WHERE status = 'Pending';

CREATE INDEX IF NOT EXISTS idx_recruiting_requests_last_reminder 
ON recruiting_requests(last_reminder_sent) 
WHERE status = 'Pending';

-- Krok 3: Povolenie pg_cron rozšírenia
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Krok 4: Nastavenie cron jobu
-- POZNÁMKA: Nahraďte YOUR_PROJECT_REF a YOUR_SERVICE_ROLE_KEY skutočnými hodnotami!
-- Cron job sa spustí každý deň o 9:00 UTC (11:00 slovenského času v zime, 12:00 v lete)

-- Najprv odstráňte existujúci cron job, ak existuje (pre prípad, že ho chcete aktualizovať)
SELECT cron.unschedule('check-pending-requests-daily') WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'check-pending-requests-daily'
);

-- Vytvorenie nového cron jobu
-- SCHEDULE: '0 9 * * *' = každý deň o 9:00 UTC
-- Ak chcete zmeniť čas, upravte: '0 9 * * *' (formát: minúta hodina deň mesiac deň_v_týždni)
SELECT cron.schedule(
    'check-pending-requests-daily',  -- Názov cron jobu
    '0 9 * * *',                      -- Schedule: každý deň o 9:00 UTC
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

-- Overenie, že cron job bol vytvorený
SELECT * FROM cron.job WHERE jobname = 'check-pending-requests-daily';

-- ============================================
-- VOLITEĽNÉ: Manuálne spustenie kontroly (pre testovanie)
-- ============================================
-- Ak chcete manuálne spustiť kontrolu bez čakania na cron job,
-- spustite tento príkaz:
/*
SELECT
    net.http_post(
        url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/check-pending-requests',
        headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'Authorization', 'Bearer YOUR_SERVICE_ROLE_KEY'
        ),
        body := '{}'::jsonb
    ) AS request_id;
*/

-- ============================================
-- VOLITEĽNÉ: Zmena času spúšťania
-- ============================================
-- Ak chcete zmeniť čas, kedy sa kontrolujú žiadosti:
/*
-- Odstráňte existujúci cron job
SELECT cron.unschedule('check-pending-requests-daily');

-- Vytvorte nový s iným časom
SELECT cron.schedule(
    'check-pending-requests-daily',
    '0 8 * * *',  -- Každý deň o 8:00 UTC
    $$ ... $$  -- (rovnaký SQL kód ako vyššie)
);
*/

-- ============================================
-- VOLITEĽNÉ: Odstránenie cron jobu
-- ============================================
-- Ak chcete odstrániť automatické pripomienky:
/*
SELECT cron.unschedule('check-pending-requests-daily');
*/


