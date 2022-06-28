---
title: Disaster Recovery
---

# Point-in-time Recovery for MySQL

Point-in-time Recovery (for MySQL), also known as PITR, enables you to recover your database to any point in the history with valid logical backups and archived binlog files. PITR is a complicated task involving a series of operations and a deep understanding of the database, often requiring an experienced DBA. And it is always performed under dramatic pressure because you always wish to recover the database to a previous healthy state when disaster happens, such as accidentally dropped tables or columns, new release corrupted data, etc.

Bytebase provides an all-in-one solution to ease the PITR process with a few clicks and a straightforward UI to present the essential progress information.

## Backup

It’s recommended to follow the [doc for backup](/docs/use-bytebase/backup-restore-database/backup) to set up automatic backups. Bytebase will check that an instance meeds all the prerequisites and automatically archives binlog files.

Note that you can only restore to the point of time after a valid backup.

## Restore

The restoration process involves several steps.

### Step 1 - Click the **Restore to point in time** button on the database page.

![pitr-restore-step-1](/static/docs-assets/pitr-restore-step-1.png)

### Step 2 - Choose a target time to restore.

After PITR is done, the current database will be restored to the state before but not including the target time. For example, if you give the restore time 10:00:00, Bytebase would recover the database to the state just after 9:59:59 passed but before 10:00:00.

Note that the time is at the local timezone of your browser.

![pitr-restore-step-2](/static/docs-assets/pitr-restore-step-2.png)

Once you click the Confirm button, a new PITR issue will be created.

### Step 3 - Approve the Restore task.

The PITR issue consists of two tasks. The first task is to perform a recovery to the point in time you chose in the last step in a temporary database. It does not affect your current database.

Click the Approve button to approve the first Restore task.

![pitr-restore-step-3](/static/docs-assets/pitr-restore-step-3.png)

And it should succeed like this.

![pitr-restore-step-4](/static/docs-assets/pitr-restore-step-4.png)

### Step 4 - Approve the Swap task.

The second task is called Swap. It will swap the recovered temporary database with your current database. After the Swap task, your current database will be at the state of the point in time you chose to restore, and the original database will be renamed by appending a timestamp (the issue created time) and an _old suffix. You could check the old database and use the data or just delete it to save storage space.

Note that you must stop ongoing queries on the current database before approving the Swap task.

Click the Approve button to approve the second Swap task.

It should succeed like this.

![pitr-restore-step-5](/static/docs-assets/pitr-restore-step-5.png)

Now you successfully performed a Point-in-time Recovery to your database!

# General Disaster Recovery Operations

## **Periodically snapshot the entire** [**--data**](/docs/reference/command-line#--data-directory) **directory**

<hint-block type="info">

You should periodically backup the entire [--data](/docs/reference/command-line#--data-directory) directory.

</hint-block>

If Bytebase is running and not in the [readonly](/docs/reference/command-line#--readonly) mode, and you want to take the backup, then the underlying data volume must support snapshot feature where the entire directory can take a snapshot at the same time, otherwise it may produce a corrupted backup bundle.
