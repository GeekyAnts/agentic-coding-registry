# Better Auth — Setup Notes

```
npm install better-auth
```

- **Server:** `lib/auth.ts` → `export const auth = betterAuth({ database, emailAndPassword: { enabled: true } })`.
- **Route:** mount `auth.handler` at a catch-all (e.g. `app/api/auth/[...all]/route.ts` for Next.js).
- **Env:** `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`.
- **Client:** `better-auth/react` (or your framework's client) for sign-in/up + session hooks.
- **Database:** point the adapter at your app's DB and run the schema generate/migrate step.

Docs: https://www.better-auth.com/docs
