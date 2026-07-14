## Stack: LangGraph agent (Node)

A minimal AI agent on the [LangGraph](https://docs.langchain.com) runtime using
LangChain 1.0's `createAgent`, powered by Claude via `@langchain/anthropic`.

- **Entry:** `src/index.ts` — builds an agent with `createAgent({ model:
  "anthropic:claude-sonnet-5", tools })`, registers a demo `tool()` (Zod schema),
  and calls `agent.invoke({ messages })`.
- **Add a tool:** create it with `tool(fn, { name, description, schema })` and add
  it to the `tools` array; the model decides when to call it.
- **Model:** `anthropic:claude-sonnet-5` (a `provider:model` string). Swap the
  prefix for another provider (e.g. `openai:…`).
- **Config:** set `ANTHROPIC_API_KEY` (see `.env.example`); keep it server-side.
- **Commands:**
  ```
  pnpm install
  pnpm dev        # run the agent (tsx)
  pnpm build      # compile to dist/
  pnpm start      # node dist/index.js
  ```
- **Note:** this is a runnable agent script, not an HTTP service. To expose it,
  wrap `agent.invoke` in a route handler, or use the LangGraph runtime directly
  (`@langchain/langgraph`: `StateGraph`, checkpointers) for custom control flow,
  memory, and human-in-the-loop.
