-- Allow agencies to cancel only their own booked interview slots.
-- Uses SECURITY DEFINER to avoid restrictive UPDATE RLS for already booked rows.

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

    -- Caller must be agency and own the same source.
    SELECT source INTO v_user_source
    FROM users
    WHERE id = v_uid
      AND role = 'agency';

    IF v_user_source IS NULL THEN
        RAISE EXCEPTION 'Only agency users can cancel booked slots' USING errcode = '42501';
    END IF;

    IF v_user_source <> p_agency_source THEN
        RAISE EXCEPTION 'Agency source mismatch' USING errcode = '42501';
    END IF;

    -- Slot must be booked by this agency source.
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

GRANT EXECUTE ON FUNCTION cancel_interview_slot_booking(int, text) TO authenticated;
GRANT EXECUTE ON FUNCTION cancel_interview_slot_booking(int, text) TO service_role;
