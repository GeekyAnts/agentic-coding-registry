## Stack: Svelte + Vite

- **Language:** TypeScript. **Framework:** Svelte 5 (runes). **Build/dev:** Vite.
  **Package manager:** pnpm.
- **Structure:** components in `src/lib/`, entry `src/main.ts` + `src/App.svelte`.
- **Conventions:** Svelte 5 runes — `$state`, `$derived`, `$effect`, `$props`;
  mount with `mount(App, { target })` (not `new App()`); keep components small.
- **Commands:**
  ```
  pnpm dev       # start Vite dev server
  pnpm build     # svelte-check (types) + production build
  pnpm preview   # preview the build
  ```
