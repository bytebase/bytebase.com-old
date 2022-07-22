---
title: Index Naming Convention
---

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the index naming convention.

## About convention format

`Index Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^idx_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the table name and `{{column_list}}` is the list of the column name. So for index on `user(id, name)`, the legal name is `idx_user_id_name`.

It also limits the naming max length. The default maximum length is 64 characters.

![schema-review-naming-index-idx](/static/docs/schema-review-naming-index-idx.webp)

## How the rule works

Bytebase checks that all index names in DDL conform to the naming conventions.

<hint-block type="info">

`Index Naming Convention` rule is only valid for index, which means it does **NOT** work for unique key, foreign key and primary key.
Also see [unique key naming convention](/docs/sql-review/review-rules/naming-index-uk) and [foreign key naming convention](/docs/sql-review/review-rules/naming-index-fk).

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
