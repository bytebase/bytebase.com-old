---
title: Bytebase Q1 2023 in Retrospect
author: Tianzhou
published_at: 2023/05/08 18:21:21
feature_image: /static/blog/2023-q1-retrospect/banner.webp
tags: Announcement
featured: true
description: As Q1 2023 comes to an end, let's take a look back at what we've accomplished at Bytebase in the past three months.
---

## 6 Releases - [Changelog](/changelog/)

- Jan 12 - 1.11.0
- Feb 2 - 1.12.0
- Feb 16 - 1.12.1
- Mar 2 - 1.13.0
- Mar 16 - 1.14.0
- Mar 30 - 1.15.0

## Cloud

- Launch Bytebase Cloud at [https://hub.bytebase.com/workspace](https://hub.bytebase.com/workspace)

![_](/static/blog/2023-q1-retrospect/bytebase-cloud.webp)

## New Supported Databases

- Oracle, MongoDB, Redis, Google Cloud Spanner

![_](/static/blog/2023-q1-retrospect/databases.webp)

## New Supported VCS for GitOps workflow

- Bitbucket Cloud

![_](/static/blog/2023-q1-retrospect/bitbucket.webp)

## Database Change Management

- (MySQL & PostgreSQL) Terraform provider support managing instance roles
- (MySQL) State-based migration in GitOps workflow
- (MySQL) Data change rollback

![_](/static/blog/2023-q1-retrospect/sql-rollback.webp)

- (PostgreSQL) UI-based Schema Editor to compose DDL
- Optimize performance for issues with a large number of tasks (up to 200)

## Data Query

- (MySQL & PostgreSQL) Entity Relationship (ER) Diagram to show database schema and their relationships

![_](/static/blog/2023-q1-retrospect/er-diagram.webp)

- Query data using natural language in SQL Editor

![_](/static/blog/2023-q1-retrospect/sqlchat.webp)

## Data Security

- Single Sign-On (SSO) with OAuth 2.0 and OIDC

![_](/static/blog/2023-q1-retrospect/sso.webp)

- Two-Factor Authentication

![_](/static/blog/2023-q1-retrospect/2fa.webp)

- Watermarks to prevent data leak

![_](/static/blog/2023-q1-retrospect/watermark.webp)

- (PostgreSQL) Support anonymizing data

## Data Governance

- Custom approval process based on the risk model

![_](/static/blog/2023-q1-retrospect/custom-approval.webp)

- (PostgreSQL) 34 new SQL review lint rules (48 in total)

![_](/static/blog/2023-q1-retrospect/pg-sql-review.webp)