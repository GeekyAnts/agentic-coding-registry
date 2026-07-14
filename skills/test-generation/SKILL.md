---
name: test-generation
description: >-
  Write focused tests for new or changed code. Use when adding/changing behavior
  that lacks coverage, or writing a regression test for a bug.
---

# Test Generation

Write focused, behavior-driven tests for new or changed code.

## When
- New function/endpoint/component with no coverage.
- A bug fix — add a regression test that fails before, passes after.
- Changed behavior where existing tests no longer capture intent.

## How
1. Test **behavior** (inputs → outputs/effects), not implementation details.
2. Cover the happy path, invalid input, boundaries, and error/permission paths.
3. Use the project's existing runner + conventions (open a sibling test first).
4. Keep tests deterministic — no real network/time/randomness; mock at the boundary.
5. Name each test by the behavior it asserts. Never weaken assertions just to pass.
