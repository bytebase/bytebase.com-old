---
title: Introducing Bytebase CLI bb
description: This page contains a getting-started covering frequently used commands, followed by a list of all options and commands.
---

# Introducing Bytebase CLI `bb`

bb CLI is the command-line tool of Bytebase, helping developers integrate MySQL and PostgreSQL schema change into the existing CI/CD workflow. By integrating bb with your existing CI/CD system (GitLab CI, GitHub Actions, etc.), you can bring all best practices of CI/CD to the database.

This page contains a getting-started covering frequently used commands, followed by a list of all options and commands.

## Getting Started

To install bb, just paste the following command in a macOS Terminal or Linux shell prompt:

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bytebase/bytebase/HEAD/scripts/install_bb.sh)"
```

This installs bb in `/usr/local/bin`. Run `bb --help` to check if bb is installed:

```bash
$ bb --help
A database management tool provided by bytebase.com

Usage:
  bb [flags]
  bb [command]

Available Commands:
  dump        Exports schema and data of a database.
  migrate     Migrate the database schema.
  restore     Restores schema and data of a database.

Flags:
  -h, --help   help for bb

Use "bb [command] --help" for more information about a command.
```

To use bb, you need a database. You can start an empty MySQL docker container (make sure the Docker Engine is running):

```bash
$ docker run -d \
  -e MYSQL_ROOT_PASSWORD=passwd \
  -p 3306:3306 \
  --platform=linux/amd64 \
  mysql
```

After the MySQL server has started, you can restore an example database from our quickstart:

```bash
$ curl -O https://raw.githubusercontent.com/bytebase/bytebase/main/quickstart/test_schema/mysql/1_todo.sql
$ bb restore --dsn mysql://root:passwd@localhost:3306 --file 1_todo.sql
```

To view the current schema, you can dump schema to stdout:

```bash
$ bb dump --dsn mysql://root:passwd@localhost:3306/ --schema-only
--
-- Table structure for `author`
--
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'name of the author',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
...
```

Say you want to add a `phone_no` column to the table `author`. This is a so-called **database migration** and you can use `bb migrate` to do so:

```bash
$ bb migrate \
  --dsn mysql://user:passwd@localhost:3306/bytebase_test_todo \
  --command “ALTER TABLE author ADD COLUMN phone_no VARCHAR(15);”
```

After migration, you can dump again to check if the migration has executed successfully:

```bash
$  bb dump --dsn mysql://root:passwd@localhost:3306/bytebase_test_todo --schema-only
--
-- Table structure for `author`
--
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'name of the author',
  `phone_no` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
...
```

## Global Options

### Data Source Name (DSN)

The `--dsn` option is used to provide a data source name (DSN) to connect databases.

All commands that operate databases require this option, including:

- dump
- migrate
- restore

The supported format is

```
driver://username[:password]@host[:port]/[dbName][?param=value&...&param=value]
```

We currently support drivers:

- mysql
- postgresql

The optional params are:

- ssl-ca
- ssl-cert
- ssl-key

Here are a few examples:

- mysql://root@localhost:3306/
- postgresql://$(whoami)@localhost:5432/postgres
- postgresql://user:pass@localhost:5432/dbname?ssl-ca=a&ssl-cert=b&ssl-key=c

## Commands

### migrate

Apply schema migration to database.

Internally, every `migrate` command will be recorded in history. It is recommended that `migrate` is only used for applying schema change so that it is more clear to track schema migration.

#### Flags

`--dsn`

`--file, -f string` file stored the migration script.

`--command, -c string` SQL command that does the migration.

#### Usage

```bash
$ bb migrate --dsn mysql://root@localhost:3306/bytebase_test_todo \
  --command “ALTER TABLE author ADD COLUMN phone_no VARCHAR(15);”
```

Apply SQL command to the given database.

```bash
$ bb migrate --dsn mysql://root@localhost:3306/bytebase_test_todo \
  --file migrate_v1_0_1.sql
```

Apply the migration script to the given database.

### dump

Dump the schema and data of a database.

This command is used to back up a database. When given no output file and only dump schema, it can be used to view the current database schema.

#### Flags

`--dsn`

`--file string` File to store the dump. Output to stdout if unspecified.

`--schema-only` Only dump schema.

#### Usage

```bash
$ bb dump --dsn mysql://root@localhost:3306/ --file backup.sql
```

Dump the schema and data from all databases in localhost:3306 mysql, to `backup.sql`.

```bash
$ bb dump --dsn mysql://root@localhost:3306/bytebase_test_todo --schema-only
```

Print the schema of database `bytebase_test_todo` to stdout.

### restore

Restore the schema and data of a database from a dump file (usually created by `bb dump`).

Internally, `restore` command will NOT be recorded. It is recommended that `restore` is used for restoring from an existing database dump, including both schema and data.

#### Flags

`--dsn`

`--file, -f string` file stored the dumped database.

#### Usage

```bash
$ bb restore --dsn mysql://root@localhost:3306/ \
  --file backup.sql
```

Restore database from backup.sql to the given database.
