---
title: Project Webhook
order: 40501
---

# Project Webhook

![project-webhook-configure](/static/docs-assets/project-webhook-configure.png)

## Supported webhook endpoints

### Slack

[Official guide](https://api.slack.com/messaging/webhooks)

### Discord

[Official guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

### Microsoft Teams

[Official guide](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)

### DingTalk

[Official guide](https://developers.dingtalk.com/document/robots/custom-robot-access)

<hint-block type="info">

DingTalk allows to specify a list of keywords in the [security setting](https://developers.dingtalk.com/document/robots/customize-robot-security-settings) to protect webhook endpoint. You can add "Bytebase" to that keyword list.

</hint-block>

### Feishu (Lark)

[Official guide](https://www.feishu.cn/hc/zh-CN/articles/360024984973)

<hint-block type="info">

Feishu (Lark) allows to specify a list of keywords in the [security setting](https://www.feishu.cn/hc/zh-CN/articles/360024984973#lineguid-RahdJr) to protect webhook endpoint. You can add "Bytebase" to that keyword list.

</hint-block>

### WeCom

WeCom does not provide its own official guide. Please follow this similar [setup](https://intl.cloud.tencent.com/zh/document/product/614/39581) from Tencent Cloud instead.

### Custom

Custom is used to integrate with your own services via webhook.

<hint-block type="info">

You need to implement the webhook server yourself, it doesn't work out of the box.

</hint-block>

**API Definition as follow:**

- **HTTP Method**

  `POST`

- **Request Header**

  | Key            | Value              | Description  |
  | -------------- | ------------------ | ------------ |
  | `Content-Type` | `application/json` | JSON content |

- **Request Body**

  | Key          | Type            | Description  |
  | ------------ | ---------------- | ------------ |
  | `level` | String | One of: <br/>&nbsp;&nbsp;`INFO`<br/>&nbsp;&nbsp;`SUCCESS`<br/>&nbsp;&nbsp;`WARN`<br/>&nbsp;&nbsp;`ERROR` |
  | `activity_type` | String | One of: <br/>&nbsp;&nbsp;`bb.issue.created`<br/>&nbsp;&nbsp;`bb.issue.comment.create`<br/>&nbsp;&nbsp;`bb.issue.field.update`<br/>&nbsp;&nbsp;`bb.issue.status.update`<br/>&nbsp;&nbsp;`bb.pipeline.task.status.update`  |
  | `title` | String | Webhook title |
  | `description` | String | Webhook description |
  | `link` | String | Webhook link |
  | `creator_id` | Integer  | Updater id |
  | `creator_name` | Integer  | Updater name |
  | `created_ts` | Integer  | Webhook create timestamp |
  | `issue` | Object  | Issue Object |
  | `- id` | Integer  | Issue ID |
  | `- name` | String  | Issue Name |
  | `- status` | String  | Issue Status, one of: <br/>&nbsp;&nbsp;`OPEN`<br/>&nbsp;&nbsp;`DONE`<br/>&nbsp;&nbsp;`CANCELED`|
  | `- type`   | String  | Issue Type, one of: <br/>&nbsp;&nbsp;`bb.issue.database.create`<br/>&nbsp;&nbsp;`bb.issue.database.schema.update`<br/>&nbsp;&nbsp;`bb.issue.database.schema.update.ghost`<br/>&nbsp;&nbsp;`bb.issue.database.data.update`| 
  | `- description`| String | Issue Description|
  | `project` | Object | Project Object |
  | `- id`    | Integer | Project ID |
  | `- name`  | String  | Project Name |

- **Response Body**

  | Key          | Type            | Description  |
  | ------------ | ---------------- | ------------ |
  | `code` | String | Zero if sucess, non-zero if faild  |
  | `message` | String |  Some error message   |

- **Response StatusCode**
  - 200, OK
  - Other, if any error

## Supported events

### Issue creation

Post message when issue belonging to the configured project has been created.

### Issue status change

Post message when the status of the issue belonging to the configured project has been changed.

### Issue task status change

Post message when issue's enclosing task status has been changed.

### Issue info change

Post message when issue's basic info such as assignee, title, description has been changed.

### Issue comment creation

Post message when new comment added to the issue.
