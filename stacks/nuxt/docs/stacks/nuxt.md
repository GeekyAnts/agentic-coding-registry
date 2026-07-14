# Nuxt — Setup Notes

```
pnpm install
pnpm dev                 # http://localhost:3000
pnpm build && node .output/server/index.mjs
```

- Nuxt 4 `app/` srcDir: pages `app/pages/`, components `app/components/`,
  server routes `server/api/`.
- `pnpm build` → `.output/` (self-contained Nitro server). `pnpm generate` for SSG.
- Deploy: any Node host, or a Nitro preset (`nuxt build --preset vercel/cloudflare/…`).
