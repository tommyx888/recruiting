-- Allow recruiters and GMs to delete interview slots they manage
DROP POLICY IF EXISTS "Recruiters and GMs can delete slots" ON public.interview_slots;
CREATE POLICY "Recruiters and GMs can delete slots"
    ON public.interview_slots
    FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE users.id = auth.uid()
            AND users.role IN ('recruiter', 'gm')
        )
    );
