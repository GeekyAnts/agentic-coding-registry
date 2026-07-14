## Vector store: pgvector

pgvector adds vector similarity search to PostgreSQL — the lowest-friction RAG
store for teams already on Postgres (no separate service to run).

- Local instance: the `pgvector` service in docker-compose (image
  `pgvector/pgvector`), exposed on host port **5433** so it can run alongside a
  primary `postgres` service. It is a full Postgres, so it can also double as the
  primary database if you don't run a separate one.
- Connect via `VECTOR_DATABASE_URL`
  (e.g. `postgres://app:app@localhost:5433/app`).
- The `vector` extension is enabled automatically on first boot
  (`initdb/pgvector/01-enable-pgvector.sql`). To enable it manually:
  `CREATE EXTENSION IF NOT EXISTS vector;`
- Store embeddings in a `vector(<dim>)` column and add an **HNSW** index for fast
  approximate nearest-neighbour search:
  `CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops);`
- Keep the embedding dimension in sync with your model (e.g. 1536 for many
  OpenAI models, 1024 / 768 for common open models); never commit real
  credentials.
