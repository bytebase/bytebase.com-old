---
title: "Bytebase 1.9.1 Deep Dive"
author: Tianzhou
published_at: 2022/12/20 17:21:21
feature_image: /static/blog/1-9-1-new-features/fishie-banner.webp
tags: Explanation
description: Last week, we released Bytebase 1.9.1. Let's take a deeper look into the new features - schema editor, mark issues as Need Attention, database access control, and data anonymization.
---

The penultimate release of 2022 brings Bytebase from 1.9.0 to [1.9.1](/changelog/bytebase-1-9-1). Although it’s only a PATCH version, the 237 commits still bring us tons of new features. Let’s take a closer look at what's released during this World Cup cycle ⚽️.

## Schema Editor

First up is the [Schema editor](/docs/change-database/schema-editor).

For most developers, handwriting SQL is troublesome and error-prone. So, we made a visual Schema Editor that can generate SQL statements with just a few clicks.

![_](/static/blog/1-9-1-new-features/schema-editor.webp)

We included the support for MySQL and TiDB first, and PostgreSQL will be available soon.

## Need Attention

Next ups is a small yet sweet feature.

The issue creator might want to remind the reviewer during the review process. We added the **[Need Attention](/docs/change-database/change-workflow/issue-need-attention)** feature, which adds a reminder bell to the Review interface. The corresponding issue title will become bold in the reviewer interface when you click it.

![_](/static/blog/1-9-1-new-features/need-attention-bell.webp)

![_](/static/blog/1-9-1-new-features/need-attention-bold.webp)

The overall interaction took inspiration from Google’s internal Code Review tool. I remember clearly the day I first saw a bold entry in my review list. I’ve used it ever since, and I think it can improve the process’s efficiency.

Regarding how to nudge people, some collaborative tools choose to ping others, others choose to use bolded font. Direct or restrained, the design concept of the tool is also included in these interaction details.

## Database Access Control

Now, let’s chat about Bytebase’s security capabilities.

We introduced [Database Access Control](/docs/administration/database-access-control) with this release, a combination of Access Control Policy and Environment Tier within Bytebase.

Some users suggested that they don’t want developers to access all databases in the production environment by default. This can be achieved by the DBA setting the `Environment Tier` to `Protected`. But at the same time, the user wants to open access to some databases in this environment, and it is possible to whitelist those databases.

![_](/static/blog/1-9-1-new-features/protected-env.webp)

![_](/static/blog/1-9-1-new-features/accesss-control-env.webp)

The overall design of Bytebase follows the same security practice of default blacklisting and separate whitelisting. This is yet another feature focusing on data security after [Data Anonymization](/docs/administration/anonymize-data).

## Data Anonymization

In the last release, we introduced data anonymization for MySQL.

In this cycle, we have enhanced its capabilities, and it now tops the mainstream goInception-based solutions in the market.

|          Query Type          |  Bytebase  | goInception |
| ---------------------------: | :--------: | :---------: |
|      Simple query statements |      ✔️     |  ✔️  |
|                     Subquery |      ✔️     |  ❌  |
|                  NATURE JOIN |      ✔️     |  ❌  |
|          JOIN ... USING(...) |      ✔️     |  ❌  |
| Common Table Expression(CTE) |      ✔️     |  ❌  |

goInception claims to be able to anonymize data. Still, it’s a bit too easy to bypass😓. Companies, if you use goInception, I am sweating for your data security.

And unlike goInception, which only supports MySQL, we will soon bring full data anonymization capabilities to PostgreSQL.

## Summary

Well, that’s it for this release. The next one in two weeks will also be the last of 2022.

The task in 2021 was to complete the basic capabilities needed in database development. From my recent communication with customers, I can tell that this piece is pretty much finished: when they ask if we have a particular feature, most of the time, we can answer YES.

Next year, our task will move from satisfying users’ pain points to gradually bringing them surprises. Frankly speaking, compared with the coding tools, the database tools are still relatively primitive. Although we have DBA’s expertise, we lack an understanding of DevTools and the overall R&D collaboration system.

At AWS re:Invent 2022, Amazon released its one-stop R&D platform, CodeCatalyst, joining GitHub, GitLab, and JetBrains. All of these claims to be one-stop, but let’s be honest, none of them is, because they haven’t scratched the surface of database development. The R&D process is not a complete process without database development. After all, the majority of applications are inseparable from the database.

But it’s good to see them up fighting first, making time for Bytebase to grow, and helping them make up the missing 🧩.

![_](/static/blog/1-9-1-new-features/amazon-codecatalyst.webp)

![_](/static/blog/1-9-1-new-features/github.webp)

![_](/static/blog/1-9-1-new-features/jetbrains.webp)

![_](/static/blog/1-9-1-new-features/gitlab.webp)