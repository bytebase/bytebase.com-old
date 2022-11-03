---
title: GitOps SQL Review CI
---

<hint-block type="warning">

This feature requires Enterprise Plan.

</hint-block>

## Set up SQL Review CI

This feature requires **Version Control Workflow**. You can follow [VCS Integration (GitOps)](/docs/vcs-integration) to set up.

![vcs-sql-review](/static/docs/vcs-integration/enable-version-control-workflow/vcs-sql-review.webp)

Below use GitLab as an example. GitHub works in a similar way.

When checked, Bytebase will create a merge request (MR) for your repository to set up the SQL review CI, and redirect you to the MR page. To finish the setup, please should review and merge this MR.

![vcs-sql-review-prepare](/static/docs/vcs-integration/enable-version-control-workflow/vcs-sql-review-prepare.webp)

![vcs-sql-review-pr](/static/docs/vcs-integration/enable-version-control-workflow/vcs-sql-review-pr.webp)

After the setup, in every MR, the SQL review policy will check against changed files matching the file path template.

## SQL Review CI via GitHub Action

![vcs-sql-review-github](/static/docs/vcs-integration/enable-version-control-workflow/vcs-sql-review-github.webp)

## SQL Review CI via GitLab CI

![vcs-sql-review-gitlab](/static/docs/vcs-integration/enable-version-control-workflow/vcs-sql-review-gitlab.webp)

And you can follow the doc [Create Schema Review Policy](/docs/sql-review/review-rules/create-schema-review-policy) to create the SQL review policy.
