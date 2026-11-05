# Hardware

## Networking

| Name | Role | Model | Documentation |
|------|------|-------|---------------|
| `corellia` | Gateway | Ubiquiti UniFi Dream Router 7 | [Link](https://techspecs.ui.com/unifi/cloud-gateways/udr7?subcategory=all-cloud-gateways) |
| `brentaal` | Switch | Ubiquiti UniFi Flex 2.5G Mini | [Link](https://techspecs.ui.com/unifi/switching/usw-flex-2-5g-5?subcategory=all-switching) |

## Servers

### coruscant

**Role:** Hypervisor

| Component | Specification | Notes |
|-----------|---------------|-------|
| Model | Dell OptiPlex 7060 SFF | |
| CPU | Intel Core i7-8700 | |
| Memory | 2 × 8 GB DDR4-2666 (Micron MTA8ATF1G64AZ-2G6E1) | |
| Memory | 2 × 8 GB DDR4-2666 (Corsair CMK16GX4M2A2666C16) | |
| Motherboard | Integrated (Dell) | |
| Storage | 1 × 256 GB SSD (Crucial BX200) | OS (Proxmox VE) |
| Storage | 1 × 512 GB NVMe SSD (Samsung PM9E1) | Node storage |
| Network | 1 × 1 GbE RJ45 | |

### scarif

**Role:** Network Attached Storage (NAS)

| Component | Specification | Notes |
|-----------|---------------|-------|
| Model | Custom build (Fractal Design Define R5 case) | |
| CPU | Intel Core i5-6500 | |
| Memory | 2 × 8 GB DDR4-2133 UDIMM CL15 (Crucial CTX8G4DFS8213.M8FB) | |
| Motherboard | MSI Z170A PC MATE | |
| Storage | 1 × 240 GB SSD (Kingston SUV400S37) | OS (TrueNAS CE) |
| Storage | 1 × 256 GB NVMe SSD (Samsung PM951) | Appdata pool |
| Storage | 2 × 14 TB HDD (Toshiba MG07ACA14TE) | Mirror pool |
| Network | 1 × 1 GbE RJ45 | |
| Network | ~~1 × 2.5 GbE RJ45 (TBD)~~ | |
| Network | 1 × Wi-Fi 6E + Bluetooth (Gigabyte GC-WBAX200) | |
| Optical Drive | DVD (ASUS DRW-24B1ST) | |
