# Prisma — Setup Notes

```
cp .env.example .env         # set DATABASE_URL
pnpm install
pnpm db:generate             # generate the typed client
pnpm db:migrate              # create + apply the first migration
```

- **Prisma 7:** the connection URL lives in `prisma.config.ts`; the client uses
  the `@prisma/adapter-pg` driver adapter (`src/db.ts`).
- Schema: `prisma/schema.prisma`. The generated client lands in
  `src/generated/prisma` — add `/src/generated` to `.gitignore`.
- Docs: https://www.prisma.io/docs
