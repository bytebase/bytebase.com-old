---
title: Approval Policy
order: 40401
---

# Approval Policy

## Updating schema on existing database

`Owner` or `DBA` can configure the approval policy for a particular environment from the "Environment" detail page:

![environment-configure](/static/docs-assets/environment-configure.png)

This setting will affect projects using either [UI workflow or Version Control workflow](/docs/concepts/schema-change-workflow). Bytebase periodically inspects the next pending task. If the task whose environment requires manual approval, then Bytebase will wait to execute the task until someone manually approves the task. Otherwise, Bytebase will execute the task automatically.

## Creating database

For all environments, `Owner` or `DBA` doesn't require additional manual approval to create new database, while `Developer` requires the manual approval from `Owner` or `DBA` to create new database.
