-- Add email column if it doesn't exist
ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT;

-- Add managers with emails and allowed positions
INSERT INTO users (id, role, department, allowed_positions, email) VALUES
-- HR Managers
('00000000-0000-0000-0000-000000000101', 'Manager', 'HR', ARRAY['Recruiter', 'HR Generalist', 'Senior HR Generalist', 'HR Manager']::text[], 'hr.manager@company.com'),
('00000000-0000-0000-0000-000000000102', 'Manager', 'HR', ARRAY['Recruiter', 'HR Generalist']::text[], 'hr.recruiter@company.com'),

-- IT Managers  
('00000000-0000-0000-0000-000000000201', 'Manager', 'IT', ARRAY['Software Developer', 'Senior Software Developer', 'IT Analyst / Administrator', 'Senior IT Specialist']::text[], 'it.manager@company.com'),
('00000000-0000-0000-0000-000000000202', 'Manager', 'IT', ARRAY['Software Developer', 'Senior Software Developer']::text[], 'it.dev.manager@company.com'),

-- Production Managers
('00000000-0000-0000-0000-000000000301', 'Manager', 'Production', ARRAY['Production Manager', 'Production Supervisor', 'Quality Manager', 'Maintenance Manager']::text[], 'production.manager@company.com'),
('00000000-0000-0000-0000-000000000302', 'Manager', 'Production', ARRAY['Production Manager', 'Quality Manager']::text[], 'quality.manager@company.com'),

-- Finance Managers
('00000000-0000-0000-0000-000000000401', 'Manager', 'Finance', ARRAY['Financial Manager', 'Business Sales & Cost Analyst', 'Business Administration']::text[], 'finance.manager@company.com'),

-- Logistics Managers
('00000000-0000-0000-0000-000000000501', 'Manager', 'Logistics', ARRAY['Logistics Manager', 'Purchasing Manager']::text[], 'logistics.manager@company.com'),

-- Business Managers
('00000000-0000-0000-0000-000000000601', 'Manager', 'Business', ARRAY['Business Manager', 'Program Manager', 'Assistant Buyer', 'Buyer', 'Supplier Quality Assurance Engineer']::text[], 'business.manager@company.com'),

-- Update existing GM with email
UPDATE users 
SET email = 'gm@company.com' 
WHERE role = 'gm' AND email IS NULL;

-- Show all users with emails
SELECT role, department, email, allowed_positions 
FROM users 
WHERE email IS NOT NULL 
ORDER BY role, department;

