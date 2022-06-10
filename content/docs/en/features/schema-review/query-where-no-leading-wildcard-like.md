---
title: Disallow Leading % in LIKE
---

Database cannot use an index to match entries when there is a leading wildcard. It can cause serious performance problems because it may scan the entire table.

![schema-review-query-where-no-leading-wildcard-like](/static/docs-assets/schema-review-query-where-no-leading-wildcard-like.png)

## How the rule works

Bytebase considers this rule to be violated if the SQL has leading wildcard LIKE.

## Support instance engine

- MySQL
- TiDB

Support for PostgreSQL is coming soon.