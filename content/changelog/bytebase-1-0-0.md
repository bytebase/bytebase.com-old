---
title: Bytebase 1.0.0
published_at: 2022/03/08 09:58:16
description: Version 1.0.0 and announcing our Team plan
---

## 🚀 Announce our Team Plan

With over a year of hard work and 3500+ commits, we finally reach the milestone to announce our 1.0.0 version and our **Team Plan**. The **Team Plan** includes:

- Role-Based-Access-Control (RBAC) with Owner, DBA, Developer roles catering to the collaboration during database development.
- Login using GitLab account.
- Sync project membership from the linked GitLab project.
- SQL backward compatibility check and schema drift detection.
- Per-environment schema review and backup policy.

The price starts at $29 per instance per month. Please visit our [pricing](https://bytebase.com/pricing) page for more details.
![_](/static/blog-changelog-assets/2022/03/CleanShot-2022-03-03-at-17.00.31.png)
You can visit [https://hub.bytebase.com/pricing](https://hub.bytebase.com/pricing) to purchase a subscription license and manage your team plan subscription in Settings page.
![_](/static/blog-changelog-assets/2022/03/image.png)

## 🎄 Enhancement

### SQL Editor

- Add an EXPLAIN button adjacent to the run button.

![_](/static/blog-changelog-assets/2022/03/image-1.png)

- Redesign the database connection navigation and connection status.

![_](/static/blog-changelog-assets/2022/03/image-3.png)![_](/static/blog-changelog-assets/2022/03/image-4.png)

- Run non-SELECT SQL navigate to the different workflow.

![_](/static/blog-changelog-assets/2022/03/image-5.png)![_](/static/blog-changelog-assets/2022/03/image-6.png)

### Sync project members from GitLab

If a project is linked with GitLab repository, one can sync that repository's membership to the project's membership.
![_](/static/blog-changelog-assets/2022/03/project_membership_sync-1.png)![_](/static/blog-changelog-assets/2022/03/gitlab_role.png)Membership from the linked GitLab repository

### Improved tenant project pipeline UI

We improve the layout for showing the current database schema change progress across all tenants.
![_](/static/blog-changelog-assets/2022/03/tenant_matrix.png)

### Misc

- Switch to use PostgreSQL for storing Bytebase metadata. This enables us to handle more complex scenarios down the road.
- Add quickstart for preparing an environment including Bytebase, GitLab (macOS Apple Silicon) and ClickHouse Cluster.

## 🐞 Bug fix

**SQL Editor**

- Query result table cover display.

![_](/static/blog-changelog-assets/2022/03/project_membership_sync.png)![_](/static/blog-changelog-assets/2022/03/origin_img_v2_f8aa86a5-0471-4ed6-8396-e28d5f8723eg.png)

- Query result table attributes order

![_](/static/blog-changelog-assets/2022/03/middle_img_v2_157adf2c-7e12-4464-9df6-342b68dcba7g.png)

## 🌄 Sunset

**Retire issue rollback feature**
Previously, Bytebase allows user to specify a rollback SQL for the rollback. And if user chooses to rollback the SQL, Bytebase will use the rollback SQL to create that rollback SQL. This only sounds good in theory, because in reality, it's already a big hurdle to write a good schema change SQL, it would be even challenging to ask the developer to provide a correct rollback SQL at the same time.

Thus, we decide to retire this feature. Meanwhile we already have ideas for a much better solution without requiring developer to write the rollback SQL manually. Please stay tuned.

## 🎠 Community

- Thanks to @[Innei](https://github.com/Innei) for PR [fix(bbmodal): subtitle bg keep out modal container content & add max-height padding](https://github.com/bytebase/bytebase/pull/679).
- Thanks to @[tisonkun](https://github.com/tisonkun) for PR [refactor: update tidb dependency and remove workaround replacement](https://github.com/bytebase/bytebase/pull/611)

## 📕 Upgrade instruction

For fresh installation, follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation).

If you upgrade from the previous version, there is some breaking schema change. Please contact support@[bytebase.com](https://bytebase.com/) and we will help you manually upgrade to the new version.
