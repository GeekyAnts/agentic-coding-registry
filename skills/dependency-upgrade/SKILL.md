---
name: dependency-upgrade
description: >-
  Upgrade dependencies safely and deliberately. Use when bumping packages or
  addressing advisories.
---

# Dependency Upgrade

Upgrade dependencies safely and deliberately.

## Method
1. Upgrade **one package (or group) at a time**; read its changelog/migration notes.
2. Prefer the current stable major; note breaking changes before bumping.
3. Update the lockfile; run typecheck + build + the full test suite.
4. Exercise the affected feature (not just tests) for behavior changes.
5. Commit each upgrade separately so it's easy to bisect/revert.

## Watch
Peer-dependency conflicts, transitive breakage, deprecations, security advisories.
