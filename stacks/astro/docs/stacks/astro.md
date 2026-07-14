# Astro — Setup Notes

## Getting started
```
pnpm create astro@latest .
pnpm install
pnpm dev
```

## This starter
- Static output → `pnpm build` emits `dist/` (served by the nginx Dockerfile).
- Pages in `src/pages/`; add UI-framework islands (React/Vue/Svelte) via
  `pnpm astro add <framework>`.
- For SSR, add an adapter (`@astrojs/node` / `@astrojs/vercel` /
  `@astrojs/cloudflare`) and set `output: "server"` in `astro.config.mjs`.
