## IaC: OpenTofu

- Infrastructure as code via [OpenTofu](https://opentofu.org) — the fully-open
  (MPL-2.0) Terraform-compatible fork (LF/CNCF-governed). Use the `tofu` CLI.
- **Files:** `providers.tf` (required providers + credentials from env),
  `variables.tf` (typed inputs), `main.tf` (resources); keep environments in
  workspaces or separate dirs.
- **State:** configure a **remote backend** (S3/GCS/…) for shared state; never
  commit `*.tfstate` or `.terraform/` (they can contain secrets). Pass provider
  credentials via env, never hardcoded.
- **Commands:**
  ```
  tofu init          # download providers + init backend
  tofu plan          # preview changes
  tofu apply         # apply changes
  tofu destroy       # tear down
  ```
- Terraform-compatible: existing `.tf` + most providers/modules work unchanged.
