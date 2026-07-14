## ORM: Drizzle

- SQL-first, edge-friendly TypeScript ORM via [Drizzle](https://orm.drizzle.team)
  (schema-in-TS, thin runtime).
- **Schema:** `src/db/schema.ts` — tables defined with `pgTable(...)`. **Client:**
  `src/db/index.ts` exports `db` (`drizzle(postgres(DATABASE_URL), { schema })`).
- **Config:** `drizzle.config.ts` (schema path, `postgresql` dialect, migrations
  in `./drizzle`).
- **Workflow:**
  ```
  pnpm db:generate    # generate SQL migrations from the schema
  pnpm db:migrate     # apply migrations
  pnpm db:studio      # browse data
  ```
- Query with `db.select().from(example)`, `db.insert(example).values(...)`, etc.
  Set `DATABASE_URL` (see `.env.example`); never commit real credentials.
