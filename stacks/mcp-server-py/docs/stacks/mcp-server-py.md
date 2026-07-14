# MCP Server (Python) — Setup Notes

```
pip install -r requirements.txt
python server.py     # run over stdio
mcp dev server.py    # run in the MCP Inspector
```

Register with Claude Code:

```
claude mcp add my-server -- python /abs/path/to/server.py
```

For a remote/networked server, use `mcp.run(transport="streamable-http")`.
