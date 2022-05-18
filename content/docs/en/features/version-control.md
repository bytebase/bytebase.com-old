---
title: Version Control (GitOps)
---

"**Version controlled schema**" aka "**Database-as-code**" is a practice to store the database schema in a version control system (VCS) just like how application code is stored. The database schema consists of a bunch of database migration scripts. These scripts usually follow a naming convention to identify the order of their relative execution sequence. After executing all the migration scripts, it will produce an exact copy of the database schema to the corresponding live database. In this model, the migration scripts are the source of truth of the database schema. You can check the reference for a detailed writeup on this topic.

Bytebase supports this version control model to integrate database schema with the VCS. To set it up, please follow

<doc-link-block url="/docs/use-bytebase/vcs-integration/overview" title="VCS Integration"></doc-link-block>

## References

1. [Evolutionary Database Design](https://martinfowler.com/articles/evodb.html)
