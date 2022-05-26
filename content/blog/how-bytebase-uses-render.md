---
title: How Bytebase uses Render
author: Zilong
published_at: 2022/02/21 08:08:57
feature_image: /static/blog-changelog-assets/2022/02/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg
tags: Education
description: We recently moved most of our hosted service to render.com and also leverage its unique capability to improve our dev workflow. I was responsible for this task.
---

## What is Bytebase

![_](/static/blog-changelog-assets/2022/02/bb1.png)
Bytebase is a start-up I currently take internship at. Its aspiration is to build an open-source, web-based database schema change and version control tool for team collaboration. We are a remote team and most of our development happens on GitHub.

We recently moved most of our hosted service to [render.com](render.com) and also leverage its unique capability to improve our dev workflow. I was responsible for this task.
![_](/static/blog-changelog-assets/2022/02/--2021-12-30---2.18.55.png)

## Problems we faced

1. **The demo page is stale**

   Our demo page ([demo.bytebase.com](demo.bytebase.com)) was deployed on AWS EC2 . There is an extra step to manually update it during each release.

2. **No staging environment for each release**

   We did not have a staging environment before each release. We want such a final testing stage after merging all works from different feature branches. Also, it would be great for our DevRel colleagues to taste our next release in advance.

3. **No feature preview for PR**

   A running app worth a thousand words. As an open-source project with a fully-fledged web interface, we'd like to have a preview for every PR to facilitate the review process.

## Render as a solution

From their website, render ([https://render.com](https://render.com)) is a unified cloud to build and run all your apps. Any app can be deployed and updated **instantly with nearly no configuration**. They boast their deployment velocity, and from our own experience, that's pretty true.

## How do we use render?

### Continuous deployment for [demo.bytebase.com](http://demo.bytebase.com/)

Bytebase employs monolithic architecture using Vue + Golang + SQLite. Our team adopts a trunk-based development workflow and we require our main branch to be deployable at every commit. We decided to use our demo site to validate this promise.

Configuring this on render is quite straightforward. Below are the steps to make our demo site deployed whenever new commits merge to our main branch.

1. **Create a new web service**

   ![_](/static/blog-changelog-assets/2022/02/--2022-01-04---10.22.37.png)

2. **Link to our GitHub repo**

   ![_](/static/blog-changelog-assets/2022/02/Unknown.png)

3. **Config our service**

   The free tier is good enough for us.
   ![_](/static/blog-changelog-assets/2022/02/Unknown-2-1.png)

4. **Specify our building and starting scripts**

   ![_](/static/blog-changelog-assets/2022/02/Unknown-3.png)

After the setup, our demo page is updated automatically whenever a new commit is merged into the main branch.
![_](/static/blog-changelog-assets/2022/02/Unknown-4.png)

#### Staging environment for pre-release

Every pre-release will also trigger an update for our staging environment ([staging.bytebase.com](staging.bytebase.com)). (We can also update this environment manually via [the action page](https://github.com/bytebase/bytebase/actions/workflows/staging.yml))
![_](/static/blog-changelog-assets/2022/02/Unknown-5.png)

#### Preview for each PR

To be honest, we didn't expect this simple to gain this capability, but after we finish the previous configuration steps, we just need to turn on a single switch to enable the PR preview feature.
![_](/static/blog-changelog-assets/2022/02/Unknown-6.png)
Once configured, render will post the preview link on every Pull Request.
![_](/static/blog-changelog-assets/2022/02/Unknown-7.png)![_](/static/blog-changelog-assets/2022/02/Unknown-8-1.png)
It usually takes a couple minutes to deploy the service when a new commit is pushed to the source branch and I add a 5-digits commit hash to tell the commit from which the service is built.
![_](/static/blog-changelog-assets/2022/02/Unknown-8-2.png)![_](/static/blog-changelog-assets/2022/02/Unknown-9.png)
