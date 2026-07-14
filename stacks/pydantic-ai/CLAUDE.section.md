## Stack: PydanticAI agent (Python)

A minimal type-safe AI agent using [PydanticAI](https://ai.pydantic.dev),
powered by Claude.

- **Entry:** `agent.py` — constructs `Agent("anthropic:claude-sonnet-5",
  instructions=…)`, registers tools with `@agent.tool_plain` (type hints +
  docstring define the schema), and runs with `agent.run_sync(…)` →
  `result.output`.
- **Add a tool:** decorate a typed function with `@agent.tool_plain` (or
  `@agent.tool` to receive a `RunContext`).
- **Structured output:** pass `output_type=<PydanticModel>` to `Agent(…)` for
  validated, typed results.
- **Model:** `anthropic:claude-sonnet-5` (a `provider:model` string); swap the
  prefix for another provider (add its extra in `requirements.txt`).
- **Config:** set `ANTHROPIC_API_KEY` (see `.env.example`); keep it server-side.
- **Commands:**
  ```
  pip install -r requirements.txt
  python agent.py
  ```
