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

### Feishu

[Official guide](https://www.feishu.cn/hc/zh-CN/articles/360024984973)

<hint-block type="info">

DingTalk allows to specify a list of keywords in the [security setting](https://www.feishu.cn/hc/zh-CN/articles/360024984973#lineguid-RahdJr) to protect webhook endpoint. You can add "Bytebase" to that keyword list.

</hint-block>

### WeCom

WeCom does not provide its own official guide. Please follow this similar [setup](https://intl.cloud.tencent.com/zh/document/product/614/39581) from Tencent Cloud instead.

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
