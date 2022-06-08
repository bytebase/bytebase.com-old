---
title: Enforce the required columns in each table
---

For most projects, you may need some columns per table. For example, need `id` as identification and primary key for each table or need `created_ts` and `updated_ts` to record creation and modification times.

You can customize the columns you need.

## How the rule works

Bytebase defaults all tables meet the requirements. If SQL tries to create a table don't have all columns or drop required column, Bytebase considers this rule to be violated.

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.