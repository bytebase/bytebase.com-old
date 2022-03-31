---
title: Tenant Database Management
order: 31100
---

# Tenant Database Management

Tenant Database Management allows database administrators to manage **a collection of databases with identical schemas**.

For example, a software company offers medical record storage services for its customers, hospitals. Each hospital is considered as a tenant, and each tenant has to store their patient data in its own database for regulation or privacy purposes. This feature allows updating database schema for all tenants in a simple and consistent way. Other use cases include multi-location databases for supporting highly-available services where each location is a tenant.

Let's take the hospital example to follow the steps below.

## **Labels**

A label is a key-value pair that helps you identify the tenant for a database. The supported label keys are location and tenant currently. Workspace owner needs to predefine label values (tenant names) in the Workspace Label tab.

![](https://lh5.googleusercontent.com/rMDiat5aaHH5Y4W11dyJJ6BaQFBKpgWpN1fe7I6KDa5Lr9KFl8IBvkDxBTN9PfWnUciyFsDPrp4MM2IMXKBbEunyWjfR4OoTA9LwcBci_DnTvrqAcEv17toC9P5V7sztyyhsHtOI)

## **Projects in Tenant Mode**

Project can be created in Tenant Mode which supports tenant database management.

![](https://lh6.googleusercontent.com/eCSBofNQlemoRd1hibP3uFVvxR_KBXx9AxTETaZI5DUhKSxSoZTJYpE96dOrR-dogpQMe01gjrzHyEAaz420fOVtT05Z7BHcA1ZSw19ZF0MS4shA4-y7Sc7TfSis3rRA8CKoXsU5)

## **Deployment Configuration**

You need to define deployment configuration for a project in Tenant Mode before any database is created or transferred from another project. With deployment configuration in the example below, tenants will be deployed in three stages:

1. Staging Stage: all tenants in Staging environment;

2. Prod Stage - canary: tenant hospital1 (label Tenant=hospital1) in Prod environment;

3. Prod Stage: all tenants in Prod environment.

This provides a reliable sequence of updating schema for all tenants.

![](https://lh4.googleusercontent.com/qhiFW7AVlgR1qf6kn8QNtwBEBELrd0Wz3HiTWVbN4uUz5ZzfH_KbSGdUL3LCSVQYGt8urMW4BVn9WuMugzdouN-zlnoxPOnGSuPbfT5xPWQX5wNrBU8SsVN4UdqTcGyn-JmNF5Wv)

## **Databases with tenant labels**

You can create databases with labels in tenant mode projects. The labels come from predefined label keys and values in the Workspace. You can also transfer an existing database from another project if its database name and schema follows the existing tenant pattern.

![](https://lh5.googleusercontent.com/np56A-QL4l2jaCUbjVq7SehWbzyAK9gicnYIUAt_qhOd59galXdtWrfCSa2tereGS5oOyBTGWgGq5kSQ_iRd_IUi9j75A_hy-t35M6qezSy3Kvze2LB16fidknhPOgQ9nOuJcduC)

The project overview tab shows all tenant databases for databases named lab_test. Staging environment has a database for hospital1. There are three databases in the Prod environment for hospital1, hospital2, and hospital3.

![](https://lh5.googleusercontent.com/fZzLjuIq3psIv67snNyZG3cE1KPVolLOG75QYWEZTZimvwCKK3qrscNoH8d43RU99E4RYfNaK9Cs9NhxjeDvZFY_sd75K_6-1xPWzR8wu_gKs0ik0_okKPaOmh69LqqXb9jnEl3I)

## **Schema Update for tenant databases**

There is a preview dialog showing the plan of deployment before the schema is altered.

![](https://lh5.googleusercontent.com/ZtI6JsVO19yJTuPDgZWyJrC8ITc9xc-51P198xoY7JaswEEfZ-NwgiypJhJAPyG_585MQGKqOabiAhEqvhxFxqJkJFEW8aSvrj3u4ZJr1X33z6QG5pIdHta6IP670Roi7HElQgSt)

Issue can be created to update schema for all tenants by following the deployment configuration. The database names should be the same or follow the same database name template described in the section below. For example, the first two stages have been completed, and the issue is pending approval for the last stage.

![](https://lh4.googleusercontent.com/gb1GTg9LAA5Y3X6HszmGciNzc7WRlZ-RD92m37QdNkuCaLtAUXh3NwaAewtWfh6tHjtio18BBEpOVtHoAotAUxwHYiyyxpzmKRfsYRzJF4Y_ucetpS26DjIkaOvMs5Wr7Iy40Ic7)

Once the issue is completed, all tenant databases will have the same updated version of schema.

![](https://lh5.googleusercontent.com/sNe3q-fgFlFr8cIMIro7yelBqOrz3jEr2vbcAuMQqeBBhDzKVIH9Ils3-tmsKl_FkQYzPpm5kCwo2xMXyXjzYuQJZqp-VyToP2V8YSd0ZT4qllrYZZi2eEn0V3QE_jP_BhoNWgyu)

## Database Name Template

Typically, all tenant databases should have the same database name and will be placed on different database instances. For some use cases, tenant databases need to have different database names and may be on the same or a fixed number of database instances. Users can define a database name template where the database name should include the tenant name. For example, a database name template can be \{{DB_NAME\}}\_\{{TENANT\}}. The database name for all tenants can be db1_hospital1, db1_hospital2, db1_hospital3 with the same schema. If all tenants need a different collection of databases for other purposes of usage, databases can be created with names of db2_hospital1, db2_hospital2, db2_hospital3.

A project in Tenant Mode can be created with a database name template.

![](https://lh3.googleusercontent.com/Zqyzbns_XSQe-dWRDM_hs7wq4Lj-g0fdBikDDd7gGvqSVUd-GRgizxnv3d_6nMTYl6c2esixJMvCYWKEb0M-ZbDv76m6ve-ZAHSpHOSUDaJvOSE75arc2Agq30Ygt-eKKFkUDH-r)

The name of the database being created will be generated based on a base \{{DB_NAME\}} and the name of a tenant.

![](https://lh3.googleusercontent.com/wydI17rEtQv4wxPTYmIYIs2g44EGj0vMhksXHRU1IRunm7yYymeKphWJvRA00EYgHvMlgNKnjMN5iMfVRBPCd-qrofvJJpkgTcV6l68us2Ncbh9cGfFzpRgBd_UUrE92t9WmnWu_)

The project database overview page will look like in the following.

![](https://lh6.googleusercontent.com/FHWZlkvujYScHmWZqb50VdscniqvgLozVVPYOnYpwHoTjE51KXhlB7Ye5SAGmdFJt2o49T0ddx_-vakku1wIXM4PrwoLcECXKklvab8q1yY_2hk2piElJyysd4fQ1yDfafoZqLP-)
