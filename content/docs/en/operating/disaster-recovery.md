---
title: Disaster Recovery
---

## **Periodically snapshot the entire** [**--data**](/docs/reference/command-line#--data-directory) **directory**

<hint-block type="info">

You should periodically backup the entire [--data](/docs/reference/command-line#--data-directory) directory.

</hint-block>

If Bytebase is running and not in the [readonly](/docs/reference/command-line#--readonly) mode, and you want to take the backup, then the underlying data volume must support snapshot feature where the entire directory can take a snapshot at the same time, otherwise it may produce a corrupted backup bundle.
