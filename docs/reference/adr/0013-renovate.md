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
- Setup is still needed; updates need review and validation before merging.
