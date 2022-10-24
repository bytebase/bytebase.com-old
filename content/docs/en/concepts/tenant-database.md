---
title: Tenant Database
---

Tenant databases are the homogeneous databases (with identical schema) in a tenant project, where each individual database corresponds to the combination of a tenant, location and deployment environment.

Typical scenarios of tenant databases are:

- A Software as a Service (SaaS) provider provides separate database instances for each of its customers (aka. tenants) alongside their application deployments.
- An internal platform team provides multi-region database deployments (e.g. US, EU), and have separate database instances in different deployment environments (e.g. Staging, Prod).

It is often desired to apply schema changes to databases across all tenants since these databases are homogeneous, but in a staged rollout fashion (aka. canary deployment) to minimize the risk of breaking all deployments.

Bytebase offers all mentioned capability for tenant databases through [Tenant Database Management](/docs/tenant-database-management). 

Below is an example showing how a schema change rollout to all tenant databases from **Dev** environment all the way to the **Prod** look like in Bytebase.

![tenant-matrix](/static/docs/tenant-matrix.png)
