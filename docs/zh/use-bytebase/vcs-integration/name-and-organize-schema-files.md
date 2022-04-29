---
title: Name and Organize Schema Files
order: 40203
---

# Name and Organize Schema Files

If project enables version control workflow, it will observe file changes in the observed repository. But after Bytebase notices a particular file change, it still needs to figure out the exact database where the change should apply. Also there are different migration types and Bytebase needs to figure out which. To achieve those tasks, Bytebase requires the file to follow a naming convention.

## File Path Template

Bytebase allows user to customize the [file path](/docs/use-bytebase/vcs-integration/enable-version-control-workflow#file-path-template-required-default-env_name-version-__-db_name-__-type-__-description-sql) of the schema file. This file path is relative to the [base directory](/docs/use-bytebase/vcs-integration/enable-version-control-workflow#base-directory-default-root-directory).

The default file path template is `{{ENV_NAME}}/{{DB_NAME}}__{{VERSION}}__{{TYPE}}__{{DESCRIPTION}}.sql`

Let's say the base directory is `bytebase` :

- An example file path for [normal migration type](/docs/concepts/migration-types#normal-migration) `bytebase/env1/db1__202101131000__migrate__create_tablefoo_for_bar.sql`
- An example file path for [baseline migration type](/docs/concepts/migration-types#baseline-migration):`bytebase/env1/db1__202101131000__baseline__create_tablefoo_for_bar.sql`

### Supported Placeholders

- All placeholder can contain one or more characters in \[a-zA-Z0-9+-=/\_#?!\$. ] (whitespace is also allowed)
- To improve readability, we recommend to use separator between different placeholders and one common separator is `__ (two underscores).`

#### Version (Required)

Version can be an arbitrary string as long as it's unique among all SQL files. Bytebase uses the alphabetical order of the version part to determine the order of the SQL file to apply. A common practice is to use timestamp like `YYYYMMDDHHMMSS` or `v1, v2` as the version name.

#### Database Name (Required)

Database name should exactly match the destined database name. The match is **case-sensitive.** However, this may still cause ambiguity if the project contains multiple databases with the same name (this is not uncommon in practice, e.g. we give the same database name across all environments). In such case, include [Environment Name](#environment-name-optional) in the template.

#### **Migration Type (Required)**

Bytebase currently supports following migration types:

- [Normal migration](/docs/concepts/migration-types#normal-migration) - in this case, the file needs to use `migrate` as the keyword.
- [Baseline migration](/docs/concepts/migration-types#baseline-migration) - in this case, the file needs to use `baseline`as the keyword. The first version of the migration script should always be a baseline migration so that Bytebase can establish the current state (the baseline) of the corresponding live database.

#### Environment Name (Optional)

Environment name should match the destined environment name of the database. Unlike database name matching rule, the environment name match is **case-insensitive**. This is useful to disambiguate the database if multiple databases have the same name across the environments.

#### Description (Optional)

An optional description string can be included in the file name. If provided, Bytebase will use it to name the generated task for the migration.

## Schema Path Template

💡 **This is useful to let repository always keep a complete schema of the corresponding database.**

Bytebase allows user to customize the [schema path](/docs/use-bytebase/vcs-integration/enable-version-control-workflow#schema-path-template-optional) of the schema file. This path is relative to the [base directory](/docs/use-bytebase/vcs-integration/enable-version-control-workflow#base-directory-default-root-directory). When specified, after each migration, Bytebase will write the latest schema to this schema path relative to the base directory in the same branch as the original commit triggering the migration. Leave empty if you don't want Bytebase to do this.

The default schema path template is `{{ENV_NAME}}/.{{DB_NAME}}__LATEST.sql`

Let's say the base directory is `bytebase`

- An example schema path is `bytebase/env1/.db1__LATEST.sql`

### Supported Placeholders

- All placeholder can contain one or more characters in \[a-zA-Z0-9+-=/\_#?!\$. ] (whitespace is also allowed)
- To improve readability, we recommend to use separator between different placeholders and one common separator is `__ (two underscores).`

#### Database Name (Required)

Database name should exactly match the destined database name. However, this may still cause ambiguity if the project contains multiple databases with the same name (this is not uncommon in practice, e.g. we give the same database name across all environments). In such case, include [Environment Name](#environment-name-optional) in the template.

#### Environment Name (Optional)

Environment name should exactly match the destined environment name of the database. This is useful to disambiguate the database if multiple databases have the same name across the environments.

## File Organization

### Approach 1 - Directory per environment (recommended)

This is a [reference directory structure ](https://gitlab.bytebase.com/bytebase-demo/blog/-/tree/master/bytebase) using this approach, and the corresponding [commit](http://gitlab.bytebase.com/bytebase-demo/blog/-/commit/d7f3b88b93c4d7f57b710980cdf92f72dcc4cd1e) and [generated issue](https://demo.bytebase.com/issue/create-user-post-comment-table-for-dev-environment-13004) observing the commit.

In Bytebase, database always belongs to an instance, and an instance always belongs to an environment. Thus a database also belongs to an environment. Thus one way to organize is to create a directory for each environment by using the environment name as the directory name and put migration files under the corresponding environment directory. Like the screenshot below:

![Directory per environment, each file corresponds to a single database under an environment](/static/docs-assets/organize-schema-files-step1.png)

![organize-schema-files-step](/static/docs-assets/organize-schema-files-step2.png)

#### Pros:

1. The divergence period when the schema the migration files represents and the actual schema of the live database is minimized. The drift only occurs between the time the migration is committed and the time Bytebase finishes migration.
2. This allows the same database can coexist as long as they belong to different environments. Because Bytebase will use the name of the enclosing directory to infer the environment to disambiguate the targeting database.

#### Cons:

1. Changing environment name will break the integration.
2. More files to manage, it will be `database * number of environments.`

### Approach 2 - Single directory

This is a [reference directory structure](https://gitlab.bytebase.com/bytebase-demo/shop/-/tree/master/bytebase)using this approach, and the corresponding [commit](https://gitlab.bytebase.com/bytebase-demo/shop/-/commit/da90a2510eccd051ad14e4b89ca904d733169a39#e72b3cb4f305192575394fd19d2e52e9378cb9ea) and [generated issue](https://demo.bytebase.com/issue/create-user-post-comment-table-for-dev-environment-13004) observing the commit.

All migration files for all environments are under the same directory. Like the screenshot below:

![A single file representing all databases having the same name from all environments.](/static/docs-assets/organize-schema-files-step3.png)

![organize-schema-files-step](/static/docs-assets/organize-schema-files-step4.png)

The pros and cons are the opposite of Approach 1. Though this approach brings less overhead to manage the files, its biggest issue is it will cause much longer divergence period when the schema the migration files represents differs from the actual schema of the live database. Because when a migration file is committed, Bytebase will generate a migration pipeline including all environments. Like the screenshot below:

![organize-schema-files-step](/static/docs-assets/organize-schema-files-step5.png)

This means the divergence lasts until the the pipeline finishes applying the change to the last environment. This defeats much of the purpose of storing the migration files in the repository since we want the migration files to be the source of truth of the database schema.

After settling down the file structure, now we can go ahead to [create the first baseline migration](/docs/use-bytebase/vcs-integration/create-the-first-baseline-migration).
