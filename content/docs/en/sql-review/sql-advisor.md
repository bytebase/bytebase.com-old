---
title: SQL Advisor
---

Bytebase provides automatic SQL lint to check common issues in schema change process.

![sql-advisor](/static/docs/schema-review-engine-mysql-use-innodb.webp)

It currently supports following checks:

- [SQL Review Rules](/docs/sql-review/review-rules/overview)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)

## SQL Review Action

Bytebase also provide the [SQL Review Action](https://github.com/bytebase/sql-review-action) to let users integrate the SQL review into their GitHub CI.

<hint-block type="info">

The SQL Review Action is free to use, don't need any subscription plan.

</hint-block>

1. [Configure and download](https://www.bytebase.com/sql-review-guide) the SQL review rules.
2. Use the [Bytebase SQL Review Action](https://github.com/marketplace/actions/bytebase-sql-review) in your GitHub repository.
