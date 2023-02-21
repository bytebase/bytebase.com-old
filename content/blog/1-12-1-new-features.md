---
title: "Bytebase 1.12.1 Deep Dive"
author: Tianzhou
published_at: 2023/02/21 13:21:21
feature_image: /static/blog/1-12-1-new-features/1-12-1-banner.webp
tags: Explanation
description: The second release of the 🐰  year, the version number was upgraded from 1.12.0 to 1.12.1, and although it was a minor upgrade (since no schema changes were involved), it still included 230 code commits
---

The second release of the 🐰  year, the version number was upgraded from 1.12.0 to 1.12.1, and although it was a minor upgrade (since no schema changes were involved), it still included 230 code commits, so let's see what new features were included 👇

![commits](/static/blog/1-12-1-new-features/commits.webp)

## Single Sign-On (SSO)

Bytebase now supports Single Sign-On (SSO). As a hindsight, it was a bit late to add this feature. We released a preview version in the last release, and our customers can’t wait to try it out. Anyway, better late than never.

![SSO](/static/blog/1-12-1-new-features/SSO.webp)

## Google Cloud Spanner

Then there is the support for Google Cloud Spanner. It's worth mentioning that Bytebase be is the only database change management tool on the market that supports Spanner.

![gcp](/static/blog/1-12-1-new-features/gcp.webp)

## Onboarding Guide

This is the second version of our onboarding guide. The previous one forced the user to complete the whole guide - users were required to add a database instance, and if that failed, a dialog box popped up asking whether to create a Sample Instance. Then you have to create a project and transfer the database to the project before you can start making any changes. The pre-configuration involves too many steps, so for the new version, an instance and a project are prepared. Once the user registers, he/she can immediately experience the integration of Bytebase's two core capabilities change and query.

- From the change process, you can experience the whole review collaborative workflow and the pre-configured auto SQL review strategy; the change history after the change is completed.
- Then you enter SQL Editor, also pre-configured with query statements and anonymized data, to experience the thrill of fast data query and also perceive the data security features of data anonymization.

In line with this new onboarding guide, we also recruited a group of product experience officers to test. We'll review their reports next week and see what needs to be optimized.

To tell a good story, it is important to have a clear storyline, and every detail of each scene should be in place to help users quickly understand the core value of the product and build up their initial trust in the product. The new process is almost exactly nine sub-screens, making up a full nine frames.

![onboarding1](/static/blog/1-12-1-new-features/onboarding1.webp)
![onboarding2](/static/blog/1-12-1-new-features/onboarding2.webp)
![onboarding3](/static/blog/1-12-1-new-features/onboarding3.webp)
![onboarding4](/static/blog/1-12-1-new-features/onboarding4.webp)
![onboarding5](/static/blog/1-12-1-new-features/onboarding5.webp)
![onboarding6](/static/blog/1-12-1-new-features/onboarding6.webp)
![onboarding7](/static/blog/1-12-1-new-features/onboarding7.webp)
![onboarding8](/static/blog/1-12-1-new-features/onboarding8.webp)
![onboarding9](/static/blog/1-12-1-new-features/onboarding9.webp)

Well, that's it for this update, there are a lot of UX optimizations in this version, as the features become more comprehensive, we also start to do UX upgrades for the existing features, this onboarding guide optimization is an example. We expect to upgrade the entire SQL Review 100+ rule configuration experience to the release in two weeks.

## Partnership Announcement

In addition, we also announced a technical partnership with GitHub and PingCAP for this release cycle, and will continue to build product integrations with more talented peers in the industry.

Bytebase has a good position to integrate with all parties to create a 1 + 1 > 2 effect. This week ClickHouse CTO also came to our GitHub and contributed a PR, I'll contribute a PR to them someday.

![gh-ch](/static/blog/1-12-1-new-features/gh-ch.webp)
![gh-bb](/static/blog/1-12-1-new-features/gh-bb.webp)
![pingcap-bb](/static/blog/1-12-1-new-features/pingcap-bb.webp)