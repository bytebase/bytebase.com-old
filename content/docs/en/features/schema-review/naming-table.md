---
title: Table Naming Convention
---

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the table naming convention.

## About convention format

`Table Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) as the format.

### Some typical format
| Name | Regular Expression |
|------|--------------------|
|snake_lower_case|`^[a-z]+(_[a-z]+)*$`|
|CamelCase|`^([A-Z][a-z]*)+$`|
|lowerCamelCase|`^[a-z]+([A-Z][a-z]*)*$`|
|kebab-case|`^[a-z]+(-[a-z]+)*$`|

![schema-review-naming-table](/static/docs-assets/schema-review-naming-table.webp)

## How the rule works

Bytebase checks that all table names in DDL conform to the naming conventions.

Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME TO` statements
- `RENAME TABLE` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.