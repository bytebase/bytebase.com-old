---
title: SQL Advisor
---

Bytebase provides customizable SQL lint to check common issues in schema change process - it's SQL Advisor, which currently has three forms:

- [**UI**](/docs/sql-review/sql-advisor/ui) - If you use Bytebase as a whole system, SQL Advisor will check common issues in schema change process;
- [**API**](/docs/sql-review/sql-advisor/api) - If you have your own database management system, it's possible to integrate SQL Advisor via API;
- [**GitHub Action**](/docs/sql-review/sql-advisor/github-action) - If all your sql files are stored on GitHub.com, you can use GitHub action to do prechecks before they're merged into the main branch.