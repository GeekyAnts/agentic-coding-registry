# LangGraph agent (Node) — Setup Notes

```
cp .env.example .env      # add your ANTHROPIC_API_KEY
pnpm install
pnpm dev                  # run the demo agent
```

- Agent: `src/index.ts` (`createAgent` from `langchain`, tools via `tool()`).
- Model: `anthropic:claude-sonnet-5` — swap the `provider:model` string to change.
- Runtime: LangGraph (`@langchain/langgraph`) — use `StateGraph` / checkpointers
  for custom control flow, memory, and human-in-the-loop.
