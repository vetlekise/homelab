---
aliases:
  - /reference/architecture/adr/0011-pre-commit/
---

# 0011. Use pre-commit for local and CI checks

## Status

Accepted

## Date

2026-10-20

## Context

Checks should run the same way locally and in CI, without maintaining two sets of commands.

## Decision

Use [pre-commit](https://pre-commit.com/) for Vale and file checks, before local commits and with `pre-commit run --all-files` in CI.

## Consequences

- Contributors install local hooks; CI must fail on failed checks, even when hooks are skipped.
- Local checks are in place; CI integration is still needed.
