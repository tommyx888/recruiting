-- Optional flag: the requested position is a temporary substitute (zástup)
ALTER TABLE recruiting_requests
ADD COLUMN IF NOT EXISTS is_substitute BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN recruiting_requests.is_substitute IS 'Voliteľné: pozícia je na zástup (dočasné zastúpenie).';
