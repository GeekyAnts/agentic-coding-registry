# Hono (Node) — Setup Notes

```
pnpm install
pnpm dev        # tsx watch on http://localhost:8787
pnpm build && pnpm start
```

- App entry: `src/index.ts` (`new Hono()` + `@hono/node-server`).
- Add validation: `pnpm add @hono/zod-validator zod`.
- Multi-runtime: the same `app` runs on Bun/Deno/Cloudflare Workers — swap the
  runtime entry (drop `@hono/node-server`; use the platform's `app.fetch`).
