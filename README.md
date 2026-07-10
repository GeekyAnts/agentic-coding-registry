# claude-setup — Template Registry

Template registry consumed by the [`create-ai-native-project`](https://git.geekyants.com/geekyants/create-ai-native-project) CLI.
The CLI shallow-clones this repo into a local cache and copies the selected
templates into a target project.

## Layout

```
project-types/<id>/  project shape (monorepo, single, …)  → files copied to project root
stacks/<id>/         tech stack (react, flutter, laravel, python-*, …) → project root
databases/<id>/      database (postgres, mysql, mongodb)   → sections + compose service
storage/<id>/        storage (minio, aws-s3)               → sections + compose service
auth/<id>/           auth (jwt, clerk)                     → sections + setup files
docker/<id>/         docker-compose base (compose)         → composed docker-compose.yml
ci/<id>/             CI (github-actions, gitlab-ci)        → pipeline file copied to project
docs/<id>/           docs tooling (docusaurus, …)          → files copied to project docs/
skills/<id>/         one directory per skill               → copied to .claude/skills/<id>/
agents/<id>/         one directory per agent               → copied to .claude/agents/
claude/<id>/         base CLAUDE.md fallback               → e.g. claude/default/CLAUDE.md
```

Each template directory may include a `template.json` describing it (used to
render the interactive picker); the manifest itself is **not** copied:

```json
{ "name": "Human-readable name", "description": "One-line summary" }
```

### CLAUDE.md composition

The CLI builds the project's CLAUDE.md from templates rather than copying a
single file:

- The selected **project-type** may provide `CLAUDE.md` — the **base** knowledge
  base (falls back to `claude/default/CLAUDE.md`).
- Each selected **stack** may provide `CLAUDE.section.md` — **appended** to the
  base, in selection order.

### docker-compose composition

When the user opts into Docker, `docker-compose.yml` is composed (text-based,
mirroring CLAUDE.md): the `docker/compose` base supplies the `services:` header,
and each selected stack / database / storage may contribute a
`compose.service.yml` fragment (one or more service entries, indented to sit
under `services:`). Fragments are appended in selection order.

### package.json composition

For **project-types** and **stacks**, a `package.json` is *merged* (not copied):
the project-type provides the base, each stack's `package.json` is merged in with
**first-wins** semantics (existing keys — including individual deps/scripts — are
never overwritten). This produces one runnable root `package.json`.

> `docs/` templates are self-contained sub-projects: their `package.json` **is**
> copied verbatim (into `docs/`), not merged into the root.

### What's copied vs. composed

Per project-type / stack, these are **composed** (not copied): `CLAUDE.md`,
`CLAUDE.section.md`, `package.json`, `template.json`. Every **other** file is
copied verbatim into the target (preserving sub-paths) — how templates drop
setup files (e.g. `pnpm-workspace.yaml`, `vite.config.ts`, `docs/…`). For other
kinds (docs/skills/agents) only `template.json` is withheld.

## Contributing a template

1. Add a directory under `skills/`, `agents/`, or `claude/`.
2. Add a `template.json` with `name` + `description`.
3. Add the files to be copied into a target project.
4. Open an MR against `main`.
