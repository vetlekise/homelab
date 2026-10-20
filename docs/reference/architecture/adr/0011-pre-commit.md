# 0011. Use pre-commit for local and CI checks

## Status

Accepted

## Date

2026-10-20

## Context

Checks should run the same way locally and in CI, without maintaining two sets of commands.

## Decision

Use [pre-commit](https://pre-commit.com/) for linting, including Vale ([0002-documentation-style-guide.md](0002-documentation-style-guide.md)) and other file format checks.

Run it before commits locally and with `pre-commit run --all-files` in CI. Failed checks must fail CI.

## Consequences

- Contributors must install the local hooks.
- CI catches failures even when local hooks are skipped.
- Basic file checks and Vale run locally. CI wiring still needs to be added.
