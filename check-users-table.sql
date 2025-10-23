-- SQL script to check users table structure
-- Run this in Supabase SQL Editor

-- Check users table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position;

-- Check if there's a relationship between auth.users and users table
SELECT 
    u.id as users_id,
    u.role,
    u.department,
    u.email,
    au.id as auth_users_id,
    au.email as auth_email
FROM users u
LEFT JOIN auth.users au ON u.id = au.id
LIMIT 10;

-- Check current users
SELECT id, role, department, email, allowed_positions 
FROM users 
ORDER BY role;

