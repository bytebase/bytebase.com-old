---
title: "How to Setup Database CI/CD with GitHub, Part 3: Put Them Together"
author: Ningjing
published_at: 2022/9/9 13:00:00
feature_image: /static/blog/github-database-cicd-part-3-put-them-together/github-howto-3.webp
tags: Education
featured: true
description: This second part will guide you through configuring GitHub.com database GitOps with Bytebase. After following these steps, you can trigger database changes by merging sql files into your GitHub repository.
---

This is a series of articles about Database CI/CD with GitHub

- [The Database CI/CD Best Practice with GitHub](/blog/database-cicd-best-practice-with-github)

- How to Setup Database CI/CD with GitHub Part 1-3
  - [Part 1: Enable SQL Review with GitHub Actions](/blog/github-database-cicd-part-1-sql-review-github-actions)
  - [Part 2: GitHub.com Database GitOps](/blog/github-database-cicd-part-2-github-database-gitops)
  - Part 3: Put Them Together (this one)

---

Now that you have finished [Part One: SQL Review GitHub Actions](/blog/github-database-cicd-part-1-sql-review-github-actions) and [Part Two: GitOps workflow](/blog/github-database-cicd-part-2-github-database-gitops), this final part will guide you through putting them together to run the whole process.

![workflow](/static/blog/github-database-cicd-part-3-put-them-together/workflow.webp)

As you may ask, during the GitOps process, we can configure SQL review in Bytebase console (the UI version), why do we need SQL review GitHub Actions? Actually, in real-world scenarios, code review including SQL files is done by **technical leaders** for business logic accuracy, while **DBAs** review the SQL for database mechanism optimization. Both these parties need SQL review as a tool. (Of course, you can skip either of them.)

Let’s dig in and see how to do this! The detailed configuration was introduced in the previous two tutorials, refer to them first if you come across directly to this one.

## Step 1 - Reorganize the Folder and Files

Repeat the steps in [Part 1- Enable SQL Review GitHub Action](/blog/github-database-cicd-part-1-sql-review-github-actions) to configure the **prod** environment. You now have two GitHub Actions configure files. Pay attention to **paths**, and **file-pattern**.

![conf-prod](/static/blog/github-database-cicd-part-3-put-them-together/conf-prod.webp)

![conf-test](/static/blog/github-database-cicd-part-3-put-them-together/conf-test.webp)


## Step 2 - Create a PR, and add your SQL scripts

1. Create a new branch `testboth`.
2. Add a migration script under `bytebase/test` folder following the name convention.

`{{ENV_NAME}}/{{DB_NAME}}__{{VERSION}}__{{TYPE}}__{{DESCRIPTION}}.sql`

![add-script](/static/blog/github-database-cicd-part-3-put-them-together/add-script.webp)

3. Commit and push this to the `testboth` branch, and create a PR in GitHub. The SQL review GitHub Actions will run automatically.
   
5. After the SQL review completes, the PR becomes mergeable.

![mergeable](/static/blog/github-database-cicd-part-3-put-them-together/mergeable.webp)

6. After you merge the PR in GitHub, there will be a new issue generated in Bytebase console.

![waiting-approval](/static/blog/github-database-cicd-part-3-put-them-together/waiting-approval.webp)

7. Approve the issue, and this SQL script will run against the **test** environment. When the issue status turns into **Done**, a file `.employeeGitHub__LATEST.sql` will be generated to record the current state of the database.
8. If everything seems OK for you for the **test** environment, you can then copy your SQL file (except the `xx__LATEST.sql`) and paste them under the **prod** folder, to trigger the schema changes on **prod** environment. Good Luck!

![last-status](/static/blog/github-database-cicd-part-3-put-them-together/last-status.webp)

Congratulations! Now you have implemented a complete database CI/CD workflow! Customize the structure to fit your own needs!

Feel free to Join our [Discord channel](https://discord.gg/6JYYBXvMDF) and share your experience.