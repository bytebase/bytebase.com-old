---
title: Columns No NULL Value
---

NULL is a special value. It can cause confusion or performance issues. Bytebase provides this rule to enforce that all columns cannot have NULL value. 

![schema-review-column-no-null](/static/docs-assets/schema-review-column-no-null.png)

## How the rule works

Bytebase considers this rule to be violated if the SQL defines a column allowing NULL value.

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.