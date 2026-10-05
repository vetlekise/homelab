# 0008. Use Proxmox VE as the hypervisor

## Status

Accepted

## Date

2026-10-05

## Context

The Kubernetes nodes ([0007-kubernetes-talos.md](0007-kubernetes-talos.md)) run as VMs, so a hypervisor is needed. It must be free, run on commodity hardware, and have an API so VMs can be created declaratively ([0005-automation-first.md](0005-automation-first.md)).

- **Proxmox VE:** free and open source (AGPL), Debian-based, supports KVM VMs and LXC containers, and has a web UI, an API and a mature OpenTofu provider.
- **VMware ESXi:** proprietary, and its licensing is uncertain after the Broadcom acquisition.
- **Hyper-V:** tied to Windows and has weaker Linux and automation tooling.
- **Bare metal Kubernetes:** no hypervisor, but it is harder to rebuild, test and isolate nodes.

## Decision

Use [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) as the hypervisor for all VMs.

## Consequences

- No license cost, and it runs on regular hardware.
- VMs are managed through the Proxmox API with OpenTofu ([0009-opentofu.md](0009-opentofu.md)).
- Proxmox itself is a manual bootstrap step and needs to be documented, per [0005-automation-first.md](0005-automation-first.md).
- The hypervisor is a single point of failure unless clustered.
