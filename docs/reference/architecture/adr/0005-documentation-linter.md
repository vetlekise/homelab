# 0005. Use Vale to lint documentation prose

## Status

Accepted

## Date

2026-10-01

## Context

[0002-documentation-style-guide.md](0002-documentation-style-guide.md) picked the Kubernetes style guide, but nothing enforces it and manual-only guidelines just get ignored over time.

Looked at textlint (Node, pulls in the npm toolchain), LanguageTool (Java, heavier, grammar-only), and Harper (Rust, lightweight, but smaller rule/vocabulary ecosystem). Vale is a single Go binary, markup-aware (skips code blocks), has a Hugo compatibility package, and a big library of ready-made style packages.

No style package implements the Kubernetes guide exactly. Using `RedHat` or `Google` packages as a base gets most of the generic prose rules (passive voice, punctuation, etc.), then a handful of custom rules cover the k8s-specific bits (word list, avoid "simply/just/easily", active voice, present tense).

## Decision 

Use [Vale](https://vale.sh/) to lint prose in `docs/`, based on the `RedHat` style package plus a small custom style for Kubernetes-guide-specific rules.

## Consequences

- Needs a `.vale.ini` config and a custom styles folder checked into the repo.
- Only lints prose, not actual source code (Terraform/YAML) — that's still a separate linter's job.
- Custom rules need to be written and maintained by hand since no off-the-shelf package matches the Kubernetes guide.
- Not yet wired into CI; follow-up work.
