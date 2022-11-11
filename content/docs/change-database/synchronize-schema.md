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

2. Select schema

   The schema should be one of the database's migration history. The default is the latest.

   <hint-block type="info">

   In the Enterprise Plan, you can set a special schema version from migration history list.

   </hint-block>

3. Apply to database

   Select the database that will be synchronized with the previously selected schema.

4. The generated DDL statement

   Bytebase will show a code diff between two database schema and generate the DDL statement. You can further edit the generated DDL statement.

5. Preview issue

   With the generated DDL statement, you can preview and create an "Alter Schema" issue for the selected database.
