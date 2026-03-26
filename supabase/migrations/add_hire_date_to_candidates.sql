-- Dátum skutočného prijatia (pre výpočet času v procese: date_obtained → hire_date)
ALTER TABLE candidates ADD COLUMN IF NOT EXISTS hire_date TIMESTAMPTZ;

-- Existujúci prijatí: odhad z poslednej aktualizácie v čase migrácie
UPDATE candidates
SET hire_date = last_updated
WHERE status = 'Hired'
  AND hire_date IS NULL
  AND last_updated IS NOT NULL;
