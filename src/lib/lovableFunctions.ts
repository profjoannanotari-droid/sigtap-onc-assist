type CloudFunctionOptions = {
  method?: "POST" | "GET";
  body?: unknown;
};

export async function chamarFuncaoCloud<T>(nome: string, options: CloudFunctionOptions = {}): Promise<T> {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

  if (!baseUrl || !publishableKey) {
    throw new Error("Configuração do backend indisponível no navegador.");
  }

  const response = await fetch(`${baseUrl}/functions/v1/${nome}`, {
    method: options.method ?? "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: publishableKey,
      Authorization: `Bearer ${publishableKey}`,
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  let data: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: text };
    }
  }

  if (!response.ok) {
    const message = typeof data === "object" && data && "error" in data
      ? String((data as { error?: unknown }).error)
      : "Falha ao consultar o backend.";
    throw new Error(message);
  }

  return data as T;
}