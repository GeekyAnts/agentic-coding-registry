import { createAgent, tool } from "langchain";
import { z } from "zod";

// A demo tool the agent can call. Replace with your own.
const getWeather = tool(
  ({ city }: { city: string }) => `It's always sunny in ${city}.`,
  {
    name: "get_weather",
    description: "Get the current weather for a city.",
    schema: z.object({ city: z.string().describe("City name") }),
  },
);

// An agent on the LangGraph runtime, powered by Claude.
// Reads ANTHROPIC_API_KEY from the environment.
const agent = createAgent({
  model: "anthropic:claude-sonnet-5",
  tools: [getWeather],
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "What's the weather in Bengaluru?" }],
});

// Print the agent's final message.
const last = result.messages.at(-1);
console.log(last?.content ?? result);
