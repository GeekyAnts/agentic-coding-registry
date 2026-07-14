---
name: debugging
description: >-
  Root-cause a failure before patching. Use when something is broken/flaky and
  the cause isn't obvious.
---

# Debugging (root-cause)

Find the true cause of a failure before changing code.

## Method
1. **Reproduce** reliably; capture the exact error + inputs.
2. **Localize** — bisect (git/logs/binary search) to the smallest failing unit.
3. **Form a hypothesis**, then confirm with evidence (a log line, failing
   assertion, debugger) — don't guess-patch.
4. **Fix the cause**, not the symptom; add a regression test.
5. Verify the fix, and check whether the same bug exists elsewhere.

## Avoid
Shotgun edits, swallowing errors, and "it works now" without knowing why.
