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
- GitHub Actions runs Renovate daily and on demand as a dedicated private GitHub App. The workflow mints a short-lived installation token on each run, so there is no personal token to store or rotate.
- The app needs the permissions listed in Renovate's [GitHub App guide](https://docs.renovatebot.com/modules/platform/github/#running-as-a-github-app), including Workflows read and write. `GITHUB_TOKEN` can't update workflow files, so it isn't used. PRs opened by the app also trigger normal PR workflows.
- PRs and commits come from the app's bot account, so the repository owner can approve them. Commits are made through the GitHub API and are signed.
- The app's client ID is stored as the `RENOVATE_APP_CLIENT_ID` variable and its private key as the `RENOVATE_APP_PRIVATE_KEY` secret. The private key needs rotating if it leaks.
- Renovate reads its settings from `.github/renovate.json`. The workflow only sets the repository to process.
- Updates need review and validation before merging.
