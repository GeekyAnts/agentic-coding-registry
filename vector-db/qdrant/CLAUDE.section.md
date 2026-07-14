## Vector store: Qdrant

Qdrant is a self-hostable dedicated vector database — fast filtered nearest-
neighbour search, a strong fit for filtering-heavy RAG.

- Local instance: the `qdrant` service in docker-compose (`qdrant/qdrant`).
  **REST** on host `6333`, **gRPC** on `6334`; data persists in `./.data/qdrant`.
- Connect via `QDRANT_URL` (e.g. `http://localhost:6333`) with the official
  client — `@qdrant/js-client-rest` (Node) or `qdrant-client` (Python).
- Create a collection with your embedding **dimension** + distance metric
  (usually `Cosine`), then upsert points `{ id, vector, payload }` and search by
  query vector (with optional payload filters).
- Managed option: Qdrant Cloud — set `QDRANT_URL` + `QDRANT_API_KEY`.
