## Stack: MCP Server (Python)

A [Model Context Protocol](https://modelcontextprotocol.io) server on the
official `mcp` Python SDK (FastMCP), exposing tools to MCP clients. Speaks the
**stdio** transport by default.

- **Entry:** `server.py` — constructs `FastMCP("mcp-server")`, defines tools with
  the `@mcp.tool()` decorator (type hints become the input schema, the docstring
  the description), then `mcp.run(transport="stdio")`.
- **Add a tool:** decorate a typed function with `@mcp.tool()`; use
  `@mcp.resource()` / `@mcp.prompt()` for the other capabilities.
- **Commands:**
  ```
  pip install -r requirements.txt
  python server.py     # run over stdio
  mcp dev server.py    # run in the MCP Inspector
  ```
- **Register with Claude Code:**
  ```
  claude mcp add my-server -- python /abs/path/to/server.py
  ```
- **Streamable HTTP (remote servers):** run
  `mcp.run(transport="streamable-http")` for a networked server. The stdio
  starter above is the common local case.
