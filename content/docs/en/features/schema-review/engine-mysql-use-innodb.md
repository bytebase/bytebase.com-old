---
title: Require InnoDB
---

InnoDB is the default storage engine of MySQL 5.5.5+. It provides powerful transaction features. Normally, using InnoDB as the storage engine is the only option. Bytebase provides this rule to catch all scenarios where other engines are attempted.

![schema-review-engine-mysql-use-innodb](/static/docs-assets/schema-review-engine-mysql-use-innodb.webp)

## How the rule works

Bytebase defaults MySQL to use InnoDB storage engine.

So if the following situation occurs, Bytebase considers this rule to be violated:
- Explicitly specify other storage engines when creating tables. e.g. `CREATE TABLE t(id int) ENGINE = CSV` 
- Explicitly specify other storage engines by `ALTER TABLE`. e.g. `ALTER TABLE t ENGINE = CSV`
- Try to set `default_storage_engine` other than InnoDB. e.g. `SET default_storage_engine=CSV`

## Support database engine

- MySQL
