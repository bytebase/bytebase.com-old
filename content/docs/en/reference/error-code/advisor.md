---
title: Error Code for SQL Advisor
---

Error code for Bytebase SQL Advisor.

## General

### 0 - OK

Success

### 1 - Internal error

Something unexpected happened, you can open a [GitHub issue](https://github.com/bytebase/bytebase/issues) or [contact us](mailto:support@bytebase.com?subject=Got-internal-error).

### 2 - Schema review policy not found

Cannot find the schema review policy in a specific environment. Please [follow the doc](/docs/sql-review/review-rules/create-schema-review-policy) to create the policy.

## Compatibility

### 101 - DROP DATABASE

Applications usually specifies database in their connection string. Dropping the database will definitely break those applications.

### 102 - RENAME TABLE

Renaming the table will break the code referring that table.

### 103 - DROP TABLE

Dropping the table will break the code referring that table.

### 104 - RENAME COLUMN

Renaming the column will break the code referring that column.

### 105 - DROP COLUMN

Dropping the column will break the code referring that column.

### 106 - ADD PRIMARY KEY

Primary key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.

### 107 - ADD UNIQUE KEY

Unique key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.

### 108 - ADD FOREIGN KEY

The existing values on the candidate foreign key and the referenced key might not meet the referential requirements.

### 109 - ADD CHECK

The existing value might not meet the check requirement.

### 110 - ALTER CHECK

The existing value might not meet the check requirement.

### 111 - ALTER COLUMN

Some ALTER COLUMN change is backward incompatible such as changing the data type from VARCHAR to INT. On the other hand, some change is backward compatible such as changing the database type from INT to BIGINT, or adding a comment and etc. User should review the actual statement.

## Statement

### 201 - Statement syntax error

A syntax error in your SQL statement.

### 202 - Statement missing where

The SQL has no WHERE clause. Check [Require WHERE clause](/docs/sql-review/review-rules/query-where-require) for details.

### 203 - Statement not select all

The SQL has `SELECT *`. Check [Disallow SELECT \*](/docs/sql-review/review-rules/query-select-no-select-all) for details.

### 204 - Statement not allow leading wildcard like

The SQL has leading wildcard LIKE. Check [Disallow leading % in LIKE](/docs/sql-review/review-rules/query-where-no-leading-wildcard-like) for details.

## Naming

### 301 - Table naming convention mismatch

Mismatch the table naming convention in your schema review policy. Check [Table naming convention](/docs/sql-review/review-rules/naming-table) for details.

### 302 - Column naming convention mismatch

Mismatch the column naming convention in your schema review policy. Check [Column naming convention](/docs/sql-review/review-rules/naming-column) for details.

### 303 - Index naming convention mismatch

Mismatch the index naming convention in your schema review policy. Check [Index naming convention](/docs/sql-review/review-rules/naming-index-idx) for details.

### 304 - Unique key naming convention mismatch

Mismatch the unique key naming convention in your schema review policy. Check [Unique key naming convention](/docs/sql-review/review-rules/naming-index-uk) for details.

### 305 - Foreign key naming convention mismatch

Mismatch the foreign key naming convention in your schema review policy. Check [Foreign key naming convention](/docs/sql-review/review-rules/naming-index-fk) for details.

## Column

### 401 - Missing required columns

Cannot find the required columns defined in your schema review policy. Check [Enforce the required columns in each table](/docs/sql-review/review-rules/column-required) for details.

### 402 - Column cannot be null

The column cannot be `NULL`. Check [Columns no NULL value](/docs/sql-review/review-rules/column-no-null) for details.

## Engine

### 501 - Use InnoDB engine

Should se InnoDB as MySQL storage engine. Check [Require InnoDB](/docs/sql-review/review-rules/engine-mysql-use-innodb) for details.

## Table

### 601 - Table missing primary key

The table needs a primary key. Check [Require primary key](/docs/sql-review/review-rules/table-require-pk) for details.

### 602 - Table disallow foreign key

The table disallows the foreign key. Check [Disallow foreign key](/docs/sql-review/review-rules/table-no-fk) for details.

### 603 - Table drop naming convention mismatch

The table name mismatches with the naming convention for drop table operation. Check [Drop table naming convention](/docs/sql-review/review-rules/table-drop-naming) for details.

### 701 - Drop database restriction

Can only drop the database if there's no table in it. Check [Drop database restriction](/docs/sql-review/review-rules/database-drop-empty-db) for details.
