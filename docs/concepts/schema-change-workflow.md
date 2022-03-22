---
title: Schema Change Workflow
order: 20300
---

# Schema Change Workflow

There are 2 typical workflows employed by the team to deal with database schema changes. [UI workflow](schema-change-workflow.md#ui-workflow) and [version control workflow (GitOps)](schema-change-workflow.md#gitops-workflow).

## UI workflow

Classic SQL Review workflow where the developer submits a SQL review ticket directly from Bytebase and waits for the assigned DBA or peer developer to review. Bytebase applies the SQL change after review approved.

![workflow-ui](/docs-assets/workflow-ui.png)

## Version control workflow (GitOps)

Aka `Database-as-Code`. Database migration scripts are stored in a git repository. To make schema changes, a developer would create a migration script and submit for review in the corresponding VCS such as GitLab. After the script is approved and merged into the configured branch, Bytebase will automatically kicks off the task to apply the new schema change.&#x20;

![workflow-vcs](/docs-assets/workflow-vcs.png)
