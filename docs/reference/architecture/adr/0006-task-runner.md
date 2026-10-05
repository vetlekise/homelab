# 0006. Use Task as the command wrapper

## Status

Accepted

## Date

2026-10-05

## Context

Repeated commands (lint, build docs, apply, etc.) need one documented entry point instead of being remembered or copy-pasted. This supports [0005-automation-first.md](0005-automation-first.md).

- **Make:** ancient, tab-sensitive syntax, designed for building C, and works poorly on Windows without extra tooling.
- **Just:** nice syntax and cross-platform, but uses its own non-YAML format.
- **Task:** single Go binary, cross-platform with a built-in shell interpreter, and uses YAML like the rest of the tooling in this repo.

## Decision

Use [Task](https://taskfile.dev/) with a `Taskfile.yml` at the repo root as the command wrapper.

## Consequences

- Works the same on macOS, Linux and Windows.
- Needs the `task` binary installed; document it in the setup docs.
- Tasks are the documented way to run common commands, so scripts stay discoverable via `task --list`.
