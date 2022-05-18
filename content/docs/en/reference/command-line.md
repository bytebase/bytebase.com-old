---
title: Server Startup Options
---

The "help" command prints all applicable options

```bash
./bytebase help
```

And the output will look like this:

```plain
Bytebase is a database schema change and version control tool

Usage:
  bytebase [flags]
  bytebase [command]

Available Commands:
  completion  generate the autocompletion script for the specified shell
  help        Help about any command
  version     Print the version number of Bytebase

Flags:
      --data string   directory where Bytebase stores data. If relative path is
                      supplied, then the path is relative to the directory where
                      bytebase is under (default ".")
      --debug         whether to enable debug level logging
      --demo          whether to run using demo data
  -h, --help          help for bytebase
      --host string   host where Bytebase is accessed from, must start with
                      http:// or https://. This is used by Bytebase to create the
                      webhook callback endpoint for VCS integration (default
                      "https://localhost")
      --pg string     optional external PostgreSQL instance connection url; for
                      example postgresql://user:secret@masterhost:5432/dbname?sslrootcert=cert
      --port int      port where Bytebase is accessed from. This is also used by
                      Bytebase to create the webhook callback endpoint for VCS
                      integration (default 80)
      --readonly      whether to run in read-only mode
```

## --data <\<directory>>

default: **.**

The directory where Bytebase stores its own data. The directory must exist beforehand, otherwise Bytebase will fail to start. If <\<directory>> is a relative path, then it's relative to the directory where the bytebase binary runs.

## --debug

default: **false**

If specified, Bytebase will emit more logs, this is only used when troubleshooting Bytebase issues.

## --demo

default: **false**

If specified, Bytebase will load the demo data instead of the real data. The data is the same used by [https://demo.bytebase.com](https://demo.bytebase.com). This is a quick way to test the product yourself or demonstrate it to your peers. When Bytebase is started with --demo, it stores the data in a separate file, which means the demo data and real data never interferes with each other.

## --host <\<string>>

default: **http://localhost**

Must start with http:// or https://. Together with --port, the **host:port** should be the address your user visiting Bytebase. It's also used by Bytebase to create the webhook callback endpoint for VCS integration.

<hint-block type="warning">

Because --host is part of the webhook callback endpoint. If the same Bytebase instance is brought up with a different --host, the webhook for the VCS integration created before will likely have a stale callback endpoint.

</hint-block>

## --pg <\<string>>

default: ""

Optional external PostgreSQL instance connection url. If specified, Bytebase will store its own metadata there. Check [setup guide](/docs/install/external-postgres) for details.

## --port <\<number>>

default: **80**

The port where Bytebase is running. See --host for more info.

## --readonly

default: **false**

If specified, Bytebase will run in **read-only** mode. This mode is mostly useful when you want to schedule a maintenance window or enforce a deployment freeze.

You can also enable --demo and --readonly together to have a long running demo instance without worrying about the data being changed accidentally (this is how [https://demo.bytebase.com](https://demo.bytebase.com) is configured).

<hint-block type="info">

Whenever you download a new Bytebase version, first time you should always start it **without** --readonly so that Bytebase can apply its own schema upgrade if needed.

</hint-block>
