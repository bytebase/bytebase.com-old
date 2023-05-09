---
title: GitOps SQL Review CI
---

## Set up SQL Review CI

This feature requires the **GitOps Workflow**. You can follow [GitOps Workflow](/docs/vcs-integration/overview) to set up.

![vcs-sql-review](/static/docs/vcs-integration/enable-gitops-workflow/vcs-sql-review.webp)

Below use GitLab as an example. GitHub works in a similar way.

When the box `Enable SQL Review CI via GitLab CI` is checked, Bytebase will create a merge request (MR) for your repository to set up the SQL review CI, and redirect you to the MR page. To finish the setup, you should review and merge this MR.

![vcs-sql-review-prepare](/static/docs/vcs-integration/enable-gitops-workflow/vcs-sql-review-prepare.webp)

![vcs-sql-review-pr](/static/docs/vcs-integration/enable-gitops-workflow/vcs-sql-review-pr.webp)

After the setup, in every MR, the SQL review policy will check against changed files matching the file path template.

## SQL Review CI via GitHub Action

![vcs-sql-review-github](/static/docs/vcs-integration/enable-gitops-workflow/vcs-sql-review-github.webp)

## SQL Review CI via GitLab CI

![vcs-sql-review-gitlab](/static/docs/vcs-integration/enable-gitops-workflow/vcs-sql-review-gitlab.webp)

And you can follow the doc [Create Schema Review Policy](/docs/sql-review/review-policy/create-schema-review-policy) to create the SQL review policy.

## MyBatis3 Mapper SQL Review CI - Beta

After enabling SQL-Review CI, Bytebase will attempt to review MyBatis 3 mapper files. When the changed file includes a MyBatis 3 mapper files, Bytebase will search for a MyBatis3 config files in the same and parent directories and apply the SQL-Review policy from the Bytebase environment with the same name as the environment id in the config file to review the mapper file.

![mybatis3-sql-review-github](/static/docs/vcs-integration/enable-gitops-workflow/mybatis-github-ci-example.png)
