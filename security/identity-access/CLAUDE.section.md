## Security: Identity & Access

Digital-identity and zero-trust access standards.

- **[NIST SP 800-63](https://pages.nist.gov/800-63-3/):** Digital Identity Guidelines —
  identity proofing (IAL), authentication (AAL), federation (FAL).
- **[NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final):** Zero Trust
  Architecture — never trust, always verify.

**Apply here:**
- Store passwords with a memory-hard hash (argon2 / bcrypt / scrypt); check against
  breached-password lists; avoid arbitrary composition / rotation rules.
- Offer MFA for sensitive accounts; use short-lived tokens and revoke / rotate cleanly.
- Authorize every request on its own merits — verify identity + context, don't rely on
  network location.
- See the project's auth section (if configured) for the concrete implementation.
