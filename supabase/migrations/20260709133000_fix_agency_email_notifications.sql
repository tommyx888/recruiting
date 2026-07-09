-- Fix agency email resolution for notifications (status change + slot alerts).
-- Problems fixed:
-- 1) RPC only allowed recruiter/gm callers -> managers got empty email list
-- 2) Source matching was case/whitespace sensitive

DROP FUNCTION IF EXISTS public.get_agency_emails_for_new_slots(text[]);

CREATE OR REPLACE FUNCTION public.get_agency_emails_for_new_slots(sources text[])
RETURNS TABLE(email text, source text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    normalized_sources text[];
BEGIN
    IF auth.uid() IS NULL THEN
        RETURN;
    END IF;

    -- Internal users who may trigger agency notifications
    IF NOT EXISTS (
        SELECT 1
        FROM users u
        WHERE u.id = auth.uid()
          AND u.role IN ('recruiter', 'gm', 'Manager', 'manager')
    ) THEN
        RETURN;
    END IF;

    SELECT COALESCE(array_agg(DISTINCT btrim(s)), ARRAY[]::text[])
    INTO normalized_sources
    FROM unnest(COALESCE(sources, ARRAY[]::text[])) AS s
    WHERE s IS NOT NULL AND btrim(s) <> '';

    IF array_length(normalized_sources, 1) IS NULL THEN
        RETURN;
    END IF;

    RETURN QUERY
    SELECT DISTINCT u.email::text, btrim(u.source)::text
    FROM users u
    WHERE u.role IN ('agency', 'agency-interim')
      AND btrim(u.source) = ANY(normalized_sources)
      AND u.email IS NOT NULL
      AND btrim(u.email) <> '';
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_agency_emails_for_new_slots(text[]) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_agency_emails_for_new_slots(text[]) TO service_role;
