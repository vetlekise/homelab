---
title: scarif
---

Guides for setting up and maintaining `scarif`, the NAS that runs TrueNAS.

## Installation notes

Install TrueNAS Community Edition (CE) by following the official [installation instructions](https://www.truenas.com/docs/scale/gettingstarted/install/). These notes cover only what was specific to this install:

- **Installation media:** Ventoy didn't work, in either normal or GRUB2 mode. Write the ISO to the USB flash drive with [balenaEtcher](https://etcher.balena.io/) instead.
- **BIOS:** Disable Secure Boot before booting the installer.
