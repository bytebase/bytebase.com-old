---
title: Install Script
---

**Latest release version:** [**1.2.0**](https://github.com/bytebase/bytebase/releases/tag/1.2.0)

## Prerequisite

1. Install [curl](https://curl.se/download.html).
2. Install [tar](https://www.gnu.org/software/tar/).

## Install

Using install script to install the latest release version:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bytebase/install/master/install.sh)"
```

If no error occurs, you should see something like this in the console:

```plain
OS: Darwin
ARCH: arm64
Password:
Get bytebase latest version: x.y.z
Downloading tarball into /var/folders/j4/9x356cb9263f2jryv0xs9pnr0000gn/T/tmp.g1C2PJ8U
Start downloading https://github.com/bytebase/bytebase/releases/download/x.y.z/bytebase_x.y.z_Darwin_arm64.tar.gz...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
100 81.3M  100 81.3M    0     0  3972k      0  0:00:20  0:00:20 --:--:-- 5430k
Completed downloading https://github.com/bytebase/bytebase/releases/download/x.y.z/bytebase_x.y.z_Darwin_arm64.tar.gz
Start extracting tarball into /opt/bytebase...
Start installing bytebase and bb x.y.z
Installed bytebase x.y.z to /usr/local/bin
Installed bb x.y.z to /usr/local/bin

Check the usage with
  bytebase --help
  bb --help
```

## Run

After install completes, run:

```bash
bytebase --host http://localhost --port 8080
```

(check [Server Startup Options](/docs/reference/command-line) for other startup options)

You should see something like this in the console:

```plain
-----Config BEGIN-----
mode=prod
server=http://localhost:8080
datastore=http://localhost:8081
frontend=http://localhost:8080
demoDataDir=
readonly=false
demo=false
debug=false
dataDir=/Users/someone/pgdata
-----Config END-------
2022-06-14T12:07:59.134+0800	INFO	-----Embedded Postgres Config BEGIN-----
2022-06-14T12:07:59.134+0800	INFO	resourceDir=/Users/someone/pgdata/resources

2022-06-14T12:07:59.134+0800	INFO	pgdataDir=/Users/someone/pgdata/pgdata

2022-06-14T12:07:59.134+0800	INFO	-----Embedded Postgres Config END-----
2022-06-14T12:07:59.134+0800	INFO	Preparing embedded PostgreSQL instance...
2022-06-14T12:07:59.134+0800	INFO	Installing Postgres OS "darwin" Arch "arm64"

The files belonging to this database system will be owned by user "someone".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.UTF-8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /Users/someone/pgdata/pgdata ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Asia/Shanghai
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok

initdb: warning: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.

Success. You can now start the database server using:

    /Users/someone/pgdata/resources/postgres-darwin-x86_64/bin/pg_ctl -D /Users/someone/pgdata/pgdata -l logfile start

waiting for server to start....2022-06-14 12:08:04.200 CST [49610] LOG:  starting PostgreSQL 14.2 on x86_64-apple-darwin20.6.0, compiled by Apple clang version 12.0.0 (clang-1200.0.32.29), 64-bit
2022-06-14 12:08:04.200 CST [49610] LOG:  listening on Unix socket "/tmp/.s.PGSQL.8081"
2022-06-14 12:08:04.203 CST [49612] LOG:  database system was shut down at 2022-06-14 12:08:04 CST
2022-06-14 12:08:04.205 CST [49610] LOG:  database system is ready to accept connections
 done
server started
2022-06-14 12:08:04.295 CST [49622] FATAL:  database "bb" does not exist
2022-06-14 12:08:04.296 CST [49623] FATAL:  database "bytebase" does not exist
2022-06-14T12:08:04.302+0800	INFO	Bytebase migration schema not found, creating schema...	{"environment": "", "database": ""}
2022-06-14T12:08:04.342+0800	INFO	Successfully created migration schema.	{"environment": "", "database": ""}
2022-06-14T12:08:04.348+0800	INFO	Apply database migration if needed...
2022-06-14T12:08:04.348+0800	INFO	The database schema has not been setup.
2022-06-14T12:08:04.348+0800	INFO	The prod cutoff schema version: 1.1.2
2022-06-14T12:08:04.946+0800	INFO	Completed database initial migration with version 1.1.2.
2022-06-14T12:08:04.949+0800	INFO	Current schema version after migration: 1.1.2
2022-06-14T12:08:04.956+0800	INFO	get project env	{"env": "prod"}
2022-06-14T12:08:04.956+0800	INFO	load public pem	{"file": "keys/prod.pub.pem"}

██████╗ ██╗   ██╗████████╗███████╗██████╗  █████╗ ███████╗███████╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝ ╚████╔╝    ██║   █████╗  ██████╔╝███████║███████╗█████╗
██╔══██╗  ╚██╔╝     ██║   ██╔══╝  ██╔══██╗██╔══██║╚════██║██╔══╝
██████╔╝   ██║      ██║   ███████╗██████╔╝██║  ██║███████║███████╗
╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

Version x.y.z has started at http://localhost:8080
___________________________________________________________________________________________
```

## Troubleshoot

If you encounter any error when you install bytebase by using install script, welcome to open issue on [bytebase/install repository](https://github.com/bytebase/install).
