---
aliases:
  - /reference/architecture/adr/0010-github-pages/
---

# 0010. Use GitHub Pages to serve documentation

## Status

Accepted

## Date

2026-10-20

## Context

The [Hugo site](0003-docs-site-generator.md) only needs static hosting, and its source already lives on GitHub. Recovery documentation should remain available when the homelab is down.

## Decision

Use [GitHub Pages](https://docs.github.com/en/pages) at <https://vetlekise.github.io/homelab/>, built and deployed by GitHub Actions when changes land on `main`.

## Consequences

- Hosting is public, static, and dependent on GitHub's availability and limits; exclude secrets and sensitive details.
- Keep `docs/` as the source of truth, never commit generated files, and support the `/homelab/` path.
- Maintain the deployment workflow and keep the Pages build source set to GitHub Actions.
