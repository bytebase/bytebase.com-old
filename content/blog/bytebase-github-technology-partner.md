---
title: Bytebase Joins GitHub Technology Partner Program to Simplify Database Development
author: Mila
published_at: 2023/02/16 15:21:21
feature_image: /static/blog/bytebase-github-technology-partner/feature-image.webp
tags: Announcement
featured: true
description: We are proud to announce the Technology Partner agreement with GitHub to provide developers with a smooth database development experience.
---

We are proud to announce the Technology Partner agreement with GitHub to provide developers with a smooth database development experience. As the world's leading software development platform, [GitHub](https://github.com/) brings together the world's largest developer community to make it easy for developers to discover, share, and build better software. Bytebase is a Database CI/CD tool for DevOps teams, and is [the only Database CI/CD solution](/blog/cncf-landscape) to be included in the CNCF Landscape.

## Bytebase x GitHub: bridging code repos and database changes

Bytebase has integrated its SQL Review capabilities into GitHub's PR process, so that you can manage SQL scripts in your code repos and self-review your own SQL. This eliminates the need to switch between multiple tools and, more importantly, shift-left the SQL review so that problems are identified at the start of a CI/CD pipeline, instead of waiting until deployment.

SQL Review is now available via both GitHub Action and GitHub App.

To integrate SQL review rules into your CI process, you can either go for [SQL Review Action](https://github.com/marketplace/actions/sql-review) or the Bytebase [GitHub App](https://github.com/marketplace/bytebase) over at GitHub Marketplace.

![github-marketplace](/static/blog/bytebase-github-technology-partner/github-marketplace.webp)

Once configured, if a SQL statement in your PR violates the review rule, you will get a prompt of the violation details.

![sql-review-github](/static/blog/bytebase-github-technology-partner/sql-review-github.webp)

In addition, you can take database management one step further by configuring the [GitOps workflow](/docs/vcs-integration/overview), which can be defined as "Database-as-code". This enables an integrated CI/CD process from code changes to database changes. The database change scripts you submit to your GitHub repo will automatically trigger Bytebase's SQL review and deployment pipeline. This enables an integrated CI/CD process from code changes to database changes.

![gitops-bytebase](/static/blog/bytebase-github-technology-partner/gitops-bytebase.webp)

Bytebase and GitHub will continue to work together to provide the ultimate database development experience for developers.