---
title: Column Naming Convention
---

The unified naming convention is desired by developers. And the same applies to the database space. Bytebase provides this rule to unify the column naming convention.

## About convention format

`Column Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) format.

### Some useful format
| Name | Regular Expression |
|------|--------------------|
|snake_lower_case|`^[a-z]+(_[a-z]+)*$`|
|CamelCase|`^([A-Z][a-z]*)+$`|
|lowerCamelCase|`^[a-z]+([A-Z][a-z]*)*$`|
|kebab-case|`^[a-z]+(-[a-z]+)*$`|

![schema-review-naming-column](/static/docs-assets/schema-review-naming-column.webp)

## How the rule works

Bytebase checks that all column names in DDL conform to naming conventions.

Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME COLUMN` statements
- `ALTER TABLE ADD COLUMNS` statements
- `ALTER TABLE CHANGE COLUMN` statements

## Support database engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.