# Security

## Environment Variables
- Never expose API keys, SMTP credentials, or database strings to the frontend.
- Use `NEXT_PUBLIC_` only for safe, public values (e.g. `NEXT_PUBLIC_SITE_URL`).
- Keep `DATABASE_URL`, `EMAIL_API_KEY` private.
- Create `.env.example` and never commit `.env.local`.
