---
title: Add an Instance
---

**Database Instance** or simply **Instance** models after a single database instance which is usually accessed via a host:port address. A typical database instance could be your on-premises MySQL instance, an AWS RDS instance etc. Each **Database Instance** belongs to an **Environment**.

Currently Bytebase supports **MySQL**, **PostgreSQL**, **TiDB**, **Snowflake** and **ClickHouse** instances. 

This document describes how to add an instance in order to synchronize databases.


## Prerequisites
- **Workspace Owner** or **Workspace DBA** role

## Add an instance
1. Click **Instances** on the top bar.
2. Click **Add Instance**.
3. Enter **Instance name**, select **Environment**, enter **Host or Socket** and **Port**.
4. Enter connection info: **Username** and **Password**, and click **Test Connection**.
5. If the instance is of very large size, uncheck **Sync schema now**, and click **Create**. You can see the new instance in the table.
6. Choose one instance, scroll down, here you can see all the databases in that instance. If you unchecked **Sync schema now** in the previous step, now you can click **Sync now** to wait for all databases to display.

![create-an-instance](/docs/en/get-started/configure-the-workspace/add-an-instance/create-an-instance.webp)

<hint-block type="info">

Environment can not be changed once the Instance has been created.

</hint-block>

After adding an instance and synchronizing. Click **Databases** on the navigation bar. You can find the table is still empty. It’s because you haven’t created any project yet. In Bytebase, only databases belong to a specific project will display in the Databases page.