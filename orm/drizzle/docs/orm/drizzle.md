# Drizzle — Setup Notes

```
cp .env.example .env         # set DATABASE_URL
pnpm install
pnpm db:generate             # generate SQL migrations from the schema
pnpm db:migrate              # apply them
```

- Schema: `src/db/schema.ts`. Client: `src/db/index.ts` (`import { db }`).
- Config: `drizzle.config.ts`. Docs: https://orm.drizzle.team
