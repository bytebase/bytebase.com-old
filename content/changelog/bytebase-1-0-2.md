---
title: Bytebase 1.0.2
published_at: 2022/03/31 10:26:51
description: Our official documentation switches from gitbook to bytebase.com/docs. Support branding customization. Highlight the editing SQL query block. Add SQL query format button.
---

​💡 Our official documentation switches from gitbook to [bytebase.com/docs](http://bytebase.com/docs). All the documents are now in our Github repository. This will help improve our coordination efficiency in documentation greatly. Now developers can follow https://bytebase.com/docs/document-write-guide to commit your changes.

## 🚀 Features

- Support branding customization (available in Team/Enterprise Plan)

![_](/static/changelog/1.0.2/branding.gif)

## 🎄 Enhancements

- [SQL Editor] Highlight the editing SQL query block

![_](/static/changelog/1.0.2/sql-editor-highlight-gutter.webp)

- [SQL Editor] Add SQL query format button

![_](/static/changelog/1.0.2/sql-editor-format.webp)

- Bump tailwind css to v3. JIT mode is also enabled to support [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).
- Switch frontend package manager from yarn to pnpm, helping developers to save time and disk spaces.

## 🎠 Community

- Open source an Employee sample database for MySQL [https://github.com/bytebase/employee-sample-database-mysql](https://github.com/bytebase/employee-sample-database-mysql)  based on [https://github.com/datacharmer/test_db](https://github.com/datacharmer/test_db). The sample database will apply to daily tests, data presentation and document tutorials. We prepare 2 datasets:

  - Full dataset (~170 MB) including 300024 employee records.
  - Small dataset (~6 MB) including 10000 employee records.

- We're working to support online schema change for MySQL using gh-ost. You can check the design doc at [https://github.com/bytebase/bytebase/blob/main/docs/design/gh-ost-integration.md](https://github.com/bytebase/bytebase/blob/main/docs/design/gh-ost-integration.md) and give feedback if you are a DBA or a gh-ost user.

- Switch license from APL 2.0 to MIT.

- Thanks to [@unknwon](https://github.com/unknwon) for the PR [feat: add migration for GITHUB_COM to be a valid Git and role provider #941](https://github.com/bytebase/bytebase/pull/941)

- Thanks to [@Sepush](https://github.com/Sepush) for the PR [refactor: use script setup&fix type #856](https://github.com/bytebase/bytebase/pull/856)

## 📕 Upgrade instruction

For a fresh installation, follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation).
