---
name: pr-description
description: >-
  Write a clear PR description from the current diff. Use before opening a pull
  request.
---

# PR Description

Write a clear pull-request description from the current diff.

## Structure
- **Title:** conventional-commit style (`feat: …`, `fix: …`), imperative, concise.
- **What:** the change in 1–3 bullets (behavior, not a file list).
- **Why:** the motivation / issue it addresses.
- **How to verify:** the commands/steps a reviewer runs to confirm.
- **Notes:** risks, follow-ups, breaking changes.

## How
1. Read `git diff` against the base branch; summarize intent, not mechanics.
2. Link the issue/ticket if referenced; call out what reviewers should scrutinize.
3. Keep it scannable — no filler.
