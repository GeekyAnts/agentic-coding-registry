## Security: Essential Standards (Every Project)

Baseline application-security standards every project should follow.

- **[NIST SSDF — SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final):** build
  security into every phase (prepare → protect → produce → respond) — threat-model early,
  gate merges on automated checks, keep a vulnerability-response path.
- **[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/):**
  verify against a target level — L1 (baseline), **L2** (most apps — default), L3
  (high-assurance).
- **[OWASP Top 10](https://owasp.org/www-project-top-ten/):** stay aware of the most
  critical web risks (broken access control, injection, misconfiguration, …).
- **[OWASP API Security Top 10](https://owasp.org/API-Security/):** authorize every
  object / function access (guard BOLA / IDOR), rate-limit, validate schemas, prevent SSRF.
- **[CWE Top 25](https://cwe.mitre.org/top25/):** the most dangerous software weaknesses.

**Apply here:**
- Validate & encode all untrusted input at the boundary; never build SQL / HTML / shell
  by string concatenation — parameterize or use safe APIs.
- Enforce authn / authz **server-side** on every sensitive operation; never trust
  client-supplied roles, IDs, prices, or ownership.
- Keep secrets out of code and logs; surface no internal detail in error responses.
- Run the `security-reviewer` (diff) and `security-auditor` (standards-conformance) agents
  before merge.
