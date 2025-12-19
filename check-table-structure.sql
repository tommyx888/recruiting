-- Skontrolujte štruktúru tabuľky recruiting_requests
-- Spustite tento príkaz v Supabase SQL Editor, aby ste videli všetky stĺpce

SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'recruiting_requests'
ORDER BY ordinal_position;

