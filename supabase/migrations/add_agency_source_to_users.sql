-- Add source column to users table for agency role
-- This column will store the agency source (Talent Solution, Manuvia, Tobin, TG) for agency users

-- Add source column (nullable, only used for agency role)
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS source TEXT;

-- Add comment to document the column
COMMENT ON COLUMN users.source IS 'Agency source name (Talent Solution, Manuvia, Tobin, TG). Only used for users with role = agency.';

-- Create index for faster queries when filtering by source
CREATE INDEX IF NOT EXISTS idx_users_source ON users(source) WHERE role = 'agency';

-- Add check constraint to ensure source is only set for agency role
-- Note: This allows NULL for non-agency users, but if source is set, role must be agency
-- We'll enforce this in application logic or via trigger

-- Optional: Create a trigger to validate that source is only set for agency users
CREATE OR REPLACE FUNCTION validate_agency_source()
RETURNS TRIGGER AS $$
BEGIN
    -- If source is set, role must be agency
    IF NEW.source IS NOT NULL AND NEW.role != 'agency' THEN
        RAISE EXCEPTION 'Source can only be set for users with role = agency';
    END IF;
    
    -- If role is agency, source should be set (warning only, not enforced)
    -- This is a soft constraint - we'll handle it in application logic
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS validate_agency_source_trigger ON users;
CREATE TRIGGER validate_agency_source_trigger
    BEFORE INSERT OR UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION validate_agency_source();

-- Example: Update existing agency users (if any) - adjust source values as needed
-- UPDATE users 
-- SET source = 'Talent Solution' 
-- WHERE role = 'agency' AND email LIKE '%talent%';

-- Verify the column was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'users' 
AND column_name = 'source';
