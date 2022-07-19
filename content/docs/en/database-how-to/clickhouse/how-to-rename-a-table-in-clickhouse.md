---
title: How to Rename a Table in ClickHouse
---

You have a table `employee` in a database `db_how_to`. The example below is to rename `employee` to `employee_new`:

```bash
RENAME TABLE db_how_to.employee TO db_how_to.employee_new
```
Then you can run the following command to verify:

```bash
SHOW TABLES FROM db_how_to
```