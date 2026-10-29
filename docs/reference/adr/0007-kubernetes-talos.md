---
aliases:
  - /reference/architecture/adr/0007-kubernetes-talos/
---

# 0007. Use Talos Linux to run Kubernetes

## Status

Accepted

## Date

2026-10-05

## Context

Kubernetes nodes should be rebuildable from code. Talos provides an immutable, API-managed OS without a separate general-purpose Linux installation to maintain.

## Decision

Use [Talos Linux](https://www.talos.dev/) as the operating system and Kubernetes distribution for the cluster nodes.

## Consequences

- Nodes are rebuilt from declarative machine config, with no SSH or package manager.
- Debugging uses `talosctl` and the Kubernetes API; familiar host tools aren't available.
