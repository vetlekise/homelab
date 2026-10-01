# 0006. Follow modern Git practices

## Status

Accepted

## Date

2026-10-01

## Context

Merge commits make `main`'s history messy and hard to bisect, a tangle of "Merge branch 'foo'" noise plus whatever commits happened to exist on the feature branch. For a solo repo there's no need for that history; a linear one is simpler to read and revert.

## Decision 

All changes land on `main` through a PR/MR, squash-merged, with fast-forward only (no merge commits). Branch protection enforces this.

## Consequences

- `main` history is linear: one commit per PR/MR.
- Commits within a branch can be messy/WIP, they get squashed away, so only the PR/MR title (which becomes the squash commit message) ends up in history.
- Rebasing a branch onto `main` before merge may be required to keep fast-forward possible.
