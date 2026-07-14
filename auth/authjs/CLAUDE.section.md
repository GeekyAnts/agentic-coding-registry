## Auth: Auth.js (NextAuth)

- Authentication for Next.js (and other JS frameworks) via
  [Auth.js](https://authjs.dev) (formerly NextAuth) — OAuth/social, email,
  credentials, sessions.
- Install `next-auth@beta` (Auth.js v5) for Next.js; configure providers in
  `auth.ts` and export `handlers`, `auth`, `signIn`, `signOut`.
- Mount the route handler at `app/api/auth/[...nextauth]/route.ts`; protect
  routes/pages with the `auth()` helper (or middleware).
- Config via env: `AUTH_SECRET` + per-provider id/secret (e.g. `AUTH_GITHUB_ID`
  / `AUTH_GITHUB_SECRET`); never commit them. Use a database adapter
  (Prisma/Drizzle) for a persistent session/user store.
