-- Org structure fields for new-position requests (independent stredisko / oddelenie / útvar)

CREATE TABLE IF NOT EXISTS public.org_lookup_values (
    id BIGSERIAL PRIMARY KEY,
    lookup_type TEXT NOT NULL CHECK (lookup_type IN ('stredisko', 'oddelenie', 'utvar')),
    code TEXT NOT NULL,
    label TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (lookup_type, code)
);

CREATE INDEX IF NOT EXISTS idx_org_lookup_values_type_label
    ON public.org_lookup_values (lookup_type, label);

ALTER TABLE public.org_lookup_values ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can read org lookup values" ON public.org_lookup_values;
CREATE POLICY "Authenticated users can read org lookup values"
    ON public.org_lookup_values
    FOR SELECT
    TO authenticated
    USING (true);

GRANT SELECT ON public.org_lookup_values TO authenticated;

ALTER TABLE public.recruiting_requests
    ADD COLUMN IF NOT EXISTS new_stredisko TEXT,
    ADD COLUMN IF NOT EXISTS new_oddelenie TEXT,
    ADD COLUMN IF NOT EXISTS new_utvar TEXT;

COMMENT ON COLUMN public.recruiting_requests.new_stredisko IS 'Nové stredisko (str) – kód alebo text z formulára';
COMMENT ON COLUMN public.recruiting_requests.new_oddelenie IS 'Nové oddelenie (odd) – kód alebo text z formulára';
COMMENT ON COLUMN public.recruiting_requests.new_utvar IS 'Nový útvar (utvar) – kód alebo text z formulára';
