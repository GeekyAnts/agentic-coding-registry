## Stack: Angular

> Starter — scaffold the full app with `ng new` (see the setup notes). Then it
> can be containerized like the other web stacks (build → static, serve via nginx).

- **Language:** TypeScript. **Framework:** Angular 22 (standalone components,
  signals). **Package manager:** pnpm.
- **Structure:** components/services under `src/app/`; standalone components with
  `inject()`; route config in `app.routes.ts`; feature folders as it grows.
- **Conventions:** standalone components (no NgModules in new code); signals for
  reactive state; typed reactive forms; keep components focused, logic in services.
- **Commands:**
  ```
  pnpm start     # ng serve (dev)
  pnpm build     # ng build (production)
  pnpm test      # ng test
  ```
