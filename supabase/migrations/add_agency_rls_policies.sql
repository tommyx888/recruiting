-- Add RLS policies for agency role to access recruiting_requests and candidates

-- Allow agencies to view approved recruiting requests
DROP POLICY IF EXISTS "Agencies can view approved requests" ON recruiting_requests;
CREATE POLICY "Agencies can view approved requests" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        status = 'Approved' AND
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'agency'
        )
    );

-- Allow agencies to view their own candidates (by source)
-- This policy allows agencies to see candidates where source matches their agency
-- Note: This assumes agency source is stored in users table or can be determined
-- For now, we'll allow agencies to view candidates (they'll be filtered in application code)
DROP POLICY IF EXISTS "Agencies can view candidates" ON candidates;
CREATE POLICY "Agencies can view candidates" ON candidates
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'agency'
        )
    );

-- Verify policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd 
FROM pg_policies 
WHERE tablename IN ('recruiting_requests', 'candidates')
AND policyname LIKE '%Agency%'
ORDER BY tablename, policyname;
