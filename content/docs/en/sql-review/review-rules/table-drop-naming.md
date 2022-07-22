---
title: Drop naming convention for Table
---

Only tables named with specific naming patterns can be deleted. This requires users to do a rename and then drop the table.

The naming convention uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) format. By default the table name must have `_delete` suffix.

![schema-review-table-drop-naming](/static/docs/schema-review-table-drop-naming.webp)

## How the rule works

Bytebase checks that the table names in DDL conform to the naming conventions.

Specifically, Bytebase checks:

- `DROP TABLE` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
