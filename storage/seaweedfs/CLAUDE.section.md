## Storage: SeaweedFS (S3-compatible)

- Fully-open (Apache-2.0), S3-compatible object storage for local dev — the
  recommended self-hosted default.
- Provided by the `seaweedfs` service in docker-compose (`server -dir=/data -s3`).
  **S3 API** on `http://localhost:8333`; filer UI on `8888`, master on `9333`;
  data persists in `./.data/seaweedfs`.
- Point any S3 SDK at it: `S3_ENDPOINT=http://localhost:8333`,
  `forcePathStyle: true`, `region: "us-east-1"`.
- The dev S3 API is unauthenticated; for real use pass an `-s3.config`
  credentials file (see the SeaweedFS docs). Never commit credentials.
