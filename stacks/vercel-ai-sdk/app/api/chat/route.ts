import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Allow streaming responses up to 30 seconds.
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    // Defaults to Claude Sonnet. Reads ANTHROPIC_API_KEY from the environment.
    model: anthropic("claude-sonnet-5"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
