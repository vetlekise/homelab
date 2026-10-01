# 0007. Use Conventional Commits in PR/MR titles

## Status

Accepted

## Date

2026-10-01

## Context

Since [0006-git-rules.md](0006-git-rules.md) squash-merges every PR/MR, the PR/MR title becomes the only commit message that survives on `main`. Regular commits within a branch don't matter much beyond making some sense to the author; the title is the one thing worth standardizing.

## Decision 

PR/MR titles must follow [Conventional Commits](https://www.conventionalcommits.org/) format: `type(scope): description`.

## Consequences

- `main` ends up with a clean, conventional-commits-compliant history, since each commit is just a squashed PR/MR title.
- Enables changelog generation off `main` history later, if wanted.
- Needs a check (e.g. a PR-title-lint CI action) to actually enforce the format; not set up yet.
- Regular commits inside a branch stay unrestricted.
