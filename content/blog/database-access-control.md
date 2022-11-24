---
title: "How to Wisely Manage Database Access Control"
author: Tianzhou
published_at: 2022/11/24 17:21:21
feature_image: /static/blog/database-access-control/freedom-control.webp
tags: Education
featured: true
description: Database access control can be a headache for DBAs and DevOps teams. In this post, we explore database access control scenarios, and how Bytebase helps you to manage database access control.
---

Database access control is a constant headache for DBAs and platform engineering teams. On the one hand, the ones overseeing the databases prefer centralized control; but on the other hand, the ones using the database would like database access anytime, anywhere.

The extreme of the former is that all access to the database needs to be approved by the database team, which leads to the team becoming a bottleneck, slowing down product delivery schedule, and constantly being complained about by the devs.

The latter, if taken to the extreme, is that database access is scattered everywhere and potential data leaks. Without a standardized change process, this might just lead to accidentally dropped databases.

![_](/static/blog/database-access-control/freedom-control.webp)

So, is there an ideal solution that can balance both control and efficiency? 

Let's first dissect the scenarios requiring database access control before coming up with solutions.

## Access Control Scenarios for Databases

There are two main categories: Machine to Database and Human to Database.

![_](/static/blog/database-access-control/machine-to-db-human-to-db.webp)

### Machine to Database

**End user-initiated**

From the web or mobile clients to add/delete/edit/check data through the Application Server. For example, a record will be generated in the database when someone places an order through a takeaway app.

**Change on deploy**

Sometimes when the software version is upgraded, database schema or data also changes. The common practice is making changes before running the new version for the first time. Many application development frameworks and ORMs have built-in capabilities, such as Ruby on Rails’ [Active Record Migrations](https://guides.rubyonrails.org/active_record_migrations.html), and django’s [Migrations](https://docs.djangoproject.com/en/4.1/topics/migrations/).

**Cron jobs**

For example, a financial system periodically performs automated reconciliation operations and generates records in the database or a downstream data warehouse that synchronizes data from the database.

**One-shot/on-demand executions**

Such as data cleanup/migration/revision involving complex business logic. These operations are packaged into separate scripts or command line applications (CLI) that are run only when needed.

### Human to Database

**Interactive query**

Connect directly to the database and query the data.

**Ad-hoc data correction**

Connect directly to the database and perform DML/DDL.

**Offline schema change**

Users sometimes also connect to the database directly and perform schema changes. Wrongly executed DROP TABLE / DATABASE schema change operation can result in serious or even irreparable damage.

**Admin operations**

The DBA connects to the database to perform admin operations, such as terminating SQL statements that take too long to execute.

Connecting directly to the database manually to perform operations is a **high-risk** behavior, so usually, the company sets up a bastion or jump server. This way, organizations can have some oversight and control of the database operations. However, setting up a jump server also brings inconveniences to users and introduces additional management burdens. For example, you need to consider whether to set up a separate jump server for database access or to share it for accessing other production systems.

## Solutions

Let’s clarify a few things first:

1. Accessing a database, especially in production, is a high-risk operation. Even if there’s no change involved, a single SELECT statement can bring down the whole database and cause serious failures. Therefore, whenever possible, control is necessary.

2. Minimize (or, better, avoid) manually connecting to the database. People make mistakes, and manually connecting to the database also means that the database access information is given to individuals, significantly increasing the potential for data leakage.

3. It is unavoidable for the applications to access the databases (otherwise, they won’t run). However, database schema changes can be separated rather than run after a new application version is deployed. Moreover, decoupling these two actions allows you to better control the change process and deal with possible rollbacks.

Based on the above, we present our solution: [Bytebase](https://www.bytebase.com/), covering all scenarios of manual database access control and unifying schema changes into a controlled process.

![_](/static/blog/database-access-control/machine-to-db-human-to-db-via-bb.webp)

Bytebase offers:

* A two-tier permission model. One at the **workspace** level for global permissions and another at the **project** level for specific projects. These two levels of permissions correspond to the central DBA/platform engineering team and the development team of each application project group, respectively.

![_](/static/blog/database-access-control/permission-model.webp)

* A UI to manage database schema and the change review process and **integrates with GitLab & GitHub**, providing a Database-as-Code GitOps process.

![_](/static/blog/database-access-control/bytebase-ui.webp)

* A SQL Editor that allows developers to perform SELECT queries. For DBAs, you can enable the `Admin` mode to execute database management commands.

![_](/static/blog/database-access-control/sql-editor.webp)

* Configuring your own [SQL Review rules](/docs/sql-review/review-rules/overview). For example, the following rule prevents users from executing DELETE statements without WHERE. You can also configure different rules for different environments, such as `dev`, `test`, `prod`, etc.

![_](/static/blog/database-access-control/sql-review-rule.webp)

* Configuring [SQL review policies](/docs/sql-review/review-rules/create-schema-review-policy). For example, for the `dev` environment, you can skip review from the DBA; for the `prod` environment, review from either the DBA or project owner is mandatory.

![_](/static/blog/database-access-control/sql-review-policy.webp)

## To Sum Up

You can never be too careful when it comes to operations regarding the database, but while maintaining necessary caution, we want efficiency. Bytebase, [the only Database CI/CD solution in the CNCF Landscape](https://www.bytebase.com/blog/cncf-landscape), provides a one-stop database lifecycle management capability.

![_](/static/blog/database-access-control/bytebase-cncf-landscape.webp)

For DBAs and platform engineering teams, Bytebase enables you to have control over database access paths except for application access and perform global database control operations. For the application developers who need to use the database, Bytebase provides a developer-friendly UI to help you develop efficiently and safely.

Here’s to safe production and efficiency!
