---
title: How to perform upgrade
---

## Background

Bytebase stores its own metadata in a [Postgres](https://www.postgresql.org/) database. As we add new features, we may also perform database schema changes (i.e. database migrations).

Because Bytebase is still under active development so we are making breaking schema changes from time to time. Usually when Bytebase is not working properly and the console emits logs like `"no such column"`, it's because Bytebase is running against an old incompatible database schema.

`ERROR server/anomaly_scanner.go:131 Failed to retrieve database list {"instance": "MySQL Prod (Follow the "External Link" field to bring up the MySQL server)", "error": "no such column: schema_version"}`

## Use version number to determine whether there is breaking schema changes

Bytebase uses [semantic version](https://semver.org/) in the MAJOR.MINOR.PATCH form. Because we are still in alpha, so the MAJOR version is always 0. When there is a breaking schema change, we will bump up the MINOR version. e.g.

1. 0.10.0 -> 0.11.0 indicates a breaking schema change in the new 0.11.0 version.
1. 0.10.0 -> 0.10.1 indicates non-breaking schema change in the new 0.10.1 version.

You don't need to do anything when the upgrade does NOT involve a breaking schema change. But when there **exists** breaking schema change (MINOR version change), please follow below.

## Perform breaking schema change upgrade

### Option 1 - Reset the data

If you are just testing out Bytebase and don't need the existing data, you can just remove the existing data.

### Running using naked bytebase binary (without docker)

The data is stored under the [--data](https://docs.bytebase.com/reference/command-line#--data-directory) directory. By default, it's the same directory where the bytebase binary runs. Just remove the 3 files:

- bytebase.db
- bytebase.db-shm
- bytebase.db-wal

![Screenshot](https://raw.githubusercontent.com/bytebase/bytebase/main/docs/assets/reset-bytebase-data.png)

### Running inside docker

If you run Bytebase using Docker, say you use the following command like our help doc shows:

`$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 5678:5678 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:0.11.0 --data /var/opt/bytebase --host http://localhost --port 5678`

Then the data is stored under `~/.bytebase/data`. So you just need to run `rm -rf ~/.bytebase/data` and restart Bytebase again.

### Option 2 - Upgrade the existing data

If you have already seriously used Bytebase in production and want to keep the existing data. First **thank you** for being our early adopters, and just email us at support@bytebase.com. We will help you offline to migrate the data to the latest version.
