-- Add last_reminder_sent column to recruiting_requests table
ALTER TABLE recruiting_requests 
ADD COLUMN IF NOT EXISTS last_reminder_sent TIMESTAMPTZ;

-- Add created_at column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'recruiting_requests' 
        AND column_name = 'created_at'
    ) THEN
        ALTER TABLE recruiting_requests 
        ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        
        -- Update existing records
        UPDATE recruiting_requests 
        SET created_at = NOW() 
        WHERE created_at IS NULL;
    END IF;
END $$;

-- Create index for better query performance
-- Note: If your date column has a different name, adjust 'created_at' accordingly
CREATE INDEX IF NOT EXISTS idx_recruiting_requests_status_created 
ON recruiting_requests(status, created_at) 
WHERE status = 'Pending';

CREATE INDEX IF NOT EXISTS idx_recruiting_requests_last_reminder 
ON recruiting_requests(last_reminder_sent) 
WHERE status = 'Pending';

-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule daily check for pending requests (runs every day at 9:00 AM)
-- Note: This requires superuser privileges. Run this in Supabase SQL Editor with proper permissions.
SELECT cron.schedule(
    'check-pending-requests-daily',
    '0 9 * * *', -- Every day at 9:00 AM UTC
    $$
    SELECT
        net.http_post(
            url := current_setting('app.settings.supabase_url') || '/functions/v1/check-pending-requests',
            headers := jsonb_build_object(
                'Content-Type', 'application/json',
                'Authorization', 'Bearer ' || current_setting('app.settings.supabase_service_role_key')
            ),
            body := '{}'::jsonb
        ) AS request_id;
    $$
);

-- Alternative: If the above doesn't work, you can use this simpler version
-- that calls the edge function directly via HTTP
-- Note: Replace YOUR_PROJECT_REF with your actual Supabase project reference
-- SELECT cron.schedule(
--     'check-pending-requests-daily',
--     '0 9 * * *',
--     $$
--     SELECT
--         net.http_post(
--             url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/check-pending-requests',
--             headers := jsonb_build_object(
--                 'Content-Type', 'application/json',
--                 'Authorization', 'Bearer YOUR_SERVICE_ROLE_KEY'
--             ),
--             body := '{}'::jsonb
--         ) AS request_id;
--     $$
-- );


