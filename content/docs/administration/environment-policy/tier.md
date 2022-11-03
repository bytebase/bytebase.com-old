---
title: Environment Tier
---

<hint-block type="info">

This feature is only available in the Enterprise plan.

</hint-block>

For environments such as the production environment, extra care should be taken. Bytebase allows marking such an environment as a protected environment. Workspace OWNER or DBA can configure this under the Environment Tier section from the environment detail page.

When an environment is marked as a protected environment, a shield indicator will appear before the environment label. It lets users know that it is a protected environment. 

See the following example, the environment “Prod” is marked as a protected environment. You can find the shield indicator on different pages.

![tier-envs](/static/docs/administration/tier/env-tier-envs.webp)

![tier-issue-details](/static/docs/administration/tier/env-tier-issue-details.webp)

A caution notice will also appear at the top of the SQL Editor when you connect to an instance in a protected environment.

![tier-editor](/static/docs/administration/tier/env-tier-editor.webp)