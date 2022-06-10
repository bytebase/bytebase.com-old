---
title: Enforce the Required Columns in Each Table
---

For most projects, you may want to enforce some columns for every table. For example, need `id` as identification and the primary key for each table or need `created_ts` and `updated_ts` to record creation and modification times.

You can customize the columns you need.

![schema-review-column-no-null](/static/docs-assets/schema-review-column-no-null.png)

## How the rule works

Bytebase defaults all tables meet the requirements. If SQL tries to create a table don't have all columns or drop required column, Bytebase considers this rule to be violated.

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.