## Stack: React + Vite

- **Language:** TypeScript. **Build/dev:** Vite. **Package manager:** pnpm.
- **Structure:** components in `src/components/`, routes/pages in `src/pages/`,
  shared hooks in `src/hooks/`, utilities in `src/lib/`.
- **Conventions:** function components + hooks only; colocate component styles
  and tests; prefer typed props/interfaces over `any`.
- **Commands:**
  ```
  pnpm dev       # start Vite dev server
  pnpm build     # production build
  pnpm test      # run tests
  pnpm lint      # lint
  ```
