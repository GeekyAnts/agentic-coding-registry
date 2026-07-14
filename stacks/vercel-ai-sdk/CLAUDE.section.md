## Stack: Vercel AI SDK (Next.js chat)

A Next.js App-Router chat app on the [Vercel AI SDK](https://ai-sdk.dev) v5,
streaming responses from Claude via `@ai-sdk/anthropic`.

- **Server:** `app/api/chat/route.ts` — a route handler that calls
  `streamText({ model: anthropic("claude-sonnet-5"), messages:
  convertToModelMessages(messages) })` and returns
  `result.toUIMessageStreamResponse()`.
- **Client:** `app/page.tsx` (`"use client"`) uses `useChat()` from
  `@ai-sdk/react`; render each `message.parts` (text parts) and send with
  `sendMessage({ text })`, keeping the input in local state.
- **Model:** defaults to Claude Sonnet (`claude-sonnet-5`). To use another
  provider, swap the import + model id (e.g. `@ai-sdk/openai`).
- **Config:** set `ANTHROPIC_API_KEY` (see `.env.example`); it is read
  server-side only — never expose it to the client bundle.
- **Pinned to AI SDK v5** — `ai@^5`, `@ai-sdk/react@^2`, `@ai-sdk/anthropic@^2`.
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # production build
  pnpm start     # serve the build
  ```
