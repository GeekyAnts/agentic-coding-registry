import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// An MCP server exposes tools / resources / prompts to an MCP client
// (e.g. Claude Code). This starter speaks the default stdio transport — the
// client spawns it and talks over stdin/stdout.
const server = new McpServer({ name: "mcp-server", version: "0.1.0" });

// Demo tool: add two numbers. Replace with your own tools.
// `inputSchema` is a raw Zod shape; the handler receives the parsed args.
server.registerTool(
  "add",
  {
    title: "Add",
    description: "Add two numbers and return the sum.",
    inputSchema: { a: z.number(), b: z.number() },
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  }),
);

// Demo tool: echo text back to the caller.
server.registerTool(
  "echo",
  {
    title: "Echo",
    description: "Echo back the provided text.",
    inputSchema: { text: z.string() },
  },
  async ({ text }) => ({
    content: [{ type: "text", text }],
  }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
