# 0002. Use Kubernetes Documentation Style Guide

## Status

Accepted

## Date

2026-10-01

## Context

Diátaxis ([0001-documentation-framework.md](0001-documentation-framework.md)) handles structure, not prose style. Still need something for grammar/tone/terminology.

Looked at Google, Microsoft, GitHub, GitLab, and Kubernetes' style guides. Google/Microsoft/GitHub/GitLab are all single-company styles, and GitHub's just defers to Microsoft anyway. Kubernetes' is community-run (CNCF/SIG Docs) and already fits this repo's domain (k8s, YAML, CLI stuff).

## Decision 

Use the [Kubernetes documentation style guide](https://kubernetes.io/docs/contribute/style/style-guide/).

## Consequences

- Covers prose, not actual code style (Terraform/YAML formatting is a linter's job, not this guide's).
- Some k8s-specific rules (API object capitalization etc.) just don't apply outside k8s content (can be ignored).
- No linting (e.g. Vale) set up to enforce this, just a manual guideline for now.
