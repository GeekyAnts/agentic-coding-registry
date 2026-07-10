# claude-setup — Template Registry

Template registry consumed by the [`create-ai-native-project`](https://git.geekyants.com/geekyants/create-ai-native-project) CLI.
The CLI shallow-clones this repo into a local cache and copies the selected
templates into a target project.

## Layout

```
skills/<id>/     one directory per skill  → copied to  .claude/skills/<id>/
agents/<id>/     one directory per agent  → copied to  .claude/agents/
claude/<id>/     CLAUDE.md template(s)    → copied to  the project root
```

Each template directory may include a `template.json` describing it (used to
render the interactive picker); the manifest itself is **not** copied:

```json
{ "name": "Human-readable name", "description": "One-line summary" }
```

All other files in a template directory are copied verbatim, preserving their
relative sub-paths.

## Contributing a template

1. Add a directory under `skills/`, `agents/`, or `claude/`.
2. Add a `template.json` with `name` + `description`.
3. Add the files to be copied into a target project.
4. Open an MR against `main`.
