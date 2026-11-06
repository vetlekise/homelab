---
title: Install TrueNAS
---

Install TrueNAS Community Edition (CE) on `scarif`, the NAS described in the [hardware reference](../reference/hardware.md). This guide records the steps used for this install. For full details, see the official [TrueNAS installation instructions](https://www.truenas.com/docs/scale/gettingstarted/install/).

## Before you begin

- A USB flash drive to use as installation media.
- A computer to create the installation media. These steps use macOS.
- Access to the NAS's BIOS settings, keyboard, and monitor.

## Create the installation media

1. Download the [TrueNAS CE 25.10.8 ISO](https://download.sys.truenas.net/TrueNAS-SCALE-Goldeye/25.10.8/TrueNAS-SCALE-25.10.8.iso). Other releases are on the [TrueNAS download page](https://www.truenas.com/download/).
1. Write the ISO to the USB flash drive with [balenaEtcher](https://etcher.balena.io/).

{{< callout type="info" >}}
  Ventoy didn't work for this install, in either normal or GRUB2 mode. Use balenaEtcher (or similar) instead.
{{< /callout >}}

## Install TrueNAS

1. Disable Secure Boot in the BIOS.
1. Plug in the USB flash drive and boot the NAS. It boots from the drive automatically.
1. Follow the installer prompts and install TrueNAS to the 240 GB SSD, which is the boot drive.
1. When the installer finishes, remove the USB flash drive and reboot.

## Network

TrueNAS gets its IP address from DHCP at first boot. Use that address to open the web interface in a browser.

The easiest way to find the address is the console on the NAS's monitor, which shows the web interface address. If you can't connect a monitor while the NAS is on the network, log in to the router, open the list of clients, and look for the TrueNAS machine.

The address is still DHCP-assigned. A DHCP reservation for the NAS's MAC address on the gateway is planned but not decided.

## Run long SMART tests

Before creating storage pools, run long SMART tests on the data drives to check for early failures.

1. In the web interface, go to **System** > **Shell**.
1. List the drives and note the names of the ones to test:

   ```sh
   lsblk
   ```

1. Start a long test on each drive, replacing `sdX` with the drive name:

   ```sh
   sudo smartctl -t long /dev/sdX
   ```

   The command returns immediately and the test runs in the background. A long test on a large HDD can take many hours.

1. Check the test results when the estimated completion time has passed:

   ```sh
   sudo smartctl -l selftest /dev/sdX
   ```
