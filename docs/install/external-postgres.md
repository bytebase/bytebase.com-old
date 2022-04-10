---
title: Use External PostgreSQL Database
order: 10300
---

# Use External PostgreSQL Database

By default, Bytebase bundles an embedded PostgreSQL instance and stores its own metadata there. Alternatively, you can use supply [--pg](/docs/reference/command-line#--pg-string) to use an external PostgreSQL database to store those metadata.

## Prerequisites

1. PostgreSQL 12 or above.
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

Supported format

- _postgresql://user:secret@host:port_

- _postgresql://user:secret@host:port/dbname_

- _postgresql://user:secret@host:port/dbname?sslrootcert=root.pem_

Example:

- postgresql://bytebase:z\*3kd2@example.com:5432
- postgresql://bytebase:z\*3kd2@example.com:5432/meta
- postgresql://bytebase:z\*3kd2@example.com:5432/meta?sslrootcert=root.pem

### Notes

- `user` must be specified.
- `dbname` is optional. If not specified, we will follow the PostgreSQL convention to use the `user` name as the database name.
- The database must be created in advance, and the connecting user must have all the database privileges mentioned above.
