---
title: State-based Migration
---

<hint-block type="warning">

This feature is in beta and only available for projects that have enabled [GitOps workflow](../vcs-integration/enable-version-control-workflow).

</hint-block>

State-based migration is a declarative way to describe the desired state of the schema, it allows the schema management engine generate migration scripts automatically for any discrepancy found between the desired state and the actual schema.

It is a better and future-proof approach to manage schema changes for being repeatable, conflict-free, and idempotent:

- The same schema file can be repeatedly applied to different environments regardless of their current schema states.
- Avoid stepping on toes which often happens with migration-based/imperative schema change, no need to deal with executions that have complex dependency relations.
- Nothing will happen if everything is aligned, and only discrepancies will be fixed.

## How to use

### Step 1 - Enable the setting

Once enabled [GitOps workflow](../vcs-integration/enable-version-control-workflow), in the project's **Version Control > Schema change type** option, select "**State-based**".

![select-schema-change-type](/static/docs/en/change-database/state-based-migration/select-schema-change-type.webp)

### Step 2 - Update schema file

TODO

### Step 3 - Approve generated migration diff

TODO

## Caveats

TODO DDL is disallowed, only new tables, PostgreSQL
