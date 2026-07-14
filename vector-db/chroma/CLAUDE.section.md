## Vector store: Chroma

Chroma is an open-source vector database with the smoothest local-dev / RAG
prototyping experience.

- Local instance: the `chroma` service in docker-compose (`chromadb/chroma`),
  HTTP API on host **8001** (container 8000); data persists in `./.data/chroma`.
- Connect via `CHROMA_URL` (e.g. `http://localhost:8001`) with the official
  `chromadb` client (Python or JS) in client/server mode: create a collection,
  `add` documents/embeddings, and `query` by embedding.
- For quick prototypes you can run Chroma **embedded** (in-process, Python) with
  no server at all.
- Best for prototyping / MVPs; for production scale prefer **Qdrant** or
  **pgvector**.
