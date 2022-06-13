---
title: Unique Key Naming Convention
---

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the unique key naming convention.

## About convention format

`Unique Key Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^uk_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the table name and `{{column_list}}` is the list of the column name. So for unique key on `user(id, name)`, the legal name is `uk_user_id_name`.

![schema-review-naming-index-uk](/static/docs-assets/schema-review-naming-index-uk.webp)

## How the rule works

Bytebase checks that all unique key names in DDL conform to naming conventions.

<hint-block type="info">

`Unique Key Naming Convention` rule is only valid for unique key, which means it does **NOT** work for index, foreign key and primary key.
Also see [index naming convention](/docs/features/schema-review/naming-index-idx) and [foreign key naming convention](/docs/features/schema-review/naming-index-fk).

</hint-block>


Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME INDEX` statements
- `ALTER TABLE ADD CONSTRAINT` statements
- `CREATE INDEX` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.