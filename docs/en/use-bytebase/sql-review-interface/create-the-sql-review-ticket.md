---
title: Create the SQL review ticket
---

# Create the SQL review ticket

For project using the [UI-based schema change workflow](/docs/concepts/schema-change-workflow#ui-workflow), developer normally would go to the project detail page and click the "Alter Schema" button from the quick action bar. From there developer can choose one or more databases to apply the schema change.

![Change a single database schema](/static/docs-assets/alter-schema-single-db.png)

If developer selects multiple databases, Bytebase will create a SQL review ticket with a pipeline composing multiple stages, each representing a schema change to a database.

![Generated multi-stage SQL review ticket](/static/docs-assets/alter-schema-muti-db-creation.png)

Developer must fill the SQL statement for each stage and assign a person to review the ticket. Only `Workspace Owner or DBA` can be assigned.

Optionally, developer can fill the Rollback SQL statement to facilitate the rollback process.
