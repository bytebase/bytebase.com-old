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

4. The generated DDL statement

   Bytebase will show a code diff between two database schema and generate the DDL statement. You can further edit the generated DDL statement.

5. Preview issue

   With the generated DDL statement, you can preview and create an "Alter Schema" issue for the selected database.
