---
title: Disallow SELECT *
---

`SELECT *` introduces additional performance cost or ambiguous semantics.

For scenarios where all columns are not required, you should SELECT the columns you need to avoid getting uneeded data.

For scenarios where all columns are required, you should list all column names to avoid semantic ambiguity. Otherwise, the data consumer cannot know the column information. And `SELECT *` may bring additional modifications and errors when modifying the table schema.

![schema-review-query-select-no-select-all](/static/docs/schema-review-query-select-no-select-all.webp)

## How the rule works

Bytebase considers this rule to be violated if the SQL has `SELECT *`.

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
