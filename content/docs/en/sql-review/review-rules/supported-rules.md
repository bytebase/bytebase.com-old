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

<h3 id="naming.column.auto-increment">Auto-increment column naming convention</h3>

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the auto-increment column naming convention.

#### About convention format

`Auto-increment Column Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) format for naming pattern, and also limits the naming max length. The default maximum length is 64 characters.

##### Some typical format

| Name   | Regular Expression       |
| ------ | ------------------------ |
| id     | `^id$`                   |


#### How the rule works

Bytebase checks that all auto-increment column names in DDL conform to the naming conventions.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

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

## Statement

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

<h3 id="statement.disallow-commit">Disallow COMMIT</h3>

Disallow using commit in the issue.

#### How the rule works

Bytebase alert users if there are COMMIT statements.

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.disallow-limit">Disallow LIMIT</h3>

Disallow LIMIT clause for INSERT, UPDATE and DELETE statements.

#### How the rule works

Specifically, Bytebase checks:

- `INSERT` statements
- `UPDATE` statements
- `DELETE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.disallow-order-by">Disallow ORDER BY</h3>

Disallow ORDER BY clause for UPDATE and DELETE statements.

#### How the rule works

Specifically, Bytebase checks:

- `UPDATE` statements
- `DELETE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.merge-alter-table">Merge ALTER TABLE</h3>

For more readability, it's better to not using multiply `ALTER TABLE` statements for same table.

#### How the rule works

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.insert.must-specify-column">INSERT statements must specify columns</h3>

For more readability, it's better to specify columns for INSERT statements, such as `INSERT INTO table_t(id, name) VALUES(...)`.

#### How the rule works

Specifically, Bytebase checks:

- `INSERT` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.insert.disallow-order-by-rand">Disallow ORDER BY RAND in INSERT statements</h3>

#### How the rule works

Specifically, Bytebase checks:

- `INSERT` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="statement.insert.row-limit">Limit the inserted rows</h3>

Alert users if the inserted rows exceeds the limit.

#### How the rule works

- For `INSERT INTO ... VALUES(...)` statements, Bytebase checks the count of value list.
- For `INSERT INTO ... SELECT ...` statements, Bytebase runs `EXPLAIN` statements for them and check the rows in `EXPLAIN` statement results.

#### Support database engine

- MySQL

<h3 id="statement.affected-row-limit">Limit affected row limit</h3>

Alert users if the affected rows in `UPDATE` or `DELETE` exceeds the limit.

#### How the rule works

For `UPDATE` and `DELETE` statements, Bytebase runs `EXPLAIN` statements for them and check the rows in `EXPLAIN` statement results.

#### Support database engine

- MySQL

<h3 id="statement.dml-dry-run">Dry run DML statements</h3>

Dry run DML statements for validation.

#### How the rule works

Dry run DML statements by `EXPLAIN` statements. Specifically, Bytebase checks:

- `INSERT` statements
- `UPDATE` statements
- `DELETE` statements

#### Support database engine

- MySQL

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

<h3 id="table.disallow-partition">Disallow partition table</h3>

#### How the rule works

Bytebase checks if SQLs creating the partition table.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="table.comment">Table comment convention</h3>

Configure whether the table requires comments and the maximum comment length.

#### How the rule works

Bytebase checks the table comment convention.

Specifically, Bytebase checks:

- `CREATE TABLE` statements

#### Support database engine

- MySQL
- TiDB

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

<h3 id="column.disallow-list">Column type disallow list</h3>

Set column type disallow list to ban column types.

#### How the rule works

Bytebase checks if SQLs use the column type in disallow list.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="column.no-null">Columns no NULL value</h3>

NULL is a special value. It can cause confusion or performance issues. Bytebase provides this rule to enforce that all columns cannot have NULL value.

![schema-review-column-no-null](/static/docs/schema-review-column-no-null.webp)

#### How the rule works

Bytebase considers this rule to be violated if the SQL defines a column allowing NULL value.

#### Support database engine

- MySQL
- TiDB
- PostgreSQL

<h3 id="column.disallow-change-type">Disallow changing column type</h3>

Changing column type may fail because the data cannot be converted. Bytebase provides this rule to alert you that a type changing has occurred.

#### How the rule works

Bytebase checks if SQLs change the column type.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="column.set-default-for-not-null">Set DEFAULT value for NOT NULL columns</h3>

NOT NULL columns have no default value. It requires users to manually set default values for NOT NULL columns.

#### How the rule works

Bytebase checks if setting default values for NOT NULL columns.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="column.disallow-change">Disallow ALTER TABLE CHANGE COLUMN statements</h3>

CHANGE COLUMN is a MySQL extension to standard SQL. CHANGE COLUMN can change column definition and names, or both.
Most of the time, you just want to change the one of two. So you need to use RENAME COLUMN and MODIFY COLUMN instead of CHANGE COLUMN to avoid unexpected modifications.

#### How the rule works

Bytebase checks if using `ALTER TABLE CHANGE COLUMN` statements.

#### Support database engine

- MySQL
- TiDB

<h3 id="column.disallow-changing-order">Disallow changing column order</h3>

Changing column order may cause performance issues. Users should be cautious about this.

#### How the rule works

Bytebase checks if changing column order.

Specifically, Bytebase checks:

- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.auto-increment-must-integer">Use integer for auto-increment columns</h3>

The auto-increment column must integer in MySQL.

#### How the rule works

Bytebase checks the auto-increment column type.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="column.disallow-set-charset">Disallow set charset for columns</h3>

It's better to set the charset in the table or database.

#### How the rule works

Bytebase checks if setting charset for columns.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.auto-increment-must-unsigned">Set unsigned attribute on auto-increment columns</h3>

Setting unsigned attribute on auto-increment columns to avoid negative numbers.

#### How the rule works

Bytebase checks the unsigned attribute for auto-increment columns.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.comment">Column comment convention</h3>

Configure whether the column requires comments and the maximum comment length.

#### How the rule works

Bytebase checks the column comment.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.maximum-character-length">Maximum CHAR length</h3>

The VARCHAR type is the variable-length type but the CHAR is not. When users need a long CHAR type, it's better to use VARCHAR instead of CHAR.

#### How the rule works

Bytebase checks the length for the CHAR type.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="column.auto-increment-initial-value">Auto-increment initial value</h3>

Set initial value for auto-increment columns.

#### How the rule works

Bytebase checks the initial value for auto-increment columns.

Specifically, Bytebase checks:

- `CREATE TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.current-time-count-limit">Limit the count of current time columns</h3>

Limit the count of `NOW()`, `CURRENT_TIME()` and `CURRENT_TIMESTAMP()` columns.

#### How the rule works

This rule will count the two types of the columns:

1. the column with default current time , such as `DEFAULT NOW()`
2. the column with ON UPDATE current time, such as `ON UPDATE NOW()`

If the count of type one columns is more than two or the count of type two columns is more than one, this rule will alert users.

The meaning of the number is:

1. A table usually has `created_ts` and `updated_ts` column with `DEFAULT NOW()`.
2. A table usually has `updated_ts` column with `ON UPDATE NOW()`

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

<h3 id="column.require-default">Require column default value</h3>

Require default value for all columns, except PRIMARY KEY, JSON, BLOB, TEXT, GEOMETRY, AUTO_INCREMENT, GENERATED columns.

#### How the rule works

Bytebase checks the column default value.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

## Index

<h3 id="index.no-duplicate-column">Disallow duplicate column in index keys</h3>

#### How the rule works

Bytebase checks if there exists duplicate column in index keys.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="index.key-number-limit">Limit the count of index keys</h3>

Limit the count of index keys in one index.

#### How the rule works

Bytebase checks the count of index keys in each index.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="index.pk-type-limit">Limit key type for primary keys</h3>

Alert users if key type is not ING or BIGINT in primary keys.

#### How the rule works

Bytebase checks the key type for primary keys.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="index.type-no-blob">Disallow BLOB and TEXT for index keys</h3>

Disallow using BLOB and TEXT type as index keys.

#### How the rule works

Bytebase checks the key type for index keys.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="index.total-number-limit">Index count limit</h3>

Limit the index count in one table.

#### How the rule works

Bytebase checks the index count for each table.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements
- `CREATE INDEX` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

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

## System

<h3 id="system.charset.allowlist">Charset allow list</h3>

#### How the rule works

Bytebase checks if SQLs use the charset not in allow list.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.

<h3 id="system.collation.allowlist">Collation allow list</h3>

#### How the rule works

Bytebase checks if SQLs use the collation not in allow list.

Specifically, Bytebase checks:

- `CREATE TABLE` statements
- `ALTER TABLE` statements

#### Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.