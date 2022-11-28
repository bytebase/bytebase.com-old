---
title: Sensitive Data
---

<hint-block type="info">

This feature is only available in the Enterprise plan.

</hint-block>

Workspace Owners and DBAs can mark table columns as `Sensitive`.

See the following example, the `salary` column is marked as `Sensitive`.

![setting](/static/docs/administration/sensitive-data/sensitive-data-setting.webp)

You may also manage all `Sensitive` columns in **"Settings / Workspace / Sensitive Data"**.

![workspace setting](/static/docs/administration/sensitive-data/sensitive-data-workspace-setting.webp)

Then, the query result of `Sensitive` columns from the [SQL Editor](/docs/sql-editor/overview) will be masked as "\*\*\*\*\*\*".

![query result](/static/docs/administration/sensitive-data/sensitive-data-masked.webp)

Note that the query result will not be masked while using [Admin Mode](/docs/sql-editor/admin-mode).
