---
title: Review Rules
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

This document is to show how to configure review rules.

## Prerequisites

- **Team** or **Enterprise** plan
- **Workspace Owner** or **Workspace DBA** role

## Supported rules

It currently supports following SQL review rules and see [Supported Rules](/docs/sql-review/review-rules/supported-rules) for details:

- Engine
  - Require InnoDB
- Naming
  - Table naming convention
  - Column naming convention
  - Index naming convention
  - Primary key naming convention
  - Unique key naming convention
  - Foreign key naming convention
- Query
  - Disallow SELECT *
  - Require WHERE
  - Disallow leading % in LIKE
- Table
  - Require primary key
  - Disallow foreign key
  - Drop naming convention
- Schema
  - Backward incompatible schema change
- Column
  - Enforce the required columns in each table
  - Columns no NULL value
- Database
  - Drop database restriction

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
- [Supported Rules](/docs/sql-review/review-rules/supported-rules)
