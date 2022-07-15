---
title: Register Accounts
---

After deploying Bytebase successfully, you need to register accounts for your team members.

## Register an admin account

The first registered account after deployment will be granted a **Workspace Owner** role.

![welcome-page](/docs/en/get-started/configure-workspace/register-accounts/welcome-page.webp)

## **Register a regular account**

After the admin account is created, you can register a regular account and will be granted **Workspace Developer** role.

![normal-account](/docs/en/get-started/configure-workspace/register-accounts/normal-account.webp)

## Login with GitLab

<hint-block type="info">

This feature is only available in the **Team** or **Enterprise** plan.

</hint-block>

In order to log in with Gitlab:

1. In Bytebase, the **Workspace Owner** completes [VCS configuration](/docs/vcs-integration/add-git-provider).
2. In GitLab, set the public email the same as the registered email in Bytebase.

   ![gitlab-public-email](/docs/en/get-started/configure-workspace/register-accounts/gitlab-public-email.webp)

## Update password

As a **Workspace Owner**, you can change passwords for the other accounts.

1. Click **Settings** on the top bar.
2. Click **Members** on the left side bar, and you can see the members page.
3. Click the name of any member, and you will be redirected to that member’s detail page.
4. Click **Edit**, fill in the **Password** and **Confirm**, and click **Save**. The password is updated.
