# MCP Server (TypeScript) — Setup Notes

```
pnpm install
pnpm dev                 # run over stdio
pnpm build && pnpm start
```

Register the built server with Claude Code:

```
claude mcp add my-server -- node /abs/path/to/dist/index.js
```

For a remote/networked server, swap the stdio transport for
`StreamableHTTPServerTransport` — see the official SDK docs.
