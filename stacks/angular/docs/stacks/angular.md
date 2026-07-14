# Angular — Setup Notes

Starter guidance. Scaffold the full app with the Angular CLI:

```
pnpm dlx @angular/cli@latest new my-app --directory . --style css --ssr false
pnpm start
```

## Recommended additions
- Angular Router + typed reactive forms
- State: built-in signals (or NgRx SignalStore for larger apps)
- Testing: Vitest / Karma + Playwright
- Containerize like the `react` stack (build → static, serve via nginx)
