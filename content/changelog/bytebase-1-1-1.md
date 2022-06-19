---
title: Bytebase 1.1.1
author: Lucy
published_at: 2022/06/09 17:20
description: Allow schema review policy configuration for the environment. Add archive checkers for environment/project/instance. UI improvements for tenant-mode deployment. Improved PostgreSQL schema dump. The owner of newly created PostgreSQL schemas is the database owner by default. Display applicable conditions for Environment policies.
---

- **Enable schema review policy configuration in environment**
- Users can configure a schema review policy for a particular environment. The schema review policy can be configured through both schema review policy dashboard and environment dashboard
  ![schema-review-policy](/static/changelog/1.1.1/schema-review-policy.gif)
- Both rule level and rule configuration can be changed
- After creating a schema review policy, users can view, edit or delete the policy any time they like
- Display schema review results in the issue detail page if the schema review policy is configured
  ![schema-review-policy](/static/changelog/1.1.1/schema-review-policy-usage.gif)
  ![schema-review-policy](/static/changelog/1.1.1/schema-review-policy-check.webp)

## 🎄 Enhancement

- Add archive checkers for environment/project/instance
  - Ensure the environment has no instance before it's archived
  - Ensure the project has no database before it's archived
  - Ensure all databases in the instance are under the default project before the instance is archived
- UI improvements for tenant-mode deployment
  ![tenantmodeui](/static/changelog/1.1.1/tenant-mode-ui-improvement.webp)
- Improved PostgreSQL schema dump.
- The owner of newly created PostgreSQL schemas will be the same as the database owner by default.
- Display applicable conditions for Environment policies.
  ![applicablecondition](/static/changelog/1.1.1/application-environment-policy-change.gif)

## 🎠 Community

- Thanks to [@unknwon](https://github.com/unknwon) for [PR: feat: implement FetchCommitByID for GitHub VCS provider](https://github.com/bytebase/bytebase/pull/1417)

## 📕 Installation and Upgrade

Follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation). If you upgrade from a previous version, just restart after obtaining the new release binary.
