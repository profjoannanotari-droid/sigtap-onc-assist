REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM public, anon, authenticated;
REVOKE ALL ON FUNCTION public.cpf_is_authorized(text) FROM public, anon, authenticated;
REVOKE ALL ON FUNCTION public.user_has_paid_access(uuid) FROM public, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM public, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;
GRANT EXECUTE ON FUNCTION public.cpf_is_authorized(text) TO service_role;
GRANT EXECUTE ON FUNCTION public.user_has_paid_access(uuid) TO service_role;