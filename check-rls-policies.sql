-- SQL script to check and fix RLS policies for Recruiter role
-- Run this in Supabase SQL Editor

-- Check current RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('candidates', 'recruiting_requests', 'users')
ORDER BY tablename, policyname;

-- Check if RLS is enabled on tables
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('candidates', 'recruiting_requests', 'users');

-- Create or update RLS policies for Recruiter role
-- Candidates table policies
DROP POLICY IF EXISTS "Recruiters can view all candidates" ON candidates;
CREATE POLICY "Recruiters can view all candidates" ON candidates
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

DROP POLICY IF EXISTS "Recruiters can insert candidates" ON candidates;
CREATE POLICY "Recruiters can insert candidates" ON candidates
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

DROP POLICY IF EXISTS "Recruiters can update candidates" ON candidates;
CREATE POLICY "Recruiters can update candidates" ON candidates
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

-- Recruiting requests table policies
DROP POLICY IF EXISTS "Recruiters can view all requests" ON recruiting_requests;
CREATE POLICY "Recruiters can view all requests" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

DROP POLICY IF EXISTS "Recruiters can insert requests" ON recruiting_requests;
CREATE POLICY "Recruiters can insert requests" ON recruiting_requests
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

DROP POLICY IF EXISTS "Recruiters can update requests" ON recruiting_requests;
CREATE POLICY "Recruiters can update requests" ON recruiting_requests
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.auth_user_id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

-- Users table policies
DROP POLICY IF EXISTS "Recruiters can view users" ON users;
CREATE POLICY "Recruiters can view users" ON users
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users u
            WHERE u.auth_user_id = auth.uid() 
            AND u.role IN ('gm', 'recruiter')
        )
    );

-- Verify policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('candidates', 'recruiting_requests', 'users')
AND policyname LIKE '%Recruiter%'
ORDER BY tablename, policyname;

