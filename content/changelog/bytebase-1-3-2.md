---
title: Bytebase 1.3.2
author: Ningjing
published_at: 2022/9/1 17:20
description: "- Integrate PostgreSQL Explain Visualizer. - Support in-place backup restore for PostgreSQL. - Support PITR to a new database for MySQL. - Users can mark an environment as protected, and a shield badge will show up next to its name."
---

## 🚀 New Features

- Integrate PostgreSQL Explain Visualizer 👀.
![pg-explain-visualizer](/static/changelog/1.3.2/pg-explain-visualizer.gif)
- Support in-place backup restore for PostgreSQL.
- Support PITR to a new database for MySQL.
- Users can mark an environment as "protected", and a shield badge 🛡️ will show up next to its name.
![environment-protected](/static/changelog/1.3.2/environment-protected.webp)
- Users can view, copy and export server-side error info on Settings > Workspace > Debug Log.
![debug-log](/static/changelog/1.3.2/debug-log.webp)

## 🎄 Enhancements

- Add MySQL and PostgreSQL statement type check to force the separation of ALTER SCHEMA and CHANGE DATA.
- Support single or double asterisks in VCS commit file path template
- Add database name search when transferring databases. 
- Support pagination on issue overview page.
- Improve the performance of issue overview page.
- Improve the SQL editor auto-completion experience.
- Improve performance when initializing SQL editor.
- Improve the performance of syncing PostgreSQL instances.
- Add SQL Review rule: Support naming length limit (default 63 characters) for MySQL and PostgreSQL.
- Add SQL Review rule: Allow empty for the index name.
- Assign newly-created issues to a DBA or owner if possible in GitOps Workflow.
- Add option to show password on sign-in and sign-up pages. 
- Prevent a workspace from removing the last active owner.

## 🐞 Notable bug fixes

- Fixed: backups cannot be deleted automatically in some cases.
- Fixed: GitHub integration listens for wrong branches.
- Let the migration compatibility rule consider creating the unique key after creating the table
 
## 🎠 Community

- Add SQL review source code tour [https://sourcegraph.com/github.com/bytebase/bytebase/-/blob/docs/design/sql-review-source-code-tour.snb.md](https://sourcegraph.com/github.com/bytebase/bytebase/-/blob/docs/design/sql-review-source-code-tour.snb.md).
![sql-review-tour](/static/changelog/1.3.2/sql-review-tour.webp)
  
- Refresh marketing site [https://bytebase.com](https://bytebase.com).
- Thanks to [@KaiNiao](https://github.com/KaiNiao) for opening the issue (Schema Review) Add MySQL "Not Null field must provide default value" Rule [#2327](https://github.com/bytebase/bytebase/issues/2327)

## 📕 Installation and Upgrade

Follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation). If you are upgrading from a previous version, just restart after obtaining the new release binary.