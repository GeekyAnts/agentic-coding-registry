# PydanticAI agent (Python) — Setup Notes

```
cp .env.example .env      # add your ANTHROPIC_API_KEY
pip install -r requirements.txt
python agent.py
```

- Agent: `agent.py` (`Agent(...)`, tools via `@agent.tool_plain`).
- Model: `anthropic:claude-sonnet-5` — swap the `provider:model` string to change
  (add the matching extra to `requirements.txt`, e.g. `[anthropic,openai]`).
- Structured output: pass `output_type=<PydanticModel>` to `Agent(...)`.
