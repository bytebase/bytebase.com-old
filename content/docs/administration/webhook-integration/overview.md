---
title: Webhook Integration
---

## Project webhook
User can configure project-level webhooks to let Bytebase post messages to the configured webhook endpoint upon various events.

For example, **[Slack](https://slack.com/)**.

Read [Project Webhook](/docs/administration/webhook-integration/project-webhook) in detail.

![Post to a slack channel](/static/docs/webhook-slash-example.png)

## Database webhook
User can configure database-level webhooks to let Bytebase post the configured webhook endpoint upon a successful backup.

For example, **[Better Uptime Heartbeats](https://docs.betteruptime.com/monitoring/monitor-types/cron-and-heartbeat-monitor)**.

![Integrate with Better Uptime Heartbeats](/static/docs/webhook-integrate-example.png)

Read [Database Webhook](/docs/administration/webhook-integration/database-webhook) in detail.

## External approval
Alongside project webhook notifications, users can configure issues to be approved by external systems by following [External Approval](/docs/administration/webhook-integration/external-approval).