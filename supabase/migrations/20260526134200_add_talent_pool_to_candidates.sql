ALTER TABLE public.candidates
ADD COLUMN IF NOT EXISTS in_talent_pool BOOLEAN NOT NULL DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS talent_pool_target_type TEXT,
ADD COLUMN IF NOT EXISTS talent_pool_target_value TEXT,
ADD COLUMN IF NOT EXISTS talent_pool_added_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS talent_pool_added_by UUID REFERENCES auth.users(id);

ALTER TABLE public.candidates
DROP CONSTRAINT IF EXISTS candidates_talent_pool_target_type_check;

ALTER TABLE public.candidates
ADD CONSTRAINT candidates_talent_pool_target_type_check
CHECK (
  talent_pool_target_type IS NULL
  OR talent_pool_target_type IN ('department', 'position')
);

CREATE INDEX IF NOT EXISTS idx_candidates_talent_pool
ON public.candidates (in_talent_pool, talent_pool_target_type, talent_pool_target_value);
