---
title: Access Control
---

<hint-block type="info">

This feature is only available in the Enterprise plan.

</hint-block>

By default, instances and databases in a [protected environment](/docs/administration/environment-policy/tier) will be inaccessible to developers from the [SQL Editor](/docs/sql-editor/overview).

![editor-inaccessible](/static/docs/administration//access-control/access-control-editor-inaccessible.webp)

Workspace owners and DBAs can configure some databases in a [protected environment](/docs/administration/environment-policy/tier) as accessible to developers via **Settings / Workspace / Access Control**.

See the following example, the `employee` database is configured as accessible to developers even if it is in a protected environment.

![setting](/static/docs/administration/access-control/access-control-settings.webp)

Then, developers are allowed to query the `employee` database from the [SQL Editor](/docs/sql-editor/overview). 

![editor-accessible](/static/docs/administration//access-control/access-control-editor-accessible.webp)
