# sigtap-onc-assist — NotariSIGTAP-QT

Clinical decision support for oncology. Crosses ICD-10 codes (C00–C96, D37–D48) with SIGTAP procedures from subgroup 0304. Features procedure compatibility auditing, TNM staging, precision medicine and biomarker guidance, therapeutic schemes based on PCDT/NCCN/ESMO/ASCO, and PDF/Excel report export.

> **Notice:** This source code was generated with the assistance of AI tools.
> **License:** Proprietary — see [LICENSE](./LICENSE).

**Stack:** React 18, TypeScript, Vite, Supabase, React Router, Tailwind CSS, shadcn/ui, jsPDF, XLSX, Playwright, Vitest

---

## Environment variables

**Before running or deploying**, create a `.env` file at the project root (copy from `.env.example`):

```sh
cp .env.example .env
```

Then fill in each value:

| Variable | Where to find it | Required |
|---|---|---|
| `VITE_SUPABASE_URL` | Supabase dashboard → Project Settings → API → Project URL | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase dashboard → Project Settings → API → anon/public key | Yes |
| `VITE_SUPABASE_PROJECT_ID` | Supabase dashboard → Project Settings → General → Reference ID | Yes |
| `VITE_PAYMENTS_CLIENT_TOKEN` | Stripe dashboard → Developers → API keys → Publishable key | Yes (payments) |

The following are **Supabase Edge Function secrets** — set them via the Supabase dashboard under Edge Functions → Secrets (or with the Supabase CLI), not in `.env`:

| Secret | Description | Required |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key — Project Settings → API | Yes (edge functions) |
| `SUPABASE_ANON_KEY` | Supabase anon key — used by edge functions to validate user JWTs | Yes (edge functions) |
| `LOVABLE_API_KEY` | Lovable AI Gateway key for AI-powered edge functions | Yes (edge functions) |
| `STRIPE_SANDBOX_API_KEY` | Stripe secret key for sandbox/test environment | Yes (payments) |
| `STRIPE_LIVE_API_KEY` | Stripe secret key for live/production environment | Yes (payments, production only) |
| `PAYMENTS_SANDBOX_WEBHOOK_SECRET` | Stripe webhook signing secret for sandbox | Yes (payments) |
| `PAYMENTS_LIVE_WEBHOOK_SECRET` | Stripe webhook signing secret for production | Yes (payments, production only) |

> Never commit `.env` or any file containing real keys to version control.

---

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Tests

```sh
npm run test           # unit tests (Vitest)
npm run test:watch     # watch mode
npx playwright test    # end-to-end tests (Playwright)
```
