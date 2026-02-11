-- Allow manager role to call get_agency_emails_for_new_slots so that when
-- a manager updates candidate status, agency users can still be notified.

DROP FUNCTION IF EXISTS public.get_agency_emails_for_new_slots(text[]);

CREATE OR REPLACE FUNCTION public.get_agency_emails_for_new_slots(sources text[])
RETURNS TABLE(email text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF auth.uid() IS NULL THEN
        RETURN;
    END IF;
    -- Allow recruiter, gm, and manager (e.g. when manager updates candidate status)
    IF NOT EXISTS (
        SELECT 1 FROM users u
        WHERE u.id = auth.uid() AND u.role IN ('recruiter', 'gm', 'manager')
    ) THEN
        RETURN;
    END IF;

    RETURN QUERY
    SELECT u.email::text
    FROM users u
    WHERE u.role = 'agency'
      AND u.source = ANY(sources)
      AND u.email IS NOT NULL
      AND u.email != '';
END;
$$;

GRANT EXECUTE ON FUNCTION get_agency_emails_for_new_slots(text[]) TO authenticated;
GRANT EXECUTE ON FUNCTION get_agency_emails_for_new_slots(text[]) TO service_role;
