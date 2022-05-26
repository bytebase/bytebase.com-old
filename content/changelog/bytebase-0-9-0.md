---
title: Bytebase 0.9.0
published_at: 2021/12/09 13:05:33
description: Add cmd+k command bar experience. Add database webhook
---

## 🚀 New Features

### cmd+k command bar experience

![_](/static//blog-changelog-assets/2021/12/189ab1ab-d8ff-4464-b966-2921b46a64ab-2.png)
User can now use cmd+k to invoke the command bar to quickly navigate among different Bytebase sections.

### Add database backup webhook

User can set up a webhook endpoint for the database and after a successful backup, Bytebase will send a POST request to the configured webhook endpoint.

As an example, user can use this feature to integrate with Better Uptime's [Heartbeats](https://docs.betteruptime.com/features/heartbeats) feature to monitor the status of database backups. In case Bytebase does not regularly send requests to Heartbeat endpoint configured on Better Uptime, Better Uptime will trigger the corresponding alert rule.
![_](/static//blog-changelog-assets/2021/12/bt1-1.png)![_](/static//blog-changelog-assets/2021/12/bt2-1.png)

### Gitpod Code Preview

We added one-click button on our GitHub front page to launch [Bytebase](https://github.com/bytebase/bytebase) in [Gitpod](https://www.gitpod.io/). Now user is only one click away from having a fully-fledged dev environment to play with Bytebase!
![_](/static//blog-changelog-assets/2021/12/image.png)

## 🐞 Bug Fixes

- Fix tooltip position
- Add the missing EVENT privilege to the instruction for configuring the MySQL user connection

## 🎠 Community

- Add commit guide docs
- Special shout out to [@suzaku](https://github.com/suzaku) for contributing PRs (a lot!)

## 📕 Upgrade instruction

- For fresh installation, follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation).
- If you upgrade from previous version, there is some breaking schema change. Please contact [support@bytebase.com](mailto:support@bytebase.com) and we will help you manually upgrade to the new version.
