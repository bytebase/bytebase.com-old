---
title: Columns Cannot Have NULL Value
---

NULL is a special value. It can cause confusion or performance issues. Bytebase provides this rule to enforce that all columns cannot have NULL value. 

## How the rule works

Bytebase considers this rule to be violated if the SQL creates a column can have NULL value.

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.