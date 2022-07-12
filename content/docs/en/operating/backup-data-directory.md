---
title: Backup Data Directory
---

Bytebase manages its own data under the [--data](/docs/reference/command-line#--data-directory) directory. The data includes:

- Metadata when [--pg](/docs/reference/command-line#--pg-string) is not specified.
- Database Backup.

<hint-block type="info">

You should periodically backup the entire [--data](/docs/reference/command-line#--data-directory) directory.

</hint-block>

If Bytebase is running and not in the [readonly](/docs/reference/command-line#--readonly) mode, and you want to take the backup, then the underlying data volume must support snapshot feature where the entire directory can take a snapshot at the same time, otherwise it may produce a corrupted backup bundle.

## Metadata

If [--pg](/docs/reference/command-line#--pg-string) is specified, the metadata will be stored in that external postgres database. Otherwise, Bytebase will store the metadata inside its internal postgres instance. The `pgdata` directory will be put under the `--data` directory.

## Database Backup

Bytebase allows users to take database [backups](/docs/features/backup-restore-database/overview). The `backup` directory will be put under the `--data` directory.
