---
title: Disallow Foreign Key in Table
---

A foreign key is a logical association of rows between two tables, in a parent-child relationship. A row in a "parent" table may be referenced by one or more rows in a "child" table.

`FOREIGN KEY` constraints are impossible to maintain once your data grows and is split over multiple database servers. This typically happens when you introduce functional partitioning/sharding and/or horizontal sharding.

![schema-review-table-no-fk](/static/docs/schema-review-table-no-fk.webp)

## How the rule works

Bytebase considers this rule to be violated if the SQL tries to:

- `CREATE TABLE` statement with foreign key
- `ALTER TABLE ADD CONSTRAINT FOREIGN KEY` statement

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.
