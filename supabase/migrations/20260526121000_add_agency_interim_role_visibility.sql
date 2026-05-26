-- Add agency-interim role support and split agency visibility by contract type.

-- 1) users.role check constraint (if present)
DO $$
DECLARE
    invalid_roles text;
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'users_role_check'
    ) THEN
        ALTER TABLE users DROP CONSTRAINT users_role_check;
    END IF;

    SELECT string_agg(DISTINCT role, ', ')
    INTO invalid_roles
    FROM users
    WHERE role IS NOT NULL
      AND role NOT IN ('gm', 'recruiter', 'manager', 'Manager', 'agency', 'agency-interim');

    IF invalid_roles IS NULL THEN
        ALTER TABLE users
            ADD CONSTRAINT users_role_check
            CHECK (role IN ('gm', 'recruiter', 'manager', 'Manager', 'agency', 'agency-interim'));
    ELSE
        RAISE NOTICE 'Skipping users_role_check creation because of unexpected roles: %', invalid_roles;
    END IF;
END $$;

-- 2) Allow source for both agency roles
DROP INDEX IF EXISTS idx_users_source;
CREATE INDEX IF NOT EXISTS idx_users_source ON users(source) WHERE role IN ('agency', 'agency-interim');

CREATE OR REPLACE FUNCTION validate_agency_source()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.source IS NOT NULL AND NEW.role NOT IN ('agency', 'agency-interim') THEN
        RAISE EXCEPTION 'Source can only be set for users with role = agency or agency-interim';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3) Agencies can only see approved + visible requests for their contract type
DROP POLICY IF EXISTS "Agencies can view approved requests" ON recruiting_requests;
CREATE POLICY "Agencies can view approved requests" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated'
        AND status = 'Approved'
        AND visible_to_agencies IS TRUE
        AND (
            (contract_type = 'permanent' AND EXISTS (
                SELECT 1 FROM users
                WHERE users.id = auth.uid()
                  AND users.role = 'agency'
            ))
            OR
            (contract_type = 'interim' AND EXISTS (
                SELECT 1 FROM users
                WHERE users.id = auth.uid()
                  AND users.role = 'agency-interim'
            ))
        )
    );

-- 4) Both agency roles can insert pending-review candidates tied to their own source
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
              AND u.role IN ('agency', 'agency-interim')
              AND u.source IS NOT NULL
              AND btrim(u.source) = btrim(source)
        )
    );

-- 5) RPC: recruiter slot notifications should target both agency role variants
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
    IF NOT EXISTS (
        SELECT 1 FROM users u
        WHERE u.id = auth.uid() AND u.role IN ('recruiter', 'gm')
    ) THEN
        RETURN;
    END IF;

    RETURN QUERY
    SELECT u.email::text
    FROM users u
    WHERE u.role IN ('agency', 'agency-interim')
      AND u.source = ANY(sources)
      AND u.email IS NOT NULL
      AND u.email != '';
END;
$$;

-- 6) interview slot booking/cancel role checks for both agency role variants
CREATE OR REPLACE FUNCTION book_interview_slot(
    slot_id int,
    p_candidate_id int,
    p_agency_source text
)
RETURNS SETOF interview_slots
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_uid uuid;
BEGIN
    v_uid := auth.uid();
    IF v_uid IS NULL THEN
        RAISE EXCEPTION 'Not authenticated' USING errcode = 'PGRST301';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM users
        WHERE id = v_uid AND role IN ('agency', 'agency-interim')
    ) THEN
        RAISE EXCEPTION 'Only agency users can book slots' USING errcode = '42501';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM interview_slots
        WHERE id = book_interview_slot.slot_id AND candidate_id IS NULL
    ) THEN
        RAISE EXCEPTION 'Slot is not available' USING errcode = 'P0001';
    END IF;

    IF EXISTS (
        SELECT 1 FROM interview_slots s
        WHERE s.request_id = (SELECT request_id FROM interview_slots WHERE id = book_interview_slot.slot_id)
          AND s.round = (SELECT round FROM interview_slots WHERE id = book_interview_slot.slot_id)
          AND s.candidate_id = p_candidate_id
          AND s.id != book_interview_slot.slot_id
    ) THEN
        RAISE EXCEPTION 'Candidate is already booked for another slot in this round' USING errcode = 'P0001';
    END IF;

    UPDATE interview_slots
    SET
        candidate_id = p_candidate_id,
        agency_source = p_agency_source,
        updated_at = now()
    WHERE id = book_interview_slot.slot_id;

    RETURN QUERY SELECT * FROM interview_slots WHERE id = book_interview_slot.slot_id;
END;
$$;

CREATE OR REPLACE FUNCTION cancel_interview_slot_booking(
    slot_id int,
    p_agency_source text
)
RETURNS SETOF interview_slots
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_uid uuid;
    v_user_source text;
BEGIN
    v_uid := auth.uid();
    IF v_uid IS NULL THEN
        RAISE EXCEPTION 'Not authenticated' USING errcode = 'PGRST301';
    END IF;

    SELECT source INTO v_user_source
    FROM users
    WHERE id = v_uid
      AND role IN ('agency', 'agency-interim');

    IF v_user_source IS NULL THEN
        RAISE EXCEPTION 'Only agency users can cancel booked slots' USING errcode = '42501';
    END IF;

    IF v_user_source <> p_agency_source THEN
        RAISE EXCEPTION 'Agency source mismatch' USING errcode = '42501';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM interview_slots
        WHERE id = cancel_interview_slot_booking.slot_id
          AND candidate_id IS NOT NULL
          AND agency_source = p_agency_source
    ) THEN
        RAISE EXCEPTION 'Slot is not booked by this agency' USING errcode = 'P0001';
    END IF;

    UPDATE interview_slots
    SET
        candidate_id = NULL,
        agency_source = NULL,
        updated_at = now()
    WHERE id = cancel_interview_slot_booking.slot_id;

    RETURN QUERY
    SELECT *
    FROM interview_slots
    WHERE id = cancel_interview_slot_booking.slot_id;
END;
$$;

-- 7) UPDATE policy for slot booking should allow both agency role variants
DROP POLICY IF EXISTS "Agencies can book available slots" ON interview_slots;
CREATE POLICY "Agencies can book available slots"
    ON interview_slots FOR UPDATE
    USING (
        candidate_id IS NULL
        AND EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
              AND users.role IN ('agency', 'agency-interim')
        )
    )
    WITH CHECK (true);
