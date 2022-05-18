---
title: Link External SQL Console
---

> If your team use a separate SQL console such as phpMyAdmin, you can provide its URL pattern, so that Bytebase can surface the console link on the relevant database and table UI.

Go to `Settings` , under `Workspace`, click `General`. Here you can configure the SQL console URL

<hint-block type="warning">

Only **Workspace Owner** can change the SQL console setting.

</hint-block>

- You can use `{{DB_NAME}}` as the database name placeholder.

In the below example, we configure the URL to point to a phpMyAdmin instance running at http://localhost:8081

![setting-console](/static/docs-assets/setting-console.png)

After configuring the URL, the external link will surface on the relevant database and table UI like the database detail page below:

![sql-console-link](/static/docs-assets/sql-console-link.png)

After clicking the button, user will be navigated to the configured SQL console like phpMyAdmin in our example:

![{{DB_NAME}} is replaced by the actual database name](/static/docs-assets/php-my-admin.png)
