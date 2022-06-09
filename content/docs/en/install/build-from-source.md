---
title: Build from Source
---

## Prerequisite

1. Install [pnpm](https://pnpm.io/installation), Bytebase requires Node.js >=17.0.
2. Install [Go](https://golang.org/dl/), Bytebaes requires Go >= 1.16

## Environment Setup

It's recommended to run Bytebase application as non-root user for security reason. If you don't have other non-root users on the system, you can follow the following steps to setup one, e.g. user `bytebase`.

```bash
groupadd bytebase && useradd -g bb bytebase
```

```bash
sudo su bytebase
```

## Build

Download [source code](https://github.com/bytebase/bytebase) from GitHub, then go to the source root directory

<hint-block type="info">

If you want to build from a specific release, then find out the release tag from our [release](https://github.com/bytebase/bytebase/releases) page, and switch to that tag such as 1.1.1:

</hint-block>

```bash
git checkout tags/1.1.1
```

Build the source

```bash
scripts/build.sh [<<out_directory>>]
```

If `out_directory`is not specified, the default directory is `./bytebase-build`

Suppose you run `scripts/build.sh foo` After build completes, run:

```bash
foo/bytebase --host http://localhost --port 8080
```

(check [Server Startup Options](/docs/reference/command-line) for other startup options)

You should see something like this in the console:

```bash
-----Config BEGIN-----
mode=release
host=http://localhost
port=8080
dsn=file:/var/opt/bytebase/bytebase.db
seedDir=seed/release
readonly=false
demo=false
debug=false
-----Config END-------
2021-07-07T16:56:02.812Z        INFO    store/sqlite.go:213     Apply database migration if needed...
2021-07-07T16:56:02.821Z        INFO    store/sqlite.go:220     Current schema version before migration: 1.1
2021-07-07T16:56:02.821Z        INFO    store/sqlite.go:247     Skip this migration file: migration/10001__init_schema.sql. The corresponding migration version 1.1 has already been applied.
2021-07-07T16:56:02.828Z        INFO    store/sqlite.go:255     Current schema version after migration: 1.1
2021-07-07T16:56:02.828Z        INFO    store/sqlite.go:263     Completed database migration.

██████╗ ██╗   ██╗████████╗███████╗██████╗  █████╗ ███████╗███████╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝ ╚████╔╝    ██║   █████╗  ██████╔╝███████║███████╗█████╗
██╔══██╗  ╚██╔╝     ██║   ██╔══╝  ██╔══██╗██╔══██║╚════██║██╔══╝
██████╔╝   ██║      ██║   ███████╗██████╔╝██║  ██║███████║███████╗
╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

Version 0.1.0 has started at http://localhost.com:8080
```

Change the open file limit if your encounter "error: too many open files".

```bash
ulimit -n 10240
```

Open [http://localhost:8080](http://localhost:8080) in you browser and create the admin account.
