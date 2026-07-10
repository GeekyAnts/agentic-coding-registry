---
name: using-create-ai-native-project
description: >-
  How to extend THIS project (add stacks, apps, databases, storage, auth, CI,
  docs, skills, agents). Use whenever the user wants to add a capability, a new
  app, or tooling to the project.
---

# Extending this project

This project was scaffolded with **create-ai-native-project**. Its current state
lives in **`.ai-native-project.json`** at the project root — project type, stacks,
apps, databases, storage, auth, ci, docker, docs, skills, and agents. **Read that
file first** to see what's already set up and avoid duplicating it.

## Add capabilities — re-run the generator

From the project root:

```
npx create-ai-native-project
```

It reads `.ai-native-project.json`, **reuses the fixed project type** (won't
re-ask it), **merges** your new selections into the existing state, and **never
overwrites existing files** (only adds what's missing).

- **Single project:** adds stacks, databases, storage, auth, CI, docs, skills, agents.
- **Monorepo:** adds more **apps** — each scaffolded under `apps/<group>/<name>/`
  (groups: `frontend` / `backend` / `mobile`, or custom) with its own stack — plus
  workspace-level tooling. Shared code goes in `packages/*`.

Refresh the template cache with `create-ai-native-project update`.

## Rules
- The **project type is fixed** (single ↔ monorepo can't change).
- Prefer the generator for standard pieces so the structure, `.ai-native-project.json`,
  and `CLAUDE.md` stay consistent; hand-add only project-specific code.
- In a monorepo, put deployable apps under `apps/<group>/<name>/` and shared
  libraries under `packages/*`; don't create parallel top-level app folders.
- To add a new option for everyone (a new stack, db, etc.), contribute it to the
  template registry (`geekyants/claude-registry`) rather than hand-rolling it here.
