---
title: SQL Advisor
---

Bytebase provides automatic SQL lint to check common issues in schema change process.

![sql-advisor](/static/docs/schema-review-engine-mysql-use-innodb.webp)

It currently supports following checks:

- [Schema review](/docs/features/schema-review/overview)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)
