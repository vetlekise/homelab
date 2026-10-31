---
title: Decision Records
weight: 2
aliases:
  - /reference/architecture/adr/
cascade:
  - target:
      kind: page
    params:
      sidebar:
        exclude: true
---

Decisions about the homelab's architecture, tooling, and conventions, recorded as architectural decision records (ADRs).

Why I did the thing, for future me. Subject to change when I inevitably regret it.

Will I use this for ALL my decisions? Hell nah.

Copy the [template](0000-template.md) to start a new ADR. Add it to the table below and keep its status in the table up to date.

{{< callout type="info" >}}
  Check whether your new ADR supersedes an older one. If it does, update the older ADR's status to `Superseded by`.
{{< /callout >}}

## Decisions

| ADR | Decision | Status |
| --- | --- | --- |
| 0001 | [Use Diátaxis for the documentation framework](0001-documentation-framework.md) | Accepted |
| 0002 | [Use the Google developer documentation style guide, enforced with Vale](0002-documentation-style-guide.md) | Accepted |
| 0003 | [Use Hugo with Hextra for documentation](0003-docs-site-generator.md) | Accepted |
| 0004 | [Follow each product's own conventions](0004-follow-product-conventions.md) | Accepted |
| 0005 | [Prefer reproducible, automation-first homelab management](0005-automation-first.md) | Accepted |
| 0006 | [Use Task as the command wrapper](0006-task-runner.md) | Accepted |
| 0007 | [Use Talos Linux to run Kubernetes](0007-kubernetes-talos.md) | Accepted |
| 0008 | [Use Proxmox VE as the hypervisor](0008-proxmox.md) | Accepted |
| 0009 | [Use OpenTofu instead of Terraform](0009-opentofu.md) | Accepted |
| 0010 | [Use GitHub Pages to serve documentation](0010-github-pages.md) | Accepted |
| 0011 | [Use pre-commit for local and CI checks](0011-pre-commit.md) | Accepted |
| 0012 | [Use mise to manage development tools](0012-development-tool-management.md) | Proposed |
| 0013 | [Use Renovate for dependency updates](0013-renovate.md) | Accepted |
