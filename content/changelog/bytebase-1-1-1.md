---
title: Bytebase 1.1.1
author: Lucy
published_at: 2022/06/09 17:20:34
description: Allow schema review policy configuration for the environment. Add archive checkers for environment/project/instance. UI improvements for tenant-mode deployment. Improved PostgreSQL schema dump. The owner of newly created PostgreSQL schemas is the database owner by default. Display applicable conditions for Environment policies.
---
- **Enable schema review policy configuration in environment
- Users can configure a schema review policy for a particular environment. The schema review policy can be configured both schema review policy dashboard and environment dashboard
![schema-review-policy](/static/blog-changelog-assets/2022/06/srp1.gif)
- Both rule level and rule configuration can be changed
![schema-review-policy](/static/blog-changelog-assets/2022/06/srp2.gif)
![schema-review-policy](/static/blog-changelog-assets/2022/06/srp3.gif)
- After creating a schema review policy, users can view, edit or delete the policy any time they like
- SQL check result in the issue when schema review policy configuration is done
![schema-review-policy](/static/blog-changelog-assets/2022/06/srp4.gif)
![schema-review-policy](/static/blog-changelog-assets/2022/06/srp5.png)

## 🎄 Enhancement

- Add archive checkers for environment/project/instance
  - Ensure the environment has no instance before it's archived
  - Ensure the project has no database before it's archived
  - Ensure all databases in the instance are under the default project before the instance is archived
- UI improvements for tenant-mode deployment
![tenantmodeui](/static/blog-changelog-assets/2022/06/tenantmode.png)
- Improved PostgreSQL schema dump.
- The owner of newly created PostgreSQL schemas will be the same as the database owner by default.
- Display applicable conditions for Environment policies.
![applicablecondition](/static/blog-changelog-assets/2022/06/applicablecondition.gif)

## 🎠 Community

- Thanks to [@unknwon](https://github.com/unknwon) for [PR: feat: implement FetchCommitByID for GitHub VCS provider](https://github.com/bytebase/bytebase/pull/1417)

## 📕 Installation and Upgrade

Follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation). If you upgrade from a previous version, just restart after obtaining the new release binary.
