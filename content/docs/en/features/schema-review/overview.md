---
title: Schema Review
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

This document is to show how to configure schema review.
## Prerequisites

- **Team** or **Enterprise** plan
- **Workspace Owner** or **Workspace DBA** role
## Supported rules

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

## How it works

Bytebase defines **Schema Review Policy** for each **Environment**. The **Schema Review Policy** is essentially a set of SQL lint rules, and we call SQL lint rule the **Schema Review Rule**. Once configured, Bytebase will check SQL according to the corresponding **Schema Review Policy**.

<hint-block type="warning">

**Schema Review** only supports SQL checks in **Issue** now. Support for **SQL Editor** is coming soon.

</hint-block>

- [Create Schema Review Policy](/docs/features/schema-review/create-schema-review-policy)
- [Schema Reivew Check in the Issue](/docs/features/schema-review/schema-review-check-in-the-issue)
- [View Schema Review Policy](/docs/features/schema-review/view-schema-review-policy)
- [Edit Schema Review Policy](/docs/features/schema-review/edit-schema-review-policy)
- [Disable and Delete Schema Review Policy](/docs/features/schema-review/disable-delete-policy)