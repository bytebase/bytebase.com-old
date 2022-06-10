---
title: Foreign Key Naming Convention
---

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the foreign key naming convention.

## About convention format

`Foreign Key Naming Convention` uses `template` as format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the rules of the regular expression except the part with curly braces.

For example, `^fk_{{referencing_table}}_{{referencing_column}}_{{referenced_table}}_{{referenced_column}}$` is a `template` where `{{referencing_table}}` is the name of referencing table, `{{referencing_column}}` is the list of the referencing column name, `{{referenced_table}}` is the name of referenced table and `{{referenced_column}}` is the list of the referencing column name. So for unique key on `user(id, name)`, the legal name is `uk_user_id_name`.

![schema-review-naming-index-fk](/static/docs-assets/schema-review-naming-index-fk.webp)

## How the rule works

Bytebase checks that all foreign key names in DDL conform to naming conventions.

<hint-block type="info">

`Foreign Key Naming Convention` rule is only valid for foreign key, which means it does **NOT** work for index, unique key and primary key.
Also see [index naming convention](/docs/features/schema-review/naming-index-idx) and [unique key naming convention](/docs/features/schema-review/naming-index-uk).

</hint-block>


Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE ADD CONSTRAINT` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.