# Restore from Backup

{% hint style="warning" %}
Bytebase only allows to restore backup to a new database under the same project and environment.
{% endhint %}

{% hint style="info" %}
User who is the member of the project owning the database, as well as the Workspace Owner and DBA can restore backup.
{% endhint %}

## Step 1 - Choose the backup to be restored

![](../../.gitbook/assets/Backup2.png)

## Step 2 - Choose the new database name for the restore

For now, Bytebase only allows to restore to a new database under the same project and environment as the original database producing the backup.

![](../../.gitbook/assets/Backup3.png)

## Step 3 - Execute restore workflow

Bytebase will create a 2-stage issue for the restore workflow. The 1st stage is to create the new database, followed by restoring the backup to that database. For `Workspace Owner or DBA`, the workflow will start automatically. For `Workspace Developer`, the workflow requires `Workspace Owner or DBA` approval first.

![](../../.gitbook/assets/Backup4.png)

## Step 4 - View the restored database

For a successfully restored database, Bytebase records the parent database it's restored from. It also records a `Branch` migration history showing the issue detailing the restoring process.

![](../../.gitbook/assets/Backup5.png)
