## MCP Server: Filesystem

Gives the agent structured filesystem access (read, search, list, edit) scoped to
the project directory. Runs over stdio via
`npx @modelcontextprotocol/server-filesystem .`; no credentials needed. Adjust the
allowed path in the generated config if you need to widen or narrow its scope.
