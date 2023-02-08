---
title: OpenID Connect
---

OpenID Connect (OIDC) is a simple identity layer on top of the OAuth 2.0 protocol. Bytebase supports using OIDC for configuring Single Sign-On (SSO).

## Configuration

<hint-block type="info">

Please make sure the [`--external-url`](/docs/get-started/install/external-url) is configured correctly for the Bytebase instance.

If your start Bytebase with `--external-url https://bytebase.example.com`, then your application callback or redirect URL should be `https://bytebase.example.com/oidc/callback`.

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
1. Configure the **Authorized redirect URIs** to be `https://{EXTERNAL_URL}/oidc/callback`.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider:
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
   1. Configure the **Redirect URI** to be `https://{EXTERNAL_URL}/oidc/callback`.
1. In Bytebase, go to **Settings > SSO** to create a new OIDC provider:
   - **Name**: `GitLab`
   - **Resource ID**: `gitlab`
   - **Domain**: `gitlab.example.com`
   - **Issuer**: `https://gitlab.example.com`
   - **Client ID**: the application ID of your application
   - **Client secret**: the secret of your application
   - **Identifier**: `nickname`
   - **Display name**: `name`
   - **Email**: `email`

<hint-block type="info">

In some GitLab self-hosted setups, the **Issuer** is `http://gitlab.example.com` (HTTP) instead of `https://gitlab.example.com` (HTTPS) despite the latter being the URL used to access the instance.

</hint-block>

