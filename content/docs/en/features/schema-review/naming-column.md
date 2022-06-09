---
title: Column Naming Convention
---

The unified naming convention has become the de facto standard recognized by developers. And the same applies to database. Bytebase provides this rule to unified column naming convention.

## About convention format

`Column Naming Convention` uses [regular expression](https://en.wikipedia.org/wiki/Regular_expression) as format.

### Some useful format
| Name | Regular Expression |
|------|--------------------|
|snake_lower_case|`^[a-z]+(_[a-z]+)*$`|
|CamelCase|`^([A-Z][a-z]*)+$`|
|lowerCamelCase|`^[a-z]+([A-Z][a-z]*)*$`|
|kebab-case|`^[a-z]+(-[a-z]+)*$`|

![schema-review-naming-column](/static/docs-assets/schema-review-naming-column.png)

## How the rule works

Bytebase checks that all column names in DDL conform to naming conventions.

Specifically, Bytebase checks:
- `CREATE TABLE` statements
- `ALTER TABLE RENAME COLUMN` statements
- `ALTER TABLE ADD COLUMNS` statements
- `ALTER TABLE CHANGE COLUMN` statements

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.