# Auth.js (NextAuth) — Setup Notes

```
pnpm add next-auth@beta        # Auth.js v5 (Next.js)
```

- Config in `auth.ts` (providers + optional adapter); handler at
  `app/api/auth/[...nextauth]/route.ts`.
- Env: `AUTH_SECRET` + provider credentials; protect routes with the `auth()` helper.
- Docs: https://authjs.dev
