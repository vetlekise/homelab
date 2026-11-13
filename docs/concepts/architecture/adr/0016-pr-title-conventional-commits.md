# 0016. Enforce Conventional Commit PR titles in CI

## Status

Accepted

## Date

2026-11-13

## Context

All changes land on `main` through squash-merged PRs, so the PR title is the only commit message that survives. Release notes and any future changelog automation depend on a consistent format. A convention that nothing enforces drifts. GitHub has no native check that validates PR titles against a pattern.

## Decision

Require PR titles to follow [Conventional Commits](https://www.conventionalcommits.org/), enforced by the [action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) action in the `pr-title` workflow. Commits inside a branch aren't checked.

## Consequences

- Titles that don't match `type(scope): description` fail the check. The action uses the default Conventional Commit types and doesn't require a scope.
- The check blocks merging only if the job is a required status check in branch protection.
- The workflow runs on `opened`, `reopened`, `edited` and `synchronize`, so renaming a PR re-runs the check.
- The workflow needs only `pull-requests: read` and uses the default `GITHUB_TOKEN`.
- The action is a third-party dependency, pinned to a commit SHA and kept updated by Renovate.
- A title that follows the format still has to be accurate. The check validates the format, not the meaning.
- Release notes group PRs by label, not by title type, so labeling is still manual.
