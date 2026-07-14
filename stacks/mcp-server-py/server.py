"""A minimal Model Context Protocol server (stdio transport).

Exposes tools to an MCP client (e.g. Claude Code) via the official Python SDK's
FastMCP. Run with `python server.py` or `mcp dev server.py`.
"""

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("mcp-server")


@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers and return the sum."""
    return a + b


@mcp.tool()
def echo(text: str) -> str:
    """Echo back the provided text."""
    return text


if __name__ == "__main__":
    # stdio is the default transport; stated explicitly for clarity. For a
    # remote/networked server use transport="streamable-http".
    mcp.run(transport="stdio")
