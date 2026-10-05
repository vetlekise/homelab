# Contributing

Rules for changes to this repo, mostly for future me.

## Git workflow

All changes land on `main` through a PR/MR, squash-merged, with fast-forward only (no merge commits). Branch protection enforces this.

Why: merge commits make `main` messy and hard to bisect. A linear history is simpler to read and revert.

- `main` has one commit per PR/MR.
- Commits within a branch can be messy or WIP, because they are squashed away.
- Rebase a branch onto `main` before merging if needed to keep fast-forward possible.

## Pull request titles

Titles must follow [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): description`.

Why: with squash merges, the PR/MR title is the only commit message that survives on `main`, so it is the one thing worth standardizing. This also allows changelog generation later.

- Commits inside a branch are not restricted.
- A PR-title-lint CI check should enforce the format.

## Removing code

Delete unused code completely. Do not comment it out, rename it to `.bak` or `.old`, or hide it behind always-false conditions.

Why: commented-out code goes stale, confuses readers about what is in use, and shows up in searches. Git history keeps everything, so nothing is lost.

- Comments are only for intent, constraints, workarounds, or anything the code cannot show on its own.
- To bring removed code back, use git history.
- Temporary local experiments are fine, but remove them before committing.

## AI usage

Use AI for rubber-ducking and discussing complex design choices. Avoid delegating work I need to understand in order to maintain the setup.

Why: this repo is a place to learn, and relying on AI to do the work would make that learning less effective.

- Things may take more time, but I understand everything that is set up.
