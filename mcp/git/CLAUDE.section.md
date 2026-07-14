## MCP Server: Git

Exposes local Git operations (status, diff, log, blame, branch, commit) as tools
the agent can call directly. Runs over stdio via `uvx mcp-server-git`; requires
`uv`/Python on the machine.
