---
title: Synchronize Schema
---

<hint-block type="warning">

This feature is in beta and only available for MySQL.

</hint-block>

Bytebase can synchronize one database schema to another database. To synchronize the schema, Bytebase calculates the schema diff between the two databases and generates the required DDL statements (e.g. ALTER TABLE).

## How to use

![sync-schema-dialog](/static/docs/change-database/synchronize-schema/sync-schema-dialog.webp)

1. Select project

2. Select schema version

   The schema version is selected from the database's migration history.

   <hint-block type="info">

   In the Enterprise Plan, you can select an arbitrary schema version from the migration history. In other plans, you can only select the latest schema version.

   </hint-block>

3. Apply to database

   Select the database that will be synchronized with the previously selected schema.

4. Generated DDL statements

   Bytebase will show a schema diff between two databases and generate the DDL statements. You can further edit the generated content.

5. Preview issue

   With the generated DDL statements, you can preview and create an "Alter Schema" issue. This kicks off the [change workflow](/docs/change-database/change-workflow) for the applied database.
