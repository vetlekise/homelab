# 0012. Use mise to manage development tools

## Status

Proposed

## Date

2026-10-28

## Context

I work on Linux, macOS, and Windows. Keeping development tools in sync across all three shouldn't be a manual job.

## Decision

Use [mise](https://mise.jdx.dev/) to manage development tool versions.

## Consequences

- Tool versions live in `mise.toml`; each client needs mise installed.
- Tools run natively, so OS differences remain. Revisit dev containers if that becomes a problem.