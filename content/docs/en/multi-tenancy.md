---
title: Multi-Tenancy
---

Tenant Database Management allows database administrators to manage **a collection of databases with identical schemas**.

For example, a software company offers medical record storage services for its customers, hospitals. Each hospital is considered as a tenant, and each tenant has to store their patient data in its own database for regulation or privacy purposes. This feature allows updating database schema for all tenants in a simple and consistent way. Other use cases include multi-location databases for supporting highly-available services where each location is a tenant.

Let's take the hospital example to follow the steps below.

## **Labels**

A label is a key-value pair that helps you identify the tenant for a database. The supported label keys are location and tenant currently. Workspace owner needs to predefine label values (tenant names) in the Workspace Label tab.

![Tenant Labels](/static/docs/tntdbmngmt-tenant-labels.png)

## **Projects in Tenant Mode**

Project can be created in Tenant Mode which supports tenant database management.

![Create Project in Tenant Mode](/static/docs/tntdbmngmt-create-project-in-tenant-mode.png)

## **Deployment Configuration**

You need to define deployment configuration for a project in Tenant Mode before any database is created or transferred from another project. With deployment configuration in the example below, tenants will be deployed in three stages:

1. Staging Stage: all tenants in Staging environment;

2. Prod Stage - canary: tenant hospital1 (label Tenant=hospital1) in Prod environment;

3. Prod Stage: all tenants in Prod environment.

This provides a reliable sequence of updating schema for all tenants.

![Deployment Config](/static/docs/tntdbmngmt-deployment-config.png)

## **Databases with tenant labels**

You can create databases with labels in tenant mode projects. The labels come from predefined label keys and values in the Workspace. You can also transfer an existing database from another project if its database name and schema follows the existing tenant pattern.

![Create Database with Tenant Label](/static/docs/tntdbmngmt-create-database-with-tenant-label.png)

The project overview tab shows all tenant databases for databases named lab_test. Staging environment has a database for hospital1. There are three databases in the Prod environment for hospital1, hospital2, and hospital3.

![Tenant Databases](/static/docs/tntdbmngmt-tenant-databases.png)

## **Schema Update for tenant databases**

There is a preview dialog showing the plan of deployment before the schema is altered.

![Alter Schema](/static/docs/tntdbmngmt-alter-schema.png)

Issue can be created to update schema for all tenants by following the deployment configuration. The database names should be the same or follow the same database name template described in the section below. For example, the first two stages have been completed, and the issue is pending approval for the last stage.

![Issue Alter Schema](/static/docs/tntdbmngmt-issue-alter-schema.png)

Once the issue is completed, all tenant databases will have the same updated version of schema.

![After Issue Complete](/static/docs/tntdbmngmt-after-issue-complete.png)

## Database Name Template

Typically, all tenant databases should have the same database name and will be placed on different database instances. For some use cases, tenant databases need to have different database names and may be on the same or a fixed number of database instances. Users can define a database name template where the database name should include the tenant name. For example, a database name template can be \{{DB_NAME\}}\_\{{TENANT\}}. The database name for all tenants can be db1_hospital1, db1_hospital2, db1_hospital3 with the same schema. If all tenants need a different collection of databases for other purposes of usage, databases can be created with names of db2_hospital1, db2_hospital2, db2_hospital3.

A project in Tenant Mode can be created with a database name template.

![Create Project with Template](/static/docs/tntdbmngmt-create-project-with-template.png)

The name of the database being created will be generated based on a base \{{DB_NAME\}} and the name of a tenant.

![Create Database](/static/docs/tntdbmngmt-create-database-with-template.png)

The project database overview page will look like in the following.

![Project Overview](/static/docs/tntdbmngmt-project-overview.png)
