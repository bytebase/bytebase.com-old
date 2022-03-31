---
title: SQL Advisor
order: 30400
---

# SQL Advisor

Bytebase provides automatic SQL lint to check common issues in schema change process.

![sql-advisor](/static/docs-assets/sql-advisor.png)

It currently supports following checks:

- [Backward incompatible schema change](/docs/features/sql-advisor/backward-compatibility-migration-check)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)
