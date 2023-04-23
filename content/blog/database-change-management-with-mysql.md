---
title: Database Change Management with MySQL
author: Mila
published_at: 2023/04/23 11:15
feature_image: /static/blog/database-change-management-with-mysql/feature-image.webp
tags: Tutorial
integrations: MySQL
level: Beginner
description: MySQL is the most popular open-source relational database management system. This tutorial will guide you step-by-step to set up database change management for MySQL in Bytebase.
---

This is a series of articles about Database Change Management with MySQL.

- Database Change Management with MySQL (this one)
- [Database Change Management with MySQL and GitHub](/blog/database-change-management-with-mysql-and-github)

---

[MySQL](https://www.mysql.com/) is the most popular open-source relational database management system.

This tutorial is a step-by-step guide to set up Database Change Management for MySQL in Bytebase. With Bytebase, a team can have a formalized review and rollout process to make MySQL database schema change and data change.

Bytebase provides a GUI for teams to **perform database changes** and **retain full migration history**. Bytebase Free Plan is sufficient for this tutorial.

At the end, there is a bonus section about **Schema Drift Detection** for those advanced users.

## Features Covered in This Turtorial

- Change Workflow
- Schema Editor
- SQL Editor
- SQL Review
- Change History
- DML Rollback
- Drift Detection

## Prerequisites
Before you start, make sure you have [Docker](https://www.docker.com/) installed.

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

4. Run the following command to start a MySQL in Docker according to [Configure a Local MySQL Instance for Testing](/docs/get-started/install/local-mysql-instance), and then make sure it's running via docker.
````bash
docker run --name mysqld \
  --publish 3306:3306 \
  -e MYSQL_ROOT_HOST=172.17.0.1 \
  -e MYSQL_ROOT_PASSWORD=testpwd1 \
  mysql/mysql-server:8.0
````

## Step 2 - Add a MySQL Instance to Bytebase

In Bytebase, ​​an **Instance** could be your on-premises MySQL instance, an AWS RDS instance and etc. In this tutorial, it's an on-premises MySQL instance.

1. Visit `localhost:5678` in your browser, and log in to Bytebase Console.

2. Click **Add Instance**.
![add-instance](/static/blog/database-change-management-with-mysql/add-instance.webp)

1. Add a MySQL instance. Pay attention to these fields:
![create-instance](/static/blog/database-change-management-with-mysql/create-instance.webp)

- **Environment**: choose `Test`, if you choose `Prod`, you'll need approval for all future change requests, let's keep it simple for the sake of this tutorial.
- **Username and password**: `root` and `testpwd1`

## Step 3 - Create a Project

In Bytebase, **Project** groups logically-related **Databases, Issues** and **Users** together, which is similar to the project concept in other DevTools such as Jira and GitLab. So before you deal with the database, a Project must be created.

1. After the instance is created, go to the **Projects** tab, click on **New Project** to create a new project `mysql-tutorial`.
![create-project](/static/blog/database-change-management-with-mysql/create-project.webp)

## Step 4 - Create a MySQL database via Bytebase

In Bytebase, a **Database** is created by `CREATE DATABASE xxx`. A database always belongs to a single **Project**. An **Issue** represents a specific collaboration activity between Developer and DBA for when creating a database, altering a schema. It's similar to the issue concept in other issue management tools.

1. Go into the project `mysql-tutorial`, and click on **New DB** to create a new database.
![new-db](/static/blog/database-change-management-with-mysql/new-db.webp)

2. Fill the form, and pay attention to these fields: 
![create-db](/static/blog/database-change-management-with-mysql/create-db.webp)

- **Name**: can be anything, here we used `uni`
- **Environment** - `Test`
- **Instance** - choose the instance you added in Step 2.
 
And click on **Create**.

3. Bytebase will create an issue to create the database automatically. As it's the `Test` environment, the issue will run without waiting for your approval by default. Click **Resolve**, and the database is created.

![create-issue](/static/blog/database-change-management-with-mysql/create-issue.webp)

## Step 5 - Create a Table in MySQL via Bytebase

In Step 4, you actually created an issue using UI workflow and then executed it. Let’s make it more explicit.

1. Visit your project, and click on **Alter Schema**.

![alter-schema](/static/blog/database-change-management-with-mysql/alter-schema.webp)

2. Choose your database and click **Next**. This is where you get to try out the new **Schema Editor**. It’s a visual editor for schema changes.

Here, we are going to create a table called `student` with 2 columns: `id` and `last_name`.

![schema-editor](/static/blog/database-change-management-with-mysql/schema-editor.webp)

3. Hit **Preview issue**, and Bytebase will automatically create an issue with the corresponding SQL statement to create a table with the columns. Check to see if it's correct, and click **Create**.

![create-issue](/static/blog/database-change-management-with-mysql/create-issue.webp)

4. Since it’s for the `Test` environment, the issue is automatically approved by default. Click **Resolve issue**. The issue status will become `Done`.

5. The issue is automatically approved by default since it’s for the `Test` environment. Meanwhile, Bytebase has run several task checks before executing the SQL, and one such task check is called SQL Reivew. 

6. From the issue page, click **view change**, and you can see diff.

![issue-diff](/static/blog/database-change-management-with-mysql/issue-diff.webp)

## Step 6 - Run your SQL Review Policy
1. Go to **Settings** > **SQL Review**, click **Configure policy** for `Test` environment.
![bb-settings-sql-review-configure](/static/blog/database-change-management-with-mysql/bb-settings-sql-review-configure.webp)

2. Choose `Basic Template` with 55 enabled rules and click **Next**.
![bb-settings-sql-review-step1](/static/blog/database-change-management-with-mysql/bb-settings-sql-review-step1.webp)

3. You can see 55 rules with different Error Levels. Click **Confirm and Add**.
![bb-settings-sql-review-step2-rules](/static/blog/database-change-management-with-mysql/bb-settings-sql-review-step2-rules.webp)

4. Go back to the project `mysql-tutorial`, and click **Alter Schema**. Choose `demo` under `Test` environment.
   
5. Add a column `first_name` this time, but uncheck **Not Null**. Click **Preview** and then click **Create**.
![bb-schema-editor-no-notnull](/static/blog/database-change-management-with-mysql/bb-schema-editor-no-notnull.webp)

6. After the issue is created, you will see the **SQL Review** label is yellow. Click **SQL Review**, you will see warning rules there. It's possible to enforce rolling out while ignoring the warning. Here we won't click it.
![bb-issue-sql-review-warning-rollout](/static/blog/database-change-management-with-mysql/bb-issue-sql-review-warning-rollout.webp)
![bb-issue-sql-review-warning](/static/blog/database-change-management-with-mysql/bb-issue-sql-review-warning.webp)

7. Click **SQL Editor** on the left bar. Choose `demo` under `Test`, input `SELECT * FROM demo.student;` and click **Run**. You'll see there are warnings pop up.
![bb-sql-editor-warning](/static/blog/database-change-management-with-mysql/bb-sql-editor-warning.webp)

## Step 7 - Rollback your Data Change (DDL)
1. Go back to home page, and click **SQL Editor** on the left bar.
   
2. Switch to **Admin Mode**, and run the following commands according to [Rollback Data Change](/docs/change-database/rollback-data-changes).
```bash
SHOW VARIABLES LIKE 'log_bin';
```
The value should be `ON`.
```bash
SHOW VARIABLES LIKE 'binlog_format';
```
The value should be `ROW`.
```bash
SHOW VARIABLES LIKE 'binlog_expire_logs_seconds';
```
The value should be at least `3600`.
![bb-sql-editor-admin-rollback-on](/static/blog/database-change-management-with-mysql/bb-sql-editor-admin-rollback-on.webp)

3. Go back to the project `mysql-tutorial`, and click **Change Data**. Choose `demo` under `Test`.
   
4. Input the following script into SQL field, and turn on **SQL Rollback** on the right side.
```sql
INSERT demo.student(id,last_name) VALUES(1,'Chen');
```
![bb-issue-change-data-rollback](/static/blog/database-change-management-with-mysql/bb-issue-change-data-rollback.webp)

5. After the issue is created, click **Preview Rollback issue** and you will see a `DELETE FROM ...` issue is generated automatically.
![bb-issue-rollback-change-data](/static/blog/database-change-management-with-mysql/bb-issue-rollback-change-data.webp)

## Bonus Section - Schema Drift Detection

To follow this section, you need to activate the **Enterprise Plan** (you can start a 14-day trial directly, no credit card required).

Now you can see the full migration history of database `demo`. However, what is **Establish new baseline**? When to use it?

By adopting Bytebase, we expect teams to use Bytebase exclusively for all schema changes. Meanwhile, if someone has made MySQL schema change out side of Bytebase, obviously Bytebase won’t know it. And because Bytebase has recorded its own copy of schema, when Bytebase compares that with the live schema having that out-of-band schema change, it will notice a discrepancy and surface a schema drift anomaly. If that change is intended, then you should establish new baseline to reconcile the schema state again.  

In this section, you’ll be guided through this process.

1. Go to your Terminal, connect to MySQL or use **SQL Editor Admin Mode** and add a column `age` to table `student`.
![mysql-add-column](/static/blog/database-change-management-with-mysql/mysql-add-column.webp)

2. Wait for 10 mins (as Bytebase does the check roughly every 10 mins). Go back to Bytebase, and you can find the Schema Drift on database `student`
3. 
![schema-drift](/static/blog/database-change-management-with-mysql/schema-drift.webp)

1. Click on **View diff**, you will see the exact drift. 
![diff](/static/blog/database-change-management-with-mysql/diff.webp)

1. Go to **Databases** > select the database in drift > **Change History** > **Establish new baseline**, this step establishes a new baseline to reconcile the schema state from the live database schema.
![establish-baseline](/static/blog/database-change-management-with-mysql/establish-baseline.webp)

1. Bytebase will create an issue to establish the new baseline, click **Create**, and then **Resolve** to mark it done.
![establish-baseline-issue](/static/blog/database-change-management-with-mysql/establish-baseline-issue.webp)

1. Go back to your database page, where you will find the drift is gone and no anomalies detected.
![no-anomalies](/static/blog/database-change-management-with-mysql/no-anomalies.webp)


## Summary and What's Next

Now you have connected MySQL with Bytebase, and used the UI workflow to accomplish schema change. Bytebase will record the full migration history for you. Furthermore, the **Enterprise Plan** is equipped with Schema Drift Detection to detect out-of-band schema changes performed outside of Bytebase.

In the next post, you’ll try out GitOps workflow: store your MySQL schema in GitHub and Bytebase will pick up the changes to the repo, bringing your MySQL change workflow to the next level, aka **Database DevOps** - [Database as Code](/blog/database-as-code).