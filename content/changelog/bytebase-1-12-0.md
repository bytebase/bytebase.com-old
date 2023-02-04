---
title: Bytebase 1.12.0
author: Mila
published_at: 2023/02/02 17:00:00
feature_image: /static/changelog/1-12-0-banner.webp
description: "- Configure policy via Terraform Bytebase Provider. - 21 new SQL Review Rules for PostgreSQL. - Updated pricing plan."
---

## 🚀 New Features

- [Configure policy](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs/resources/policy) via the Terraform Bytebase Provider.

## 🎄 Enhancements

- Added [21 SQL Review rules](/docs/sql-review/review-rules) for PostgreSQL.
- [SQL Editor](/docs/sql-editor/overview) Enhancements.
  - Press cmd (Mac) / ctrl (Windows) + PageUp / PageDown to navigate through history statements in Admin Mode.
  - Clear screen output in Admin Mode.
- Quickly locate the statement where the SQL Review failed.
- Use wildcards in the listening branch of a VCS project and Bytebase will write the latest schema to the branch that triggered the issue creation.
- Improved UX for schema synchronization.
- Improved new user onboarding experience.
- Optimized issue performance.

## 🐞 Notable Bug Fixes

- Fixed an issue where committing SQL changes on a new VCS branch may not generate an issue.
- Fixed an issue where MongoDB index size could not be fetched.

## 💰 Pricing & Plan Change

|                 **Post-change** | **Free Plan** | **Team Plan** | **Enterprise Plan** |
| :------------------------------ | :---: | :--------: | :--: |
| **Seat Count** | Up to 10 | Up to 10 | Unlimited |
| **Task count in an issue** | Unlimited | Unlimited | Unlimited |
| **Instance count** | Up to 5 | Up to 10 | Customized |
| **Environment count** | Unlimited | Unlimited | Unlimited |
| **Subsription** |Free<br>(You can start a 14-day free trial for the Enterprise Plan - no credit card required)|Billed monthly: $19/seat/month<br>Billed annually: $190/seat/year<br>*$79/instance/month, first 5 FREE| Contact us at support@bytebase.com |

*Team plan no longer supports Schema drift, Schema VCS write-back, and Sheet VCS sync. They are still available in the Enterprise plan.
Visit [our pricing page](/pricing) to learn more.

## 🎠 Community

- Thanks to [@gandergo](https://github.com/gandergo) for fix: allow postgres user name with hyphen [\#4236](https://github.com/bytebase/bytebase/pull/4236)

## 📰 Fresh off the press

- We introduced the MongoDB support in the last release. This is a milestone for us as it's also the first NoSQL database supported by Bytebase, [learn more](/blog/introducing-mongodb-support-in-bytebase)!
- When Navicat is [no longer](/blog/stop-using-navicat) your best bet.
- A step-by-step guide to [managing databases](/blog/manage-databases-in-bytebase-with-terraform) in Bytebase with Terraform.

## 📕 Installation and Upgrade

Follow [Installation](/docs/get-started/install/overview). If you are upgrading from a previous version, restart after obtaining the latest release binary.
