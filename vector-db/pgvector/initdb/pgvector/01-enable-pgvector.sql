-- Enable the pgvector extension the first time the database is initialised.
-- Runs automatically via the Postgres docker-entrypoint-initdb.d hook.
CREATE EXTENSION IF NOT EXISTS vector;
