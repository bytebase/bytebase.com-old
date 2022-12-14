---
title: "Change Schema via SQL Editor Admin Mode vs Read-only Mode"
author: Ningjing
published_at: 2022/12/14 16:30:17
feature_image: /static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/2-ways.webp
tags: How-To
description: This article will give you step-by-step guidance for SQL Editor, to change schema using Admin Mode and Read-only Mode. 5 mins is more than enough.
---

Bytebase introduced the **Admin Mode** for SQL Editor in [1.8.0](/changelog/bytebase-1-8-0). This article will give you step-by-step guidance to change schema using Admin Mode and Read-only Mode. 5 mins is more than enough.

Before that release, developers could perform database changes and queries on Bytebase. However, DBAs or DevOps teams who are experts and responsible for database maintenance need to perform higher privileged operations, and the Admin Mode meets this need.

Bytebase now covers all human-to-database scenarios. On one hand, Bytebase can detect risky statements, significantly reducing the potential mistakes made by developers. On the other hand, DBAs can configure the automatic SQL review rules and do manual SQL auditing through Bytebase.

![_](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/overall.webp)
For Read-Only Mode, the main scenario is that a developer executes SELECT queries. However, the purpose of this tutorial is to demonstrate the difference between Read-only and Admin modes, that’s why we take CREATE TABLE (DDL) for example.

Make sure you have docker installed and started.

## Step 1 - Setup the environment

1. In the terminal, run the following command to start a Bytebase:

```bash
docker run --init \
--name bytebase \
--restart always \
--publish 5678:8080 \
--health-cmd "curl --fail http://localhost:5678/healthz || exit 1" \
--health-interval 5m \
--health-timeout 60s \
--volume ~/.bytebase/data:/var/opt/bytebase \
bytebase/bytebase:1.9.1 \
--data /var/opt/bytebase \
--port 8080
```

2. Then run the following command to start a MySQL instance:

```bash
docker run --name mysqldtest \
--publish 3307:3306 \
-e MYSQL_ROOT_HOST=172.17.0.1 \
-e MYSQL_ROOT_PASSWORD=testpwd1 \
mysql/mysql-server:8.0
```

3. Open [http://localhost:5678/](http://localhost:5678/) in your browser, if you are the first to register, you’ll become **Workspace Owner** by default
![register-admin](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/register-admin.webp)

4. Create an instance with the following variables and `root`/`testpwd1` as username/password.
![add-instance](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/add-instance.webp)

5. Create a project **test-editor**.
![project](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/project.webp)

6. Create a database **test-editor**.
![create-database](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/create-database.webp)

After resolve the auto-generated issue, database **db-test** is created successfully.

![issue-after-dbtest](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/issue-after-dbtest.webp)

![database-dbtest](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/database-dbtest.webp)


## Step 2 - Compare read-only and admin mode

1. Login and click **SQL Editor** on the left bar.
![editor-home](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-home.webp)

2. You’ll be redirected to the SQL Editor.
![editor-readonly](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-readonly.webp)

3. Click **Admin Mode** on the top, and you’ll see the Admin Mode.
![editor-admin-clean](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-admin-clean.webp)

4. You can switch back to Read-only mode by clicking the sheet.
![editor-sheet](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-sheet.webp)


### Read-only Mode

1. Switch back to Read-only Mode and type the following SQL query.

```sql
CREATE TABLE t1(
id int,
name VARCHAR(255)
)
```
![editor-readonly-sql](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-readonly-sql.webp)

2. Click **Run**, and you’ll see a popup. Let’s click **Alter Schema** this time, because if you’re a developer you will not be able to see the **Admin mode** button.
![popup-switch](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/popup-switch.webp)

3. You’ll be redirected to the new issue page, and all the parameters will be auto-filled.

![issue-preview](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/issue-preview.webp)

4. Click **Create**, and the issue will be created. Click **Resolve**, and the issue will be Done.
![issue-after-t1](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/issue-after-t1.webp)

5. Go back to the SQL Editor, and you’ll see the `t1` table.
![editor-after-t1](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-after-t1.webp)


### Admin Mode

1. Go to SQL Editor, and click **Admin mode** to switch.
![editor-admin-clean](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-admin-clean.webp)

2. Type the following SQL query:
```sql
CREATE TABLE t1(
id int,
city VARCHAR(255))
```
![editor-admin](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-admin.webp)

3. Click **Run**. The query will execute directly. There is no need for issue creation or approval.

![editor-admin-t2](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/editor-admin-t2.webp)

- As we encountered in the Read-only section, if you has a properly role, even you type the CREATE TABLE query in the Read-only Mode. You’ll be provided with the option to switch to Admin mode.

![popup-switch](/static/blog/change-schema-sql-editor-admin-mode-vs-readonly-mode/popup-switch.webp)


Thus far, you’ve tried two ways in Bytebase to handle TABLE CREATE queries for DBA (Admin Mode) and developer (Readonly) respectively. Next, you can continue exploring SQL Editor modes in Bytebase, maybe with your databases and use cases. Feel free to give us your suggestions!