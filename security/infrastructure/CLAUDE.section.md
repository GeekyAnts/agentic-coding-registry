## Security: Infrastructure

Hardening standards for cloud, containers, and orchestration.

- **[CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks):** consensus hardening
  baselines for cloud providers (AWS / Azure / GCP), operating systems, and services.
- **[NIST SP 800-190](https://csrc.nist.gov/pubs/sp/800/190/final):** Application
  Container Security Guide.
- **[CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes):**
  control-plane, node, and workload hardening.

**Apply here:**
- Least-privilege IAM / RBAC — no wildcard or admin roles for workloads; short-lived
  credentials over long-lived keys.
- Containers: minimal, digest-pinned base images, non-root `USER`, dropped capabilities,
  read-only rootfs; scan images for CVEs in CI (Trivy / Grype) and fail on high / critical.
- Kubernetes: Pod Security Standards (`restricted`), default-deny NetworkPolicies,
  resource limits, secrets via a manager / CSI driver.
- Encrypt data at rest & in transit; enable audit logging; scan IaC against CIS rules
  (tfsec / Checkov / kube-bench) before apply.
