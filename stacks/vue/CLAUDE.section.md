## Stack: Vue + Vite

- **Language:** TypeScript. **Framework:** Vue 3 (`<script setup>` SFCs).
  **Build/dev:** Vite. **Package manager:** pnpm.
- **Structure:** components in `src/components/`, views/pages in `src/views/`,
  composables in `src/composables/`, utilities in `src/lib/`.
- **Conventions:** `<script setup lang="ts">` SFCs; type props with
  `defineProps<…>()` and events with `defineEmits<…>()`; Composition API only;
  keep components small.
- **Commands:**
  ```
  pnpm dev       # start Vite dev server
  pnpm build     # type-check (vue-tsc) + production build
  pnpm preview   # preview the build
  ```
