---
title: Supported Rules
---

## Engine

<h3 id="engine.mysql.use-innodb">Require InnoDB</h3>

InnoDB is the default storage engine of MySQL 5.5+. It provides powerful transaction features. Normally, using InnoDB as the storage engine is the only option. Bytebase provides this rule to catch all scenarios where other engines are attempted.

![schema-review-engine-mysql-use-innodb](/static/docs/schema-review-engine-mysql-use-innodb.webp)

#### How the rule works

Bytebase defaults MySQL to use InnoDB storage engine.

So if the following situation occurs, Bytebase considers this rule to be violated:

- Explicitly specify other storage engines when creating tables. e.g. `CREATE TABLE t(id int) ENGINE = CSV`
- Explicitly specify other storage engines when `ALTER TABLE`. e.g. `ALTER TABLE t ENGINE = CSV`
- Try to set `default_storage_engine` other than InnoDB. e.g. `SET default_storage_engine = CSV`

#### Support database engine

- MySQL

## Naming

<h3 id="naming.table">Table naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the table naming convention.

#### About convention format

`Table Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) as the format for naming pattern, and also limits the naming max length. The default maximum length is 64 characters. Length limit does not support PostgreSQL.

##### Some typical format

| Name             | Regular Expression       |
| ---------------- | ------------------------ |
| snake_lower_case | `^[a-z]+(_[a-z]+)*$`     |
| CamelCase        | `^([A-Z][a-z]*)+$`       |
| lowerCamelCase   | `^[a-z]+([A-Z][a-z]*)*$` |
| kebab-case       | `^[a-z]+(-[a-z]+)*$`     |

![schema-review-naming-table](/static/docs/schema-review-naming-table.webp)

#### How the rule works

Bytebase checks that all table names in DDL conform to the naming conventions.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE RENAME TO` statements
- `RENAME TABLE` statements

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="naming.column">Column naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the column naming convention.

#### About convention format

`Column Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) format for naming pattern, and also limits the naming max length. The default maximum length is 64 characters. Length limit does not support PostgreSQL.

##### Some typical format

| Name             | Regular Expression       |
| ---------------- | ------------------------ |
| snake_lower_case | `^[a-z]+(_[a-z]+)*$`     |
| CamelCase        | `^([A-Z][a-z]*)+$`       |
| lowerCamelCase   | `^[a-z]+([A-Z][a-z]*)*$` |
| kebab-case       | `^[a-z]+(-[a-z]+)*$`     |

![schema-review-naming-column](/static/docs/schema-review-naming-column.webp)

#### How the rule works

Bytebase checks that all column names in DDL conform to the naming conventions.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE RENAME COLUMN` statements
- `ALTER TABLE ADD COLUMNS` statements
- `ALTER TABLE CHANGE COLUMN` statements

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="naming.index.idx">Index naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the index naming convention.

#### About convention format

`Index Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^idx_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the table name and `{{column_list}}` is the list of the column name. So for index on `user(id, name)`, the legal name is `idx_user_id_name`.

It also limits the naming max length. The default maximum length is 64 characters. Length limit does not support PostgreSQL.

![schema-review-naming-index-idx](/static/docs/schema-review-naming-index-idx.webp)

#### How the rule works

Bytebase checks that all index names in DDL conform to the naming conventions.

<hint-block type="info">

`Index Naming Convention` rule is only valid for index, which means it does **NOT** work for unique key, foreign key and primary key.
Also see primary key naming, unique key naming convention and foreign key naming convention.

</hint-block>

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE RENAME INDEX` statements
- `ALTER TABLE ADD CONSTRAINT` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="naming.index.pk">Primary key naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the primary key naming convention.
This rule does **NOT** support MySQL and TiDB. Because the name of a PRIMARY KEY is always PRIMARY in MySQL and TiDB.

#### About convention format

`Primary Key Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^pk_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the table name and `{{column_list}}` is the list of the column name. So for primary key on `user(id, name)`, the legal name is `pk_user_id_name`.

![schema-review-naming-index-pk](/static/docs/schema-review-naming-index-pk.webp)

#### How the rule works

Bytebase checks that all index names in DDL conform to the naming conventions.

<hint-block type="info">

`Primary Key Naming Convention` rule is only valid for primary key, which means it does **NOT** work for unique key, foreign key and normal index.
Also see index naming convention, unique key naming convention and foreign key naming convention.

</hint-block>

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER INDEX RENAME TO` statements
- `ALTER TABLE ADD CONSTRAINT` statements

#### Support database engine

- PostgreSQL

<h3 id="naming.index.uk">Unique key naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the unique key naming convention.

#### About convention format

`Unique Key Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^uk_{{table}}_{{column_list}}$` is a `template` where `{{table}}` is the table name and `{{column_list}}` is the list of the column name. So for unique key on `user(id, name)`, the legal name is `uk_user_id_name`.

It also limits the naming max length. The default maximum length is 64 characters. Length limit does not support PostgreSQL.

![schema-review-naming-index-uk](/static/docs/schema-review-naming-index-uk.webp)

#### How the rule works

Bytebase checks that all unique key names in DDL conform to the naming conventions.

<hint-block type="info">

`Unique Key Naming Convention` rule is only valid for unique key, which means it does **NOT** work for index, foreign key and primary key.
Also see index naming convention, primary key naming convention and foreign key naming convention.

</hint-block>

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE RENAME INDEX` statements
- `ALTER TABLE ADD CONSTRAINT` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="naming.index.fk">Foreign key naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the foreign key naming convention.

#### About convention format

`Foreign Key Naming Convention` uses `template` format. Specifically, the `template` is an extended [regular expression](https://en.wikipedia.org/wiki/Regular_expression). The rest follows the regular expression rules except the part with curly braces.

For example, `^fk_{{referencing_table}}_{{referencing_column}}_{{referenced_table}}_{{referenced_column}}$` is a `template` where `{{referencing_table}}` is the name of the referencing table, `{{referencing_column}}` is the list of the referencing column name, `{{referenced_table}}` is the name of the referenced table and `{{referenced_column}}` is the list of the referencing column name. So for unique key on `user(id, name)`, the legal name is `uk_user_id_name`.

It also limits the naming max length. The default maximum length is 64 characters. Length limit does not support PostgreSQL.

![schema-review-naming-index-fk](/static/docs/schema-review-naming-index-fk.webp)

#### How the rule works

Bytebase checks that all foreign key names in DDL conform to the naming conventions.

<hint-block type="info">

`Foreign Key Naming Convention` rule is only valid for foreign key, which means it does **NOT** work for index, unique key and primary key.
Also see index naming convention, primary key naming convention and unique key naming convention.

</hint-block>

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE ADD CONSTRAINT` statements

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

## Query

<h3 id="statement.select.no-select-all">Disallow SELECT *</h3>

`SELECT *` introduces additional performance cost or ambiguous semantics.

For scenarios where all columns are not required, you should SELECT the columns you need to avoid getting uneeded data.

For scenarios where all columns are required, you should list all column names to avoid semantic ambiguity. Otherwise, the data consumer cannot know the column information. And `SELECT *` may bring additional modifications and errors when modifying the table schema.

![schema-review-query-select-no-select-all](/static/docs/schema-review-query-select-no-select-all.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL has `SELECT *`.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="statement.where.require">Require WHERE</h3>

There are countless stories about people forgetting the WHERE clause in an UPDATE or DELETE and losing data. In queries, not using WHERE can also cause performance issues.

If you are sure you need to act on all data, use `WHERE 1=1` to remind yourself of the consequences of that action.

![schema-review-query-where-require](/static/docs/schema-review-query-where-require.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL has no WHERE clause.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="statement.where.no-leading-wildcard-like">Disallow leading % in LIKE</h3>

Database cannot use an index to match entries when there is a leading wildcard. It can cause serious performance problems because it may scan the entire table.

![schema-review-query-where-no-leading-wildcard-like](/static/docs/schema-review-query-where-no-leading-wildcard-like.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL has leading wildcard LIKE.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

## Table

<h3 id="table.require-pk">Require primary key</h3>

In almost all cases, each table needs a primary key.

e.g. in MySQL, [the InnoDB storage engine always creates a primary key](https://dev.mysql.com/doc/refman/8.0/en/innodb-index-types.html) if you didn't specify it explicitly or didn't create a unique key, thus making an extra column you don't have access to.

![schema-review-table-require-pk](/static/docs/schema-review-table-require-pk.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL tries to create a no primary key table or drop the primary key. If the SQL drops all columns in the primary key, Bytebase also considers that this SQL drops the primary key.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="table.no-foreign-key">Disallow foreign key</h3>

This rule disallows users to create foreign key in the table.

A foreign key is a logical association of rows between two tables, in a parent-child relationship. A row in a "parent" table may be referenced by one or more rows in a "child" table.

`FOREIGN KEY` constraints are impossible to maintain once your data grows and is split over multiple database servers. This typically happens when you introduce functional partitioning/sharding and/or horizontal sharding.

![schema-review-table-no-fk](/static/docs/schema-review-table-no-fk.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL tries to:

- `CREATE TABLE` statement with foreign key
- `ALTER TABLE ADD CONSTRAINT FOREIGN KEY` statement

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="table.drop-naming-convention">Drop naming convention</h3>

Only tables named with specific naming patterns can be deleted. This requires users to do a rename and then drop the table.

The naming convention uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) format. By default the table name must have `_del` suffix.

![schema-review-table-drop-naming](/static/docs/schema-review-table-drop-naming.webp)

#### How the rule works

Bytebase checks that the table names in DDL conform to the naming conventions.

Specifically, Bytebase checks:

- `DROP TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

## Schema

<h3 id="schema.backward-compatibility">Backward incompatible schema change</h3>

Introducing backward incompatible schema changes is one of the most common mistakes made by developers. And enforcing backward compatible schema change is the standard practice adopted by many engineering organizations. Bytebase provides the built-in backward compatible check to catch all common incompatible schema change [scenarios](https://www.bytebase.com/doc/error#backward-incompatible-migration).

![schema-review-schema-backward-compatibility](/static/docs/schema-review-schema-backward-compatibility.webp)

#### How the rule works

If the following situation occurs, Bytebase considers this rule to be violated:

- Drop database
- Rename table/view
- Drop table/view
- Rename column
- Drop column
- Add primary key
- Add Unique key
- Add Foreign key
- Add check enforced
- Alter check enforced
- Modify column
- Change column

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

## Column

<h3 id="column.required">Enforce the required columns in each table</h3>

For most projects, you may want to enforce some columns for every table. For example, need `id` as identification and the primary key for each table or need `created_ts` and `updated_ts` to record creation and modification times.

You can customize which columns are required.

![schema-review-column-required](/static/docs/schema-review-column-required.webp)

#### How the rule works

Bytebase defaults all tables to meet the requirements. If the SQL tries to define a table not having all the required columns or attempts to drop the required column, Bytebase considers this rule to be violated.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="column.no-null">Columns no NULL value</h3>

NULL is a special value. It can cause confusion or performance issues. Bytebase provides this rule to enforce that all columns cannot have NULL value.

![schema-review-column-no-null](/static/docs/schema-review-column-no-null.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL defines a column allowing NULL value.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

## Database

<h3 id="database.drop-empty-database">Drop database restriction</h3>

Can only drop the database if there's no table in it.
It requires users to drop all containing tables first before dropping the database.

![schema-review-drop-empty-db](/static/docs/schema-review-drop-empty-db.webp)

#### How the rule works

Bytebase checks if there exists any table in the specific database.

Specifically, Bytebase checks:

- `DROP DATABASE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
