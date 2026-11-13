# 0015. Use GitHub generated release notes

## Status

Accepted

## Date

2026-11-13

## Context

I'll create SemVer tags once the tooling is complete. Release notes shouldn't be written by hand, but release automation such as Release Please or Release Drafter adds a workflow to maintain.

## Decision

Use GitHub's [automatically generated release notes](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes), configured in `.github/release.yml`. I choose the version, create the tag and publish each release manually.

## Consequences

- No extra workflow, token or third-party tool to maintain.
- Notes list merged PRs grouped by label. With squash merges, each PR title becomes one entry, so [Conventional Commits](https://www.conventionalcommits.org/) titles keep the list readable.
- Grouping depends on PR labels, not on the Conventional Commit type, so I need to label PRs correctly. Unlabeled PRs land in "Other changes."
- Renovate applies the `dependencies` label to its PRs. I apply `breaking-change` by hand.
- No automatic version bumps and no committed changelog file.
- If manual releases become a burden, switch to Release Please, which uses the existing PR title convention to drive versions and changelogs.
