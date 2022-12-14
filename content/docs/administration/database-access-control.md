---
title: Database Access Control
---

<hint-block type="info">

This feature is only available in the Enterprise plan.

</hint-block>

By default, instances and databases in a [protected environment](/docs/administration/environment-policy/tier) will be inaccessible to users with Workspace Developer role from the [SQL Editor](/docs/sql-editor/overview).

For databases in the [protected environment](/docs/administration/environment-policy/tier), workspace owners and DBAs can grant database access to workspace developers via **Settings / Workspace / Access Control**.

Click **Add rule**, search and select databases in the protected environments.

![setting-add-rule](/static/docs/administration/database-access-control/access-control-add-rule.webp)

See the following example, the `employee` database is configured as accessible to developers even if it is in a protected environment.

![setting](/static/docs/administration/database-access-control/access-control-settings.webp)

Then, developers are allowed to query the `employee` database from the [SQL Editor](/docs/sql-editor/overview). 