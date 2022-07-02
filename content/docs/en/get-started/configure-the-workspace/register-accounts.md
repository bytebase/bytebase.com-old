---
title: Register Accounts
---

After deploying Bytebase successfully, you need to register accounts for your team members.

## Register an admin account

You who registers first after deployment can set up an admin account, and an admin will be granted a **Workspace Owner** role.

![welcome-page](/docs/en/get-started/configure-the-workspace/register-accounts/welcome-page.webp)

## **Register an account**

After the admin account is created, you can register a normal account and will be granted **Workspace Developer** role.

![normal-account](/docs/en/get-started/configure-the-workspace/register-accounts/normal-account.webp)

## Login with GitLab

In order to login with Gitlab:

1. In Bytebase, the **Workspace Owner** completes [VCS configuration](http://localhost:64308/docs/use-bytebase/vcs-integration/add-git-provider).
2. In GitLab, set the public email same as register email in Bytebase.
![gitlab-public-email](/docs/en/get-started/configure-the-workspace/register-accounts/gitlab-public-email.webp)

This feature is only available in the **Team** or **Enterprise** plan.

## Update password

As a **Workspace Owner**, you can change passwords for **Workspace Developer** and **DBA** accounts.

1. Click **Settings** on the top bar.
2. Click **Members** on the left side bar, and you can see the members page.
3. Click the name of any account, you will be redirect to the member’s detail page.
4. Click **Edit**, fill in the **Password** and **Confirm**, and click **Save**. The password is Updated.