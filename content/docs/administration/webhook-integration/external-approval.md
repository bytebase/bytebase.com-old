---
title: External Approval
---

Users can configure Bytebase issues to be approved by external systems. Feishu (Lark) is the only supported external systems at the moment, but stay tuned for more.

<hint-block type="info">

Bytebase will approve the **whole stage of tasks** instead of a single task if it is approved on the IM side.

</hint-block>

## Setup Feishu Custom App

Users should create a custom App, granting it necessary permissions, enabling it and obtaining the Application ID and Secret.

### Step 1 - Create a Custom App

Create a Custom App at [Feishu Open Platform](https://open.feishu.cn/app).

Fill in App Name and Description such as Bytebase Approval.

![feishu app creation page](/static/docs/external-approval-feishu-create.webp)

### Step 2 - Upload Icon

![Bytebase logo icon](/static/docs/logo-icon.svg)

In the General info section of Credentials & Basic Info page, add [Bytebase icon](https://www.bytebase.com/brand).

![feishu app upload icon](/static/docs/external-approval-feishu-icon.webp)

### Step 3 - Grant permissions

In the Manage scopes section of Permissions & Scopes page, add the following scopes.

- approval:approval (View, create, update, and delete info of Approval app).
- approval:approval:readonly (Access Approval).
- contact:user.id:readonly (Obtain user ID via email or mobile number).

![feishu app permission page](/static/docs/external-approval-feishu-permission.webp)

### Step 4 - Enable app

In the Version Management & Release page of App Release, create a Version.

![feishu app release page](/static/docs/external-approval-feishu-enable-1.webp)

You can use 1.0.0 for App version and set availability to members who use Bytebase.

![feishu app release page version details](/static/docs/external-approval-feishu-enable-2.webp)

Set the availability and select those who use Bytebase.

![set availability on feishu app release page ](/static/docs/external-approval-feishu-availability.webp)

Submit for release.

![feishu app release submission page](/static/docs/external-approval-feishu-enable-3.webp)

### Step 5 - Wait for approval

Ask your **organization administrator** to approve the custom application in [Workspace / App review](https://feishu.cn/admin/appCenter/audit).

Move to the next step when you see the app status is **"Enabled"**.
![In feishu app page, you can see that the app is activated](/static/docs/external-approval-feishu-enable-4.webp)

### Step 6 - Obtain credentials

Get the **App ID** and **App Secret** in the General info section of Credentials & Basic Info page.

![feishu app credential page](/static/docs/external-approval-feishu-credential.webp)

## Setup Bytebase

<hint-block type="warning">

The registered Bytebase account must have an **identical** email at Feishu to receive Approval requests.

</hint-block>

![external approval bytebase setting page](/static/docs/external-approval-bytebase-setting.webp)

1. Go to Bytebase Settings, click on IM Integration.
1. Fill in Application ID and Secret from the previous section. Click on Enable and Create button.
