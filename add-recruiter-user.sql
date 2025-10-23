-- SQL script to add a Recruiter user with GM-level permissions
-- Run this in Supabase SQL Editor

-- First, check if the user exists in auth.users
-- You need to create the user in Supabase Auth first, then get their auth user ID

-- Example: Add a Recruiter user (replace with actual auth_user_id from Supabase Auth)
INSERT INTO users (
    auth_user_id,
    role,
    department,
    allowed_positions,
    email
) VALUES (
    'YOUR_AUTH_USER_ID_HERE', -- Replace with actual auth user ID
    'recruiter',
    'HR',
    ARRAY['Recruiter', 'HR Manager', 'Senior HR Generalist', 'HR Generalist 1', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    'recruiter@company.com'
) ON CONFLICT (auth_user_id) DO UPDATE SET
    role = 'recruiter',
    department = 'HR',
    allowed_positions = ARRAY['Recruiter', 'HR Manager', 'Senior HR Generalist', 'HR Generalist 1', 'Training Center Trainer', 'HSE Specialist', 'Environment Officer', 'Executive assistant'],
    email = 'recruiter@company.com';

-- Check if the user was added correctly
SELECT * FROM users WHERE role = 'recruiter';

