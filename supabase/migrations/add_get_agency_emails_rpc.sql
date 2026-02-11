-- RPC: return agency user emails for given sources (for notifying when recruiter creates slots).
-- Runs as SECURITY DEFINER so recruiter can get emails without needing SELECT on users.
-- Run this entire script in Supabase Dashboard → SQL Editor → New query, then Run.

DROP FUNCTION IF EXISTS public.get_agency_emails_for_new_slots(text[]);

CREATE OR REPLACE FUNCTION public.get_agency_emails_for_new_slots(sources text[])
RETURNS TABLE(email text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Only allow authenticated users (recruiter/gm will call this)
    IF auth.uid() IS NULL THEN
        RETURN;
    END IF;
    IF NOT EXISTS (
        SELECT 1 FROM users u
        WHERE u.id = auth.uid() AND u.role IN ('recruiter', 'gm')
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
