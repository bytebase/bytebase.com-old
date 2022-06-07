---
title: Bytebase 0.13.0
published_at: 2022/02/18 02:28:08
description: SQL editor supports sheet sharing. Searchable member selector. Database labels can be managed as normal properties. Show comprehensive schema comparison when schema drift is detected.
---

## 🚀 New Features

- SQL editor supports sheet sharing.

![_](/static/blog-changelog-assets/2022/02/3898199b-1e90-4cb8-8bba-3e5abec3cd5f.gif)

## 🎄 Enhancement

- Searchable member selector.

![_](/static/blog-changelog-assets/2022/02/41545f64-6288-4a9d-91bb-1b184b81e421.gif)

- Database labels can be managed as normal properties. Database label related features are available for standard mode projects now.

![_](/static/blog-changelog-assets/2022/02/e4e79488-c28d-4d58-9c7b-50432d482f15.gif)

- Show comprehensive schema comparison when schema drift is detected.

![_](/static/blog-changelog-assets/2022/02/f67a9896-21b5-44c1-9c3f-ce1065cc1de0.gif)

- Add quickstart for MySQL and Clickhouse.  You can choose to have MySQL or Clickhouse run automatically with Bytebase without additional installation. Thanks @showsmall  for [the suggestion](https://github.com/bytebase/bytebase/issues/403).

![_](/static/blog-changelog-assets/2022/02/QUICKSTART.png)

## 🐞 Bug fix

- Prevent XSS in SQL editor.
- Filter improper authorization of user inbox.

## 🎠 Community

- Our gratitude goes to @boyapatisandeep for the [detailed bug report](https://github.com/bytebase/bytebase/issues/543) and @NickStepanov for the [baseline issue](https://github.com/bytebase/bytebase/discussions/350)

- Thanks to @Juneezee [https://github.com/bytebase/bytebase/pull/264](https://github.com/bytebase/bytebase/pull/264) @wuhan005 [https://github.com/bytebase/bytebase/pull/340](https://github.com/bytebase/bytebase/pull/340) @cosmtrek [https://github.com/bytebase/bytebase/pull/410](https://github.com/bytebase/bytebase/pull/410) @stormcat24 [https://github.com/bytebase/bytebase/pull/453](https://github.com/bytebase/bytebase/pull/453) for all your contribution!

## 📕 Upgrade instruction

For fresh installation, follow [https://github.com/bytebase/bytebase#installation](https://github.com/bytebase/bytebase#installation).

If you upgrade from the previous version, there is some breaking schema change. Please contact support@bytebase.com and we will help you manually upgrade to the new version.
