---
title: "Bytebase 1.8.0 New Features"
author: Tianzhou
published_at: 2022/11/22 17:21:21
feature_image: /static/blog/1-8-0-new-features/1-8-0-new-feature-banner.webp
tags: Education
description: Last week, we released Bytebase 1.8.0. Let's take a deeper look into the new features.
---

Last week, we released [Bytebase 1.8.0](/changelog/bytebase-1-8-0). Let's take a deeper look into some of the new features.

## MySQL Sync Schema

![_](/static/blog/1-8-0-new-features/mysql-sync-schema.webp)

You can now specify to synchronize the schema from database A to database B, and Bytebase will automatically generate the intermediate DDL statements to be executed.

Usually, developers make database changes in the test environment first and then apply the changes to the prod environment afterward. Before `Sync Schema`, you need to carefully write out the statements that need to be changed by themselves. Now, you can simply let Bytebase know which database schema needs to be applied to the target database.

We are planning to add Sync Schema support for PostgreSQL soon.

## Admin Mode for SQL Editor

![_](/static/blog/1-8-0-new-features/sql-editor-admin-mode.webp)

A core selling point of Bytebase is that all scenarios that need database access can be done through Bytebase (aside from the app itself accessing the database). Before this release, Bytebase could already perform database changes and queries, which made it possible to perform development tasks via Bytebase.

However, dedicated DBAs, or those responsible for database operations in DevOps teams, need to perform higher authority operations, and `Admin Mode` meets this need. Because it is a higher privilege operation, it is only available to DBAs or Owner role holders in a workspace and needs to be enabled manually in the SQL Editor.

Thus, all scenarios in which human beings deal with databases can be performed via Bytebase, except for those where the application deals with the database. Companies no longer need to distribute database access keys or configure separate bastion/jump servers, as Bytebase controls access and operations. Bytebase also identifies dangerous statements, reducing the chance of misuse, while the DBA can configure global SQL policy and review SQL statements through Bytebase.

## External Approval via Feishu

Previously, you could configure to [get database change notifications via Webhook](/blog/get-database-change-notification-via-webhook).

Some users mentioned that they would like to approve changes directly in IM. In this release, we first [added support for Feishu](/docs/administration/webhook-integration/external-approval), and you can now reivew and approve Bytebase issues via `Feishu Approval`.

![_](/static/blog/1-8-0-new-features/feishu-approval.webp)

We will continue to add support for other IMs as well. [Leave us an Issue](https://github.com/bytebase/bytebase) if you'd like to see the IM in your organization supported!
