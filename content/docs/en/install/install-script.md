---
title: Install Script
---

**Latest release version:** [**1.1.1**](https://github.com/bytebase/bytebase/releases/tag/1.1.1)

## Prerequisite

1. Install [curl](https://curl.se/download.html).
2. Install [tar](https://www.gnu.org/software/tar/).

## Install

Using install script to install the latest release version:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bytebase/install/master/install.sh)"
```

If no error occur, you should see something like this in the console:

```plain
OS: Darwin
ARCH: arm64
Password:
Get bytebase latest version: 1.1.1
Downloading tarball into /var/folders/j4/9x356cb9263f2jryv0xs9pnr0000gn/T/tmp.g1C2PJ8U
Start downloading https://github.com/bytebase/bytebase/releases/download/1.1.1/bytebase_1.1.1_Darwin_arm64.tar.gz...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
100 81.3M  100 81.3M    0     0  3972k      0  0:00:20  0:00:20 --:--:-- 5430k
Completed downloading https://github.com/bytebase/bytebase/releases/download/1.1.1/bytebase_1.1.1_Darwin_arm64.tar.gz
Start extracting tarball into /opt/bytebase...
Start installing bytebase and bb 1.1.1
Installed bytebase 1.1.1 to /usr/local/bin
Installed bb 1.1.1 to /usr/local/bin

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

## Troubleshoot

If you encounter any error when you install bytebase by using install script, welcome to open issue on [bytebase/install repository](https://github.com/bytebase/install).
