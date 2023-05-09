---
title: Secret
---
<hint-block type="info">

This feature is only available in the Pro Plan and Enterprise Plan.

</hint-block>

To hide sensitive information in your change script, you can configure secret variables at the database level.

## Naming your secrets

The following rules apply to secret names:

- Names can only contain uppercase alphanumeric (`[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed.

- Names must not start with the `BYTEBASE_` prefix.

- Names must not start with a number.

- Names must be unique in a database.

## Creating secrets for a database

<hint-block type="info">

To create secretes for a database, you must be the Workspace Owner or Workspace DBA.

</hint-block>

### Step 1 - Navigate to Database

Navigate to the database detail page. Click `Settings` tab and you will see the Secret block.

![database-setting-tab-secret-block](/static/docs/administration/secret/database-setting-tab.webp)

### Step 2 - Create a Secret

Click `New Secret` and fill in the related fields, then click `Save`.

![create-database-secret](/static/docs/administration/secret/create-salary-secret.webp)

## Using Secrets in Change Workflow

You can use secrets in SQL in the change workflow with zero burden. Using `${{ secrets.SECRET_NAME }}` in SQL, and Bytebase will rendering while executing.

<hint-block type="info">

If a secret has not been set, Bytebase will not replace the expression with secret value. This means that expressions are retained at execution time, which may cause some errors.

</hint-block>

![using-secret-in-dml-issue](/static/docs/administration/secret/using-secret-in-dml-issue.webp)
