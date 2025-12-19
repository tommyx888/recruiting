-- ============================================
-- Oprava nastavenia pripomienok - pridanie chýbajúcich stĺpcov
-- ============================================
-- Tento skript automaticky pridá stĺpec created_at, ak neexistuje
-- a nastaví všetko potrebné pre pripomienkové e-maily

-- Krok 1: Pridanie stĺpca created_at, ak neexistuje
DO $$
BEGIN
    -- Skontrolujte, či stĺpec created_at existuje
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'recruiting_requests' 
        AND column_name = 'created_at'
    ) THEN
        -- Pridajte stĺpec created_at
        ALTER TABLE recruiting_requests 
        ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        
        -- Aktualizujte existujúce záznamy (ak nejaké sú)
        UPDATE recruiting_requests 
        SET created_at = NOW() 
        WHERE created_at IS NULL;
        
        RAISE NOTICE 'Stĺpec created_at bol pridaný';
    ELSE
        RAISE NOTICE 'Stĺpec created_at už existuje';
    END IF;
END $$;

-- Krok 2: Pridanie stĺpca last_reminder_sent, ak neexistuje
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'recruiting_requests' 
        AND column_name = 'last_reminder_sent'
    ) THEN
        ALTER TABLE recruiting_requests 
        ADD COLUMN last_reminder_sent TIMESTAMPTZ;
        
        RAISE NOTICE 'Stĺpec last_reminder_sent bol pridaný';
    ELSE
        RAISE NOTICE 'Stĺpec last_reminder_sent už existuje';
    END IF;
END $$;

-- Krok 3: Vytvorenie indexov pre lepšiu výkonnosť
-- (IF NOT EXISTS zabezpečí, že sa index nevytvorí, ak už existuje)
DROP INDEX IF EXISTS idx_recruiting_requests_status_created;
CREATE INDEX idx_recruiting_requests_status_created 
ON recruiting_requests(status, created_at) 
WHERE status = 'Pending';

DROP INDEX IF EXISTS idx_recruiting_requests_last_reminder;
CREATE INDEX idx_recruiting_requests_last_reminder 
ON recruiting_requests(last_reminder_sent) 
WHERE status = 'Pending';

-- Krok 4: Overenie, že všetko bolo vytvorené správne
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'recruiting_requests'
AND column_name IN ('created_at', 'last_reminder_sent')
ORDER BY column_name;

-- Krok 5: Zobrazenie existujúcich indexov
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'recruiting_requests'
AND indexname LIKE 'idx_recruiting_requests%';

