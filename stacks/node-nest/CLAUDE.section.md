## Stack: Node.js + NestJS

- **Language:** TypeScript. **Framework:** NestJS. **Package manager:** pnpm.
- **Structure:** feature modules under `src/<feature>/` (controller, service,
  module, DTOs); shared code in `src/common/`; config in `src/config/`.
- **Conventions:** one module per feature; validate input with DTOs +
  `class-validator`; keep controllers thin and business logic in services.
- **Commands:**
  ```
  pnpm start:dev   # watch mode
  pnpm build       # compile
  pnpm test        # unit tests
  pnpm test:e2e    # e2e tests
  ```
