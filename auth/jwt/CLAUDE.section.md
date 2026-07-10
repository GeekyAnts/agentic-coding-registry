## Auth: JWT

- Stateless auth using signed JSON Web Tokens (HS256/RS256).
- Store the signing secret in `JWT_SECRET` (env); never commit it.
- Issue a token on login; verify it on each request via middleware/guard.
- Keep access tokens short-lived; use refresh tokens for renewal.
