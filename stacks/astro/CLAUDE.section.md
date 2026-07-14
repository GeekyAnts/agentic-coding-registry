## Stack: Astro

- **Framework:** Astro (content-first, islands architecture) + TypeScript.
  **Output:** static by default. **Package manager:** pnpm.
- **Structure:** file-based routing in `src/pages/` (`.astro`, `.md`/`.mdx`);
  reusable pieces in `src/components/`, layouts in `src/layouts/`, static assets
  in `public/`.
- **Conventions:** ship zero JS by default; add interactivity with framework
  islands (`client:load`, `client:visible`); component script runs at build time.
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # static build -> dist/
  pnpm preview   # preview the build
  pnpm check     # astro check (types)
  ```
- **SSR:** for server rendering, add an adapter (`@astrojs/node`,
  `@astrojs/vercel`, `@astrojs/cloudflare`) and set `output: "server"`.
