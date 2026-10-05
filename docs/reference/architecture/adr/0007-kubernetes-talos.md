# 0007. Use Talos Linux to run Kubernetes

## Status

Proposed

## Date

2026-10-05

## Context

Services run on Kubernetes. Which distribution to use is a separate choice, and it should fit [0005-automation-first.md](0005-automation-first.md): a node should be rebuildable from code, without manual steps.

- **Talos Linux:** an immutable OS built only to run Kubernetes. It has no SSH or shell and is configured entirely through an API and declarative machine config. It has an official provider that works with OpenTofu.
- **K3s:** a lightweight, simple distribution, but it runs on a general-purpose Linux distribution that needs its own patching, hardening and configuration management.
- **kubeadm (vanilla Kubernetes):** closest to upstream and good for learning, but the most manual to install and upgrade.

## Decision

Use [Talos Linux](https://www.talos.dev/) as the operating system and Kubernetes distribution for the cluster nodes.

## Consequences

- Nodes are rebuilt from machine config instead of repaired by hand.
- Smaller attack surface, because there is no SSH or package manager on the nodes.
- Debugging uses `talosctl` and the Kubernetes API instead of logging in to a node, which takes some learning.
- Fewer general-purpose Linux tools are available on the nodes.
