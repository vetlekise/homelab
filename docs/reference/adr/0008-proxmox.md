---
aliases:
  - /reference/architecture/adr/0008-proxmox/
---

# 0008. Use Proxmox VE as the hypervisor

## Status

Accepted

## Date

2026-10-05

## Context

[Kubernetes nodes](0007-kubernetes-talos.md) run as VMs. Proxmox is free and open source, runs on commodity hardware, and has an API and OpenTofu provider for declarative VM management.

## Decision

Use [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) as the hypervisor for all VMs.

## Consequences

- Manage VMs with [OpenTofu](0009-opentofu.md); document Proxmox's manual bootstrap.
- The hypervisor is a single point of failure unless clustered.
