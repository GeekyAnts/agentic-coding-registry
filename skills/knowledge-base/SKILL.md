---
name: knowledge-base
description: >-
  Keep CLAUDE.md current as the project evolves. Use whenever a decision is made,
  a convention changes, or new project context surfaces in conversation.
---

# Knowledge Base Maintainer

CLAUDE.md is the project's canonical, living knowledge base (OKF-format). Your
job is to keep it accurate and useful.

## When to update

- A technical or product **decision** is made → add a row to §6 Decisions with
  date + rationale.
- A **convention** is established or changed → update §5 Conventions.
- New **context, scope, or constraints** are described → update the relevant
  section (Overview / Architecture / Setup).
- Anything noteworthy happens → append a dated line to §7 Notes.

## How to update

1. Edit the smallest relevant section; keep existing structure and tone.
2. Use absolute dates (`YYYY-MM-DD`), never "today"/"yesterday".
3. Bump `Last Updated` in §1 Metadata.
4. Don't duplicate what the code or git history already records — capture the
   *why* and the non-obvious.
5. Keep entries terse and scannable (tables/bullets over prose).
