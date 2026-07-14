## Stack: Tauri (desktop)

- **Desktop shell:** [Tauri 2](https://tauri.app) — a Rust core (`src-tauri/`)
  wrapping a **web frontend** into a small, fast native app. Frontend-agnostic:
  pair it with the `react` / `vue` / `svelte` stack (or scaffold via
  `create-tauri-app`).
- **Structure:** `src-tauri/` = the Rust app (`src/lib.rs` builder, `Cargo.toml`,
  `tauri.conf.json`, `capabilities/`). The frontend builds to `dist/`
  (`build.frontendDist`); dev server URL is `build.devUrl`.
- **Conventions:** expose backend functions as `#[tauri::command]` and call them
  from JS via `@tauri-apps/api`'s `invoke`; grant capabilities explicitly in
  `src-tauri/capabilities/` (least privilege); generate real icons with `tauri icon`.
- **Commands:**
  ```
  pnpm tauri dev        # run the desktop app (dev)
  pnpm tauri build      # build a native bundle
  ```
- **Toolchain:** needs Rust + the platform's webview/build deps
  (https://tauri.app/start/prerequisites/). Full bundles build via the Tauri CLI.
