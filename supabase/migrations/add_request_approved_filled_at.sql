-- Čas schválenia a uzavretia žiadosti (výpočet dní v UI)
ALTER TABLE recruiting_requests
    ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS filled_at TIMESTAMPTZ;

-- Existujúce schválené / obsadené: odhad schválenia = vytvorenie žiadosti (presný čas schválenia neznámy)
UPDATE recruiting_requests
SET approved_at = created_at
WHERE approved_at IS NULL
  AND status IN ('Approved', 'Filled');
