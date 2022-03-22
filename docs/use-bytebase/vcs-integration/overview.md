---
title: VCS Integration (GitOps)
order: 40200
---

# VCS Integration (GitOps)

The VCS Integration is a 4-step setup. You can check this [demo issue](https://demo.bytebase.com/issue/add-createdat-column-to-userpostcomment-table-for-dev-environment-13008) created by observing the [code commit](https://gitlab.bytebase.com/bytebase-demo/blog/-/commit/171ceaf7659ceb8e495aa3ef356ec686656f9dc0) to see what it looks like after the setup.

### [Step 1 - Add Git Provider](/docs/use-bytebase/add-git-provider)

This can only be performed by the "**Workspace Owner" with the help of the selected Git provider instance admin.** It only needs to be configured once for each Git provider.

### [Step 2 - Enable Version Control Workflow in Project](/docs/use-bytebase/link-repository)

Configure project to use "Version control workflow" and link the project with a repository from the Git provider configured in Step 1. This can only be performed by the "**Project Owner"**.

### [Step 3 - Name and Organize Schema Files](/docs/use-bytebase/name-and-organize-schema-files)

Organize the repository schema files according to the configured base directory and file path template in step 2. Afterwards, the file changes can be observed and identified by Bytebase to apply the schema changes to the corresponding database.

### [Step 4 - Create the First Baseline Migration](/docs/use-bytebase/create-the-first-baseline-migration)

To bootstrap the VCS integration, Bytebase needs to know the current schema of the corresponding live database. This is achieved by using a baseline migration script which includes the entire schema of that live database. The first migration script after the setup should always be a baseline migration script so that Bytebase can establish the baseline of the current schema in the corresponding live database.

### [Troubleshoot](/docs/use-bytebase/troubleshoot)
