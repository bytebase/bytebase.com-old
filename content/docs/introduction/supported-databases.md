---
title: Supported Databases
description: The Bytebase supported databases and corresponding feature matrix
---

Bytebase officially supports the following major versions for each supported database engine:

- MySQL - 5.7 and 8.0
- PostgreSQL - 12.0, 13.0, 14.0
- TiDB - 5.0
- ClickHouse - 21.0
- Snowflake

Bytebase usually works fine with older database versions, we just won't support features specific to those older versions. We may add other open source databases in the future.

## Feature Matrix

### Change Management

|                                                                         Feature | MySQL | PostgreSQL | TiDB | ClickHouse | Snowflake |
| ------------------------------------------------------------------------------: | :---: | :--------: | :--: | :--------: | :-------: |
|            [UI Change Workflow](/docs/change-database/change-workflow/overview) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                        [GitOps Change Workflow](/docs/vcs-integration/overview) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|         [Tenant Database Management](/docs/tenant-database-management/overview) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                    [Migration History](/docs/change-database/migration-history) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                      [SQL Review Rules](/docs/sql-review/review-rules/overview) |  ✔️   |     ✔️     |  ✔️  |            |           |
|              [Schema Synchronization](/docs/change-database/synchronize-schema) |  ✔️   |     ✔️     |      |            |           |
|                            [Schema Editor](/docs/change-database/schema-editor) |  ✔️   |            |      |            |           |
| [Online Schema Change](/docs/change-database/online-schema-migration-for-mysql) |  ✔️   |            |      |            |           |

### SQL Editor

|                                                 Feature | MySQL | PostgreSQL | TiDB | ClickHouse | Snowflake |
| ------------------------------------------------------: | :---: | :--------: | :--: | :--------: | :-------: |
|              [Query Mode](/docs/sql-editor/run-queries) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|               [Admin Mode](/docs/sql-editor/admin-mode) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
| [Sheet Management](/docs/sql-editor/manage-sql-scripts) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|   [Data Anonymization](/docs/sql-editor/anonymize-data) |  ✔️   |            |      |            |           |

### Security

|                                                                 Feature | MySQL | PostgreSQL | TiDB | ClickHouse | Snowflake |
| ----------------------------------------------------------------------: | :---: | :--------: | :--: | :--------: | :-------: |
|                            [RBAC](/docs/concepts/roles-and-permissions) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
| [Database Access Control](/docs/administration/database-access-control) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                             [Audit Log](/docs/administration/audit-log) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |

### Disaster Recovery

|                                                                                   Feature | MySQL | PostgreSQL | TiDB | ClickHouse | Snowflake |
| ----------------------------------------------------------------------------------------: | :---: | :--------: | :--: | :--------: | :-------: |
|      [Local Backup and Restore](/docs/disaster-recovery/backup-restore-database/overview) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|              [Cloud Backup](/docs/disaster-recovery/backup-restore-database/cloud-backup) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
| [Point-in-time Recovery (PITR)](/docs/disaster-recovery/point-in-time-recovery-for-mysql) |  ✔️   |            |      |            |           |

### Anomaly Detection

|                                                                                   Feature | MySQL | PostgreSQL | TiDB | ClickHouse | Snowflake |
| ----------------------------------------------------------------------------------------: | :---: | :--------: | :--: | :--------: | :-------: |
|                                [Drift Detection](/docs/anomaly-detection/drift-detection) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
| [Backup Policy Violation](/docs/administration/environment-policy/backup-schedule-policy) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                  [Backup Missing](/docs/disaster-recovery/backup-restore-database/backup) |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
|                                                               Database Connection Failure |  ✔️   |     ✔️     |  ✔️  |     ✔️     |    ✔️     |
