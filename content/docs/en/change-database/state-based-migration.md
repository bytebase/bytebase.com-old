---
title: State-based Migration
---

<hint-block type="warning">

This feature is in beta and only available for projects that have enabled [GitOps workflow](../vcs-integration/enable-version-control-workflow).

</hint-block>

State-based migration is a declarative way to describe the desired state of the schema, it allows the schema management engine to generate migration scripts automatically for any discrepancy found between the desired state and the actual schema.

It is a better and future-proof approach to manage schema changes for being repeatable, conflict-free, and idempotent:

- The same schema file can be repeatedly applied to different environments regardless of their current schema states.
- Avoid stepping on toes which often happens with migration-based/imperative schema change, no need to deal with executions that have complex dependency relations.
- Nothing will happen if everything is aligned, and only discrepancies will be fixed.

## How to use

### Step 1 - Enable the setting

Once enabled [GitOps workflow](../vcs-integration/enable-version-control-workflow), in the project's **Version Control > Schema change type** option, select **State-based**.

![select-schema-change-type](/static/docs/en/change-database/state-based-migration/select-schema-change-type.webp)

### Step 2 - Update schema file

In our example with GitLab self-hosted as our VCS, we create a new schema file in the connected repository whose path is matching the **Schema path template** we have configured as `.{{DB_NAME}}##LATEST.sql`, where `{{DB_NAME}}` is `mydb`. It is notable that we have also configured `bytebase` as the **Base directory**, so all files need to reside under this directory.

![commit-new-schema-file](/static/docs/en/change-database/state-based-migration/commit-new-schema-file.webp)

Once committed the schema file to the target branch `main`, a new migration issue is created automatically with only the differentiate part of the schema.

![new-migration-issue](/static/docs/en/change-database/state-based-migration/new-migration-issue.webp)

You may notice only the DDL for creating the new `users` table is shown here because the `mydb` database already has the `emails` table.

Subsequent updates to the schema file without actually changing the database schema will not generate new migration issues.

## Caveats

As the state-based migration is in beta stage, there are still few things to watch out:

- Typical migration-based schema change is disallowed, where you would have each file containing DDL statements for imperative migrations.
- Only PostgreSQL database backend and creating new tables are currently supported. The support of other database backends (including MySQL) and more schema change semantics (including drop tables, changing columns) are well underway.
