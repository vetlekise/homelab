---
title: Back up the TrueNAS config
---

Save the TrueNAS configuration of `scarif` so you can restore it after a boot drive failure.

{{< callout type="warning" >}}
  This manual process is temporary and should be automated later.
{{< /callout >}}

## Back up the config

1. [Download the system configuration](https://www.truenas.com/docs/scale/25.10/scaleuireference/systemsettings/advancedsettingsscreen/#manage-configuration) and keep **Export Password Secret Seed** selected. Without the seed, a restore empties encrypted fields, which breaks services such as SMB local accounts and apps.
1. On your PC, encrypt the file because it contains secrets. Use a long passphrase and store it in your password manager:

   ```sh
   gpg --symmetric --cipher-algo AES256 truenas-config.tar
   ```

1. Upload the `.gpg` file to Google Drive and delete the unencrypted copy.

## Restore the config

1. Install TrueNAS on the new boot drive.
1. Download the `.gpg` file and decrypt it:

   ```sh
   gpg -d truenas-config.tar.gpg > truenas-config.tar
   ```

1. [Upload the decrypted file](https://www.truenas.com/docs/scale/25.10/scaleuireference/systemsettings/advancedsettingsscreen/#manage-configuration). The system reboots.
1. If the `tank` pool doesn't appear, [import it](https://www.truenas.com/docs/scale/25.10/scaletutorials/storage/importpoolscale/).
1. Delete the decrypted copy.
