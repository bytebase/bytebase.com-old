---
title: Review Rules
---

Bytebase provides customizable SQL lint to check common issues in schema change process.

This document is to show how to configure review rules.

## Prerequisites

- **Free** version allows to configure limited review rules. **Team** or **Enterprise** version unlocks all review rules.
- **Workspace Owner** or **Workspace DBA** role

## Supported rules

It currently supports following SQL review rules and see [Supported Rules](/docs/sql-review/review-rules/supported-rules) for details:

<include-block url="/docs/sql-review/rules"></include-block>

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
