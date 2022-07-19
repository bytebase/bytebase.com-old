---
title: Review Rules
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

This document is to show how to configure review rules.

## Prerequisites

- **Team** or **Enterprise** plan
- **Workspace Owner** or **Workspace DBA** role

## Supported rules

It currently supports following SQL review rules:

- Engine
  - [Require InnoDB](/docs/sql-review/review-rules/engine-mysql-use-innodb)
- Naming
  - [Table naming convention](/docs/sql-review/review-rules/naming-table)
  - [Column naming convention](/docs/sql-review/review-rules/naming-column)
  - [Index naming convention](/docs/sql-review/review-rules/naming-index-idx)
  - [Unique key naming convention](/docs/sql-review/review-rules/naming-index-uk)
  - [Foreign key naming convention](/docs/sql-review/review-rules/naming-index-fk)
- Query
  - [Disallow SELECT \*](/docs/sql-review/review-rules/query-select-no-select-all)
  - [Require WHERE](/docs/sql-review/review-rules/query-where-require)
  - [Disallow leading % in LIKE](/docs/sql-review/review-rules/query-where-no-leading-wildcard-like)
- Table
  - [Require primary key](/docs/sql-review/review-rules/table-require-pk)
  - [Disallow foreign key](/docs/sql-review/review-rules/table-no-fk)
  - [Drop naming convention](/docs/sql-review/review-rules/table-drop-naming)
- Schema
  - [Backward incompatible schema change](/docs/sql-review/review-rules/schema-migration-compatibility)
- Column
  - [Enforce the required columns in each table](/docs/sql-review/review-rules/column-required)
  - [Columns no NULL value](/docs/sql-review/review-rules/column-no-null)
- Database
  - [Drop database restriction](/docs/sql-review/review-rules/database-drop-empty-db)

## How it works

Bytebase defines **Schema Review Policy** for each **Environment**. The **Schema Review Policy** is essentially a set of SQL lint rules, and we call SQL lint rule the **Schema Review Rule**. Once configured, Bytebase will check SQL according to the corresponding **Schema Review Policy**.

<hint-block type="warning">

**Schema Review** only supports SQL checks in **Issue** now. Support for **SQL Editor** is coming soon.

</hint-block>

- [Create Schema Review Policy](/docs/sql-review/review-rules/create-schema-review-policy)
- [Schema Reivew Check in the Issue](/docs/sql-review/review-rules/schema-review-check-in-the-issue)
- [View Schema Review Policy](/docs/sql-review/review-rules/view-schema-review-policy)
- [Edit Schema Review Policy](/docs/sql-review/review-rules/edit-schema-review-policy)
- [Disable and Delete Schema Review Policy](/docs/sql-review/review-rules/disable-delete-policy)
