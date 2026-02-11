-- Create interview_slots table for managing interview time slots
CREATE TABLE IF NOT EXISTS interview_slots (
    id SERIAL PRIMARY KEY,
    request_id INTEGER NOT NULL REFERENCES recruiting_requests(id) ON DELETE CASCADE,
    round TEXT NOT NULL CHECK (round IN ('first', 'second')),
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    candidate_id INTEGER REFERENCES candidates(id) ON DELETE SET NULL,
    agency_source TEXT, -- Which agency booked this slot (Talent Solution, Manuvia, etc.)
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT valid_time_range CHECK (end_time > start_time),
    CONSTRAINT unique_slot_per_candidate UNIQUE (request_id, round, start_time, candidate_id)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_interview_slots_request_id ON interview_slots(request_id);
CREATE INDEX IF NOT EXISTS idx_interview_slots_round ON interview_slots(round);
CREATE INDEX IF NOT EXISTS idx_interview_slots_start_time ON interview_slots(start_time);
CREATE INDEX IF NOT EXISTS idx_interview_slots_candidate_id ON interview_slots(candidate_id);
CREATE INDEX IF NOT EXISTS idx_interview_slots_agency_source ON interview_slots(agency_source);
CREATE INDEX IF NOT EXISTS idx_interview_slots_available ON interview_slots(request_id, round, start_time) WHERE candidate_id IS NULL;

-- Enable RLS
ALTER TABLE interview_slots ENABLE ROW LEVEL SECURITY;

-- RLS Policies for interview_slots
-- Allow recruiters and GMs to see all slots
CREATE POLICY "Recruiters and GMs can view all slots"
    ON interview_slots FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role IN ('recruiter', 'gm')
        )
    );

-- Allow recruiters and GMs to create slots
CREATE POLICY "Recruiters and GMs can create slots"
    ON interview_slots FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role IN ('recruiter', 'gm')
        )
    );

-- Allow recruiters and GMs to update slots
CREATE POLICY "Recruiters and GMs can update slots"
    ON interview_slots FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role IN ('recruiter', 'gm')
        )
    );

-- Allow agencies to view slots for their source
CREATE POLICY "Agencies can view slots for their source"
    ON interview_slots FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role = 'agency'
            AND interview_slots.agency_source = (
                SELECT source FROM candidates 
                WHERE candidates.source IN ('Talent Solution', 'Manuvia', 'Tobin', 'TG')
                LIMIT 1
            )
        )
        OR candidate_id IS NULL -- Available slots visible to all agencies
    );

-- Allow agencies to book available slots (update candidate_id and agency_source)
CREATE POLICY "Agencies can book available slots"
    ON interview_slots FOR UPDATE
    USING (
        candidate_id IS NULL -- Only available slots
        AND EXISTS (
            SELECT 1 FROM users
            WHERE users.id = auth.uid()
            AND users.role = 'agency'
        )
    )
    WITH CHECK (
        candidate_id IS NOT NULL
        AND agency_source IS NOT NULL
    );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_interview_slots_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_interview_slots_updated_at
    BEFORE UPDATE ON interview_slots
    FOR EACH ROW
    EXECUTE FUNCTION update_interview_slots_updated_at();

-- Add agency role to users table if not exists
-- Note: This assumes the users table already exists
-- If role column has a CHECK constraint, you may need to alter it
DO $$
BEGIN
    -- Check if 'agency' is in the role check constraint
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.check_constraints 
        WHERE constraint_name LIKE '%role%' 
        AND check_clause LIKE '%agency%'
    ) THEN
        -- Try to alter the constraint (this might fail if constraint doesn't exist)
        BEGIN
            ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check;
            ALTER TABLE users ADD CONSTRAINT users_role_check 
                CHECK (role IN ('gm', 'recruiter', 'manager', 'agency'));
        EXCEPTION
            WHEN OTHERS THEN
                -- If constraint doesn't exist or can't be modified, just continue
                NULL;
        END;
    END IF;
END $$;
