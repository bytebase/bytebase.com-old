---
title: 👀 What is Bytebase
order: 0
---

# 👀 What is Bytebase

## 👋🏼 Introduction

<hint-block type="info">
Hello, 你好 👋
</hint-block>

![Home dashboard](/docs-assets/overview.png)

![Issue view collaborating schema change](<.gitbook/assets/IssueView (1).png>)

Bytebase is a database schema change and version control management tool for teams. It consists of a web console and a backend. The backend has a migration core to manage database schema changes. It also integrates with VCS to enable version controlled schema management.

![architecture_v1](/docs-assets/architecture_v1.png)

It's open sourced on [GitHub](https://github.com/bytebase/bytebase) under Apache 2.0 license. It currently supports MySQL, PostgreSQL, TiDB, ClickHouse, Snowflake and plans to add more soon. As to the VCS integration, it currently supports self-hosted GitLab EE/CE and plans to add GitHub Enterprise, GitLab.com, GitHub.com later.

Bytebase target audience are **Tech leaders**, **DBAs** and **Developers** who collaborate on day-to-day development tasks around database schema.

## 🎯 Why we build Bytebase

Database schema management is one of the two fundamental tasks to develop any non-trivial applications. It covers the stateful aspect of an application. The counterpart is source code management, which covers the stateless aspect. While it has become a standard practice to use GitLab/GitHub to manage the source code, the tooling around database schema management is a bit lacking.

For schema management, frameworks like Ruby on Rails, Django come with built-in schema migration support, and many teams use tools like Liquibase, Flyway to manage the database schema. These are all viable options. However, we believe all the existing options only deliver a partial solution. e.g.

1. There is no web-based workspace providing UX and workflow optimized for the collaboration among DBAs and Developers. (Like how [Figma](https://figma.com) delivers such an experience to Designers, Product Managers and Developers)
2. There is no cohesive experience to deliver an end-to-end integration between schema management and VCS. (Like how [Terraform](https://www.terraform.io) delivers such an experience for managing cloud infrastructure).
3. All existing tools merely serve as a building block in the large CI pipeline, mostly as a step in the entire CI pipeline. However, the tool itself doesn't gather info from the CI context and catch signals from the database instance to provide a holistic view of the schema state across all development environments, spanning all history timelines.

**In short, unlike code management, there is no equivalent tool like GitLab/GitHub which provides a comprehensive solution to manage database schema, and Bytebase wants to fill this gap.**\
\
It's like [GitLab](https://about.gitlab.com), but for managing database schema related tasks instead of code related tasks.

It's like [Terraform](https://www.terraform.io), where Bytebase integrates with VCS to manage database schema, this is known as [database-as-code](features/version-control.md) which is a similar concept to Terraform's infrastructure-as-code to integrate VCS to manage cloud infrastructure.

## 🎡 Build for developer experience

Bytebase puts developer experience as the top design goal. It's built with a curated tech stack with no external dependency. It comes with built-in [readonly](reference/command-line.md#readonly) and [demo](reference/command-line.md#demo) mode for maintenance and illustration purpose. **After compiling the binary, one can just run `./bytebase` and it will start under 5 seconds on the lowest tier machine from any cloud provider.**&#x20;

![Bytebase tech stack](/docs-assets/stack.svg)
