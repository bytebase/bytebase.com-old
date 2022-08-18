---
title: Bytebase 1.3.1
author: Mila
published_at: 2022/8/18 17:20
description: "- SQL review now available on GitHub Actions. - MySQL database restore sped up by 20x. - Project owners can now be set as Issue approvers."
---

## 🚀 New Features

* [SQL Review](https://github.com/marketplace/actions/sql-review) is now available on the GitHub Action Marketplace! 🐱
![sql-revie-gha](/static/changelog/1.3.1/sql-revie-gha.webp)

## 🎄 Enhancements

- Speed up MySQL database restore by 20x. 🔥
- Project owners can now be set as Issue approvers.
  ![set-reviewer](/static/changelog/1.3.1/set-reviewer.webp)
- The "Alter Schema" page now supports searching for databases through a search box.
- Alter a single database schema is now supported in tenant mode projects.
- Updated the "Open connection" button in the SQL Editor.
  ![sql-editor-button](/static/changelog/1.3.1/sql-editor-button.webp)
- Database instance tree in SQL editor now loads significantly faster.
- Added the "LGTM" button in issue's comment area. 👍

## 🐞 Notable bug fixes

- Disallow baseline migrations from VCS. They should only be triggered from the Bytebase console to re-sync the database schema to address schema drift.
- Fixed writeback schema to VCS when establishing the baseline.
 
## 🎠 Community

- Created an [example](https://github.com/Bytebase/sql-review-action-example) for how to configure SQL Review GitHub Action.

## 📕 Installation and Upgrade

Follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation). If you are upgrading from a previous version, just restart after obtaining the new release binary.