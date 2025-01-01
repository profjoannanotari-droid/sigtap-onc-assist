
-- 1. Add CPF column to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS cpf TEXT UNIQUE;

-- 2. Create authorized_cpfs table
CREATE TABLE IF NOT EXISTS public.authorized_cpfs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cpf TEXT NOT NULL UNIQUE,
  nome TEXT,
  paid_until DATE NOT NULL,
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.authorized_cpfs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins manage authorized_cpfs" ON public.authorized_cpfs;
CREATE POLICY "Admins manage authorized_cpfs"
ON public.authorized_cpfs FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_authorized_cpfs_updated_at
  BEFORE UPDATE ON public.authorized_cpfs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Function: check if a CPF (digits only) is currently authorized
CREATE OR REPLACE FUNCTION public.cpf_is_authorized(_cpf TEXT)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.authorized_cpfs
    WHERE cpf = regexp_replace(COALESCE(_cpf, ''), '\D', '', 'g')
      AND paid_until >= CURRENT_DATE
  )
$$;

-- 4. Function: current user has paid access via CPF
CREATE OR REPLACE FUNCTION public.user_has_paid_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    JOIN public.authorized_cpfs ac ON ac.cpf = p.cpf
    WHERE p.user_id = _user_id
      AND ac.paid_until >= CURRENT_DATE
  )
$$;

-- 5. Update handle_new_user trigger to auto-grant admin role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (user_id) DO NOTHING;

  IF lower(NEW.email) = 'consultoriaemsaudejn@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 6. Allow admins to manage user_roles (insert/update/delete)
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
