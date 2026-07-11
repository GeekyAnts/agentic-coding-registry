# <Project> Knowledge Base

> Structured following **OKF (Open Knowledge Foundation)** principles: explicit
> metadata & provenance, a named maintainer, and knowledge organized into
> clearly categorized, referenceable sections.
>
> Project shape: **Monorepo** — multiple packages/apps in one repo.
>
> **Project state** is tracked in `.ai-native-project.json` (stacks, databases,
> storage, auth, ci, docker, docs, skills, agents). Consult it before scaffolding
> or adding tooling so you don't duplicate what's already set up, and don't change
> the fixed project type.

---

## ⭐ Important Tasks

> **[LIVING DOCUMENT — HIGH PRIORITY]** This file is the canonical knowledge
> base for the workspace. Keep it continuously updated as the project evolves.

| Task                              | Priority | Status  |
| --------------------------------- | -------- | ------- |
| Keep this file updated as we go   | High ⭐  | Ongoing |

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
_What this workspace is and the problem it solves._

## 3. Workspaces / Packages
_List each package/app, its purpose, and its path._

| Package | Path | Purpose |
| ------- | ---- | ------- |
| _TBD_   | `packages/…` | _TBD_ |

## 4. Architecture
_How packages depend on each other; shared libraries and boundaries._

## 5. Setup & Commands
_Workspace-wide install/build/test, plus per-package commands._

## 6. Conventions

### Development workflow (defaults — follow unless a project convention overrides)
- **Branch first.** For any feature request or change, create a branch *before*
  you start developing or editing files. Never commit directly to `main`.
- **Version management.** Bump the version number (root and/or the affected
  package's `package.json` `version`, following semver) after each commit or push.
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

## 7. Decisions
| Date        | Decision | Rationale |
| ----------- | -------- | --------- |
| <YYYY-MM-DD> | _TBD_    | _TBD_     |

## 8. Notes
- <YYYY-MM-DD> — Initialized workspace knowledge base.
