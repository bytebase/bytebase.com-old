---
title: Backup
---

![backup-example](/static/docs/backup-example.png)

## Automatic weekly backup

<hint-block type="info">

Automatic weekly backup can be enabled/disabled by the Owner of the project owning the database, as well as the Workspace Owner and DBA.

</hint-block>

Whenever user (re-)enables the automatic backup, Bytebase will choose a random local time between 0:00 AM \~ 6:00 AM on Sunday.

You can use [webhook](/docs/administration/webhook-integration/database-webhook) to monitor backup status.

## Manual backup

<hint-block type="info">

User who is the member of the project owning the database, as well as the Workspace Owner and DBA can take manual backup.

</hint-block>

In addition to automatic backup, user can also take a manual backup whenever needed.
