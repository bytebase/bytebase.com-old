---
title: OpenID Connect (OIDC)
---

OpenID Connect (OIDC) is a simple identity layer on top of the OAuth 2.0 protocol. Bytebase supports using OIDC for configuring Single Sign-On (SSO).

## Configuration

<hint-block type="info">

1. Please make sure the [`--external-url`](/docs/get-started/install/external-url) is configured correctly for the Bytebase instance.
   
   If your start Bytebase with `--external-url https://bytebase.example.com`, then your application redirect URL should be `https://bytebase.example.com/oidc/callback`.

2. If you're unsure about the **Issuer** of your IdP, you can always use the [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) endpoint to find the correct value, e.g. `https://acme.okta.com/.well-known/openid-configuration`.

</hint-block>

Basic information:

- **Name**: the display name shown to your users (e.g. "Google" will be shown as "Sign in with Google")
- **Resource ID**: a human-readable unique string, only lower-case alphabets and hyphens are allowed (e.g. "google")
- **Domain**: the domain name to scope associated users (e.g. "google.com")

Identity provider information:

- **Issuer**: the issuer of the response (e.g. "https://accounts.google.com")
- **Client ID**: the client ID of your application
- **Client secret**: the client secret of your application

User information field mapping:

- **Identifier**: the claims field to be used as the Bytebase user identifier (e.g. "username")
- **Display name**: the claims field to be used as the Bytebase user display name (e.g. "name", optional)
- **Email**: the claims field to be used as the Bytebase user email address (e.g. "email", optional)

### Google

1. Follow the Google [OpenID Connect documentation](https://developers.google.com/identity/openid-connect/openid-connect) to create a new OAuth client ID with "Web application" as the **Application type**.
1. Configure the **Authorized redirect URIs** to be `{EXTERNAL_URL}/oidc/callback`.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider (all values are examples):
   - **Name**: `Google`
   - **Resource ID**: `google`
   - **Domain**: `google.com`
   - **Issuer**: `https://accounts.google.com`
   - **Client ID**: the client ID of your application
   - **Client secret**: the client secret of your application
   - **Identifier**: `email`
   - **Display name**: `name`
   - **Email**: `email`

### GitLab

1. Follow the documentation of [configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.gitlab.com/ee/integration/oauth_provider.html) to create a new OAuth application:
   1. Configure the **Scopes** to include `openid`, `profile` and `email`.
   1. Configure the **Redirect URI** to be `{EXTERNAL_URL}/oidc/callback`.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider (all values are examples):
   - **Name**: `GitLab`
   - **Resource ID**: `gitlab`
   - **Domain**: `gitlab.acme.com`
   - **Issuer**: `https://gitlab.acme.com`
   - **Client ID**: the application ID of your application
   - **Client secret**: the secret of your application
   - **Identifier**: `nickname`
   - **Display name**: `name`
   - **Email**: `email`

<hint-block type="info">

In some GitLab self-hosted setups, the **Issuer** is `http://gitlab.acme.com` (HTTP) instead of `https://gitlab.acme.com` (HTTPS) despite the latter being the URL used to access the instance.

</hint-block>

### Okta

1. Follow the Okta [create OIDC app integrations documentation](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm) to create a new OIDC app integration with "Web Application" as the **Application type**.
   1. Configure the **Sign-in redirect URIs** to be `{EXTERNAL_URL}/oidc/callback`.
   1. Configure the **Assignments > Controlled access** to be **Allow everyone in your organization to access**.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider (all values are examples):
   - **Name**: `Okta`
   - **Resource ID**: `okta`
   - **Domain**: `acme.okta.com`
   - **Issuer**: `https://acme.okta.com`
   - **Client ID**: the client ID of your application
   - **Client secret**: the client secret of your application
   - **Identifier**: `preferred_username`
   - **Display name**: `name`
   - **Email**: `email`

### Keycloak

1. Follow the Keycloak [create OIDC provider documentation](https://www.keycloak.org/docs/latest/server_admin/#assembly-managing-clients_server_administration_guide) to create a new "OpenID Connect" client.
   1. Configure the **Client ID** to be `bytebase`.
   1. Configure the **Valid redirect URIs** to be `{EXTERNAL_URL}/oidc/callback`.
   1. Turn on the **Capability config > Client authentication** for the **Credentials** tab to be available (which will generate and display the client secret).
      1. In some older versions, configure **Access Type** to "confidential" instead.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider (all values are examples):
   - **Name**: `Keycloak`
   - **Resource ID**: `keycloak`
   - **Domain**: `keycloak.acme.com`
   - **Issuer**: `https://keycloak.acme.com/auth/realms/master`
   - **Client ID**: `bytebase`
   - **Client secret**: the client secret of your application
   - **Identifier**: `preferred_username`
   - **Display name**: `name`
   - **Email**: `email`

### Authing

1. Follow the Authing [创建自建应用](https://docs.authing.cn/v2/guides/app-new/create-app/create-app.html) to create a new "标准 Web 应用" as "自建应用".
   1. In **应用配置**, configure the **登录回调 URL** to be `{EXTERNAL_URL}/oidc/callback`.
   1. In **协议配置**, configure the **id_token 签名算法** to be `RS256`.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider (all values are examples):
   - **Name**: `Authing`
   - **Resource ID**: `authing`
   - **Domain**: `acme.authing.cn`
   - **Issuer**: `https://acme.authing.cn/oidc`
   - **Client ID**: the app ID of your application
   - **Client secret**: the app secret of your application
   - **Identifier**: `username`
   - **Display name**: `name`
   - **Email**: `email`
