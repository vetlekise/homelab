# 0008. Follow each product's own conventions

## Status

Accepted

## Date

2026-10-05

## Context

This repo will use many different products, each with its own conventions for naming, file layout, formatting and structure (e.g. Terraform, Kubernetes).

## Decision 

Follow the conventions of the product a file or resource belongs to (naming, layout, formatting). The product's documentation is the source of truth.

Deviate only when absolutely necessary, and document the deviation and the reason where it applies (e.g. a comment next to the code or in the relevant docs).

Where no product convention exists (e.g. Markdown documentation and images under `docs/`), use lowercase kebab-case for file names, matching the existing ADR file names.

## Consequences

- Files follow what tooling and community examples expect, so there is less friction and fewer surprises.
- Conventions differ between directories; the product's documentation is the source of truth.
- Deviations are rare and always documented, so they are easy to find and justify.
- Lowercase kebab-case is the fallback for file names, including images in the documentation.
