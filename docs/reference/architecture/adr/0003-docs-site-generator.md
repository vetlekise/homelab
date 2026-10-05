# 0003. Use Hugo with Hextra for documentation

## Status

Accepted

## Date

2026-10-01

## Context

This repo needs a static site generator to publish documentation from `docs/` to present documentation in a nicer way.

The two realistic options were MkDocs Material and Hugo with a documentation theme. Hugo generates the site; its theme supplies the documentation layout and features. For Hugo, the candidates considered were Hextra, a lightweight docs-focused theme, and Docsy, a fuller documentation theme commonly used in the CNCF/Kubernetes ecosystem. Both options add a build toolchain: MkDocs Material requires Python and pip, while Hugo can be installed as a prebuilt binary. Hextra uses Hugo Modules, which brings Go module tooling into the setup; Docsy also brings a Node/PostCSS/Sass toolchain. Hextra provides the needed features with less build-tooling overhead.

## Decision

Use Hugo with the Hextra theme to generate the documentation site from `docs/`.

## Consequences 

- Hextra avoids Docsy’s Node/PostCSS/Sass toolchain, though Hugo Modules requires Go tooling.
- Documentation should use portable Markdown; MkDocs-specific syntax won’t render natively in Hugo.
- Hugo scaffolding and GitHub Pages deployment still need to be added. Schema-based references (e.g. Crossplane resources) need a separate step to generate Markdown.
