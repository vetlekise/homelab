---
aliases:
  - /reference/architecture/adr/0006-task-runner/
---

# 0006. Use Task as the command wrapper

## Status

Accepted

## Date

2026-10-05

## Context

Common commands need one documented entry point. Task uses familiar YAML and a built-in shell interpreter for macOS, Linux, and Windows.

## Decision

Use [Task](https://taskfile.dev/) with a `Taskfile.yml` at the repo root as the command wrapper.

## Consequences

- Common commands are documented as tasks and discoverable through `task --list`.
- Each client needs the `task` binary installed; document setup requirements.
