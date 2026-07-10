## Stack: Next.js

- **Framework:** Next.js (App Router) + React + TypeScript. **PM:** pnpm.
- **Structure:** routes/pages in `app/`, shared UI in `components/`, utilities in
  `lib/`. Server Components by default; add `"use client"` only when needed.
- **Conventions:** data fetching in Server Components / route handlers; keep
  secrets server-side (never in client components or `NEXT_PUBLIC_*` unless public).
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # production build
  pnpm start     # serve the build
  pnpm lint      # lint
  ```
