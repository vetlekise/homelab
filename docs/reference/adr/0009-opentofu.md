---
aliases:
  - /reference/architecture/adr/0009-opentofu/
---

# 0009. Use OpenTofu instead of Terraform

## Status

Accepted

## Date

2026-10-05

## Context

[Proxmox VMs](0008-proxmox.md) need declarative provisioning. OpenTofu supports the needed providers and keeps an open source, community-governed license instead of Terraform's vendor-controlled licensing.

## Decision

Use [OpenTofu](https://opentofu.org/) for infrastructure as code. Do not use Terraform.

## Consequences

- Client-side state encryption is available without extra tooling.
- Keep `.tf` conventions; Terraform docs, modules, and providers mostly apply, but features may diverge.
