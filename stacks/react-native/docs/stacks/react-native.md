# React Native — Setup Notes

Starter guidance for the React Native stack. Flesh out as the project grows.

Built on **Expo** (the de-facto RN toolchain) — currently **SDK 57**
(React Native 0.86, React 19). Run `npx expo install <pkg>` to add
Expo-compatible native modules (it pins SDK-matching versions).

## Getting started
```
pnpm create expo-app .
pnpm start
```

## Recommended additions
- **Expo Router** (file-based navigation — the current default) or React Navigation
- A state library (Zustand / Redux Toolkit)
- EAS Build/Submit for CI builds; Maestro for e2e testing
