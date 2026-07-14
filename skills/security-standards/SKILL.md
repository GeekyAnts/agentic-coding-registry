---
name: security-standards
description: >-
  Reference for the security standards this project follows and how to apply them
  (OWASP ASVS / Top 10 / API Top 10 / WSTG, NIST SSDF / CSF / 800-63 / 800-207, CIS
  Benchmarks, SLSA + SBOM, ISO 27001, and compliance regimes). Use when implementing,
  reviewing, threat-modeling, or auditing anything security-relevant.
---

# Security Standards

The project's chosen security standards are recorded in `.ai-native-project.json`
(`security`) and documented as `## Security:` sections in the instructions file
(CLAUDE.md / AGENTS.md). Treat those as the authoritative baseline; this skill is the
map of what each priority group covers and how to apply it.

## Priority groups

- **Essential (every project)** — NIST SSDF, OWASP ASVS, OWASP Top 10, OWASP API
  Security Top 10, CWE Top 25. Baseline app-sec: validate input at the boundary,
  authorize server-side, no secrets in code/logs, parameterize queries.
- **Infrastructure** — CIS Benchmarks, NIST SP 800-190, CIS Kubernetes Benchmark.
  Harden cloud/containers/k8s: least-privilege, non-root minimal images, scan in CI.
- **Enterprise Governance** — ISO 27001, NIST CSF 2.0, ISO 31000. Policies, risk
  register, asset inventory, evidence for audits, incident response.
- **Testing & Validation** — OWASP WSTG, PTES, NIST SP 800-115. Security-testing
  checklist; regression test each fixed vuln; only test what you're authorized to.
- **Identity & Access** — NIST SP 800-63, NIST SP 800-207. Strong password hashing,
  MFA, short-lived tokens, zero-trust per-request authorization.
- **Supply Chain** — SLSA, CycloneDX, SPDX, Sigstore. Pin deps + CI by digest, emit an
  SBOM, build provenance/attestations, sign artifacts, scan dependencies.
- **Industry Compliance (as applicable)** — GDPR, PCI DSS, HIPAA, FedRAMP, SOC 2, DPDP
  Act. Identify applicable regimes; minimize/classify/encrypt regulated data; support
  data-subject rights and breach notification.

## How to work

1. **Scope by what the change touches.** Map the change to the relevant group(s) above
   and open the matching `## Security:` section for the concrete rules this project
   committed to.
2. **Design first.** For a new feature, trust boundary, or integration, run the
   `threat-modeler` agent (STRIDE) before implementing.
3. **Implement to the baseline.** Prefer safe-by-default APIs; never weaken a control to
   make a test pass.
4. **Validate before merge.** Run the `security-auditor` agent to check conformance to
   the declared standards, and the core `security-reviewer` agent on the diff.

Only the groups the project selected are in scope — don't impose standards it didn't
adopt, but do flag a gap if a change clearly needs one that's missing.
