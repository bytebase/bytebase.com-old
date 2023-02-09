---
title: Single Sign-On (SSO)
---

Single Sign-On (SSO) is an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.

Bytebase supports the following standard protocols that provide SSO:

- [OAuth 2.0](/docs/administration/sso/oauth2)
- [OpenID Connect (OIDC)](/docs/administration/sso/oidc)

## Create SSO provider

As a **Workspace Owner**, you can create a SSO provider with the following steps:

1. Go to the **Settings** page.

   ![settings-sso](/static/docs/administration/sso/settings-sso.webp)

2. Click **Create** to start creating SSO.
3. Fill in all the required fields.

   ![create-sso-dialog](/static/docs/administration/sso/create-sso-dialog.webp)

## Sign in with SSO

Once a valid SSO has been created, the user can choose the configured SSO provider to sign in.

![sign-in-with-github](/static/docs/administration/sso/sign-in-with-github.webp)
