---
name: performance-profiling
description: >-
  Optimize based on measurement, never guesses. Use for perf regressions or hot
  paths.
---

# Performance Profiling

Optimize based on measurement, never guesses.

## Method
1. **Define the goal** (latency / throughput / memory) with a target number.
2. **Measure** with a profiler/benchmark under realistic load; find the hot path.
3. **Optimize the biggest bottleneck** first (algorithmic wins beat micro-tuning).
4. **Re-measure** to confirm the gain; keep the benchmark as a guard.
5. Look for N+1 queries, needless allocations, blocking I/O, missing indexes/caching.

## Avoid
Premature optimization, optimizing cold paths, trading correctness for speed.
