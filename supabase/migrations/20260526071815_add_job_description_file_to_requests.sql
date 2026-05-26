ALTER TABLE recruiting_requests
    ADD COLUMN IF NOT EXISTS job_description_file_path TEXT;

COMMENT ON COLUMN recruiting_requests.job_description_file_path IS 'Path to uploaded job description document (PDF/DOC/DOCX) in Supabase Storage.';

ALTER TABLE recruiting_requests
    ADD COLUMN IF NOT EXISTS has_final_interview_participant BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS final_interview_participant_name TEXT,
    ADD COLUMN IF NOT EXISTS final_interview_participant_note TEXT,
    ADD COLUMN IF NOT EXISTS contract_type TEXT DEFAULT 'permanent';

UPDATE recruiting_requests
SET contract_type = 'interim'
WHERE contract_type IS NULL AND position_type = 'interim';

UPDATE recruiting_requests
SET contract_type = 'permanent'
WHERE contract_type IS NULL;

COMMENT ON COLUMN recruiting_requests.has_final_interview_participant IS 'If true, request includes dedicated person for final interview.';
COMMENT ON COLUMN recruiting_requests.final_interview_participant_name IS 'Name of participant added for final interview.';
COMMENT ON COLUMN recruiting_requests.final_interview_participant_note IS 'Optional note/description for final interview participant.';
COMMENT ON COLUMN recruiting_requests.contract_type IS 'Contract type for request: permanent or interim.';
