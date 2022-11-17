---
title: External Approval
---

Users can configure Bytebase issues to be approved by external systems. Feishu (Lark) is the only supported external systems at the moment, but stay tuned for more.

<hint-block type="info">

Bytebase will approve the **whole stage of tasks** instead of a single task if it is approved on the IM side.

</hint-block>

## Setup Feishu Custom App

Users should create a custom App, granting it necessary permissions and obtaining the Application ID and Secret.

### Step 1 - Create a Custom App

Create a Custom App at [Feishu Open Platform](https://open.feishu.cn/app).

Fill in App Name and Description such as Bytebase Approval.

![feishu app creation page](/static/docs/external-approval-feishu-create.webp)

### Step 2 - Grant permissions

In the Manage scopes section of Permissions & Scopes page, add the following scopes.

- approval:approval (View, create, update, and delete info of Approval app).
- approval:approval:readonly (Access Approval).
- contact:user.id:readonly (Obtain user ID via email or mobile number).

![feishu app permission page](/static/docs/external-approval-feishu-permission.webp)

### Step 3 - Enable app

In the Version Management & Release page of App Release, create a Version. You can use 1.0.0 for App version and set availability to all members.

![feishu app release page](/static/docs/external-approval-feishu-enable-1.webp)
![feishu app release page version details](/static/docs/external-approval-feishu-enable-2.webp)

Submit for release.

![feishu app release submission page](/static/docs/external-approval-feishu-enable-3.webp)

Ask your organization administrator to approve the custom application in [Workspace / App review](https://feishu.cn/admin/appCenter/audit).

### Step 4 - Obtain credentials

Get the **App ID** and **App Secret** in the General info section of Credentials & Basic Info page. You can add [Bytebase icon](https://www.bytebase.com/brand) on the same page.
![feishu app credential page](/static/docs/external-approval-feishu-credential.webp)

## Setup Bytebase

![external approval bytebase setting page](/static/docs/external-approval-bytebase-setting.webp)

1. Go to Bytebase Settings, click on IM Integration.
1. Fill in Application ID and Secret from the previous section. Click on Enable and Create button.

<hint-block type="warning">

The registered Bytebase account must have an **identical** email at Feishu to receive Approval requests.

</hint-block>
