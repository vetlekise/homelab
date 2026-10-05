# 0008. Follow each product's own file naming conventions

## Status

Accepted

## Date

2026-10-05

## Context

This repo mixes several ecosystems, each with its own naming conventions. Kubernetes requires DNS-1123 names (lowercase, hyphens), Terraform's style guide uses underscores for identifiers, and Hugo publishes file names as URLs. A single repo-wide convention would fight at least one of them.

## Decision 

Name files and identifiers according to the conventions of the product they belong to, e.g. hyphens for Kubernetes resources, underscores for Terraform names.

Where no product convention exists (e.g. Markdown documentation and images under `docs/`), use lowercase kebab-case, matching the existing ADR file names.

## Consequences

- Files follow what tooling and community examples expect, so there is less friction and fewer surprises.
- File naming differs between directories; the product's documentation is the source of truth.
- Lowercase kebab-case is the fallback, including for images in the documentation.
