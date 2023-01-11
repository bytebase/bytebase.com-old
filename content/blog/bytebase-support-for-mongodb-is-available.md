---
title: Bytebase Support for MongoDB is Available
author: Candy
published_at: 2023/01/12 13:37:17
feature_image: /static/blog/bytebase-support-for-mongodb-is-available/cover.webp
tags: Announcement
featured: true
description: Bytebase 1.11.0 brings MongoDB support. This blog post walks you through managing MongoDB with Bytebase. 
---

## Why MongoDB

MongoDB is a popular document-oriented database with the scalability and flexibility that you want with the querying and indexing that you need. MongoDB stores data records as documents (specifically BSON documents) which are gathered together in collections. A database stores one or more collections of documents.

As the [DB-Engines](https://db-engines.com/en/ranking) ranking shows, MongoDB is the only NoSQL database in the top 5.
![db-rank-3](/static/blog/bytebase-support-for-mongodb-is-available/db-rank-3.webp)

What’s more, our customers say that they wanted to use Bytebase to manage MongoDB, just like they manage database changes to MySQL and PostgreSQL with Bytebase. As you know, Bytebase constantly listens to customers to deliver what they need. So, we support connecting to MongoDB and managing their database changes.

## Manage MongoDB Changes

With [Bytebase 1.11.0](https://www.bytebase.com/changelog/bytebase-1-11-0), you can add an instance to connect to a MongoDB deployment, then you can: 

- Create an issue to create, update and delete documents in UI workflow and GitOps workflow. See the screenshot below to insert documents into the collection “student”.
![insert-doc](/static/blog/bytebase-support-for-mongodb-is-available/insert-doc.webp)

- Explore the migration history in the database details page.
![migration-his](/static/blog/bytebase-support-for-mongodb-is-available/migration-his.webp)

- Run mongosh commands in SQL Editor admin mode.
![admin-mode](/static/blog/bytebase-support-for-mongodb-is-available/admin-mode.webp)

## Try MongoDB Yourself

Bytebase supports MongoDB 4.0, 5.0, and 6.0. Please try it out and find that it's missing something or stumbled upon a bug,  do not hesitate to let us know. We invite you to join our [discord](https://discord.gg/Fac9nmZ95j)) where you can discuss all things Bytebase, share your feedback, and get help from the community.