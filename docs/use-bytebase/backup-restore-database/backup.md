# Backup

![](../../.gitbook/assets/Backup1.png)

## Automatic weekly backup

{% hint style="info" %}
Automatic weekly backup can be enabled/disabled by the Owner of the project owning the database, as well as the Workspace Owner and DBA.
{% endhint %}

Whenever user (re-)enables the automatic backup, Bytebase will choose a random local time between 0:00 AM \~ 6:00 AM on Sunday.

You can use [webhook](../webhook-integration/database-webhook.md) to monitor backup status.

## Manual backup

{% hint style="info" %}
User who is the member of the project owning the database, as well as the Workspace Owner and DBA can take manual backup.
{% endhint %}

In addition to automatic backup, user can also take a manual backup whenever needed.
