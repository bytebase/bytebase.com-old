---
title: Drop database restriction
---

Can only drop the database if there's no table in it.
It requires users to drop tables first before dropping the database.

![schema-review-drop-empty-db](/static/docs/schema-review-drop-empty-db.webp)

## How the rule works

Bytebase checks if exist any table in the specific database.

Specifically, Bytebase checks:

- `DROP DATABASE` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
