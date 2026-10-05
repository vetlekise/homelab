# 0009. Prefer reproducible, automation-first homelab management

## Status

Accepted

## Date

2026-10-05

## Context

This homelab should be recoverable without relying on *undocumented* manual steps or memory. Rebuilding by hand is slow and makes it difficult to know whether the environment can be restored after a failure.

## Decision

Manage infrastructure and system configuration declaratively and in version control wherever practical. Use infrastructure as code for provisioning, configuration as code for host and service setup, and GitOps where continuous reconciliation is appropriate.

Treat these definitions and their documentation as the source of truth. Document necessary manual steps and exceptions, including initial bootstrap and physical hardware changes. Keep secrets and generated state out of version control, and document how they are backed up or restored.

The goal is to make a rebuild predictable and reasonably fast, not to automate every task regardless of cost or value.

## Consequences

- Rebuilds and recovery should require fewer undocumented steps and less guesswork.
- Automation and documentation need maintenance as the homelab changes.
- Some steps will remain manual, especially those involving physical hardware or initial bootstrap.
- A measurable recovery-time target may be established as the homelab's scope and tooling become clearer.