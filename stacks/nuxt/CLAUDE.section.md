## Stack: Nuxt

- **Framework:** Nuxt 4 (Vue 3 meta-framework) + TypeScript. **Rendering:** SSR by
  default (Nitro server). **Package manager:** pnpm.
- **Structure (Nuxt 4, `app/` srcDir):** pages in `app/pages/`, components in
  `app/components/`, composables in `app/composables/`, layouts in `app/layouts/`;
  server routes in `server/api/`; shared utilities in `shared/`.
- **Conventions:** auto-imports (components/composables) — don't import them
  manually; fetch with `useFetch`/`useAsyncData`; keep secrets server-side
  (`useRuntimeConfig().<server>`), only `public` runtime config reaches the client.
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # production build -> .output (Nitro)
  pnpm preview   # preview the build
  pnpm generate  # static site (SSG)
  ```
