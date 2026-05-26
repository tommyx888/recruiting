-- Ensure managers can see both permanent and interim data within their department.
-- Applies to lowercase and uppercase role variants used in existing data.

DROP POLICY IF EXISTS "Managers can view department candidates" ON public.candidates;
CREATE POLICY "Managers can view department candidates"
ON public.candidates
FOR SELECT
USING (
    auth.role() = 'authenticated'
    AND EXISTS (
        SELECT 1
        FROM public.users u
        WHERE u.id = auth.uid()
          AND u.role IN ('Manager', 'manager')
          AND u.department IS NOT NULL
          AND btrim(u.department) <> ''
          AND public.candidates.department = u.department
    )
    AND status <> 'Pending Recruiter Review'
);

DROP POLICY IF EXISTS "Managers can view department requests" ON public.recruiting_requests;
CREATE POLICY "Managers can view department requests"
ON public.recruiting_requests
FOR SELECT
USING (
    auth.role() = 'authenticated'
    AND EXISTS (
        SELECT 1
        FROM public.users u
        WHERE u.id = auth.uid()
          AND u.role IN ('Manager', 'manager')
          AND u.department IS NOT NULL
          AND btrim(u.department) <> ''
          AND public.recruiting_requests.department = u.department
    )
);
