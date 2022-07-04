---
title: Schema Review
---
<hint-block type="warning">

Schema Review requires at least **Team Plan**.

</hint-block>

This document is to show how to configure [schema review](/docs/features/schema-review/overview).

## How Schema Review Works

Bytebase defines `Schema Review Policy` for each `Environment`. The `Schema Review Policy` is essentially a set of SQL lint rules, and we call SQL lint rule the `Schema Review Rule`. Once configured, Bytebase will check SQL according to the corresponding `Schema Review Policy`.

<hint-block type="warning">

`Schema Review` only supports SQL checks in `Issue` now. Support for `SQL Editor` is coming soon.

</hint-block>

## Operation Manual

- [Create Schema Review Policy](/docs/accelerator/schema-review/create-schema-review-policy)
- [Schema Reivew Check in the Issue](/docs/accelerator/schema-review/schema-review-check-in-the-issue)
- [View Schema Review Policy](/docs/accelerator/schema-review/view-schema-review-policy)
- [Edit Schema Review Policy](/docs/accelerator/schema-review/edit-schema-review-policy)
- [Disable and Delete Schema Review Policy](/docs/accelerator/schema-review/disable-delete-policy)