---
title: Add an Instance
---

**Database Instance** or simply **Instance** models after a single database instance which is usually accessed via a host:port address. A typical database instance could be your on-premises MySQL instance, an AWS RDS instance etc. Each **Database Instance** belongs to an **Environment**.

Currently Bytebase supports **MySQL**, **PostgreSQL**, **TiDB**, **Snowflake** and **ClickHouse** instances.

This document describes how to add an instance in order to synchronize databases.

## Prerequisites

- **Workspace Owner** or **Workspace DBA** role
- If you don't have an existing instance on hand, you can [add a local MySQL instance](/docs/get-started/install/local-mysql-instance).

## Add an instance

1. Click **Instances** on the top bar.
2. Click **Add Instance**.
3. Enter **Instance name**, select **Environment**, enter **Host or Socket** and **Port**.
4. Enter connection info: **Username** and **Password**, and click **Test Connection**.
5. If the instance is of very large size, uncheck **Sync schema now**, and click **Create**. You can see the new instance in the table.
6. Choose one instance, scroll down, here you can see all the databases in that instance. If you unchecked **Sync schema now** in the previous step, now you can click **Sync now** to wait for all databases to appear.

![create-an-instance](/docs/get-started/configure-workspace/add-an-instance/add-an-instance.webp)

<hint-block type="info">

1. Environment can not be changed once the Instance has been created.
2. The screenshot assumes you run Bytebase inside Docker and try to connect to a database instance on the same host. Thus it uses `host.docker.internal`. If Bytebase is not running inside Docker, you should supply the normal `127.0.0.1` to connect the instance on the same host [(detailed explanation)](https://stackoverflow.com/a/24326540/235983).

</hint-block>

After adding an instance and syncing the schema, click **Databases** on the navigation bar. You can find the table is still empty. It’s because you haven’t created any project yet. In Bytebase, only databases belong to a user project will show up on the Databases page.
