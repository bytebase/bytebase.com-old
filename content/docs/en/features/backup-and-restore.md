---
title: Backup and Restore
---

Bytebase supports both automatic and manual backup at the database level. User can also restore the backup to a different database.

When Bytebase restores the backup to a new database, it also records the original parent database as well as a branch migration history linking with the restoring process.

Bytebase also supports enforcing [backup schedule policy](/docs/use-bytebase/environment-policy/backup-schedule-policy) for each environment. e.g. DBA can require the database in `production` environment to have `daily` backups.

![env-backup-configure](/static/docs/env-backup-configure.png)

<doc-link-block url="/docs/use-bytebase/backup-restore-database/overview" title="Backup and restore database"></doc-link-block>
