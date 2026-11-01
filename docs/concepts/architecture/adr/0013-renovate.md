# 0013. Use Renovate for dependency updates

## Status

Accepted

## Date

2026-10-29

## Context

Dependency updates shouldn't be a manual job. Dependabot is an option, but I want to avoid tying more tooling to GitHub.

## Decision

Use [Renovate](https://docs.renovatebot.com/) to open pull requests for dependency updates.

## Consequences

- Renovate supports other hosting platforms and can be self-hosted.
- GitHub Actions runs Renovate daily and on demand with a fine-grained personal access token stored as the `RENOVATE_TOKEN` secret.
- `GITHUB_TOKEN` can't update workflow files, so the token needs the `Workflows` permission. PRs opened with it also trigger normal PR workflows.
- The token expires and needs rotating.
- Renovate reads its settings from `.github/renovate.json`. The workflow only sets the repository to process.
- Updates need review and validation before merging.
