# Contributing

Rules for changes to this repo, mostly for future me.

## Local checks

Set up the tools and Git hooks once after cloning, as described in the [README](README.md#local-development).

Hooks check staged files before each commit. Run `task lint` to check all tracked files. If a hook fixes files, review and stage the changes before committing again.

Vale checks all Markdown against the Google style guide. Pre-commit installs Vale using Go and syncs the style package over the internet before linting. Errors block commits; warnings don't.

Checks are local only for now.

## Dependency updates

The [Renovate workflow](.github/workflows/renovate.yaml) runs daily at 05:37 UTC. You can also run it manually from the Actions tab on `main`.

The workflow uses the built-in `GITHUB_TOKEN`, scoped to this repository. It reads the [Renovate configuration](.github/renovate.json) from the default branch. Workflow files, including `HUGO_VERSION`, are excluded because this token can't update them.
No updates merge automatically.

PRs opened with this token don't trigger normal PR workflows.
Run `task lint` and `task docs:build` on update branches before merging.
Revisit authentication before relying on automatic PR checks.

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

## Product conventions

Follow each product's conventions for naming, file layout, formatting, and structure, as decided in [ADR 0004](docs/reference/adr/0004-follow-product-conventions.md). Use the product's documentation as the source of truth.

- Deviate only when necessary, and document the reason next to the code or in the relevant documentation.
- Where no product convention exists, use lowercase kebab-case for file names, including Markdown documents and images.

## Documentation navigation

Sections without an `_index.md` file act as expandable sidebar groups. Add an `_index.md` file when a section needs a landing page; its sidebar title then links to that page.

This behavior uses [a small sidebar script](hugo/assets/js/core/sidebar-groups.js), loaded through Hextra's core script pipeline. It reuses the theme's toggle buttons instead of overriding its sidebar template. JavaScript must be enabled; without it, section titles remain normal links.

## Removing code

Delete unused code completely. Do not comment it out, rename it to `.bak` or `.old`, or hide it behind always-false conditions.

Why: commented-out code goes stale, confuses readers about what is in use, and shows up in searches. Git history keeps everything, so nothing is lost.

- Comments are only for intent, constraints, workarounds, or anything the code cannot show on its own.
- To bring removed code back, use git history.
- Temporary local experiments are fine, but remove them before committing.

## AI usage

Use AI for rubber-ducking and discussing complex design choices. Delegate familiar, routine work to agents, such as setting up basic tooling, linting, or documentation scaffolding.

Why: the main learning goal is infrastructure, not repeating tooling setup I already know. Agents can help with supporting work without taking over that learning.

- Work through infrastructure design, implementation, and troubleshooting myself, with AI providing explanations, questions, and feedback.
- Review and verify delegated changes so I can maintain what is set up.
- Delegate based on what I already understand, not just whether a task looks simple.
