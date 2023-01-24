---
title: Introducing Terraform Bytebase Provider
author: Candy
published_at: 2023/01/20 13:37:17
feature_image: /static/blog/introducing-terraform-bytebase-provider/cover.webp
tags: Announcement
featured: true
description: With Terraform Bytebase Provider, teams can codify Bytebase resource configurations, including environments, database instances, roles, and policies via Terraform.
---

## Why Terraform

According to a report from [Firefly](https://www.gofirefly.io/), the use of multi-cloud providers is becoming the norm, and more companies are using multiple cloud accounts to simplify their projects or departments. Only 8% of respondents have a single cloud account. In such complex cloud environments, using Infrastructure as Code (IaC) is becoming a strategic imperative, and [Terraform](https://www.terraform.io/) is the most widely used IaC tool for mamaging cloud resources.
![lac-tools](/static/blog/introducing-terraform-bytebase-provider/lac-tools.webp)

Terraform is an open-source tool that allows you to manage and provision infrastructure using code. It is known for its ability to work across multiple cloud providers, reusability, versioning, flexibility, and its active community. [Terraform providers](https://developer.hashicorp.com/terraform/language/providers) are plugins that enable Terraform to communicate and manage resources on various cloud platforms such as AWS, Google Cloud, Azure, as well as SaaS vendors like DataDog, MongoDB, Elastic, and etc.

Some Bytebase customers use Terraform to manage their infrastructure resources, and they want to use it to manage their Bytebase resources such as environments, database instances, and policies. Previously, we offered customers the web-based Bytebase Console and OpenAPI to do that. Today, we are excited to reveal our latest feature, [Terraform Bytebase Provider](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs), which enables you to manage Bytebase resources through Terraform. This is a great opportunity for you to simplify and streamline your database management.

## Terraform Bytebase Provider

The latest Terraform Bytebase Provider allows you to easily manage the following Bytebase resources.

- Environments: They are modeled after different stages in the development pipeline, such as dev, test, and prod.
- Database instances: They are modeled after a single database instance and can be accessed using an address such as host:port.
- Instance roles: At this time, it is only compatible with PostgreSQL. We are working on supporting for MySQL.
- Policies:
  - Approval: It determines whether database migration tasks in a particular environment are performed automatically or require manual approval before execution.
  - Database backup schedule: It allows you to configure the database backup plan to be weekly, daily, or no backup plan, and also specify the backup data retention duration.
  - SQL review: It enables you to customize SQL lint to check for common issues before execution. Currently, we have 48 SQL review rules for MySQL and 14 rules for PostgreSQL (more rules will come in the future).
  - Sensitive data: It allows you to mark specific table columns as sensitive to anonymize the data.
  - Database access control: It offers the ability to grant developers database access permission.

Take the database access control policy as an example; we can grant developers access permission to the database “employee” in the environment “prod”. Currently, developers are not able to query databases using SQL Editor.
![before-terraform](/static/blog/introducing-terraform-bytebase-provider/before-terraform.webp)

The code block below demonstrates how to grant developers access permission to the database "employee" in the environment "prod":
- The first `access_control_all` policy resource defines that by default no database access is allowed in the `prod` environment.
- The second `access_control_database` policy resource defines that database `employee` under the `prod` environment is granted the database access specifically.
![access-control-code](/static/blog/introducing-terraform-bytebase-provider/access-control-code.webp)

Run `terraform init`, `terraform plan` and `terraform apply` in the terminal. The output is as follows.
![run-terraform](/static/blog/introducing-terraform-bytebase-provider/run-terraform.webp)

After running the Terraform commands, you can verify the "access control" configuration via the Bytebase Console, where you will observe the database "employee" listed in the database allowlist.
![after-terraform](/static/blog/introducing-terraform-bytebase-provider/after-terraform.webp)

## Conclusion

Terraform Bytebase Provider allows you to easily manage environments, database instances, instance roles, and policies in Bytebase. To get started, you can follow this tutorial [Manage databases in Bytebase with Terraform](https://www.bytebase.com/blog/manage-databases-in-bytebase-with-terraform) and try it out by yourself. Additionally, you can find [more examples on GitHub](https://github.com/bytebase/terraform-provider-bytebase/tree/main/examples).

You are welcome to join [our discord](https://discord.gg/H7Ayn5NP) to learn more about database migration management and discuss related topics.
