---
title: Deploy to Production
---
You have tried Bytebase a bit via quick start, now it's time to deploy it to production.

First, check [System Requirement and Support](system-requirement-and-support).

There are three different ways to deploy Bytebase to production:
1. [Docker](install-with-docker)
2. [Install Script](install-script)
3. [Source Code](build-from-source)

By default, Bytebase bundles an embedded PostgreSQL instance for storing its own metadata. However，you can choose to [store it in an external PostgreSQL database](external-postgres).

Bytebase is still under active development, so schema changes are taken place from time to time. If your version upgrade has schema change, read [Perform Upgrade](perform-upgrade).