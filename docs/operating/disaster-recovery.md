---
title: Disaster Recovery
order: 60200
---

# Disaster Recovery

## **Periodically snapshot the entire** [**--data**](/docs/reference/command-line#data-less-than-less-than-directory-greater-than-greater-than) **directory**

Bytebase stores its own data into a [SQLite](http://sqlite.com) file called `bytebase.db`under the [--data](/docs/reference/command-line#data-less-than-less-than-directory-greater-than-greater-than) directory. Besides the main data file, SQLite also creates 2 additional files: `bytebase.db-shm` for managing share memory and `bytebase.db-wal` for write ahead logging.

You should just periodically backup the entire [--data](/docs/reference/command-line#data-less-than-less-than-directory-greater-than-greater-than) directory. If you want to backup the data when Bytebase is running and is NOT running with [--readonly](/docs/reference/command-line#readonly), then the underlying data volume must support snapshot feature where the entire directory can take a snapshot at the same time, otherwise it may produce a corrupted backup file.

Another option is to use [Litestream](https://litestream.io) to continuously stream SQLite changes to AWS S3, Azure Blob Storage, Google Cloud Storage, SFTP, or NFS.
