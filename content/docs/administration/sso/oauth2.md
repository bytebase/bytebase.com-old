---
title: OAuth 2.0
---

OAuth (Open Authorization) is an open standard for token-based authentication and authorization which is used to provide single sign-on (SSO). Bytebase supports to create popular OAuth 2.0 providers(GitHub, Google, GitLab) and custom providers.

![create-sso-dialog](/static/docs/administration/sso/create-sso-dialog.webp)

In the creating SSO dialog, you need to fill in most of required fields. Including:

- Basic information:

  - **Name** is the display name of your SSO item;
  - **ResourceID** should be an unique string about this resource;
  - **Domain** is a SSO domain name;

- Identity provider information: The information is the base concept of [OAuth 2.0](https://oauth.net/2/) and comes from your provider.

  - **Client ID** is a public identifier of the custom provider;
  - **Client Secret** is the OAuth2 client secret from identity provider;
  - **Auth URL** is the custom provider's OAuth2 login page address;
  - **Scopes** is the scope parameter carried when accessing the OAuth2 URL, which is filled in according to the requirements of the custom provider;
  - **Token URL** is the API address for obtaining accessToken;
  - **User information URL** is the API address for obtaining user information by accessToken;

- User information field mapping:

  For different providers, the structure returned by their user information API usually not the same. The information we need to know about an OAuth2 service is how to map the user information into Bytebase user fields. To extract the information we need from the different OAuth2 provider user information API, you need to fill the user information fields mapping form.

  Bytebase will use this information to import the user profile fields when creating new accounts.
  The most important user field mapping is the identifier which are used to identify the Bytebase account associated with the OAuth 2.0 login.

  - **Identifier** is the field name of the unique identifier in 3rd-party user info;
  - **DisplayName** is the field name of display name in 3rd-party user info;
  - **Email** is the field name of primary email in 3rd-party user info.

<hint-block type="info">

OAuth 2.0 requires an authorization callback url in the configuration. Please make sure the [--external-url](/docs/get-started/install/external-url) is set correctly. See more in [Configure External URL](/docs/get-started/install/external-url).

</hint-block>

## Create OAuth 2.0 provider with templates

Bytebase provides some popular OAuth 2.0 provider templates including GitHub, GitLab and Google.

### GitHub

1. Follow the [Creating an OAuth App in GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to create an OAuth app in GitHub.

   ![github-oauth-app-config](/static/docs/administration/sso/github-oauth-app-config.webp)

   <hint-block type="info">

   The Authorization callback URL is related with Bytebase's external URL.

   </hint-block>

2. Open creating SSO dialog and select the **GitHub** template.

   ![oauth2-github](/static/docs/administration/sso/oauth2-github.webp)

3. Update the **Client ID** and **Client secret** fields with the GitHub OAuth App you just created.
4. After filling in all the required fields, try to click **Test connection**.
5. If everything is OK, click the **Create** button.

### GitLab

1. Follow the [Configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to create an OAuth 2 application in GitLab.

   ![gitlab-oauth-app-config](/static/docs/administration/sso/gitlab-oauth-app-config.webp)

2. Open creating SSO dialog and select the **GitLab** template.
3. Update the **Client ID** and **Client secret** fields with the GitLab OAuth 2 application you just created.
4. After filling in all the required fields, try to click **Test connection**.
5. If everything is OK, click the **Create** button.

### Google

1. Follow the [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2) to create OAuth 2.0 client credentials in [Google API Console](https://console.developers.google.com/) with the following link.

   ![google-oauth-app-config](/static/docs/administration/sso/google-oauth-app-config.webp)

2. Open creating SSO dialog and select the **Google** template.
3. Update the **Client ID** and **Client secret** fields with the OAuth 2.0 client credential you just created.
4. After filling in all the required fields, try to click **Test connection**.
5. If everything is OK, click the **Create** button.
