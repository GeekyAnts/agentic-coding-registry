## Database: Neon (serverless Postgres)

- Managed **serverless PostgreSQL** with branching + scale-to-zero — a strong fit
  for Next.js/React apps and per-PR preview environments.
- Configure via env `DATABASE_URL` (the connection string from the Neon console);
  never commit it. Use the **pooled** URL for serverless/edge and the **direct**
  URL for migrations.
- Standard Postgres — works with any client/ORM (Prisma, Drizzle). For edge /
  serverless runtimes use Neon's driver (`@neondatabase/serverless`).
- Being Postgres, it also supports the `pgvector` extension for RAG.
