# Tauri (desktop) — Setup Notes

Tauri wraps a web frontend in a Rust-powered native shell.

```
# pair with a frontend stack, or scaffold a fresh app:
pnpm create tauri-app
pnpm tauri dev
```

- Rust core in `src-tauri/`; the frontend builds to `dist/` (see `tauri.conf.json`).
- Prerequisites: Rust + platform webview/build deps — https://tauri.app/start/prerequisites/
- Generate real app icons: `pnpm tauri icon path/to/icon.png`.
