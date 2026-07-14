---
name: refactoring
description: >-
  Improve structure without changing behavior. Use to clean up duplication,
  long functions, or unclear code.
---

# Refactoring

Improve structure without changing behavior.

## Rules
1. **Behavior-preserving only** — never mix in a feature or bug fix.
2. Ensure tests exist and pass **before** starting (add characterization tests if not).
3. Make **small, reversible steps**; run tests after each.
4. Prefer reusing existing helpers over new abstractions; delete dead code.
5. Keep the diff focused — don't reformat unrelated code.

## Target
Duplication, long functions, deep nesting, unclear names, leaky abstractions.
Stop when the code is clear enough — don't over-engineer.
