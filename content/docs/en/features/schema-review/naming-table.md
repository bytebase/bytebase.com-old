---
title: Table Naming Convention
---

The unified naming convention has become the de facto standard recognized by developers. And the same applies to database. Bytebase provides this rule to unified table naming convention.

## About convention format

`Table Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) as format.

### Some useful format
| Name | Regular Expression |
|------|--------------------|
|snake_lower_case|`^[a-z]+(_[a-z]+)*$`|
|CamelCase|`^([A-Z][a-z]*)+$`|
|lowerCamelCase|`^[a-z]+([A-Z][a-z]*)*$`|
|kebab-case|`^[a-z]+(-[a-z]+)*$`|

![schema-review-naming-table](/static/docs-assets/schema-review-naming-table.png)

## How the rule works

Bytebase checks that all table names in DDL conform to naming conventions.

Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME TO` statements
- `RENAME TABLE` statements

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.