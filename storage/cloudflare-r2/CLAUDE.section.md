## Storage: Cloudflare R2

- S3-compatible object storage with **zero egress fees** (managed).
- Configure via env: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`,
  and the bucket name. Endpoint:
  `https://<R2_ACCOUNT_ID>.r2.cloudflarestorage.com`.
- Use the AWS S3 SDK pointed at the R2 endpoint with `region: "auto"` and
  `forcePathStyle: true`; never commit credentials.
