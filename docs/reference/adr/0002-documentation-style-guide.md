---
aliases:
  - /reference/architecture/adr/0002-documentation-style-guide/
---

# 0002. Use the Google developer documentation style guide, enforced with Vale

## Status

Accepted

## Date

2026-10-01

## Context

[Diátaxis](0001-documentation-framework.md) covers structure, not prose. Google's technical writing guide has a ready-made Vale package, avoiding custom rules and a larger toolchain.

## Decision

Use the [Google developer documentation style guide](https://developers.google.com/style), enforced by [Vale](https://vale.sh/)'s official `Google` package on all Markdown. No custom rules.

## Consequences

- Configure exceptions in `.vale.ini`; code and configuration formatting need separate linters.
- CI integration is still needed.
