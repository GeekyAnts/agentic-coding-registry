## Database: Valkey (Redis-compatible)

- In-memory store for caching, queues, sessions, and rate-limiting — the
  fully-open **BSD-3** Linux Foundation fork of Redis (drop-in compatible,
  created after Redis's 2024 SSPL relicense).
- Local instance: the `valkey` service in docker-compose (`valkey/valkey`), on
  `localhost:6379`; append-only persistence to `./.data/valkey`.
- Connect via `REDIS_URL` (e.g. `redis://localhost:6379`) with any Redis client
  (ioredis, node-redis, redis-py) — the protocol is identical.
- Never commit credentials; use `requirepass` / ACLs + TLS in production.
