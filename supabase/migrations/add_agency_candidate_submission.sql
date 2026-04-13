-- Odkaz na schválenú žiadosť o nábor pri podaní od agentúry
ALTER TABLE candidates
    ADD COLUMN IF NOT EXISTS recruiting_request_id INTEGER REFERENCES recruiting_requests (id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_candidates_recruiting_request_id ON candidates (recruiting_request_id);

-- Agentúry môžu vkladať len riadky so stavom čakajúcim na recruitera a so zdrojom zhodným s users.source
DROP POLICY IF EXISTS "Agencies can insert pending review candidates" ON candidates;
CREATE POLICY "Agencies can insert pending review candidates" ON candidates
    FOR INSERT
    WITH CHECK (
        auth.role() = 'authenticated'
        AND status = 'Pending Recruiter Review'
        AND recruiting_request_id IS NOT NULL
        AND EXISTS (
            SELECT 1
            FROM public.users u
            WHERE u.id = auth.uid()
              AND u.role = 'agency'
              AND u.source IS NOT NULL
              AND btrim(u.source) = btrim(source)
        )
    );

-- Poznámka: bucket candidate-files – ak upload zlyhá, v Supabase Storage pridajte politiku pre rolu agency (authenticated upload).
