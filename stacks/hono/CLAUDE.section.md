## Stack: Hono (Node)

- **Language:** TypeScript. **Framework:** Hono (fast, multi-runtime web
  framework). **Runtime here:** Node via `@hono/node-server`. **PM:** pnpm.
- **Structure:** app entry `src/index.ts` (`new Hono()`); group routes with
  `app.route("/path", subApp)`; middleware via `app.use(...)`; shared code in
  `src/lib/`.
- **Conventions:** return responses with the context helpers (`c.json`,
  `c.text`); validate input with `@hono/zod-validator`; keep handlers small.
  The same `app` runs on Node/Bun/Deno/Cloudflare Workers — keep handlers
  runtime-agnostic.
- **Commands:**
  ```
  pnpm dev       # tsx watch (reload)
  pnpm build     # tsc -> dist/
  pnpm start     # node dist/index.js  (PORT env, default 8787)
  ```
