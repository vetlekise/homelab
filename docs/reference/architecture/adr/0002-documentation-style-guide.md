# 0002. Use the Google developer documentation style guide, enforced with Vale

## Status

Accepted

## Date

2026-10-01

## Context

Diátaxis ([0001-documentation-framework.md](0001-documentation-framework.md)) covers structure, not prose. Need a style guide, and a linter to enforce it, since manual guidelines get ignored.

- **Style guide:** Google and Microsoft both have official Vale packages. Kubernetes fits the domain better, but no package implements it, so it would need hand-written rules. GitHub defers to Microsoft, and GitLab has no package. Google's is aimed at technical docs.
- **Linter:** textlint pulls in the npm toolchain, LanguageTool is heavy and grammar-only, and Harper has a small rule ecosystem. Vale is a single binary, skips code blocks, and has ready-made style packages.

## Decision

Use the [Google developer documentation style guide](https://developers.google.com/style), enforced with [Vale](https://vale.sh/) and its official `Google` package on `docs/`. No custom rules.

## Consequences

- Prose only; Terraform/YAML formatting needs a separate linter.
- Only a `.vale.ini` to maintain; disable overly strict rules there.
- Not yet wired into CI.
