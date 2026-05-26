-- Allow role changes away from agency roles without failing on stale source values.
-- When role is not agency/agency-interim, source is automatically cleared.

CREATE OR REPLACE FUNCTION validate_agency_source()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.role IN ('agency', 'agency-interim') THEN
        -- Normalize empty source values for agency roles.
        IF NEW.source IS NOT NULL AND btrim(NEW.source) = '' THEN
            NEW.source := NULL;
        END IF;
    ELSE
        -- Clear source for all non-agency roles (gm/recruiter/manager/etc.).
        NEW.source := NULL;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
