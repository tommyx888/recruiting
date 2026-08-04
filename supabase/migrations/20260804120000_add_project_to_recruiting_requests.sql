-- Add project field to recruiting requests
ALTER TABLE recruiting_requests
ADD COLUMN IF NOT EXISTS project TEXT;

COMMENT ON COLUMN recruiting_requests.project IS 'Projekt: MAN, L463 Pillars, L463 Doors, L463 Loadspace, Daimler Door, 663 Uplift';
