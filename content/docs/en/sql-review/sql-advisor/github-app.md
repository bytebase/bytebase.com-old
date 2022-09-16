---
title: SQL Advisor GitHub App
---

Bytebase also provides the [GitHub App](https://github.com/marketplace/bytebase) to let users integrate the SQL review into their GitHub CI.

The App allows you to create the SQL review policy for your repositories and trigger the SQL check in the pull request.

<hint-block type="info">

The GitHub App is free to use, you don't need any subscription plan.

</hint-block>

## Install App and grant permissions

Install the app from GitHub [marketplace](https://github.com/marketplace/bytebase). During installation, you need to select the target GitHub account and grant repository permissions.

![app-grant-permissions](/static/docs/app-grant-permissions.webp)

## Configure SQL review policy

After installation, you will be redirected to the Bytebase hub website to create the SQL review policy.

### Step 1 - Basic info

Specify the basic information, including display name, target repositories, and SQL review policy template.

![app-policy-step1](/static/docs/app-policy-step1.webp)

Repository configuration:

- **Database dialect**: the database dialect for your repository. For now we support MySQL (including TiDB) and PostgreSQL (including CockroachDB)
- **SQL file path**: the file path for the SQL files in the regex format. Only matched files will be checked in the pull request. We
  will subscribe all SQL files in the repository by default.

![app-config-repo](/static/docs/app-config-repo.webp)

### Step 2 - Configure rules

You can customize the rule level and payload in step 2. You can [follow this doc](/docs/sql-review/review-rules/create-schema-review-policy#step-2) for details about rule configuration.

![app-policy-step2](/static/docs/app-policy-step2.webp)

### Step 3 - Preview

Preview and confirm the SQL review policy.

## SQL check in the pull request

If you create a pull request containing SQL file change, it will trigger the SQL check according to the SQL review policy.

The SQL review will run the check and comment on the pull request.

![app-pr-comment](/static/docs/app-pr-comment.webp)

![app-pr-check](/static/docs/app-pr-check.webp)

You can also check the output messages on the files diff page.

![app-pr-diff](/static/docs/app-pr-diff.webp)
