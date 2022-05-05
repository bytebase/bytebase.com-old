---
title: Use External PostgreSQL Database
---

# Use External PostgreSQL Database

By default, Bytebase bundles an embedded PostgreSQL instance for storing its own metadata. Alternatively, you can supply [--pg](/docs/reference/command-line#--pg-string) to store these metadata in an external PostgreSQL database.

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

Supported format:

- _postgresql://user:secret@host:port/dbname_

- _postgresql://user:secret@host:port/dbname?sslrootcert=root.pem_

Example:

- _postgresql://bytebase:z\*3kd2@example.com:5432/meta_
- _postgresql://bytebase:z\*3kd2@example.com:5432/meta?sslrootcert=root.pem_

### Notes

- `user` must be specified.
- `dbname` must be specified and must be created in advance. The connecting `user` must have all the database privileges mentioned above.
