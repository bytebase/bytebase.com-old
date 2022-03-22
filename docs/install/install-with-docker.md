---
title: Docker (5 seconds)
order: 10100
---

# Docker (5 seconds)

**Latest release version:** [**1.0.1**](https://github.com/bytebase/bytebase/releases/tag/v1.0.1)

<hint-block type="info">
When running on docker, the  --publish {{hostport}}:{{containerport}}  and the ---port flag must be the same. Like the example below, all 3 ports are 5678: --publish 5678:5678 --port 5678

<pre>$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 5678:5678 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.1 --data /var/opt/bytebase --host http://localhost --port 5678</pre>

</hint-block>

## Run on localhost:8080

`$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 8080:8080 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.1 --data /var/opt/bytebase --host http://localhost --port 8080`

Bytebase will then start on http://localhost:8080 and store its data under `~/.bytebase/data` (Check [Server Startup Options](../reference/command-line.md) for other startup options).

Open [http://localhost:8080](http://localhost:8080) in you browser and create the admin account.

<hint-block type="info">
Bytebase has already prepared some sample data. In particular, it has created a Test environment and a Prod environment, each containing a mysql instance. To establish the connection to those instances, one quick way is to <a href="#start-a-local-mysql-server-for-testing">start a MySQL docker instance</a>

</hint-block>

## Run on https://bytebase.example.com

<hint-block type="info">
For production setup, you need to make sure <a href="/docs/reference/command-line#host-less-than-less-than-string-greater-than-greater-than">--host</a>, <a href="/docs/reference/command-line#port-less-than-less-than-number-greater-than-greater-than">--port</a> match exactly to the host:port address where Bytebase supposed to be visited. Please check <a href="/docs/operating/production-setup">Production Setup</a> for more advice.

</hint-block>

`$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 80:80 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.1 --data /var/opt/bytebase --host https://bytebase.example.com --port 80`

## Start a local MySQL server for testing

### Run MySQL inside Docker

<hint-block type="warning">
The setup below is for testing purpose and should NOT be used in production setup. Also the mysql data will be wiped out after the container stops.

</hint-block>

```
docker run --name mysqld --publish 3306:3306 -e MYSQL_ROOT_HOST=172.17.0.1 -e MYSQL_ROOT_PASSWORD=testpwd1 mysql/mysql-server:8.0
```

172.17.0.1 is the default docker gateway IP to allow connection from Bytebase. See the [official MySQL docker doc](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/docker-mysql-more-topics.html#docker_var_mysql-root-host).

<hint-block type="info">
If Bytebase is run by docker, then it will also access the MySQL container via 172.17.0.1. This means you need to set **172.17.0.1 as the host for the configured instance**.

</hint-block>

### Run MySQL without Docker

You need to set **host.docker.internal** as the host for the configured instance.

## Troubleshoot

`$ docker logs bytebase`

Normally you should see something like:

```
-----Config BEGIN-----
mode=release
host=http://example.com
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

Version 0.1.0 has started at http://example.com:8080
```

If Bytebase fails to start, the error message should appear on the console around there.
