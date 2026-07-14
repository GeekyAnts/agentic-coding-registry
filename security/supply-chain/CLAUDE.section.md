## Security: Supply Chain

Build-integrity, SBOM, and artifact-signing standards.

- **[SLSA](https://slsa.dev):** Supply-chain Levels for Software Artifacts — scripted
  builds, provenance, isolated builders.
- **[CycloneDX](https://cyclonedx.org)** & **[SPDX](https://spdx.dev):** SBOM formats.
- **[Sigstore](https://www.sigstore.dev):** keyless signing & verification of artifacts.

**Apply here:**
- Pin dependencies (lockfiles + hashes) and pin CI actions / images by digest.
- Generate an SBOM (CycloneDX / SPDX) and build provenance / attestations in CI
  (e.g. `npm publish --provenance`); sign artifacts with Sigstore (cosign) where applicable.
- Scan dependencies for known vulnerabilities and fail on high severity; review new
  transitive dependencies.
- Verify signatures / provenance of artifacts you consume.
