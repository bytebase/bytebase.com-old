---
title: Schema Review
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

It currently supports following schema review rules:

- Engine
  - [Require InnoDB](/docs/features/schema-review/engine-mysql-use-innodb)
- Naming
  - [Table naming convention](/docs/features/schema-review/naming-table)
  - [Column naming convention](/docs/features/schema-review/naming-column)
  - [Index naming convention](/docs/features/schema-review/naming-index-idx)
  - [Unique key naming convention](/docs/features/schema-review/naming-index-uk)
  - [Foreign key naming convention](/docs/features/schema-review/naming-index-fk)
- Query
  - [Disallow SELECT *](/docs/features/schema-review/query-select-no-select-all)
  - [Require WHERE](/docs/features/schema-review/query-where-require)
  - [Disallow leading % in LIKE](/docs/features/schema-review/query-where-no-leading-wildcard-like)
- Table
  - [Require primary key](/docs/features/schema-review/table-require-pk)
- Schema
  - [Backward incompatible schema change](/docs/features/schema-review/schema-migration-compatibility)
- Column
  - [Enforce the required columns in each table](/docs/features/schema-review/column-required)
  - [Columns no NULL value](/docs/features/schema-review/column-no-null)
