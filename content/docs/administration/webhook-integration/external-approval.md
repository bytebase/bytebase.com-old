---
title: External Approval
---

Users can configure Bytebase issues to be approved by external systems. Feishu (Lark) is the only supported external systems at the moment, but stay tuned for more.

## Create Application
Users should create a custom App for obtaining the Application ID and Secret.

1. Create a Custom App at [Feishu Open Platform](https://open.feishu.cn/app).
1. Fill in App Name and Description such as Bytebase Approval.
1. Add [Bytebase icon](https://www.bytebase.com/_nuxt/img/logo-icon.3e0dcc1.svg) in the General info section of Credentials & Basic Info page. You can get the App ID and App Secret on the same page.
1. In the Manage scopes section of Permissions & Scopes page, add the following scopes.
    - approval:approval (View, create, update, and delete info of Approval app).
    - approval:approval:readonly (Access Approval).
    - contact:user.id:readonly (Obtain user ID via email or mobile number).
1. In the Version Management & Release page of App Release, create a Version. You can use 1.0.0 for App version and set availability to all members.
1. Ask your organization administrator to approve the custom application in [Workspace / App review](https://bytebase.feishu.cn/admin/appCenter/audit).

## Setup

1. Go to Bytebase Settings, click on IM Integration.
1. Fill in Application ID and Secret from the previous section. Click on Enable and Create button.
1. It's all set. Remember, the registered Bytebase account must have an identical email at Feishu to receive Approval requests.