---
title: Index Naming Convention
---

The unified naming convention has become the de facto standard recognized by developers. And the same applies to database. Bytebase provides this rule to unified index naming convention.

## About convention format

`Index Naming Convention` uses `template` as format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the rules of the regular expression except the part with curly braces.

For example, `^idx_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the name of table and `{{column_list}}` is the list of the column name. So for index on `user(id, name)`, the legal name is `idx_user_id_name`.

![schema-review-naming-index-idx](/static/docs-assets/schema-review-naming-index-idx.png)

## How the rule works

Bytebase checks that all index names in DDL conform to naming conventions.

<hint-block type="info">

`Index Naming Convention` rule is only valid for index, which means it does **NOT** work for unique key, foreign key and primary key.
Also see [unique key naming convention](/docs/features/schema-review/naming-index-uk) and [foreign key naming convention](/docs/features/schema-review/naming-index-fk).

</hint-block>


Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME INDEX` statements
- `ALTER TABLE ADD CONSTRAINT` statements
- `CREATE INDEX` statements

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.