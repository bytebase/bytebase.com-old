---
title: Integrating with GitLab
description: This page contains a tutorial about integrating Bytebase CLI bb with GitLab CI/CD pipeline.
---

This tutorial will show you the steps to integrate Bytebase CLI bb into your GitLab CI/CD pipeline. You will set up a pipeline automating the database schema change along with the code change, which brings your team’s DevOps automation to a new level.

## Prerequisites

- A GitLab Project. (GitLab.com or GitLab CE/EE. We use GitLab.com for this tutorial.)
- Self-managed GitLab Runner on a Linux machine. (If haven’t, you can follow the [GitLab Runner docs](https://docs.gitlab.com/runner) to install)
- A MySQL database that is accessible by the GitLab Runner.

## Install `bb` on GitLab Runner

On your GitLab Runner shell prompt, paste the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bytebase/bytebase/HEAD/scripts/install_bb.sh)"
```

Run `bb --version` to check if bb is installed.

You can go back to [overview](https://www.bytebase.com/docs/cli/overview) for more installation details.

## Register GitLab Runner to a GitLab Project

In your GitLab Project, go to **Settings > CI/CD > Runners** and follow the **_Show Runner Installation Instructions_** to register runner.

![register gitlab runner](/static/docs-assets/gitlab-register-runner.png)

In register interaction, add tag `bb-runner` to specify this runner has bb installed.

![tag for gitlab runner](/static/docs-assets/tag-gitlab-runner.png)

## Configure GitLab CI

Set up `.gitlab-ci.yml`:

```yaml
stages:
  - deploy

execute-schema-migration:
  tags: ["bb-runner"] # Runs this job on runners that has bb installed
  only: # Only trigger when a script added to dev/
    refs: ["main"]
    changes: ["dev/*"]
  stage: deploy
  script:
    - bb dump --dsn $BYTEBASE_DSN --schema-only --file before-migrate.sql # Snapshot the schema before migration
    - migrate_scripts=$(git diff-tree --no-commit-id --name-only -r $CI_COMMIT_SHA | grep '^dev/' -) # Extract the added files
    - |
      for migrate_script in $migrate_scripts; do
        bb migrate --dsn $BYTEBASE_DSN --file $migrate_script;
      done
    - bb dump --dsn $BYTEBASE_DSN --schema-only --file after-migrate.sql # Snapshot the schema after migration

  artifacts:
    paths:
      - before-migrate.sql
      - after-migrate.sql
    expire_in: 30 days
```

bb uses [DSNs](https://www.bytebase.com/docs/cli/overview#data-source-name-dsn) to access databases. You also need to setup DSN secret to make this workflow available:
Go to **Setting > CI/CD > Variables**, add your DSN as `BYTEBASE_DSN`.

![add dsn secret](/static/docs-assets/add-gitlab-secret-1.png)

![add dsn secret](/static/docs-assets/add-gitlab-secret-2.png)

## Trigger a migration

Finally, you can trigger a migration by adding a new commit to your GitLab project.

Here is a [demo](https://gitlab.com/bytebase-sample/tutorial-bb-ci). Commit a script to `dev/` and check if this job runs correctly.

![gitlab job result](/static/docs-assets/gitlab-job-result-1.png)

You can browse the schema snapshot before and after the migration:

![gitlab job result](/static/docs-assets/gitlab-job-result-2.png)
