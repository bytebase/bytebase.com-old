---
title: Deploy to Production
---

**Latest release version:** [**%%bb_version%%**](https://github.com/bytebase/bytebase/releases/latest)

You have tried Bytebase via [quick start](../quick-start), now it's time to deploy it to production.

First, check [System Requirement and Support](/docs/faq#system-requirements-and-supported-versions).

There are three different ways to deploy Bytebase to production:

1. [Docker](deploy-with-docker)
2. [Deploy to Kubernetes](deploy-to-kubernetes)
3. [One-Liner Installation Script](installation-script)
4. [Build from Source Code](build-from-source-code)

By default, Bytebase bundles an embedded PostgreSQL instance for storing its own metadata. However, you can choose to store the metadata in [an external PostgreSQL database](/docs/get-started/install/external-postgres).
