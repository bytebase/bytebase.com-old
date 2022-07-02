---
title: System Requirement and Support
---

Before you deploy Bytebase to production, this document shows you some of its current limitation.

## System requirement

Bytebase is lightweight and has no external dependency. For normal workload, it consumes 10MB ~ 20MB memory and can run on the lowest tier machine from any cloud provider.

## Supported database versions

Bytebase officially supports the following major versions for each supported database engine:

- MySQL - 8.0 and 5.7
- PostgreSQL - 12.0, 13.0, 14.0
- TiDB - 5.0
- Snowflake
- ClickHouse - 21.0

Bytebase usually works fine with older database versions, we just won't support features specific to those older versions. We may add other open source databases in the future.

On the other hand, we do not plan to support any commercial databases such as Oracle, SQL Server.

## Supported version control systems (VCS) and providers

Bytebase only supports Git-based VCS. It currently supports 

- GitLab Enterprise Edition (EE)
- Community Edition (CE)

We plan to support more Git providers roughly in the following order:

- GitHub Enterprise
- GitLab.com
- GitHub.com