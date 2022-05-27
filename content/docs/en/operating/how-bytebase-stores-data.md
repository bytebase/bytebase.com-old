---
title: How Bytebase Stores its Own Data
---

Bytebase manages its own data under the [--data](/docs/reference/command-line#--data-directory) directory. The data includes:

- Metadata when [--pg](/docs/reference/command-line#--pg-string) is not specified.
- Database Backup.

## Metadata

If [--pg](/docs/reference/command-line#--pg-string) is specified, the metadata will be stored in that external postgres database. Otherwise, Bytebase will store the metadata inside its internal postgres instance. The `pgdata` directory will be put under the `--data` directory.

## Database Backup

Bytebase allows users to take database [backups](/docs/features/backup-and-restore). The `backup` directory will be put under the `--data` directory.
