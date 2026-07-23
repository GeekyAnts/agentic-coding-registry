# <Project> Knowledge Base

> Structured following the **OKF (Open Knowledge Format)** v0.1 spec: explicit
> metadata & provenance, a named maintainer, and knowledge organized into
> clearly categorized, referenceable sections.
>
> A companion **`knowledge/` OKF bundle** mirrors this file as individual concept
> files (one per stack/database/etc.); keep the two in sync when facts change.
>
> Project shape: **Single Project** — one application/package in this repo.
>
> **Project state** is tracked in `.ai-native-project.json` (stacks, databases,
> storage, auth, ci, docker, docs, skills, agents). Consult it before scaffolding
> or adding tooling so you don't duplicate what's already set up, and don't change
> the fixed project type.

---

## ⭐ Important Tasks

> **[LIVING DOCUMENT — HIGH PRIORITY]** This file is the canonical knowledge
> base for the project. Keep it continuously updated as the project evolves.

| Task                              | Priority | Status  |
| --------------------------------- | -------- | ------- |
| Keep this file updated as we go   | High ⭐  | Ongoing |

---

## Knowledge Base (OKF)

Durable knowledge about this project lives in the [`knowledge/`](./knowledge/) folder as an **Open Knowledge Format (OKF)** bundle — vendor-neutral markdown + YAML. Start at [`knowledge/index.md`](./knowledge/index.md).

**Read `knowledge/` before searching anything.** When you need to understand how something works, consult the bundle first — before grepping or exploring the codebase — as the fastest source of durable context on architecture, conventions, and decisions.

**Follow OKF going forward.** When project knowledge changes (new pipeline stage, a chosen dependency, a decided convention), record it in `knowledge/` rather than letting it live only in code or chat:

- Each concept is one `.md` file with YAML frontmatter. The **only required field is a non-empty `type`** (free-form, e.g. `Pipeline Stage`, `Convention`, `Data Source`). Recommended: `title`, `description`, `resource` (a URI for the underlying asset), `tags`, `timestamp` (ISO 8601).
- Body sections are conventional, not mandatory: use `# Schema` for data assets, `# Examples` for usage, `# Citations` for sources. Express relationships between concepts with markdown links in prose.
- Reserved files: `index.md` (navigation; the bundle root declares `okf_version: "0.1"`) and `log.md` (reverse-chronological change history). Append a dated entry to [`knowledge/log.md`](./knowledge/log.md) whenever you change the bundle.
- **Guardrails:** never invent data (ask if a `type`, URL, or field is unknown); preserve unknown frontmatter keys; don't impose a taxonomy; broken links are acceptable (they mark not-yet-written knowledge); stay minimal by default.
- Validate with `okflint` if it's installed (`okflint validate ./knowledge/`). Keep the bundle **local** — do not push it to any external service (e.g. Knowledge Catalog / `kcmd push`) without explicit maintainer approval.

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

### LLM providers
This project is AI-native — when wiring LLM calls, default to the latest Claude
models and keep provider setup consistent:
- **Models (Claude):** `claude-sonnet-5` (balanced default), `claude-opus-4-8`
  (hardest tasks), `claude-haiku-4-5-20251001` (cheap/fast).
- **Anthropic (recommended):** `@anthropic-ai/sdk` (Node) / `anthropic` (Python);
  key in `ANTHROPIC_API_KEY`. **OpenAI:** `openai`; key in `OPENAI_API_KEY`.
- Keep API keys **server-side only** — never in client bundles or `NEXT_PUBLIC_*`;
  put them in `.env` and document them in `.env.example`.
- For chat UIs, streaming, or agents, prefer a toolkit (Vercel AI SDK, LangGraph,
  PydanticAI) over raw SDK calls.

### Deploying
- Match the target to the app: **Vercel** (Next.js / frontends, PR previews),
  **Cloudflare Workers** (Hono / edge — `wrangler.jsonc`), **Netlify** (Astro /
  static), **Railway** / **Fly.io** (long-running Node/Python servers, Docker),
  **Render** (simple services).
- Keep secrets in the platform's env settings — never in the repo; mirror the
  names in `.env.example`.
- Each platform has one config file to add when needed (`vercel.json`,
  `wrangler.jsonc`, `netlify.toml`, `railway.json`, `render.yaml`, `fly.toml`),
  or let its CLI (`vercel`, `wrangler`, `flyctl`, …) generate it.

## 6. Decisions
| Date        | Decision | Rationale |
| ----------- | -------- | --------- |
| <YYYY-MM-DD> | _TBD_    | _TBD_     |

## 7. Notes
- <YYYY-MM-DD> — Initialized project knowledge base.
