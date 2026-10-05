# 0009. Use OpenTofu instead of Terraform

## Status

Accepted

## Date

2026-10-05

## Context

Infrastructure is provisioned with infrastructure as code ([0005-automation-first.md](0005-automation-first.md)). Proxmox VMs ([0008-proxmox.md](0008-proxmox.md)) need to be created declaratively, which calls for an IaC tool with a Proxmox provider. The two main options are Terraform and OpenTofu.

- **Terraform:** HashiCorp moved it from MPL 2.0 to the Business Source License in 2023, so it is no longer open source and its future licensing is controlled by one vendor.
- **OpenTofu:** a fork of Terraform under the Linux Foundation, licensed MPL 2.0, and governed by the community. It remains compatible with the Terraform language and providers, and has added features Terraform lacks, such as client-side state encryption, `for_each` on providers, and variables in backend and module source configuration.

## Decision

Use [OpenTofu](https://opentofu.org/) for infrastructure as code. Do not use Terraform.

## Consequences

- Open source license with no vendor lock-in on the tool itself.
- State can be encrypted client-side without extra tooling.
- Existing Terraform docs, modules and providers mostly apply, but some documentation and examples refer to Terraform, and features may diverge over time.
- Files still follow the `.tf` conventions per [0004-follow-product-conventions.md](0004-follow-product-conventions.md).
