---
title: Add Git Provider
---

Estimate setup time: 30 minutes.
This guide will show you how to integrate a version control system (VCS) with Bytebase. This is a [reference setup](https://demo.bytebase.com/setting/version-control/bytebasegitlabcom-16001) showing what it will look like after the setup.

<hint-block type="info">

For now, Bytebase only supports **self-host GitLab EE/CE** and **GitHub.com**, we have plans to support more Git providers:

1. GitHub Enterprise
2. GitLab.com

</hint-block>

## Self-host GitLab EE/CE

### Prerequisites

- You should be the **Workspace Owner** to be able to see the "**Version Control**" sidebar item and add Git Provider.
- You should have a project created in GitLab.

### Step 1 - Setting up

Go to "**Settings**" from the top nav bar, select "**Version Control**" under "**Workspace**", and then click on the "**Add a Git provider**" button.

![add-git-provider](/static/docs/en/vcs-integration/add-git-provider/add-git-provider.webp)

Fill in the URL where the GitLab instance is running.

![add-git-provider-steps](/static/docs/en/vcs-integration/add-git-provider/add-git-provider-step1.webp)

### Step 2 - OAuth application info

<hint-block type="warning">

In this step, you need to register "Bytebase" as a [GitLab instance-wide OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications). This can only be done by a **GitLab instance admin.** If you are not, you will need to ask the admin to follow [**Step 2.1** ](#step-21---register-gitlab-instance-wide-oauth-application-performed-by-gitlab-admin)to register the application and provide the Application ID and Secret. Then you may continue onwards from [**Step 2.2**](#step-22---verify-setup).

</hint-block>

<hint-block type="warning">

Please make sure you are configuring the [GitLab external_url](https://docs.gitlab.com/omnibus/settings/configuration.html#configure-the-external-url-for-gitlab) correctly, the **host:port** must exactly matches the one accessed by Bytebase. It's called `external_url` because that's how external systems like Bytebase reaches the GitLab instance.

A common mistake is when a user misconfigures the port when using port forwarding. e.g. GitLab is running on port 7890, while it's exposed to the public on port 7891. In this case the `external_url` should be `https://example.com:7891` instead of `https://example.com:7890`.

</hint-block>

#### Step 2.1 - Register GitLab instance-wide OAuth application (performed by GitLab Admin)

Login the GitLab instance specified in Step 1 as an Admin user. The admin user will see a wrench icon on the top nav bar like below:

![gitlab-admin-area](/static/docs/en/vcs-integration/add-git-provider/gitlab-admin-area.webp)

Go to "**Applications**" from the sidebar, then click "**New application**" button.

![vcs-gitlab-step](/static/docs/en/vcs-integration/add-git-provider/vcs-gitlab-step1.webp)

Fill in the form with the provided info on the Bytebase setup wizard.

![vcs-gitlab-step](/static/docs/en/vcs-integration/add-git-provider/vcs-gitlab-step2.webp)

Register info:

- Name: can be other names than "Bytebase", as long as the GitLab admin can identify this application is for "Bytebase" later
- Redirect URI: begins with the **host:port** where the Bytebase console is running, and followed by **/oauth/callback**. This is the URI GitLab uses to callback Bytebase during the OAuth flow
- Trusted: Yes
- Confidential: Yes
- Scopes: api

Click the "**Submit**" button after filling the info on GitLab and you will see a created application, like below:

![vcs-gitlab-step](/static/docs/en/vcs-integration/add-git-provider/vcs-gitlab-step3.webp)

#### Step 2.2 - Verify setup

Fill in the **Application ID** and **Secret** onto the corresponding fields on the Bytebase setup wizard:

![vcs-gitlab-step](/static/docs/en/vcs-integration/add-git-provider/vcs-gitlab-step4.webp)

After you click "**Next**", Bytebase will kick off an OAuth flow to verify the setup. If you are not currently logged into the GitLab instance used in the setup. You will be prompted to login to complete the OAuth.

<hint-block type="info">

If you get an error in the OAuth popup window. Please double-check the following info:

1. The Redirect URI of the registered GitLab application matches exactly to the Redirect URI shown on the Bytebase wizard.
2. The Application ID and Secret of the registered GitLab application matches exactly to
   the filled Application ID and Secret on the Bytebase wizard.

</hint-block>

### Step 3 - Confirm and add

When everything is setup properly, you will be informed that the setup is correct. Click "**Confirm and add**".

![vcs-gitlab-step](/static/docs/en/vcs-integration/add-git-provider/vcs-gitlab-step5.webp)

Now we have successfully added a Git provider, developers can now link their Bytebase projects with one of their owned repositories from this Git provider.

### References

1. [GitLab instance-wide applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications). For GitLab, this is the OAuth application type Bytebase needs to register.

## GitHub.com

### Prerequisites

- You should be the **Workspace Owner** to be able to see the "**Version Control**" sidebar item and add Git Provider.
- You should have a repository created on GitHub.com.

### Step 1 - Setting up

Go to "**Settings**" from the top nav bar, select "**Version Control**" under "**Workspace**", and then click on the "**Add a Git provider**" button.

![add-git-provider](/static/docs/en/vcs-integration/add-git-provider/add-git-provider.webp)

Both the instance URL and Display name are pre-populated for you.

![add-git-provider-steps](/static/docs/en/vcs-integration/add-git-provider/add-git-provider-github-com-step1.webp)

### Step 2 - OAuth application info

<hint-block type="warning">

In this step, you need to register "Bytebase" as a [GitHub organization-wide OAuth application](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app). This can only be done by an **organization admin on GitHub.com.** If you are not, you will need to ask the admin to follow [**Step 2.1** ](#step-21---register-github-organization-wide-oauth-application-performed-by-organization-admin)to register the application and provide the Client ID and Client secret. Then you may continue onwards from [**Step 2.2**](#step-22---verify-setup-1).

</hint-block>

#### Step 2.1 - Register GitHub organization-wide OAuth application (performed by organization admin)

Login as an organization admin user to the GitHub.com. The account must be an organization admin of the GitHub organization (able to access the organiztion **Settings** page):

![github-admin-settings](/static/docs/en/vcs-integration/add-git-provider/github-admin-settings.webp)

Go to "**Developer settings > OAuth Apps**" from the sidebar, then click "**New application**" button.

![vcs-github-step](/static/docs/en/vcs-integration/add-git-provider/vcs-github-step1.webp)

Fill in the form with the provided info on the Bytebase setup wizard.

![vcs-github-step](/static/docs/en/vcs-integration/add-git-provider/vcs-github-step2.webp)

Register info:

- Application name: can be other names than "Bytebase", as long as the organization admin can identify this application is for "Bytebase" later
- Homepage URL: can be other URLs than "https://bytebase.com"
- Authorization callback URL: begins with the **host:port** where the Bytebase console is running, and followed by **/oauth/callback**. This is the URI GitHub uses to callback Bytebase during the OAuth flow

Click the "**Register application**" button after filling the info on GitHub.com and you will see a created application, then click on "**Generate a new client secret**" to generate a new client secret:

![vcs-github-step](/static/docs/en/vcs-integration/add-git-provider/vcs-github-step3.webp)

#### Step 2.2 - Verify setup

Fill in the **Application ID** and **Secret** onto the corresponding fields on the Bytebase setup wizard:

![vcs-github-step](/static/docs/en/vcs-integration/add-git-provider/vcs-github-step4.webp)

After you click "**Next**", Bytebase will kick off an OAuth flow to verify the setup. If you are not currently logged on GitHub.com. You will be prompted to login to complete the OAuth.

<hint-block type="info">

If you get an error in the OAuth popup window. Please double-check the following info:

1. The "Authorization callback URL" of the registered GitHub OAuth application matches exactly to the "Authorization callback URL" shown on the Bytebase wizard.
2. The "Client ID" and "Client secret" of the registered GitHub OAuth application matches exactly to the filled "Application ID" and "Secret" on the Bytebase wizard.

</hint-block>

### Step 3 - Confirm and add

When everything is setup properly, you will be informed that the setup is correct. Click "**Confirm and add**".

![vcs-github-step](/static/docs/en/vcs-integration/add-git-provider/vcs-github-step5.webp)

Now we have successfully added a Git provider, developers can now link their Bytebase projects with one of their owned repositories from this Git provider.
