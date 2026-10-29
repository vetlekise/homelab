---
aliases:
  - /reference/architecture/adr/0004-follow-product-conventions/
---

# 0004. Follow each product's own conventions

## Status

Accepted

## Date

2026-10-05

## Context

Different products have their own naming, layout, and formatting conventions. A repository-wide style shouldn't fight their tooling.

## Decision

Follow each product's documented conventions. Use lowercase kebab-case for file names where no product convention exists.

## Consequences

- Conventions vary between directories but match product tooling and examples.
- Deviate only when necessary, and document the reason next to the code or in the relevant docs.
