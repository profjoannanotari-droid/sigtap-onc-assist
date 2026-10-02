CREATE TABLE public.sigtap_bases (
  competencia text PRIMARY KEY,
  arquivo text NOT NULL,
  total_procedimentos integer NOT NULL,
  procedimentos jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.sigtap_bases TO anon, authenticated;
GRANT ALL ON public.sigtap_bases TO service_role;
ALTER TABLE public.sigtap_bases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura publica das bases" ON public.sigtap_bases FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.sigtap_sincronizacao (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  status text NOT NULL CHECK (status IN ('sucesso','sem_novidade','falha','executando')),
  competencia text,
  mensagem text NOT NULL,
  detalhes jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.sigtap_sincronizacao TO anon, authenticated;
GRANT ALL ON public.sigtap_sincronizacao TO service_role;
ALTER TABLE public.sigtap_sincronizacao ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura publica do historico" ON public.sigtap_sincronizacao FOR SELECT TO anon, authenticated USING (true);
CREATE INDEX ON public.sigtap_sincronizacao (created_at DESC);