---
title: SQL Advisor UI
---

SQL advisor runs automatic SQL checks when:

- Schema or data change
- Data query


## Schema or data change process

On a specific issue page, the advisor will run automatically after creation:

![sql-advisor](/static/docs/schema-review-engine-mysql-use-innodb.webp)

It currently supports the following checks:

- [SQL Review Rules](/docs/sql-review/review-policy/overview)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)

## Data query process

In [SQL Editor](/docs/sql-editor/overview), when you run a query, the advisor will run automatically:

![sql-editor-warning](/static/docs/sql-review/sql-editor-warning.webp)