---
title: Enforce the Required Columns in Each Table
---

For most projects, you may want to enforce some columns for every table. For example, need `id` as identification and the primary key for each table or need `created_ts` and `updated_ts` to record creation and modification times.

You can customize which columns are required.

![schema-review-column-required](/static/docs/schema-review-column-required.webp)

## How the rule works

Bytebase defaults all tables to meet the requirements. If the SQL tries to define a table not having all the required columns or attempts to drop the required column, Bytebase considers this rule to be violated.

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
