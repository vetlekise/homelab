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
- GitHub Actions runs Renovate daily and on demand with `GITHUB_TOKEN`; no installed app or personal token is needed.
- Workflow files are excluded because this token can't update them. PRs created with this token don't trigger normal PR workflows.
- Updates need review and validation before merging.
