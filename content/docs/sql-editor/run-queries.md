---
title: Run and EXPLAIN Query
---

<hint-block type="info">

SQL Editor default mode is read-only, which only supports running SELECT queries. If you attempt
to run DDL or DML change queries, SQL Editor will prompt you to create a new issue to start the
[SQL change workflow](/docs/change-database/change-workflow).

Workspace Owners and DBAs are allowed to execute any SQL statements in
[Admin Mode](/docs/sql-editor/admin-mode).

The read-only mode is not available for MongoDB, but you also can execute the statements in [Admin Mode](/docs/sql-editor/admin-mode).

</hint-block>

## Run query

Click the `Run` button or use the shortcut key `(⌘ + Enter)` to run your queries in the SQL Editor.

If you have multiple SQL queries separated by semicolons, SQL Editor will only run the first query for now.

## Explain query

SQL Editor provides an `Explain` button to run EXPLAIN on the selected query. You can click it or use the shortcut key `(⌘ + E)` instead of prepending EXPLAIN manually.

## Search Result

You can retrieve anything you want from query results quickly.

![Search Result](/static/docs/sql-editor/search-result.webp)

## Export Data

SQL Editor allows exporting query results to `CSV` or `JSON` files.

![Export Data](/static/docs/sql-editor/export-data.webp)
