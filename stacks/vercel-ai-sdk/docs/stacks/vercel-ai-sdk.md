# Vercel AI SDK (Next.js chat) — Setup Notes

```
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
pnpm install
pnpm dev                     # http://localhost:3000
```

- Chat UI: `app/page.tsx` (`useChat` from `@ai-sdk/react`).
- Streaming endpoint: `app/api/chat/route.ts` (`streamText` + Claude).
- Pinned to AI SDK **v7** (`ai@^7`, `@ai-sdk/react@^4`, `@ai-sdk/anthropic@^4`).

Swap the model/provider in `app/api/chat/route.ts` (e.g. `@ai-sdk/openai`).
