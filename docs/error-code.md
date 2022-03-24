---
title: Error Code
order: 80000
---

# Error Code

## General

### 0 - OK

Success

### 1 - Internal error

Something unexpected happened, you can open a [GitHub issue](https://github.com/bytebase/bytebase/issues) or [contact us](mailto:support@bytebase.com?subject=Got-internal-error).

## Database

### 101 - Failed to connect database

Please double check your username and password. Also check your firewall setting to make sure your database is network accessible to Bytebase.

### 102 - Statement syntax error

A syntax error in your SQL statement.

### 103 - Statement execution error

Encountered an error when executing the SQL statement. If the error doesn't provide enough context, please open a [GitHub issue](https://github.com/bytebase/bytebase/issues) or [contact us](mailto:support@bytebase.com?subject=Got-internal-error).

## Migration

### 201 - Missing migration schema

Bytebase can't find the migration schema in the instance. When user successfully adds an instance to Bytebase, Bytebase will try to create a database called "bytebase" in the target instance. This database is the migration schema Bytebase relies on to store the migration history. Without this schema, any schema migration attempt will fail to proceed.

### 202 - Statement syntax error

Bytebase observed that the same migration version has already applied to the target database. It could be multiple users creating the new migration changes around the same period and they pick the same version number.

### 203 - Statement execution error

Bytebase observed that a higher migration version has already applied to the target database. This normally suggests user doesn't follow sequential order to apply migration changes or there maybe multiple users creating migration changes around the same period.

### 204 - Missing baseline

For version control (VCS) based migration, we require the database to establish a basline first. See [help doc](/docs/use-bytebase/vcs-integration/create-the-first-baseline-migration) for more details.

## Backward Incompatible Migration

### 10001 - DROP DATABASE

Applications usually specifies database in their connection string. Dropping the database will definitely break those applications.

### 10002 - RENAME TABLE

Renaming the table will break the code referring that table.

### 10003 - DROP TABLE

Dropping the table will break the code referring that table.

### 10004 - RENAME COLUMN

Renaming the column will break the code referring that column.

### 10005 - DROP COLUMN

Dropping the column will break the code referring that column.

### 10006 - ADD PRIMARY KEY

Primary key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.

### 10007 - ADD UNIQUE KEY

Unique key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.

### 10008 - ADD FOREIGN KEY

The existing values on the candidate foreign key and the referenced key might not meet the referential requirements.

### 10009 - ADD CHECK

The existing value might not meet the check requirement.

### 10010 - ALTER CHECK

The existing value might not meet the check requirement.

### 10011 - ALTER COLUMN

Some ALTER COLUMN change is backward incompatible such as changing the data type from VARCHAR to INT. On the other hand, some change is backward compatible such as changing the database type from INT to BIGINT, or adding a comment and etc. User should review the actual statement.
