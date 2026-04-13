-- Viditeľnosť schválenej pozície v zozname pre agentúry (pridanie kandidáta)
ALTER TABLE recruiting_requests
    ADD COLUMN IF NOT EXISTS visible_to_agencies boolean NOT NULL DEFAULT true;

COMMENT ON COLUMN recruiting_requests.visible_to_agencies IS 'Ak false, schválená žiadosť sa agentúram nezobrazí pri výbere pozície.';

-- Obmedziť SELECT pre agentúry len na schválené a označené ako viditeľné
DROP POLICY IF EXISTS "Agencies can view approved requests" ON recruiting_requests;
CREATE POLICY "Agencies can view approved requests" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated'
        AND status = 'Approved'
        AND visible_to_agencies IS TRUE
        AND EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
              AND users.role = 'agency'
        )
    );
