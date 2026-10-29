---
aliases:
  - /reference/architecture/adr/0005-automation-first/
---

# 0005. Prefer reproducible, automation-first homelab management

## Status

Accepted

## Date

2026-10-05

## Context

Rebuilding the homelab should be predictable and reasonably fast, without relying on memory or undocumented manual steps.

## Decision

Manage infrastructure and configuration declaratively in version control wherever practical. Use GitOps where continuous reconciliation is appropriate.

## Consequences

- Definitions and documentation are the source of truth and need maintenance.
- Document manual steps, including bootstrap and hardware changes; not everything is worth automating.
- Keep secrets and generated state out of version control, and document their backup and recovery.
