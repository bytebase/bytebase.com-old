---
title: Error Code for Bytebase Core
---

Error code for bytebase core.

## General

### 0 - OK

Success

### 1 - Internal error

Something unexpected happened, you can open a [GitHub issue](https://github.com/bytebase/bytebase/issues) or [contact us](mailto:support@bytebase.com?subject=Got-internal-error).

## Database

### 101 - Failed to connect database

Please double check your username and password. Also check your firewall setting to make sure your database is network accessible to Bytebase.

### 102 - Database execution error

Failed to execute the statement.

## Migration

### 201 - Missing migration schema

Bytebase can't find the migration schema in the instance. When user successfully adds an instance to Bytebase, Bytebase will try to create a database called "bytebase" in the target instance. This database is the migration schema Bytebase relies on to store the migration history. Without this schema, any schema migration attempt will fail to proceed.

### 202 - Migration already applied

The database has already applied the version.

### 203 - Migration out of order

The version for migration is out of order. The database has already applied a newer version.

### 204 - Migration missing baseline

For version control (VCS) based migration, we require the database to establish a basline first. See [help doc](/docs/features/vcs-integration/create-the-first-baseline-migration) for more details.

### 205 - Migration pending

The database migration is already in progress.

### 206 - Migration failed

The database migration failed.

## Task

### 301 - Task timing not allowed

The task is not ready to run, need to wait until the configured earliest running time.
