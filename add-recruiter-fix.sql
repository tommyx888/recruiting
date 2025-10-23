-- SQL script to add Recruiter user with correct structure
-- Run this in Supabase SQL Editor

-- First, let's see the current structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position;

-- Check existing users
SELECT * FROM users LIMIT 5;

-- Add a Recruiter user (you need to create the auth user first)
-- Step 1: Create user in Supabase Auth Dashboard
-- Step 2: Get the auth user ID
-- Step 3: Insert into users table

-- Example insert (replace with actual auth user ID):
INSERT INTO users (
    id,  -- This should match the auth.users.id
    role,
    department,
    allowed_positions,
    email
) VALUES (
    'YOUR_AUTH_USER_ID_HERE', -- Replace with actual auth user ID from auth.users
    'recruiter',
    'HR',
    ARRAY['Recruiter', 'HR Manager', 'Senior HR Generalist', 'HR Generalist 1', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    'recruiter@company.com'
) ON CONFLICT (id) DO UPDATE SET
    role = 'recruiter',
    department = 'HR',
    allowed_positions = ARRAY['Recruiter', 'HR Manager', 'Senior HR Generalist', 'HR Generalist 1', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    email = 'recruiter@company.com';

-- Verify the user was added
SELECT * FROM users WHERE role = 'recruiter';

