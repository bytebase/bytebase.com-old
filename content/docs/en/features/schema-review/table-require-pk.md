---
title: Require the Table to Have Primary Key
---

In almost all cases, each table needs a primary key.

In MySQL, [the InnoDB storage engine always creates a primary key](https://dev.mysql.com/doc/refman/8.0/en/innodb-index-types.html) if you didn't specify it explicitly or didn't create an unique key, thus making an extra column you don't have access to.

## How the rule works

Bytebase considers this rule to be violated if the SQL try to create a no primary key table or drop the primary key. If SQL drops all tables in primary key, Bytebase also considers that this SQL drops the primary key.

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.