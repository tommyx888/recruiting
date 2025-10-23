-- Quick add managers for testing
-- Run this in Supabase Dashboard → SQL Editor

-- Add email column if it doesn't exist
ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT;

-- Add a few test managers
INSERT INTO users (id, role, department, allowed_positions, email) VALUES
('11111111-1111-1111-1111-111111111111', 'Manager', 'HR', ARRAY['Recruiter', 'HR Generalist']::text[], 'test.hr.manager@company.com'),
('22222222-2222-2222-2222-222222222222', 'Manager', 'IT', ARRAY['Software Developer', 'Recruiter']::text[], 'test.it.manager@company.com'),
('33333333-3333-3333-3333-333333333333', 'Manager', 'Production', ARRAY['Recruiter', 'Production Manager']::text[], 'test.production.manager@company.com')
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  allowed_positions = EXCLUDED.allowed_positions;

-- Update GM email
UPDATE users 
SET email = 'gm@company.com' 
WHERE role = 'gm';

-- Check results
SELECT role, department, email, allowed_positions 
FROM users 
WHERE email IS NOT NULL;

