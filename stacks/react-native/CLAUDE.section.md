## Stack: React Native

- **Language:** TypeScript. **Tooling:** Expo (or bare RN CLI). **PM:** pnpm.
- **Structure:** screens in `src/screens/`, reusable UI in `src/components/`,
  navigation in `src/navigation/`, native modules isolated behind interfaces.
- **Conventions:** function components + hooks; keep platform-specific code in
  `*.ios.tsx` / `*.android.tsx`; avoid inline styles for shared components.
- **Commands:**
  ```
  pnpm start     # Metro bundler
  pnpm ios       # run on iOS simulator
  pnpm android   # run on Android emulator
  pnpm test      # run tests
  ```
