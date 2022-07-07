---
title: Enable Version Control Workflow (GitOps) in Project
---

> To enable version control workflow, project owner needs to link one of their Git repositories with their Bytebase project.

Estimate setup time: 15 minutes.
This guide will walk you through how to enable the version control workflow for a project in Bytebase. This is a [reference setup](https://demo.bytebase.com/project/blog-git-3003#version-control) showing what it will look like after the setup.

<hint-block type="info">

One project has to choose between the **UI workflow** and the **Version control workflow**. If version control workflow is chosen, then all schema changes for the databases belonging to this project can only be triggered from code change from the linked repository.

</hint-block>

## Prerequisites

- You should be the **Project Owner** to enable version control workflow in the project.

## Procedure

Go to the project you wish to enable version control workflow. Choose "**Version control workflow**" and click "**Configure version control**".

![project-vcs-step](/static/docs/features/vcs-integration/enable-version-control-workflow/project-vcs-step1.webp)

## Step 1 - Choose Git provider

<hint-block type="info">

You can only link Git repository from one of the existing Git providers in Bytebase. If your desired Git provider is not there, you need to contact **Workspace Owner** to follow [Add Git Provider](/docs/features/vcs-integration/add-git-provider) to add it.

</hint-block>

Click the Git provider hosting your repository, and Bytebase will start the OAuth process with your chosen Git provider. If you are not currently logged into that provider, you will be prompted to login first in order to complete the OAuth.

<hint-block type="info">

If you encounter errors during this process, it's likely the Git provider is not setup properly and you need to contact **Workspace Owner** to double check the setup following [Add Git Provider](/docs/features/vcs-integration/add-git-provider).

</hint-block>

![project-vcs-step](/static/docs/features/vcs-integration/enable-version-control-workflow/project-vcs-step2.webp)

## Step 2 - Select repository

If the OAuth process is successful, you will be prompted to **STEP 2: Select repository**.

<hint-block type="info">

For GitLab, Bytebase only lists repositories where you have at least the **Maintainer** role. This is because to configure the VCS integration, Bytebase needs to create the webhook, which requires **Maintainer** role.

</hint-block>

![project-vcs-step](/static/docs/features/vcs-integration/enable-version-control-workflow/project-vcs-step3.webp)

Select the repository you want to link to the Bytebase project.

## Step 3 - Configure deploy

![project-vcs-step](/static/docs/features/vcs-integration/enable-version-control-workflow/project-vcs-step4.webp)

The final step allows you to configure the following settings:

#### Branch - Required

This is the branch where Bytebase observes the migration SQL file changes.

<hint-block type="info">

For GitLab, you can specify wildcards, such as "**feature**" to match branches starting with "feature/"

</hint-block>

#### Base directory - Optional

Default: `root directory`

Bytebase only observes migration file changes under this directory and all its sub-directories. we recommend to create a dedicated directory called "bytebase" under the repository root to store all your Bytebase related migration files.

Click "Finish" button to complete the setup. Under the hood, this will create a webhook in the linked repository so that Bytebase can observe code changes.

#### File path template - Required

Default: `{{ENV_NAME}}/{{DB_NAME}}__{{VERSION}}__{{TYPE}}__{{DESCRIPTION}}.sql`

The file path template allows user to customize the file path format of the migration file. This path is relative to the [base directory](#base-directory-default-root-directory) set above. The template supports following placeholders:

Required placeholders (must present in the template):

- {{DB_NAME}} - Specify the database name.
- {{VERSION}} - Specify the migration version.
- {{TYPE}} - Specify the migration type. Can be either "migrate" for [normal migration](/docs/concepts/migration-types#normal-migration) or "baseline" for [baseline migration](/docs/concepts/migration-types#baseline-migration).

Optional placeholders

- {{ENV_NAME}} - Specify the environment name. This is useful to disambiguate the specified database if databases share the same name across different environments.
- {{DESCRIPTION}} - Specify a description for the migration.

Check [name and organize schema files](/docs/features/vcs-integration/name-and-organize-schema-files) for the recommended file path template.

#### Schema path template - Optional

Default: `{{ENV_NAME}}/.{{DB_NAME}}__LATEST.sql`

When specified, after each migration, Bytebase will write the latest schema to this schema path relative to the base directory in the same branch as the original commit triggering the migration. Leave empty if you don't want Bytebase to do this.

💡 **This is useful to let repository always keep a complete schema of the corresponding database.**

<hint-block type="warning">

Make sure the changed branch is not protected or allow repository maintainer to push to that protected branch. See [protected branch](https://docs.gitlab.com/ee/user/project/protected_branches.html)

</hint-block>

Required placeholders (must present in the template if specified):

- {{DB_NAME}} - Specify the database name.

Optional placeholders

- {{ENV_NAME}} - Specify the environment name. This is useful to disambiguate the specified database if databases share the same name across different environments.

![project-vcs-step](/static/docs/features/vcs-integration/enable-version-control-workflow/project-vcs-step5.webp)

Now the project has enabled version control workflow. Bytebase will start observe SQL file changes from the linked repository. The last task is to [name and organize the schema files](/docs/features/vcs-integration/name-and-organize-schema-files) in the linked repository directory so that Bytebase can figure out for a given SQL file change, which database it should apply to.
