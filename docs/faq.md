---
title: FAQ
order: 90000
---

# FAQ

## Why my bytebase with docker won't start?

### Using [Colima](https://github.com/abiosoft/colima):

Due to the vm mechanism of colima, you need to use the mount line selection when starting colima likes below:

```bash
$ mkdir ~/volumes
$ colima start --mount ~/volumes:w
$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 8080:8080 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.3 --data /var/opt/bytebase --host http://localhost --port 8080
```

## How to reach us?

Bytebase is open sourced on [GitHub](https://github.com/bytebase/bytebase/)

- 🐞 Report bug to [GitHub issues](https://github.com/bytebase/bytebase/issues).
- 💡 Request feature to [GitHub discussions](https://github.com/bytebase/bytebase/discussions).
- 🤠 Follow us on [@Bytebase](https://twitter.com/bytebase)
- 📧 Email us at [support@bytebase.com](mailto:support@bytebase.com)

## Which database engines are supported?

Bytebase currently supports [MySQL](https://www.mysql.com), [PostgreSQL](https://www.postgresql.org), [TiDB](https://pingcap.com), [ClickHouse](https://clickhouse.com) and [Snowflake](https://www.snowflake.com). We may add other open source databases in the future. On the other hand, we do not plan to support any commercial databases such as Oracle, SQL Server.

## Which versions of each database engine are supported?

Bytebase officially supports the following major versions for each supported database engine

- MySQL - 8.0 and 5.7
- PostgreSQL - 12.0, 13.0, 14.0
- TiDB - 5.0
- Snowflake
- ClickHouse - 21.0

Bytebase usually works fine with older database versions, we just won't support features specific to those older versions.

## Which version control systems (VCS) and providers are supported?

Bytebase only supports Git based VCS. It currently supports GitLab Enterprise Edition (EE) and Community Edition (CE), we plan to support more Git providers roughly in the following order:

1. GitHub Enterprise
2. GitLab.com
3. GitHub.com

## System requirements

Bytebase is lightweight and has no external dependency. For normal workload, it consumes 10MB \~ 20MB memory and can run on the lowest tier machine from any cloud provider.

## How do you make money?

We offer a free version and [paid plan](../pricing).
