---
title: Schema Review
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

It currently supports following schema review rules:

- Engine
  - [Require InnoDB](/docs/accelerator/schema-review/engine-mysql-use-innodb)
- Naming
  - [Table naming convention](/docs/accelerator/schema-review/naming-table)
  - [Column naming convention](/docs/accelerator/schema-review/naming-column)
  - [Index naming convention](/docs/accelerator/schema-review/naming-index-idx)
  - [Unique key naming convention](/docs/accelerator/schema-review/naming-index-uk)
  - [Foreign key naming convention](/docs/accelerator/schema-review/naming-index-fk)
- Query
  - [Disallow SELECT *](/docs/accelerator/schema-review/query-select-no-select-all)
  - [Require WHERE](/docs/accelerator/schema-review/query-where-require)
  - [Disallow leading % in LIKE](/docs/accelerator/schema-review/query-where-no-leading-wildcard-like)
- Table
  - [Require primary key](/docs/accelerator/schema-review/table-require-pk)
- Schema
  - [Backward incompatible schema change](/docs/accelerator/schema-review/schema-migration-compatibility)
- Column
  - [Enforce the required columns in each table](/docs/accelerator/schema-review/column-required)
  - [Columns no NULL value](/docs/accelerator/schema-review/column-no-null)

<doc-link-block url="/docs/accelerator/schema-review/overview" title="Configure Schema Review"></doc-link-block>
<doc-link-block url="/database-review-guide" title="Database Review Guide"></doc-link-block>