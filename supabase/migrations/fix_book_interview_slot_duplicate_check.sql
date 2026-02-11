-- Prevent 409 duplicate key: same candidate already booked in another slot (same request_id, round).
-- Run this in SQL Editor to update the function.

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
        WHERE id = v_uid AND role = 'agency'
    ) THEN
        RAISE EXCEPTION 'Only agency users can book slots' USING errcode = '42501';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM interview_slots
        WHERE id = book_interview_slot.slot_id AND candidate_id IS NULL
    ) THEN
        RAISE EXCEPTION 'Slot is not available' USING errcode = 'P0001';
    END IF;

    -- Prevent duplicate: same candidate already booked in another slot (same request_id, round)
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
