---
title: SQL Advisor UI
---

Bytebase provides automatic SQL lint to check common issues in schema change process.

![sql-advisor](/static/docs/schema-review-engine-mysql-use-innodb.webp)

It currently supports following checks:

- [SQL Review Rules](/docs/sql-review/review-rules/overview)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)