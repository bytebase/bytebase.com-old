---
title: How schema sync works in Bytebase
author: Zipeng
published_at: 2022/11/27 15:40:00
feature_image: /static/blog/how-schema-sync-work/feature.webp
tags: Education
description: Technical contents of Bytebase sync schema for MySQL.
---

## What is schema synchronization?

Schema synchronization can calculate the difference between two databases and give the SQLs, which can migrate to let the schema be the same as the destination database. People do not need to write the differences by hand; the machine does it.

## Overview

Bytebase has supported MySQL schema synchronization since v1.8.0. The data pipeline for this module in Bytebase is shown as follows.

![schema-diff-data-flow](/static/blog/how-schema-sync-work/schema-diff-data-flow.webp)

## Schema Diff Engine

### SQL AST

Bytebase can dump the database schema and process them into [abstract syntax tree (AST)](https://en.m.wikipedia.org/wiki/Abstract_syntax_tree) via a parser.

![SQL-AST](/static/blog/how-schema-sync-work/sql-ast.webp)

### Diff on SQL AST

We can get object properties in AST. Compare two corresponding entities (which may not exist). The following chart shows a simple example:

![diff-on-sql-ast](/static/blog/how-schema-sync-work/diff-on-sql-ast.webp)

### Safe Order

Objects and operations in a database have dependencies, such as the need to ensure that a table exists before adding a column. The following subsections show how Bytebase handles these dependencies.

#### Dependencies between different objects

There are many dependencies between database objects, like constraints depending on indices and columns, and columns depending on the table. We need to deal with them according to the topological order. The adding order must follow  the below list, and deleting order should follow the reverse order:

1. Table
2. Column
3. View
4. Index
5. Constraint

Function, trigger, and procedure do not validate at creation time, so we can create them anywhere after deleting them.

#### Dependencies between different operation types

Also, we should focus on the dependencies between operation types. The below list shows the ordering:

1. Additions for new nodes, like adding a new column.
2. Updates for in-place node updates like changing an existing table option.
3. Deletions for destructive node updates. Because we cannot update some nodes in- place like indexes, we should drop the original one and create the new one instead.
4. Additions for destructive node updates.
5. Deletions for deleted nodes.

This sequence is correct in most cases.

### Deparse

Now, we get a lot of ASTs. Let’s convert them to SQLs.

### Recap

1. Convert SQLs to ASTs.
2. Compare the ASTs.
3. Adjust diff result orders.
4. Convert diff result to SQLs.

## Learn more

You can visit [Bytebase marketing site](https://www.bytebase.com/docs/change-database/synchronize-schema) to learn more about using synchronizing schema.
If you find this article helpful, you might also be interested in our product [Bytebase](https://bytebase.com/), a Database CI/CD tool for DevOps teams, built for Developers and DBAs, which is the only Database CI/CD product included by [CNCF Landscape](https://landscape.cncf.io/?selected=bytebase).