---
title: Run long SMART tests
---

Check drives for early failures before you use them and again after any change. Run these commands in a shell on the machine that has the drives. On TrueNAS, go to **System** > **Shell**.

## Test a drive

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

## Record a baseline

1. Print the drive's health attributes:

   ```sh
   sudo smartctl -a /dev/sdX
   ```

1. Add the values to the [drive baselines](../../reference/drive-baselines.md) reference, identifying the drive by its serial number because device names can change between boots.
