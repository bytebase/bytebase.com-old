---
title: How schema sync works in Bytebase
author: Zipeng
published_at: 2022/11/27 15:40:00
feature_image: /static/blog/how-schema-sync-work/feature.webp
tags: Education
description: Technical details about how Bytebase implements schema synchronization for MySQL.
---

## What is Schema Synchronization?

Schema synchronization can calculate the difference between two database schemas, and generate the SQL statements representing the diffs. Thus, people do not need to write the migration SQL statements by hand.

## Overview

Bytebase has supported MySQL schema synchronization since v1.8.0. Below is the workflow.

![schema-diff-data-flow](/static/blog/how-schema-sync-work/schema-diff-data-flow.webp)

## Schema Diff Engine

### SQL AST

Bytebase first dumps the database schema and converts them into [abstract syntax tree (AST)](https://en.m.wikipedia.org/wiki/Abstract_syntax_tree) via the parser.

![SQL-AST](/static/blog/how-schema-sync-work/sql-ast.webp)

### Diff on SQL AST

Bytebase then walks through the ASTs for both database schemas and compares two corresponding entities (which may not exist) from ASTs. The following chart shows a simple example:

![diff-on-sql-ast](/static/blog/how-schema-sync-work/diff-on-sql-ast.webp)

### Handle Dependencies

Objects and operations in a database have dependencies, such as the need to ensure that a table exists before adding a column. The following subsections show how Bytebase handles these dependencies.

#### Dependencies between different objects

There are many dependencies between database objects, like constraints depending on indices and columns, and columns depending on the table. We need to deal with them according to the topological order. The creating order must follow the below list, and the deleting order should follow the reverse order:

1. Table
2. Column
3. View
4. Index
5. Constraint

Function, trigger, and procedure do not validate at creation time, so we can create them anywhere after deleting them.

#### Dependencies between different operation types

Also, we should sort dependencies among operation types. Below lists the ordering:

1. New node creation, like adding a new column.
2. In-place node updates, like changing an existing table definition.
3. Deletion triggered destruction node updates. Because we cannot update some nodes in place like indexes, we should drop the original one and create the new one instead.
4. Addition triggered destructive node updates.
5. Node deletion.

This sequence is correct in most cases.

### Deparse

After, we get the processed ASTs, we convert them back to SQLs.

### Recap

1. Convert SQLs to ASTs.
2. Compare the ASTs.
3. Adjust diff result orders.
4. Convert diff result to SQLs.

## Learn more

You can follow [docs](/docs/change-database/synchronize-schema) to learn more about using synchronizing schema.
If you find this article helpful, you might also be interested in our product [Bytebase](https://bytebase.com/), a Database CI/CD tool for DevOps teams, built for Developers and DBAs, which is the only Database CI/CD product included by [CNCF Landscape](https://landscape.cncf.io/?selected=bytebase).