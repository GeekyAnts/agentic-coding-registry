## Database: Supabase (Postgres + Auth + Storage)

- Managed **PostgreSQL** plus integrated **Auth**, **Storage**, realtime, and
  edge functions — one platform, accessed via `@supabase/supabase-js`.
- **Config (env):** `SUPABASE_URL` + `SUPABASE_ANON_KEY` (client) and
  `SUPABASE_SERVICE_ROLE_KEY` (**server-only** — never ship to the client).
  Direct Postgres via `DATABASE_URL` for migrations / ORMs. Never commit keys.
- **Database:** standard Postgres — use `supabase-js` or any ORM (Prisma/Drizzle)
  on `DATABASE_URL`; supports **pgvector** for RAG. Enable **Row Level Security**
  and write a policy for every table.
- **Auth:** email/password, OAuth, magic links via `supabase.auth`.
- **Storage:** S3-compatible buckets via `supabase.storage`.
- **Local dev:** run the full stack with the Supabase CLI (`supabase start`).
