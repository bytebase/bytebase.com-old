---
title: Run/Explain Queries
order: 30402
---

# Run/Explain Queries

<hint-block type="info">

Please note that SQL Editor only supports running SELECT queries now. SQL will detect your SQL queries. If you are running DDL or DML change queries, it will prompt you to create a new issue to start the SQL review process.

</hint-block>

## Run query

Click the `Run` button or use the shortcut key `(⌘ + Enter)` to run your queries in SQL Editor.

Use semicolons to separate multiple SQL queries. SQL Editor only runs the first query now.

## Explain Queries

SQL Editor provides a button next to the `Run` one to run Explain queries. You can click it or use the shortcut key `(⌘ + E)` to run Explain SQL queries instead of writing them manually.

```sql
# Run Query
SELECT * FROM xxx;

# Explain Query
EXPLAIN SELECT * FROM xxx;
```
