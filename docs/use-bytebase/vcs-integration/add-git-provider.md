---
title: Add Git Provider
order: 40201
---

# Add Git Provider

> Due to the complexity and details involved, this guide takes a bit patience to follow. If you have suggestions to improve the guide or/and the setup workflow, please tell us at support@bytebase.com

Estimate setup time: 30 minutes. This is a [reference setup](https://demo.bytebase.com/setting/version-control/bytebasegitlabcom-16001) showing what it will look like after the setup.

<hint-block type="info">

For now, Bytebase only supports self-host GitLab EE/CE, we plan to support more Git providers roughly in the following order:

1. GitHub Enterprise
2. GitLab.com
3. GitHub.com

</hint-block>

<hint-block type="warning">

Only **Workspace Owner** can see the "Version Control" sidebar item and add Git Provider.

</hint-block>

<hint-block type="warning">

To add GitLab EE/CE as a Git Provider, you also need to register "Bytebase" as a [GitLab instance-wide OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications). This can only be done by a **GitLab instance admin.** If you are not, then you will need to ask the admin to register the application following [Step 2.1](#step-2-2-verify-setup).

</hint-block>

Go to "**Settings**" from the top nav bar, and then go to "**Version Control**" under "**Workspace**", and then click "**Add a Git provider**" button.

![add-git-provider](/static/docs-assets/add-git-provider.png)

## Step 1 - Basic Info

![add-git-provider-steps](/static/docs-assets/add-git-provider-steps.png)

1. Fills in the URL where the GitLab instance is running.

## Step 2 - OAuth application info

<hint-block type="warning">

In this step, you need to register "Bytebase" as a [GitLab instance-wide OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications). This can only be done by a **GitLab instance admin.** If you are not, then you will need to ask the admin to follow [**Step 2.1** ](#step-2-1-register-gitlab-instance-wide-oauth-application-performed-by-gitlab-admin)to register the application and provide its Application ID and Secret to you. Then you continue from [**Step 2.2**](#step-2-2-verify-setup)

</hint-block>

### Step 2.1 - Register GitLab instance-wide OAuth application (performed by GitLab Admin)

Login the GitLab instance specified in Step 1 as an Admin user. The admin user will see a wrench icon on the top nav bar like below:

![gitlab-admin-area](/static/docs-assets/gitlab-admin-area.png)

Go to "**Applications**" from the sidebar and then click "**New application**" button.

![vcs-gitlab-step](/static/docs-assets/vcs-gitlab-step1.png)

Fill in the form with the provided info on the Bytebase setup wizard.

![vcs-gitlab-step](/static/docs-assets/vcs-gitlab-step2.png)

- Name usually is just "Bytebase". Other names are fine, as long as the GitLab admin can identify this application is for "Bytebase" later.
- Redirect URI begins with the **host:port** where the Bytebase console is running, and followed by **/oauth/callback**. This is the URI GitLab uses to callback Bytebase during the OAuth flow.
- Trusted: Yes
- Confidential: Yes
- Scopes: api

Click "**Submit**" button after filling the info on GitLab and you will see a created application like below:

![vcs-gitlab-step](/static/docs-assets/vcs-gitlab-step3.png)

### Step 2.2 - Verify setup

Fill the **Application ID** and **Secret** onto the corresponding fields on the Bytebase setup wizard like below:

![vcs-gitlab-step](/static/docs-assets/vcs-gitlab-step4.png)

After you click "**Next**", Bytebase will kick off an OAuth flow to verify the setup. If you are not currently logged into the GitLab instance used in the setup. You will be prompted to login to complete the OAuth.

<hint-block type="info">

If you get an error in the OAuth popup window. Please double-check the following info:

1. The Redirect URI of the registered GitLab application matches exactly to the Redirect URI shown on the Bytebase wizard.
2. The Application ID and Secret of the registered GitLab application matches exactly to
   the filled Application ID and Secret on the Bytebase wizard.

</hint-block>

## Step 3 - Confirm

If everything is setup properly, you will be informed that the setup is correct. Then click "**Confirm and add**".

![vcs-gitlab-step](/static/docs-assets/vcs-gitlab-step5.png)

Now we have successfully added a Git provider, developers can now link their Bytebase projects with one of their owned repositories from this Git provider.

## References

1. [GitLab instance-wide applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#instance-wide-applications). For GitLab, this is the OAuth application type Bytebase needs to register.
