"""A minimal type-safe AI agent using PydanticAI + Claude.

Reads ANTHROPIC_API_KEY from the environment. Run with `python agent.py`.
"""

from pydantic_ai import Agent

agent = Agent(
    "anthropic:claude-sonnet-5",
    instructions="Be concise. Use the available tools when they help.",
)


@agent.tool_plain
def get_weather(city: str) -> str:
    """Get the current weather for a city."""
    return f"It's always sunny in {city}."


if __name__ == "__main__":
    result = agent.run_sync("What's the weather in Bengaluru?")
    print(result.output)
