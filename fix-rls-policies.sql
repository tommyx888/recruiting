-- SQL script to fix RLS policies for GM and Recruiter roles
-- Run this in Supabase SQL Editor

-- First, let's see current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('candidates', 'recruiting_requests', 'users')
ORDER BY tablename, policyname;

-- Drop all existing policies for these tables
DROP POLICY IF EXISTS "Users can view their own data" ON candidates;
DROP POLICY IF EXISTS "Users can insert their own data" ON candidates;
DROP POLICY IF EXISTS "Users can update their own data" ON candidates;
DROP POLICY IF EXISTS "Users can view their own data" ON recruiting_requests;
DROP POLICY IF EXISTS "Users can insert their own data" ON recruiting_requests;
DROP POLICY IF EXISTS "Users can update their own data" ON recruiting_requests;
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Users can insert their own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;

-- Drop any other existing policies
DROP POLICY IF EXISTS "Managers can view candidates" ON candidates;
DROP POLICY IF EXISTS "Managers can insert candidates" ON candidates;
DROP POLICY IF EXISTS "Managers can update candidates" ON candidates;
DROP POLICY IF EXISTS "Managers can view requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Managers can insert requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Managers can update requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Managers can view users" ON users;
DROP POLICY IF EXISTS "GMs can view all candidates" ON candidates;
DROP POLICY IF EXISTS "GMs can insert candidates" ON candidates;
DROP POLICY IF EXISTS "GMs can update candidates" ON candidates;
DROP POLICY IF EXISTS "GMs can view all requests" ON recruiting_requests;
DROP POLICY IF EXISTS "GMs can insert requests" ON recruiting_requests;
DROP POLICY IF EXISTS "GMs can update requests" ON recruiting_requests;
DROP POLICY IF EXISTS "GMs can view users" ON users;
DROP POLICY IF EXISTS "Recruiters can view all candidates" ON candidates;
DROP POLICY IF EXISTS "Recruiters can insert candidates" ON candidates;
DROP POLICY IF EXISTS "Recruiters can update candidates" ON candidates;
DROP POLICY IF EXISTS "Recruiters can view all requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Recruiters can insert requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Recruiters can update requests" ON recruiting_requests;
DROP POLICY IF EXISTS "Recruiters can view users" ON users;

-- Create new comprehensive policies for GM and Recruiter roles
-- Candidates table policies
CREATE POLICY "GM_Recruiter_candidates_select" ON candidates
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_candidates_insert" ON candidates
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_candidates_update" ON candidates
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_candidates_delete" ON candidates
    FOR DELETE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

-- Recruiting requests table policies
CREATE POLICY "GM_Recruiter_requests_select" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_requests_insert" ON recruiting_requests
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_requests_update" ON recruiting_requests
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_requests_delete" ON recruiting_requests
    FOR DELETE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

-- Users table policies
CREATE POLICY "GM_Recruiter_users_select" ON users
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users u
            WHERE u.id = auth.uid() 
            AND u.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_users_insert" ON users
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

CREATE POLICY "GM_Recruiter_users_update" ON users
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role IN ('gm', 'recruiter')
        )
    );

-- Also add policies for Manager role to maintain existing functionality
CREATE POLICY "Manager_candidates_select" ON candidates
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

CREATE POLICY "Manager_candidates_insert" ON candidates
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

CREATE POLICY "Manager_candidates_update" ON candidates
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

CREATE POLICY "Manager_requests_select" ON recruiting_requests
    FOR SELECT USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

CREATE POLICY "Manager_requests_insert" ON recruiting_requests
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

CREATE POLICY "Manager_requests_update" ON recruiting_requests
    FOR UPDATE USING (
        auth.role() = 'authenticated' AND 
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'Manager'
        )
    );

-- Verify policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('candidates', 'recruiting_requests', 'users')
ORDER BY tablename, policyname;

