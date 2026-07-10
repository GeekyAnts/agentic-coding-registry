# claude-setup — Template Registry

Template registry consumed by the [`create-ai-native-project`](https://git.geekyants.com/geekyants/create-ai-native-project) CLI.
The CLI shallow-clones this repo into a local cache and copies the selected
templates into a target project.

## Layout

```
project-types/<id>/  project shape (monorepo, single, …)  → files copied to project root
stacks/<id>/         tech stack (react, node-nest, …)      → files copied to project root
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

These "compose files" (`CLAUDE.md`, `CLAUDE.section.md`) and `template.json` are
**not** copied verbatim. Every **other** file in a template directory IS copied
into the target project (preserving sub-paths) — this is how project-types and
stacks also drop setup files (e.g. `pnpm-workspace.yaml`, `docs/…`).

## Contributing a template

1. Add a directory under `skills/`, `agents/`, or `claude/`.
2. Add a `template.json` with `name` + `description`.
3. Add the files to be copied into a target project.
4. Open an MR against `main`.
