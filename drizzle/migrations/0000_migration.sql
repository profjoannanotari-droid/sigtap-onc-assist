ALTER TABLE public.sigtap_bases
  ADD COLUMN IF NOT EXISTS compatibilidades jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS versao_importador integer NOT NULL DEFAULT 1;

COMMENT ON COLUMN public.sigtap_bases.compatibilidades IS 'Vínculos oficiais entre procedimentos dos subgrupos 0304 e 0605, com categoria, quantidade e vigência.';
COMMENT ON COLUMN public.sigtap_bases.versao_importador IS 'Versão do recorte e do importador; permite reprocessar a mesma competência quando a cobertura é ampliada.';