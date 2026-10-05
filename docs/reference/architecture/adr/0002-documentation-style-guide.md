# 0002. Use the Kubernetes style guide, enforced with Vale

## Status

Accepted

## Date

2026-10-01

## Context

Diátaxis ([0001-documentation-framework.md](0001-documentation-framework.md)) handles structure, not prose style. Still need something for grammar, tone and terminology, and something to enforce it, since manual-only guidelines get ignored over time.

**Style guide:** Looked at Google, Microsoft, GitHub, GitLab, and Kubernetes' style guides. Google/Microsoft/GitHub/GitLab are all single-company styles, and GitHub's just defers to Microsoft anyway. Kubernetes' is community-run (CNCF/SIG Docs) and already fits this repo's domain (k8s, YAML, CLI stuff).

**Linter:** Looked at textlint (Node, pulls in the npm toolchain), LanguageTool (Java, heavier, grammar-only), and Harper (Rust, lightweight, but smaller rule/vocabulary ecosystem). Vale is a single Go binary, markup-aware (skips code blocks), has a Hugo compatibility package, and a big library of ready-made style packages.

No Vale style package implements the Kubernetes guide exactly. Using `RedHat` or `Google` packages as a base gets most of the generic prose rules (passive voice, punctuation, etc.), then a handful of custom rules cover the k8s-specific bits (word list, avoid "simply/just/easily", active voice, present tense).

## Decision

Use the [Kubernetes documentation style guide](https://kubernetes.io/docs/contribute/style/style-guide/) for prose.

Use [Vale](https://vale.sh/) to lint prose in `docs/`, based on the `RedHat` style package plus a small custom style for Kubernetes-guide-specific rules.

## Consequences

- Covers prose, not actual code style (Terraform/YAML formatting is a separate linter's job).
- Some k8s-specific rules (API object capitalization etc.) just don't apply outside k8s content (can be ignored).
- Needs a `.vale.ini` config and a custom styles folder checked into the repo.
- Custom rules need to be written and maintained by hand since no off-the-shelf package matches the Kubernetes guide.
- Not yet wired into CI; follow-up work.
