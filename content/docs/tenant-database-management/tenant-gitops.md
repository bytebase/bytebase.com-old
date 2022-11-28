---
title: Tenant GitOps
---

To practice GitOps with a [tenant project](/docs/tenant-database-management/tenant-project), you need to enable the [VCS Integration](/docs/vcs-integration/overview) for your selected project, then use the VCS repository instead of our UI to organize and propose schema and data changes.

## Migration scripts

Migration scripts are stored in the VCS repository for a GitOps-enabled tenant project, and use the file path to provide important migration information, including environment, database, version, type, and description. These information are captured through the [**File path template**](/docs/vcs-integration/name-and-organize-schema-files#file-path-template).

### Use SQL files

Typically, SQL files are used as migration scripts for both schema (DDL) and data (DML) changes.

For example, to add a new table in the `Staging` envrionment for the database `store` using the default **File path template** (`{{ENV_NAME}}/{{DB_NAME}}##{{VERSION}}##{{TYPE}}##{{DESCRIPTION}}.sql`), the file path of the SQL file would look like `bytebase/Staging/store##0001##ddl##add-company-table.sql` with the following content:

```sql
CREATE TABLE company (
  id INT PRIMARY KEY     NOT NULL,
  name           TEXT    NOT NULL,
  address        CHAR(50)
);
```

Where `bytebase/` is the **Base directory**, depending on [your configuration](/docs/vcs-integration/enable-version-control-workflow#step-3---configure-deploy).

### Use YAML manifest

<hint-block type="warning">

1. This feature is currently experimental, behaviors are subject to change, please only use with guidance from our technical support.
1. The **File path template** must use `.sql` as the file extension for migration scripts.
1. Only data change (DML) is supported.

</hint-block>

Using SQL files as migration scripts has the limitation of only being able to target a single database, to make a data change across an arbitrary set of databases, you can use a YAML manifest without any configuration change on the UI.

A YAML manifest follows the same file path convention as defined by the **File path template** but using `.yml` instead of `.sql` as the file extension:

```diff
-bytebase/Staging/store##0003##dml##insert-companies.sql
+bytebase/Staging/store##0003##dml##insert-companies.yml
```

Below is the file content for inserting a new row to the database `supermarket`:

```yml
databases:
  - name: supermarket
statement: |
  INSERT INTO company (id, name, address) VALUES (1, 'Bytebase', '1 DevOps street');
```

Please be noted that the database name in the file path (`store`) is now completely ignored.

Both SQL files and YAML manifests can co-exist and be used on per-migration basis depending on your needs. After several migrations, your VCS repository for storing migration scripts could look like follows:

```
bytebase/Staging/store##0001##ddl##add-company-table.sql
bytebase/Staging/store##0002##ddl##add-payout-table.sql
bytebase/Staging/store##0003##dml##insert-companies.yml
bytebase/Staging/store##0003##ddl##insert-payouts.sql
```
