## Auth: Better Auth

- Framework-agnostic, self-hosted TypeScript auth (email/password, social,
  sessions, 2FA, organizations) via [Better Auth](https://www.better-auth.com).
- Install `better-auth`; create the server instance in `lib/auth.ts` with
  `betterAuth({ database, emailAndPassword: { enabled: true } })` and mount its
  handler on a catch-all route (e.g. `app/api/auth/[...all]/route.ts`).
- Config via env: `BETTER_AUTH_SECRET` (signing secret) and `BETTER_AUTH_URL`
  (base URL) — never commit the secret.
- Use the matching client (`better-auth/client` / `better-auth/react`) for
  sign-in/up and session hooks; protect routes by checking the session.
- Point its database adapter at your app's DB (e.g. the Postgres service) and
  run Better Auth's schema generate/migrate step.
