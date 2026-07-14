## ORM: Prisma

- Type-safe data layer via [Prisma](https://www.prisma.io) 7 (schema-first,
  driver adapters).
- **Schema:** `prisma/schema.prisma` — models + the `postgresql` datasource
  (provider only; in Prisma 7 the connection URL lives in `prisma.config.ts`).
  The typed client generates to `src/generated/prisma` (git-ignore it).
- **Connection:** `prisma.config.ts` sets the URL for Migrate; the client uses
  the **`@prisma/adapter-pg`** driver adapter — `src/db.ts` exports `prisma`
  (`new PrismaClient({ adapter })`). Import it where you query.
- **Workflow:**
  ```
  pnpm db:generate    # generate the typed client (after schema edits)
  pnpm db:migrate     # create + apply a dev migration
  pnpm db:studio      # browse data
  ```
- Set `DATABASE_URL` (see `.env.example`); never commit real credentials. Add
  `/src/generated` to `.gitignore`.
