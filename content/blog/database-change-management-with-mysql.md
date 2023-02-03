---
title: Database Change Management with MySQL
author: Mila
published_at: 2023/02/03 21:15
feature_image: /static/blog/database-change-management-with-mysql/feature-image.webp
tags: How-To
description: MySQL is an open-source relational database management system developed by Oracle that is based on structured query language. This tutorial will guide you step-by-step to set up database change management for MySQL in Bytebase.
---

This is a series of articles about Database Change Management with MySQL.

- Database Change Management with MySQL (this one)
- Database Change Management with MySQL and GitHub

---

[MySQL](https://www.mysql.com/) is an open-source relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).

This tutorial is a step-by-step guide to set up Database Change Management for MySQL in Bytebase. With Bytebase, a team can have a formalized review and rollout process to make MySQL database schema change and data change.

Bytebase provides a GUI for teams to **perform database changes** and **retain full migration history**. Bytebase Free Plan is suffice for this tutorial.

In the end is a bonus section about **Drift Detection** for those advanced users.

## Prerequisites

Before you start, make sure you have the following downloaded and installed:

- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [Docker](https://www.docker.com/)

## Step 1 - Deploy Bytebase via Docker

1. Make sure your Docker is running, and start the Bytebase Docker container with following command:
  
````bash
docker run --init \
  --name bytebase \
  --platform linux/amd64 \
  --restart always \
  --publish 5678:8080 \
  --health-cmd "curl --fail http://localhost:5678/healthz || exit 1" \
  --health-interval 5m \
  --health-timeout 60s \
  --volume ~/.bytebase/data:/var/opt/bytebase \
  bytebase/bytebase:%%bb_version%% \
  --data /var/opt/bytebase \
  --port 8080
````

2. Bytebase is now running via Docker, and you can access it via `localhost:5678`.

![docker](/static/blog/database-change-management-with-mysql/docker.webp)

3. Visit `localhost:5678` in your browser. Register an account.
![register](/static/blog/database-change-management-with-mysql/register.webp)

## Step 2 - Add a MySQL Instance to Bytebase

In this tutorial, ​an **Instance** is your on-premises MySQL instance.

1. Login to the Bytebase Console.

2. Simply follow the onboarding guide if it’s your first time running Bytebase, otherwise, click **Add Instance**.
![add-instance](/static/blog/database-change-management-with-mysql/add-instance.webp)

3. Add a MySQL instance. Pay attention to these fields:
![create-instance](/static/blog/database-change-management-with-mysql/create-instance.webp)

- **Environment**: choose `Test`, if you choose `Prod`, you'll need approval for all future change requests, let's keep it simple for the sake of this tutorial.
- **Username and password**: root / (leave it empty)

## Step 3 - Create a Project

In Bytebase, **Project** groups logically-related **Databases, Issues** and **Users** together, which is similar to the project concept in other DevTools such as Jira and GitLab. So before you deal with the database, a Project must be created.

1. After the instance is created, you can follow the onboarding guide if it’s your first time using Bytebase. If not, click on **New Project** to create a new project.
![create-project](/static/blog/database-change-management-with-mysql/create-project.webp)

## Step 4 - Create a MySQL database via Bytebase

In Bytebase, a **Database** is created by `CREATE DATABASE xxx`. A database always belongs to a single **Project**. An **Issue** represents a specific collaboration activity between Developer and DBA for when creating a database, altering a schema. It's similar to the issue concept in other issue management tools.

1. After the project is created. Follow the onboarding guide or simply click on **New DB** to create a new database.

2. Fill the form, and pay attention to these fields: 
![create-db](/static/blog/database-change-management-with-mysql/create-db.webp)

- **Project**: choose the project you created in Step 3.
- **Name**: can be anything, here we used `school`
- **Environment** - `Test`
- **Instance** - choose the instance you added in Step 2.
 
And click on **Create**.

3. Bytebase will create an issue to create the database automatically. As it's the `Test` environment, the issue will run without waiting for your approval by default. Click **Resolve**, and the database is created.

![issue-create-db](/static/blog/database-change-management-with-mysql/issue-create-db)

## Step 5 - Create a table in MySQL via Bytebase

In Step 4, you actually created an issue using UI workflow and then executed it. Let’s make it more explicit.

1. Visit your project, and click on **Alter Schema**.

![alter-schema](/static/blog/database-change-management-with-mysql/alter-schema.webp)

2. Choose `demo` and click **Next**. This is where you get to try out the new **Schema Editor**. It’s a visual editor for schema changes. It’s still in beta, so please try it out and give us feedback if you have any.

Here, we are going to create a table called `student` with 3 columns: `id`, `last_name` and `first_name`.

![schema-editor](/static/blog/database-change-management-with-mysql/schema-editor.webp)

3. Hit **Preview issue**, and Bytebase will automatically create an issue with the corresponding SQL statement to create a table with the columns. Check to see if it's correct, and click **Create**.

![create-issue](/static/blog/database-change-management-with-mysql/create-issue.webp)

4. Since it’s for `Test` environment, the issue is automatically approved by default. Click **Resolve issue**. The issue status will become Done.

5. From the issue page, click **view migration**, and you can see differences.

![issue-diff](/static/blog/database-change-management-with-mysql/issue-diff.webp)

## Bonus Section - Schema Drift Detection

To follow this section, you need to activate the **Enterprise Plan** (you can start a 14-day trial directly, no credit card required).

Now you can see the full migration history of database `demo`. However, what is **Establish new baseline**? When should it be used?

By adopting Bytebase, we expect teams to use Bytebase exclusively for all schema changes. Meanwhile, if someone has made MySQL schema change out side of Bytebase, obviously Bytebase won’t know it. And because Bytebase has recorded its own copy of schema, when Bytebase compares that with the live schema having that out-of-band schema change, it will notice a discrepancy and surface a schema drift anomaly. If that change is intended, then you should establish new baseline to reconcile the schema state again.  

In this section, you’ll be guided through this process.

1. Go to your Terminal, connect to MySQL, and add a column `age` to table `student`.

![mysql-addcolumn](/static/blog/database-change-management-with-mysql/mysql-addcolumn.webp)

2. Wait for 10 mins (as Bytebase does the check roughly every 10 mins). Go back to Bytebase, and you can find the Schema Drift on database `student`:

![schema-drift](/static/blog/database-change-management-with-mysql/schema-drift.webp)

3. Click on **View diff**, you will see the exact drift. Use baseline to reconcile the schema state from the live database schema. Go to your database > **Migration History** > click **Establish new baseline**.

![establish-baseline](/static/blog/database-change-management-with-mysql/establish-baseline.webp)

4. Bytebase will create an issue. Click **Resolve** to mark it done.

5. Go back to demo or Anomaly Center, and you will find the Drift is gone.

## Summary and What's Next

Now you have connected MySQL with Bytebase, and used the UI workflow to accomplish schema change. Bytebase will record the full migration history for you. With the **Enterprise Plan**, you can enjoy Schema Drift Detection.

In the next post, you’ll try out GitOps workflow: store your MySQL schema in GitHub and Bytebase will pick up the changes to the repo, bringing your MySQL change workflow to the next level, aka **Database DevOps** - [Database as Code](/blog/database-as-code).