# SvelteKit — Setup Notes

## Getting started
```
pnpm dlx sv create .      # official scaffolder
pnpm install
pnpm dev
```

## This starter
- Node adapter (`@sveltejs/adapter-node`) → `pnpm build` emits `build/`; run with `node build`.
- Routing in `src/routes/`; shared code in `src/lib` (`$lib`).
- Swap the adapter (`adapter-vercel`, `adapter-cloudflare`, `adapter-static`)
  in `svelte.config.js` for other deploy targets.
