-- Recreate handle_new_user without subscription insert
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$function$;

-- Drop the now-unused helper function
DROP FUNCTION IF EXISTS public.has_active_subscription(uuid, text);

-- Drop the subscriptions table
DROP TABLE IF EXISTS public.subscriptions CASCADE;