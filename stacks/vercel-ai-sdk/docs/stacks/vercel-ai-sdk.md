# Vercel AI SDK (Next.js chat) — Setup Notes

```
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
pnpm install
pnpm dev                     # http://localhost:3000
```

- Chat UI: `app/page.tsx` (`useChat` from `@ai-sdk/react`).
- Streaming endpoint: `app/api/chat/route.ts` (`streamText` + Claude).
- Pinned to AI SDK **v5** (`ai@^5`, `@ai-sdk/react@^2`, `@ai-sdk/anthropic@^2`).

Swap the model/provider in `app/api/chat/route.ts` (e.g. `@ai-sdk/openai`).
