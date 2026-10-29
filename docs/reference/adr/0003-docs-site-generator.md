---
aliases:
  - /reference/architecture/adr/0003-docs-site-generator/
---

# 0003. Use Hugo with Hextra for documentation

## Status

Accepted

## Date

2026-10-01

## Context

Documentation needs a readable static site. Hugo with Hextra provides the needed features without MkDocs Material's Python setup or Docsy's Node-based build tooling.

## Decision

Use [Hugo](https://gohugo.io/documentation/) with the [Hextra](https://imfing.github.io/hextra/docs/) theme to generate the documentation site from `docs/`.

## Consequences

- Hugo Modules needs Go tooling; keep documentation in portable Markdown.
- Site setup and deployment are separate work, as is generating Markdown from schemas.
