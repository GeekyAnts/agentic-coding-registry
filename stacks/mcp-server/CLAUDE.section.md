## Stack: MCP Server (TypeScript)

A [Model Context Protocol](https://modelcontextprotocol.io) server on the
official `@modelcontextprotocol/sdk`, exposing tools to MCP clients (Claude
Code, Claude Desktop, …). Speaks the **stdio** transport by default.

- **Entry:** `src/index.ts` — constructs an `McpServer`, registers tools with
  `server.registerTool(name, { title, description, inputSchema }, handler)`
  (`inputSchema` is a raw Zod shape), then connects a `StdioServerTransport`.
- **Add a tool:** register it on `server` with a Zod `inputSchema` and return
  `{ content: [{ type: "text", text }] }`. For typed results, add an
  `outputSchema` and return `structuredContent`.
- **Commands:**
  ```
  pnpm install
  pnpm dev        # run over stdio (tsx)
  pnpm build      # compile to dist/
  pnpm start      # node dist/index.js
  ```
- **Register with Claude Code:**
  ```
  claude mcp add my-server -- node /abs/path/to/dist/index.js
  ```
- **Streamable HTTP (remote servers):** for a networked server, use
  `StreamableHTTPServerTransport`
  (`@modelcontextprotocol/sdk/server/streamableHttp.js`) behind an HTTP handler
  instead of stdio — see the SDK docs. The stdio starter above is the common
  local case.
