-- Fix RLS: allow agency users to book (UPDATE) interview_slots
-- Error: "new row violates row-level security policy for table interview_slots"
-- USING restricts to: free slots only + current user role=agency. WITH CHECK (true) so update succeeds.

-- Drop existing agency UPDATE policy
DROP POLICY IF EXISTS "Agencies can book available slots" ON interview_slots;

CREATE POLICY "Agencies can book available slots"
    ON interview_slots FOR UPDATE
    USING (
        candidate_id IS NULL
        AND EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role = 'agency'
        )
    )
    WITH CHECK (true);
