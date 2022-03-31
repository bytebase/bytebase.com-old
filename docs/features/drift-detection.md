---
title: Drift Detection
order: 30600
---

# Drift Detection

Bytebase is supposed to take over applying the database schema changes on behalf of the user. It records the detailed migration history and the before/after schema snapshot for each migration it applies.

A background process periodically compares the recorded latest schema with the actual schema in the targeting database and surface the drift if found. Drift usually happens when user applies out-of-band schema changes (such as hot fix) directly to the database without using Bytebase.

![Detect the drift](/static/docs-assets/schema-drift-bytebase.png)
![Display the drift](/static/docs-assets/schema-drift-gitlab.png)
