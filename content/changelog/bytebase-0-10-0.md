---
title: Bytebase 0.10.0
published_at: 2021/12/22 16:36:07
description: Chinese language support, scheduled time to execute a task and enhancement / bug fixes.
---

## 🚀 New Features

### 你好, 中文 Chinese Language Support

Bytebase now officially supports simplified Chinese. User can toggle the language from the top-right profile dropdown.
![_](/static//blog-changelog-assets/2021/12/b2333e4e-6432-4d25-ab4e-06987feaaf73.png)

### Earliest allowed time for executing a task

Now, user can specify the earliest allowed time for a task to be executed by Bytebase. If specified, task will not be executed until that specified time.
![_](/static//blog-changelog-assets/2021/12/f051a459-4f49-471f-a9e5-e602d8c83664-1.png)![_](/static//blog-changelog-assets/2021/12/f754a456-1e0b-46a5-bebf-d157c298fc18.png)

## 🎄 Enhancement

### Logging activity for altering SQL statement

We will log any change to the SQL statement now, and send an inbox message to the relevant people.
![_](/static//blog-changelog-assets/2021/12/4ebca430-f5d7-48e6-9f94-abc82953e4ec-1.png)

### Modal showing detailed check status

When the assignee opens the modal to approve an issue, she can now view the detailed check status by opening a stacked modal.
![_](/static//blog-changelog-assets/2021/12/ljgif2-1.gif)

## 🐞 Bug Fixes

### Postmortem: Postgres CREATE DATABASE cannot run inside a transaction block

**Story**: In a [change](https://github.com/bytebase/bytebase/commit/da18c32e71956dea24ac327b726f6034d25ff350) to support ClickHouse, we were unifying SQL statement execution to a shared function. Bytebase supports many databases including MySQL, Postgres, Snowflake, TiDB, Clickhouse - Yes, more to come. We are trying to use the same interface for interacting with all database types if possible. Since ClickHouse cannot execute multiple statements in a single db.ExecContext(), we split the multi-statement string into multiple single-statement strings and use a transaction to execute the migration statements. In fact, we should execute migration transactionally so that previous executions will be rolled back upon failures, otherwise migration will leave the database in an inconsistent state. However, this change caused Postgres CREATE DATABASE to fail because Postgres CREATE DATABASE statement cannot be used inside a transaction (see reference 2). In the fix, we would skip using transactions for Postgres CREATE DATABASE statements.

**Lessons learned**: different databases are different, and users learn lessons usually in a hard way unfortunately. This is exactly why users should use Bytebase to manage database schemas, because our software can save you from hitting these blocks. We will also put effort into integration tests to cover critical user journeys for various database types so that we can catch these errors early on. Even though Bytebase is still in Alpha, we would like to share these stories transparently to readers who are interested in databases.

**Reference**: [https://www.postgresql.org/docs/current/sql-createdatabase.html](https://www.postgresql.org/docs/current/sql-createdatabase.html)
Notes section: CREATE DATABASE cannot be executed inside a transaction block.\*

### Fix for auto-increment starting value in MySQL schema

MySQL allows AUTO_INCREMENT to start with a value other than 1. However, this starting value in table schema (MySQL’s SHOW CREATE TABLE native schema export) would change when rows are inserted. For example, AUTO_INCREMENT=20 will be AUTO_INCREMENT=22 when the table gets two more rows. This would cause Bytebase’s [schema drift detection](https://docs.bytebase.com/features/drift-detection) to complain when AUTO_INCREMENT tables are mutated. Starting with this release, we will exclude this starting value in a schema-only dump.

By looking at typical MySQL user journeys, starting value in the schema only makes sense for a database dump with both schema and data since the restore of this dump will make the new database an exact copy of the previous database. This starting value is meaningless in a schema-only dump for most use cases, otherwise, users should be setting the starting value explicitly themselves after the restore.

### Auto refresh GitLab access token on expiration

Access token expiration was added to [GitLab 14.3](https://about.gitlab.com/releases/2021/09/22/gitlab-14-3-released/) release and became the default. This default wasn’t compatible with Bytebase’s GitLab Version-Control-System (VCS) version control integration because tokens passing the 2-hour expiration window became invalid. This Bytebase release supports GitLab 14.3 by refreshing tokens upon expiration, providing enhanced security to the community and beyond.

## 🎠 Community

- Add [i18n guide docs](https://github.com/bytebase/bytebase/blob/main/docs/i18n-guide.md) to help community member start contributing.
- Our gratitude goes to [@linucksrox](https://github.com/linucksrox) especially for [his detailed bug report](https://github.com/bytebase/bytebase/issues/108)  and [@suzaku](https://github.com/suzaku) again for the continuous contribution.

## 📕 Upgrade instruction

- For fresh installation, follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation).
- If you upgrade from previous version, there is some breaking schema change. Please contact [support@bytebase.com](mailto:support@bytebase.com) and we will help you manually upgrade to the new version.
