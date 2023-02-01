---
title: Configure External PostgreSQL
---

By default, Bytebase bundles an embedded PostgreSQL instance for storing its own metadata. The metadata is stored under the [--data](/docs/reference/command-line#--data-directory) directory.

Alternatively, you can supply [--pg](/docs/reference/command-line#--pg-string) or pass PG_URL environment variable to store these metadata in an external PostgreSQL database.

## Prerequisites

1. PostgreSQL 14 or above.
1. All privileges on the [database object](https://www.postgresql.org/docs/current/sql-grant.html) including:
   - SELECT
   - INSERT
   - UPDATE
   - DELETE
   - TRUNCATE
   - REFERENCES
   - TRIGGER
   - CREATE
   - CONNECT
   - TEMPORARY
   - EXECUTE
   - USAGE

## --pg connection string

<hint-block type="info">

Alternatively, you can also pass PG_URL environment variable.

</hint-block>

Supported format:

- _postgresql://\<\<user>>:\<\<secret>>@\<\<host>>:\<\<port>>/\<\<dbname>\>_

- _postgresql://\<\<user>>:\<\<secret>>@\<\<host>>:\<\<port>>/\<\<dbname>>?sslrootcert=\<\<root.pem>\>_

Example:

- _postgresql://bytebase:z\*3kd2@example.com:5432/meta_
- _postgresql://bytebase:z\*3kd2@example.com:5432/meta?sslrootcert=root.pem_

### Notes

- `user` must be specified.
- `dbname` must be specified and must be created in advance. The connecting `user` must have all the database privileges mentioned above.
