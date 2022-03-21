---
title: SQL Advisor
order: 30300
---

# SQL Advisor

Bytebase provides automatic SQL lint to check common issues in schema change process.

![sql-advisor](/docs-assets/sql-advisor.png)

It currently supports following checks:

- [Backward incompatible schema change](backward-compatibility-migration-check.md)
- Database connection failure
- Syntax error
- Migration schema missing (the internal bytebase schema recording the migration history)
