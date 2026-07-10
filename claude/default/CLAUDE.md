# CLAUDE.md — <Project> Knowledge Base

> Structured following **OKF (Open Knowledge Foundation)** principles: explicit
> metadata & provenance, a named maintainer, and knowledge organized into
> clearly categorized, referenceable sections.

---

## ⭐ Important Tasks

> **[LIVING DOCUMENT — HIGH PRIORITY]** This file is the canonical knowledge
> base for the project. Keep it continuously updated as the project evolves —
> capture new context, decisions, and conventions here as they happen.

| Task                              | Priority | Status  |
| --------------------------------- | -------- | ------- |
| Keep CLAUDE.md updated as we go   | High ⭐  | Ongoing |

---

## 1. Metadata

| Field        | Value                     |
| ------------ | ------------------------- |
| Title        | <Project> Knowledge Base  |
| Description  | <one-line description>    |
| Version      | 0.1.0                     |
| Status       | Active                    |
| Last Updated | <YYYY-MM-DD>              |
| Maintainer   | <name / email>            |

---

## 2. Overview
_What this project is and the problem it solves._

## 3. Architecture
_Key components, how they fit together, and important boundaries._

## 4. Setup & Commands
_How to install, run, test, and build._

```
# install
# run
# test
```

## 5. Conventions

### Development workflow (defaults — follow unless a project convention overrides)
- **Branch first.** For any feature request or change, create a branch *before*
  you start developing or editing files. Never commit directly to `main`.
- **Version management.** Bump the version number (e.g. `package.json` `version`,
  following semver) after each commit or push.
- Keep changes focused and atomic; write clear, descriptive commit messages.
- Merge to `main` via a PR/MR — don't push feature work straight to `main`.

### Engineering standards (non-negotiable)
- **Never hardcode or log secrets** (credentials, tokens, API keys); use env vars.
- **Validate before done:** run the formatter, linter, type-checker, tests, and
  build; never claim code works or tests pass unless you actually ran them.
- **Test behavior changes:** add/update tests (expected behavior, invalid input,
  boundaries, permission failures); never weaken tests just to pass.
- **Treat external input as untrusted:** validate at the boundary and enforce
  authorization server-side on every request.
- **Smallest complete change:** reuse existing code; don't reformat or refactor
  unrelated code; preserve backward compatibility unless the task allows breaking it.
- **Priority when conflicts arise:** security > correctness > data integrity >
  backward compatibility > reliability > maintainability > testability >
  performance > delivery speed > brevity.
- For non-trivial work, follow the **`engineering-standards`** skill (full playbook).

_Add project-specific coding standards, naming, and review norms here._

## 6. Decisions
| Date        | Decision | Rationale |
| ----------- | -------- | --------- |
| <YYYY-MM-DD> | _TBD_    | _TBD_     |

## 7. Notes
- <YYYY-MM-DD> — Initialized project knowledge base.
