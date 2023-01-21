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

[Terraform](https://www.terraform.io/) is an open-source tool that allows you to manage and provision infrastructure using code. It is commonly used for infrastructure as code (IaC) and is known for its ability to work across multiple cloud providers, reusability, versioning, flexibility, and its active community. Terraform providers are plugins that enable Terraform to communicate and manage resources on various cloud platforms such as AWS, Google Cloud, Azure, as well as SaaS vendors like DataDog, MongoDB, Elastic, and etc.

Some Bytebase customers from overseas use Terraform to manage their infrastructure resources, and they want to use it to manage their Bytebase resources such as environments, database instances, and policies. Previously, we offered customers Bytebase Console (a web-based GUI tool) and OpenAPI to create, update and archive Bytebase resources. However, we are excited to reveal our latest feature, Terraform Bytebase Provider, which enables you to manage Bytebase resources through Terraform. This is a great opportunity for you to simplify and streamline your infrastructure management.
Terraform Bytebase Provider

The latest [Terraform Bytebase Provider](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs) allows you to easily manage the following Bytebase resources.

- Environments: They are modeled after different stages in the development pipeline, such as dev, test, and prod.
- Database instances: They are modeled after a single database instance and can be accessed using an address such as host:port.
- Instance roles: It is available for PostgreSQL.
- Policies: They include:
  - Approval: It determines whether database migration tasks in a particular environment are performed automatically or require manual approval before execution.
  - Database backup schedule: It allows you to configure the database backup plan to be weekly, daily, or no backup plan, and also specify the backup data retention duration.
  - SQL review: It enables you to customize SQL lint to check for common issues before execution. Currently, we have 48 SQL review rules for MySQL and 14 rules for PostgreSQL (more rules will come in the future).
  - Sensitive data: It allows you to mark specific table columns as sensitive to anonymize the data.
  - Database access control: It offers the ability to grant developers database access permission.

This is just the beginning, we plan to release more features in the future.

Take the database access control policy as an example; we can grant developers access permission to the database “employee” in the environment “prod”. Currently, developers are not able to query databases using SQL Editor.
![before-terraform](/static/blog/introducing-terraform-bytebase-provider/before-terraform.webp)

The code block below demonstrates how to grant developers access permission to the database "employee" in the environment "prod".
![access-control-code](/static/blog/introducing-terraform-bytebase-provider/access-control-code.webp)

Run `terraform init`, `terraform plan` and `terraform apply` in the terminal. The output is as follows.
![run-terraform](/static/blog/introducing-terraform-bytebase-provider/run-terraform.webp)

After running the Terraform commands, you can check the access permissions via the Bytebase Console, where you will find that developers can execute queries on the database "employee".
![after-terraform](/static/blog/introducing-terraform-bytebase-provider/after-terraform.webp)

## Conclusion

Terraform Bytebase Provider allows you to easily manage environments, database instances, instance roles, and policies in Bytebase. To get started, you can follow this tutorial [Manage databases in Bytebase with Terraform](https://www.bytebase.com/blog/manage-databases-in-bytebase-with-terraform) and try it out by yourself. Additionally, you can find [more examples on GitHub](https://github.com/bytebase/terraform-provider-bytebase/tree/main/examples).

You are welcome to join [our discord](https://discord.gg/H7Ayn5NP) to learn more about database migration management and discuss related topics.
