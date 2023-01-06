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
1. Click **Add Instance**.
1. Enter **Instance name**, select **Environment**, enter **Host or Socket** and **Port**.
1. Enter connection info: **Username** and **Password**, and click **Test Connection**.
1. (Optional) Enter SSL connection info:
   1. Choose **None** to not use SSL connection.
   1. Choose **CA Certificate** to use SSL connection with CA certificate only.
   1. Choose **CA Certificate + Client Key + Client Certificate** to use a full SSL connection.

![create-an-instance](/docs/get-started/configure-workspace/add-an-instance/add-an-instance.webp)

<hint-block type="info">

1. Environment can not be changed once the Instance has been created.
1. The screenshot assumes you run Bytebase inside Docker and try to connect to a database instance on the same host. Thus it uses `host.docker.internal`. If Bytebase is not running inside Docker, you should supply the normal `127.0.0.1` to connect the instance on the same host [(detailed explanation)](https://stackoverflow.com/a/24326540/235983).
1. The SSL connection configuration only supports MySQL, TiDB and ClickHouse for now. You can also configure the SSL connection on the instance details page.

</hint-block>

After adding an instance, click **Databases** on the navigation bar. You can find the table is still empty. It’s because you haven’t created any project yet. In Bytebase, only databases belong to a user project will show up on the Databases page.

## Configure read-only connection

To separate from admin connection, you can configure a read-only connection used by SQL Editor once an instance is added. This separation can be configured at the database user/role access control level or replication instance level.

1. Create a new role with read-only access or a read-replica instance.
1. Click **Create** on **Connection info**.
1. Enter read-only connection info. If this is a read-replica instance, you need to enter its host and port information.
1. Click **Update** to finish the configuration.
