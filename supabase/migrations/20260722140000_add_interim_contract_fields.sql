-- Interim contract details: duration (months) and max daily budget (EUR / manday)
ALTER TABLE public.recruiting_requests
    ADD COLUMN IF NOT EXISTS interim_duration_months INTEGER,
    ADD COLUMN IF NOT EXISTS interim_max_daily_budget NUMERIC(12, 2);

COMMENT ON COLUMN public.recruiting_requests.interim_duration_months IS 'Plánované časové obdobie interim zmluvy v mesiacoch.';
COMMENT ON COLUMN public.recruiting_requests.interim_max_daily_budget IS 'Maximálny denný budget v EUR (manday) pre interim zmluvu.';
