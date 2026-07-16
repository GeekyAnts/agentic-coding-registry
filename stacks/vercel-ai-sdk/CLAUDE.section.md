## Stack: Vercel AI SDK (Next.js chat)

A Next.js App-Router chat app on the [Vercel AI SDK](https://ai-sdk.dev) v7,
streaming responses from Claude via `@ai-sdk/anthropic`.

- **Server:** `app/api/chat/route.ts` — a route handler that calls
  `streamText({ model: anthropic("claude-sonnet-5"), messages:
  await convertToModelMessages(messages) })` and returns
  `createUIMessageStreamResponse({ stream: toUIMessageStream({ stream:
  result.stream }) })`.
- **Client:** `app/page.tsx` (`"use client"`) uses `useChat()` from
  `@ai-sdk/react`; render each `message.parts` (text parts) and send with
  `sendMessage({ text })`, keeping the input in local state.
- **Model:** defaults to Claude Sonnet (`claude-sonnet-5`). To use another
  provider, swap the import + model id (e.g. `@ai-sdk/openai`).
- **Config:** set `ANTHROPIC_API_KEY` (see `.env.example`); it is read
  server-side only — never expose it to the client bundle.
- **Pinned to AI SDK v7** — `ai@^7`, `@ai-sdk/react@^4`, `@ai-sdk/anthropic@^4`.
- **Commands:**
  ```
  pnpm dev       # dev server
  pnpm build     # production build
  pnpm start     # serve the build
  ```
