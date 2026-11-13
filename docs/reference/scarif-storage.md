---
title: Scarif - Storage Layout
---

Pools, datasets, and shares on `scarif`, the NAS described in the [hardware reference](hardware.md).

## Pools

| Pool | Drives | Layout | Purpose | Why |
|------|--------|--------|---------|-----|
| `tank` | 2 × 14 TB HDD | Mirror | Media, documents, backups | Survives one drive failure. The only redundant layout for two drives. Grow it with a second mirror vdev |
| `appdata` | 1 × 256 GB NVMe SSD | Single disk | Application data (planned) | SSD latency, away from bulk transfers. No redundancy, so back it up |

- The 240 GB SSD is the TrueNAS boot pool. Don't store data on it.
- `tank` has only a data vdev. No log, cache, spare, metadata, or dedup vdevs: nothing here needs them.

## Datasets

```text
tank
├── media
│   ├── downloads
│   ├── movies
│   ├── shows
│   ├── music
│   ├── books
│   └── games
├── documents
├── pictures
└── backups
    └── proxmox
```

`downloads`, `movies`, `shows`, `music`, `books`, and `games` are folders in the `media` dataset, not separate datasets.
`pictures` is a dataset root for personal photos and videos; it has no subfolders.

| Dataset | Record size | Access time | Snapshots | Quota | Status |
|---------|-------------|-------------|-----------|-------|--------|
| `tank/media` | 1 MiB | Off | None | None | Created |
| `tank/documents` | 128 KiB (default) | Off | Daily, 4 weeks | None | Created |
| `tank/pictures` | 128 KiB (default) | Off | None | None | Planned |
| `tank/backups` | 128 KiB (default) | Off | None | 1 TiB | Created |

All datasets use the default LZ4 compression and no encryption.

### Why these settings

| Setting | Reason |
|---------|--------|
| Record size 1 MiB on `media` | Files are large, written once, and read sequentially, so bigger blocks mean fewer I/O operations. Small files, such as GBA ROMs, still use a block sized to the file |
| Default record size elsewhere | Documents, pictures, and backups have mixed file sizes |
| Access time off | Avoids a write on every read |
| One `media` dataset | Hardlinks and instant moves only work inside one dataset, so imports from `downloads` don't copy. It also gives one NFS export, because hardlinks fail across NFS mounts. Moving data between datasets later copies it, so split only for per-type quotas or snapshots |
| Daily snapshots on `documents` | Irreplaceable and slow-changing, so snapshots are cheap. They live in the same pool, so also back the dataset up elsewhere |
| No snapshots on `media`, `pictures`, and `backups` | `media` can be fetched again, `pictures` is a secondary copy of the Google Cloud library, and backup tools maintain their own history. Snapshots of deleted files keep using space |
| Quota on `backups` | Stops backups from filling the pool. 1 TiB covers VM backups for now, so raise it when needed. Keep the pool below about 80% full |
| LZ4 compression | The default, with negligible cost. Media and pictures don't compress much, but documents and backups often do |
| No encryption | It can only be enabled at dataset creation, and a lost key means lost data. The only threat it covers is drive theft. To add it later, copy the data into a new encrypted dataset |

## Shares

| Dataset | Protocol | Clients | Notes |
|---------|----------|---------|-------|
| `tank/media` | SMB | Desktops | Multi-protocol preset, because the dataset is also shared over NFS |
| `tank/media` | NFS | Kubernetes nodes (planned) | Read-write. Mount the whole export so `downloads` and the library share one mount. Restrict authorized hosts |
| `tank/documents` | SMB | Desktops | |
| `tank/pictures` | SMB | Desktops | Planned |
| `tank/backups/proxmox` | NFS | Proxmox (planned) | |

Sharing one dataset over both SMB and NFS is the exception, because their permission models can conflict. Test access from both sides.

## Permissions

Each dataset has its own read-write group, so access can be granted per dataset. Name groups `<dataset>-<access>`, so a read-only group can be added later as `media-ro`.

| Dataset | Group | Members | Status |
|---------|-------|---------|--------|
| `tank/media` | `media-rw` | Your user. Later, the Kubernetes service user | Created |
| `tank/documents` | `documents-rw` | Your user | Created |
| `tank/pictures` | `pictures-rw` | Your user | Planned |
| `tank/backups` | `backups-rw` | Backup service users | Created |

Create each group with **SMB Group** on and no sudo or privileges.

Every dataset uses the same POSIX ACL, with `<group>` as its group. Start from the `POSIX_RESTRICTED` preset, then add the named Group and Mask entries below. The owner is `root` and the owner group is `<group>`. Each entry exists twice, once for the folder and once as a **Default** entry that new files and folders inherit.

| Entry | Access |
|-------|--------|
| User Obj | `root`: read, write, execute |
| Group Obj | Read, write, execute. The owning group: `<group>` on the dataset root, the creator's primary group on new files |
| Group | `<group>`: read, write, execute |
| Mask | Read, write, execute |
| Other | None |

- **Named Group entry:** New files belong to their creator's primary group, so Group Obj alone wouldn't give `<group>` access.
- **Mask:** TrueNAS requires one when there is a named group entry. It caps group access, so keep it at read, write, and execute.
- **Other:** No access, so only `root` and members of `<group>` can reach the data.
- **SMB clients:** Log in as a TrueNAS user in `<group>` with Samba authentication on.
- **NFS clients (planned):** Map all access to a service user in `<group>`.
- **Verify:** Run `sudo getfacl <path>` in the TrueNAS shell. A new file should show `group:<group>`.

## Maintenance

| Task | Schedule | Why |
|------|----------|-----|
| Scrub `tank` | Monthly | Finds silent corruption by checking every block against its checksum |
| Short SMART test | Weekly | Quick check for obvious drive problems |
| Long SMART test | Monthly | Reads the whole surface to find weak sectors |
| Email alerts | Always on | Failures go unnoticed otherwise |
| Export the TrueNAS configuration | Weekly, and before each upgrade | Restores users, shares, and settings after a rebuild. Store a copy off the NAS, such as in cloud storage |

The configuration export contains secrets, so keep it encrypted and document where it's stored, as [ADR 0005](../concepts/architecture/adr/0005-automation-first.md) requires.

Record SMART readings in [Drive baselines](drive-baselines.md) after each long test.
