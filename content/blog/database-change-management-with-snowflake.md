---
title: Database Change Management with Snowflake
author: Ningjing
published_at: 2022/12/22 21:15
feature_image: /static/blog/database-change-management-with-snowflake/db-change-snowflake.webp
tags: How-To
description: This tutorial will guide you step-by-step to set up database change management for Snowflake in Bytebase. 
---

This is a series of articles about Database Change Management with Snowflake

- Database Change Management with Snowflake (this one)
- [Database Change Management with Snowflake and GitHub](/blog/database-change-management-with-snowflake-and-github)

---

This tutorial will guide you step-by-step to set up database change management for [Snowflake](https://www.snowflake.com/en/) in Bytebase. With Bytebase, a team can have a formalized review and rollout process to make Snowflake schema change and data change.

Here we have to mention the informative blog post [Embracing Agile Software Delivery and DevOps with Snowflake](https://www.snowflake.com/blog/embracing-agile-software-delivery-and-devops-with-snowflake/), which provided valuable insights and inspired us to implement similar processes in our product.

You’ll have a GUI and the full migration history. You can use Bytebase **Free Plan** to finish the tutorial. There is also a bonus section about schema drift detection for those advanced users if needed.

## Prerequisites

Before you start this tutorial, make sure:

- You have a Snowflake account with the role `ACCOUNTADMIN`.
- You have [Docker](https://www.docker.com/) installed locally.

## Step 1 - Start Bytebase in Docker

1. Make sure your docker daemon is running, and start the Bytebase docker container by typing the following command in the terminal.

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

2. Bytebase is running successfully in Docker, and you can visit it via `localhost:5678`.
![docker](/static/blog/database-change-management-with-snowflake/docker.webp)

3. Visit `localhost:5678` in your browser. Register the first admin account which will be granted `Workspace Owner`.
![bb-register](/static/blog/database-change-management-with-snowflake/bb-register.webp)

## Step 2 - Add Snowflake account in Bytebase
In Bytebase, ​​an **Instance** could be your on-premises MySQL instance, an AWS RDS instance etc, in this tutorial, a Snowflake account.

1. Visit `localhost:5678` and login as Workspace Owner.
![bb-login](/static/blog/database-change-management-with-snowflake/bb-login.webp)

2. Follow the onboarding guide if it’s your first time running Bytebase, otherwise, click **Add Instance**.
![bb-add-instance](/static/blog/database-change-management-with-snowflake/bb-add-instance.webp)

3. Add a Snowflake instance. You need to pay attention to some fields:
![bb-create-instance](/static/blog/database-change-management-with-snowflake/bb-create-instance.webp)
**Environment**: choose `Test`, if you choose `Prod`, you will need approval for all future change requests. In this tutorial, let's try to keep it simple. (However, it’s all configurable later.)

**Account name**: Go to your Snowflake account, you can find it in the URL, or from the locator field (but lower case).
![sf-locator](/static/blog/database-change-management-with-snowflake/sf-locator.webp)

**Username and password**: The ones you use to log into your Snowflake account.
![sf-login](/static/blog/database-change-management-with-snowflake/sf-login.webp)

Regarding the **Connection info**,  make sure your account has `DEFAULT_ROLE=ACCOUNTADMIN` and `DEFAULT_WAREHOUSE` set in Snowflake, as shown below.
![sf-role-list](/static/blog/database-change-management-with-snowflake/sf-role-list.webp)
![sf-edit-user](/static/blog/database-change-management-with-snowflake/sf-edit-user.webp)

## Step 3 - Create a Project with Snowflake instance

In Bytebase, **Project** is the container to group logically related **Databases, Issues** and **Users** together, which is similar to the project concept in other dev tools such as Jira, GitLab. So before you deal with the database, a project must be created.

1. After the instance is created, follow the onboarding guide if it’s your first time using Bytebase. If not, click **Projects** on the top bar.
![bb-sf-created](/static/blog/database-change-management-with-snowflake/bb-sf-created.webp)

2. Click **New Project** to create a new project `TestSnowflake`, key is `TS`, mode is `standard`. Click **Create**.
![bb-new-project](/static/blog/database-change-management-with-snowflake/bb-new-project.webp)

## Step 4 - Create a database in Snowflake via Bytebase

In Bytebase, a **Database** is the one created by `CREATE DATABASE xxx`. A database always belongs to a single **Project**. **Issue** represents a specific collaboration activity between Developer and DBA such as creating a database, altering a schema. It's similar to the issue concept in other issue management tools.

1. After the project is created. Follow the onboarding guide if it’s your first time using Bytebase. If not, click **New DB** on the top bar.
![bb-new-db](/static/blog/database-change-management-with-snowflake/bb-new-db.webp)

2. Fill the form with Name - `DB_DEMO_BB` (BB is short for Bytebase), Environment - `Test`, and Instance - `Snowflake instance`. Click **Create**.
![bb-create-db](/static/blog/database-change-management-with-snowflake/bb-create-db.webp)

3. Bytebase will create an issue “CREATE DATABASE ….” automatically. Because it’s for the `Test` environment, the issue will run without waiting for your approval by default. Click **Resolve**, and the issue is Done. The database is created.
![bb-go-home](/static/blog/database-change-management-with-snowflake/bb-go-home.webp)

4. Go back to the home page by clicking **Home** on the left sidebar. If it’s the first time you use Bytebase, it’ll show a celebration. On the home page, you can see the project, the database, and the issue you just resolved.
![bb-created-database](/static/blog/database-change-management-with-snowflake/bb-created-database.webp)

## Step 5 - Create a table in Snowflake via Bytebase

In Step 4, you actually created an issue in UI workflow and then executed it. Let’s make it more explicit.

1. Go to project `TestSnowflake`, and click **Alter Schema**.
![bb-prj-alter-schema](/static/blog/database-change-management-with-snowflake/bb-prj-alter-schema.webp)

2. Choose `DB_DEMO_BB` and click **Next**. It could generate a pipeline if you have different databases for different environments.
![bb-alter-schema-test](/static/blog/database-change-management-with-snowflake/bb-alter-schema-test.webp)

3. Input title, SQL, and Assignee, and click **Create**.
````sql
CREATE SCHEMA DEMO_UI;
CREATE TABLE HELLO_WORLD
(
  FIRST_NAME VARCHAR,
  LAST_NAME VARCHAR
);
````
![bb-is-new-create-table](/static/blog/database-change-management-with-snowflake/bb-is-new-create-table.webp)

4. Bytebase will do some basic checks and then execute the SQL. Since it’s for `Test` environment, the issue is automatically approved by default. Click **Resolve issue**.
![bb-is-create-table-run](/static/blog/database-change-management-with-snowflake/bb-is-create-table-run.webp)

5. The issue status will become Done.
![bb-is-create-table-done](/static/blog/database-change-management-with-snowflake/bb-is-create-table-done.webp)

6. On the issue page, click **view migration**. You will see diff for each migration.
![bb-view-migration](/static/blog/database-change-management-with-snowflake/bb-view-migration.webp)

7. You can also go to **Migration History** under the project to view the full history. Or go into a specific database to view its history.
![bb-prj-mh](/static/blog/database-change-management-with-snowflake/bb-prj-mh.webp)
![bb-db-mh](/static/blog/database-change-management-with-snowflake/bb-db-mh.webp)

## Bonus Section - Schema Drift Detection

To follow this section, you need to have **Team Plan** or **Enterprise Plan** (you can start 14 days trial directly in the product without credit card).

Now you can see the full migration history of DB_DEMO_BB. However, what is **Establish new baseline**? When should it be used?

By adopting Bytebase, we expect teams to use Bytebase exclusively for all schema changes. Meanwhile, if someone has made Snowflake schema change outside of Bytebase, obviously Bytebase won’t know it. And because Bytebase has recorded its own copy of schema, when Bytebase compares that with the live schema having that out-of-band schema change, it will notice a discrepancy and surface a schema drift anomaly. If that change is intended, then you should use baseline to reconcile the schema state again.

In this section, you’ll be guided through this process.

1. Go to Snowflake, and add a COLUMN there. Make sure the new column is added.
![sf-alter-add-age](/static/blog/database-change-management-with-snowflake/sf-alter-add-age.webp)

2. Wait for 10 mins (as Bytebase does the check roughly every 10 mins). Go back to Bytebase, and you can find the Schema Drift on database DB_DEMO_BB
![bb-db-schema-drift](/static/blog/database-change-management-with-snowflake/bb-db-schema-drift.webp)

The Anomaly Center also surfaces the drift
![bb-ac-drift](/static/blog/database-change-management-with-snowflake/bb-ac-drift.webp)

3. Click **View diff**, you will see the exact drift.
![bb-view-drift](/static/blog/database-change-management-with-snowflake/bb-view-drift.webp)

4. Use baseline to reconcile the schema state from the live database schema. Go to DB_DEMO_BB > **Migration History** and click **Establish new baseline**.
![bb-db-establish-new-baseline](/static/blog/database-change-management-with-snowflake/bb-db-establish-new-baseline.webp)

5. It will create an issue. Click **Resolve** to make it done.
![bb-is-baseline-done](/static/blog/database-change-management-with-snowflake/bb-is-baseline-done.webp)

6. Go back to DB_DEMO_BB or Anomaly Center, and you will find the Drift is gone.
![bb-db-no-anomalies](/static/blog/database-change-management-with-snowflake/bb-db-no-anomalies.webp)
![bb-ac-no-anomaly](/static/blog/database-change-management-with-snowflake/bb-ac-no-anomaly.webp)

## Summary and Next

Now you have connected Snowflake with Bytebase, and tried out the UI workflow to do schema change. Bytebase will record the full migration history for you. With **Team or Enterprise Plan**, you can even have schema drift detection.

In the next article, you’ll try out GitOps workflow, which will store your Snowflake schema in GitHub and trigger the change upon committing the change to the repository, to bring your Snowflake change workflow to the next level of Database DevOps - [Database as Code](/blog/database-as-code).
