---
title: 5 Mins Quick Start
---

In this guide, you'll use **"Bytebase Test Suite"** (one Bytebase and two MySQL instances) to get familiar with the product in the quickest way.

## Prerequisites

Before starting, make sure you have installed [Docker](https://www.docker.com/get-started/).

## Procedure

### Step 1 - Deploy with sample datasets

1. Start Docker.
2. Open Terminal to run the command:

<pre>
curl -fsS https://raw.githubusercontent.com/bytebase/bytebase/main/quickstart/getting-started.docker-compose.yml | BB_VERSION=<version></version> docker-compose -f - up
</pre>

If the above command doesn't work, use the proxy version:

<pre>
curl -fsS https://ghproxy.com/https://raw.githubusercontent.com/bytebase/bytebase/main/quickstart/getting-started.docker-compose.yml | BB_VERSION=<version></version> docker-compose -f - up
</pre>

When the Terminal shows the following message, the execution is successful.

<pre>
  employee-prod_1  | 2022-06-21T02:35:01.128005Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.29) starting as process 63
  employee-prod_1  | 2022-06-21T02:35:01.150847Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
  bytebase         | 2022-06-21T02:35:01.449Z	INFO	Completed database initial migration with version 1.1.2.
  bytebase         | 2022-06-21T02:35:01.465Z	INFO	Current schema version after migration: 1.1.2
  employee-prod_1  | 2022-06-21T02:35:01.483013Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
  bytebase         | 2022-06-21T02:35:01.489Z	INFO	get project env	{"env": "prod"}
  bytebase         | 2022-06-21T02:35:01.489Z	INFO	load public pem	{"file": "keys/prod.pub.pem"}
  bytebase         |
  bytebase         | ██████╗ ██╗   ██╗████████╗███████╗██████╗  █████╗ ███████╗███████╗
  bytebase         | ██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
  bytebase         | ██████╔╝ ╚████╔╝    ██║   █████╗  ██████╔╝███████║███████╗█████╗
  bytebase         | ██╔══██╗  ╚██╔╝     ██║   ██╔══╝  ██╔══██╗██╔══██║╚════██║██╔══╝
  bytebase         | ██████╔╝   ██║      ██║   ███████╗██████╔╝██║  ██║███████║███████╗
  bytebase         | ╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
  bytebase         |
  bytebase         | Version <version></version> has started at <http://localhost:5678>
  bytebase         | ___________________________________________________________________________________________
  bytebase         |
  employee-test_1  | [Entrypoint] Database initialized
</pre>

Now you have three Docker containers running:

- A Bytebase instance
- A MySQL instance for the Test environment
- A MySQL instance for the Prod environment

![3-containers-in-docker](/docs/en/get-started/quick-start/3-containers-in-docker.webp)

Each MySQL instance has a copy of the sample dataset in it. It’s the dataset_small from [open-source database "employee"](https://github.com/bytebase/employee-sample-database-mysql).

3. Open Bytebase in [localhost:5678](http://localhost:5678/), and you can see the following page in the browser.

![welcome-page](/docs/en/get-started/quick-start/welcome-page.webp)

1. Create an admin account, and you are in the workspace.

### Step 2 - Prepare the workspace

#### 2.1 Set up environments

- Click **Environments** on the top bar and you will see **Test** and **Prod** environments. You can keep the default settings or adjust them based on your needs.

Prod environment requires manual approval while Test environment skips that.

#### 2.2 Add instances

1. Click **Instances** on the top bar.
2. Click **Add Instance** on the instances page, and you will see **Create Instance** dialog box.
   ![add-instance](/docs/en/get-started/quick-start/add-instance.webp)
3. Fill the fields as follows:

- Choose **MySQL**
- **Instance Name**: Sample Instance Test
- **Environment**: Test
- **Host or Socket**: host.docker.internal
- **Port**: 3307
- **Username**: root
- **Password**: [empty]

4. Click **Create**, and the instance is created.
5. Roll down to the bottom, you can find a section showing **Databases** and **Users** from this instance.
6. Repeat the operation with another instance and :

- Choose **MySQL**
- **Instance Name**: Sample Instance Prod
- **Environment**: Prod
- **Host or Socket**: host.docker.internal
- **Port**: 3306
- **Username**: root
- **Password**: [empty]

Now, you have configured two instances for Test and Prod environment containing copies of the same sample dataset.

### Step 3 - Add a coloumn `nickname` to `employee` table

#### 3.1 Create a project

In Bytebase, **Project** is the unit to contain and manage databases. Therefore, before dealing with the sample databases, you need to transfer them into a project first.

1. Click **Projects** > **New Project** , you will find **Create Project** dialog box.
2. Fill in **Project Name** with Employee, **Key** with T8T, and Select **Mode** as Standard.
3. The "Employee" project is created successfully and you are on its detail page.

![create-a-project](/docs/en/get-started/quick-start/create-a-project.webp)

4. Choose **Transfer DB** to transfer in the two "Employee" databases from Test and Prod environment. They’re in the default project since they have not been transferred into any specific project yet.

Now you are ready to manage these two "employee" databases in your project.Your next task is to add a column named "nickname" to the "employee" table.

#### 3.2 Create an SQL issue to alter schema

1. Go to "Employee" project page.
2. Click **Alter Schema**, you will find an **Alter Schema** dialog box.
3. Choose **Alter multiple databases**, select **Test > employee, Prod > employee**, and click **Next**.
4. An issue is created, and you will be navigated to the new issue page. On top of **SQL** box, You can find that the issue has a pipeline with two stages - Test and Prod. Test stage is active by default.

![create-an-issue](/docs/en/get-started/quick-start/create-an-issue.webp)

5. Fill the fields as follows:

- **Title**: "Alter Schema: Add a column nickname".
- **SQL**:`ALTER TABLE employee ADD nickname VARCHAR(255) ;`.
- **Description**(option): "Add a column nickname".
- **Assignee**: [yourself]

6. Click **Apply to other stages**, the SQL will be applied to **Prod** as well.
7. Click **Create**, and you will see the **SQL Advisor** kicks off automatically — checks the SQL statements against various rules.
8. As the Test environment doesn't require manual approval, the SQL will be applied to the database on Test environment automatically after passing those advisor checks. Then you are waiting for approval for the Prod environment.

#### 3.3 Review the SQL issue

1. Click **Approve** if everything is OK and the SQL will be applied to the database on Prod environment.
2. Click **Resolve issue**, and the issue is **Done**.

![issue-done](/docs/en/get-started/quick-start/issue-done.webp)