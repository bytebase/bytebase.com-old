---
title: Require WHERE Clause
---

There are countless stories about people forgetting the WHERE clause in an UPDATE or DELETE and losing data. In queries, not using WHERE can also cause performance issues.

If you are sure you need to act on all data, use `WHERE 1=1` to remind yourself of the consequences of that action.

![schema-review-query-where-require](/static/docs-assets/schema-review-query-where-require.webp)

## How the rule works

Bytebase considers this rule to be violated if the SQL has not WHERE clause.

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.