---
title: Use gh-ost in Bytebase
description: This guide shows you how to use gh-ost to migrate your MySQL databases in Bytebase. 
---

gh-ost is a triggerless online schema migration tool for MySQL.

All existing online-schema-change tools operate similarly: they create a ghost table in the likeness of your original table, migrate that table while empty, slowly and incrementally copy data from your original table to the ghost table, meanwhile propagating ongoing changes (any INSERT, DELETE, UPDATE applied to your table) to the ghost table. Finally, at the right time, they replace your original table with the ghost table.

Bytebase uses the power of gh-ost to help users migrate MySQL databases with little downtime.

<hint-block type="warning">

This is currently a preview feature. Data loss is possible.

</hint-block>

## Requirements

- MySQL versions 5.7 or greater.
- Enable row-based logging.
- Bytebase currently only supports migrating on main.

## Limitations

- Foreign key constraints are not supported.
- Triggers are not supported.

For an exhaustive list, please refer to this [doc](https://github.com/github/gh-ost/blob/master/doc/requirements-and-limitations.md).

## How to use

### Step 1 - Create an alter schema issue

Click “Alter Schema” on the database page.

![The database detail page with "alter schema" button highlighted](/static/docs/gh-ost-step-1-1.webp)

Choose “Online migration” and click “Next”.

![The migration mode option popup with online migration selected](/static/docs/gh-ost-step-1-2.webp)

The online migration mode has two tasks: The first task syncs your data to the ghost table. The second task replaces your original table with the ghost table.

Select “Sync data” and enter your SQL statements in the editor. After that, click “Create”.

![The create issue page](/static/docs/gh-ost-step-1-3.webp)

### Step 2 - Approve the sync task

After creating the issue, you should see something like this.

![The issue detail page where gh-ost sync task is waiting approval.](/static/docs/gh-ost-step-2-1.webp)

Make sure that the gh-ost sync task check is passing. Then click “Approve” to run the sync task

![The task check result of gh-ost sync task, and gh-ost dry run passed](/static/docs/gh-ost-step-2-2.webp)

The sync task reads rows on the original table and writes them to the ghost table, meanwhile propagating changes in the original table to the ghost table so that the ghost table can catch up with the original table.

Behind the scenes, gh-ost will create two tables:

- The changelog table: `~yourtablename_{timestamp}_ghc`
- The ghost table: `~yourtablename_{timestamp}_gho`

If anything goes wrong, manually drop these two tables: `~yourtablename_{timestamp}_gho` and `~yourtablename_{timestamp}_ghc`, then retry.

### Step 3 - Approve the cutover task

Depending on your table size, the sync task could take some time to process. When the difference between the ghost table and the original table is small enough, the sync task automatically completes.

The cutover task atomically renames `yourtablename`, `~yourtablename_{timestamp}_gho` to `~yourtablename_{timestamp}_del`, `yourtablename` respectively to switch the original table and the ghost table.

Click “Approve” to perform the cutover task.

![The issue detail page where the cutover task is waiting approval.](/static/docs/gh-ost-step-3-1.webp)

### Step 4 - Delete `~yourtablename_{timestamp}_del` after migration

After migration, the original table is renamed to `~yourtablename_{timestamp}_del`. Make sure there is no data loss, then manually drop the original table if you wish. You can check the table by clicking “Show Bytebase reserved tables” on the database page.

![A table list where "Show Bytebase reserved tables" button is highlighted](/static/docs/gh-ost-step-4-1.webp)
![A table list which also shows reserved tables](/static/docs/gh-ost-step-4-2.webp)

## Interact with gh-ost

Gh-ost listens on a UNIX socket file.

The UNIX socket file name is `/tmp/gh-ost.{taskID}.{databaseID}.{databaseName}.{tableName}.sock`

To find the UNIX socket file, we must acquire the database id and task id.

![The issue detail page with task and task id highlighted](/static/docs/gh-ost-step-5-1.webp)
![The database detail page with database id highlighted](/static/docs/gh-ost-step-5-2.webp)

In this example, my socket file name is `/tmp/gh-ost.109.103.db.sbtest2.sock`

### Show gh-ost status

<hint-block type="info">

Replace taskID, databaseID, databaseName and tableName accordingly.

</hint-block>

If Bytebase is running on docker, show gh-ost status with the command below:

```bash
docker exec -it bytebase /bin/sh
```

```bash
echo "status" | nc local:/tmp/gh-ost.taskID.databaseID.databaseName.tableName.sock
```

Otherwise, execute the command below:

```bash
echo "status" | nc -U /tmp/gh-ost.taskID.databaseID.databaseName.tableName.sock
```

### Kill gh-ost manually

<hint-block type="info">

Replace taskID, databaseID, databaseName and tableName accordingly.

</hint-block>

Sometimes you want to kill gh-ost. Maybe it’s because gh-ost is so slow, or you find a typo in your sql statement.
To kill gh-ost, we issue “panic” to the UNIX socket file on which gh-ost listens.

If Bytebase is running on docker, execute the command below to kill gh-ost:

```bash
docker exec -it bytebase /bin/sh
```

```bash
echo "panic" | nc local:/tmp/gh-ost.taskID.databaseID.databaseName.tableName.sock
```

Otherwise, run the command below:

```bash
echo "panic" | nc -U /tmp/gh-ost.taskID.databaseID.databaseName.tableName.sock
```

After that, you have to do the cleanup.

Remove these two files:

- `/tmp/gh-ost.taskID.databaseID.databaseName.tableName.sock`
- `/tmp/gh-ost.taskID.databaseID.databaseName.tableName.postponeFlag`

Drop these two tables:

- `~yourtablename_{timestamp}_gho`
- `~yourtablename_{timestamp}_ghc`
