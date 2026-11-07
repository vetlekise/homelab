---
title: Drive Baselines
---

SMART baselines for the drives in the [hardware reference](hardware.md). Each drive has its own section, identified by serial number because device names such as `/dev/sda` can change between boots. To record a new baseline, see [Run long SMART tests](../guides/truenas/install-truenas.md#run-long-smart-tests).

When you re-test a drive, add a column with the new date. Compare it against the first column. Reallocated sectors, pending sectors, offline uncorrectable sectors, and CRC errors that rise above 0 are early warning signs.

## Toshiba MG07ACA14TE `X840A01NF94G`

| Attribute | 2026-11-07 |
|-----------|------------|
| Overall health | PASSED |
| Extended self-test | Completed without error |
| Power-on hours | 56355 |
| Power cycles | 26 |
| Reallocated sectors | 0 |
| Current pending sectors | 0 |
| Offline uncorrectable | 0 |
| UDMA CRC errors | 0 |
| Temperature (min/max) | 34 °C (17/49) |

## Toshiba MG07ACA14TE `X8D0A0EXF94G`

| Attribute | 2026-11-07 |
|-----------|------------|
| Overall health | PASSED |
| Extended self-test | Completed without error |
| Power-on hours | 56354 |
| Power cycles | 26 |
| Reallocated sectors | 0 |
| Current pending sectors | 0 |
| Offline uncorrectable | 0 |
| UDMA CRC errors | 0 |
| Temperature (min/max) | 35 °C (17/51) |
