---
title: Tenant Database
---

Tenant database describes a collection of databases with identical database schema. Each individual database corresponds to a tenant. Typical scenarios:

- A team may provide a Software as a Service (SaaS) application. It provides a separate instance for each of its customers/tenants, and each tenant has its own database.
- A team may provide multi-region deployments, and each region is a separate instance having its own database.

A tenant can be a SaaS application customer, a region, a game server name and etc. Whenever application wants to make schema changes, it needs to apply the change to all databases across all tenants.

Bytebase can manage the database schema lifecycle for Tenant database. Below shows how Bytebase progresses a schema change for a game company across all its game servers.

![tenant-matrix](/static/docs/tenant-matrix.png)
