---
title: Prepare the Workspace
---

## Manage members

Click `Settings` on the top bar to manage members in your workspace. You are assigned the `Owner` role as the first user and can add new members by email.

![_](/static/docs/add-users.png)

![_](/static/docs/manage-user.png)

> This demo uses the free version of Bytebase. It doesn't support role management (RBAC), and all users assume the `Owner` role.
> With team or enterprise plan, you can manage users' roles in the workspace and project level.

## Set Up Environments

Bytebase has created the "Test" and "Prod" environments by default. Click `Environments` to see their details.

![_](/static/docs/environment-test.png)

![_](/static/docs/environment-prod.png)

You can keep the default settings or adjust them based on your needs.

## Add Instances

Click `Instances` > `Add Instance`.

![_](/static/docs/add-instance.png)

In the pop-up window, fill in the blanks as follows:

![_](/static/docs/create-instance-test.png)

![_](/static/docs/username.png)

Click `Create`. After that, roll down the page. You can find a table showing database information.

![_](/static/docs/database-table.png)

Repeat the operation with the Prod instance.

![_](/static/docs/create-instance-prod.png)

![_](/static/docs/username.png)

Then you have two instances containing copies of the same sample dataset.
