## Stack: SvelteKit

- **Framework:** SvelteKit + Svelte 5 + TypeScript. **Build/dev:** Vite.
  **Adapter:** `@sveltejs/adapter-node` (runs as a Node server). **PM:** pnpm.
- **Structure:** file-based routing in `src/routes/` — `+page.svelte` (UI),
  `+page.server.ts` / `+page.ts` (`load`), `+layout.svelte`, `+server.ts`
  (endpoints). Shared code in `src/lib/` (import via `$lib`).
- **Conventions:** Svelte 5 runes (`$state`, `$props`, …); fetch data in `load`
  functions; keep secrets server-side (`$env/dynamic/private`, never `PUBLIC_*`).
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # production build (adapter-node -> build/)
  pnpm preview   # preview the build
  pnpm check     # svelte-check (types)
  node build     # run the production server (PORT env)
  ```
