---
title: Rollback SQL
order: 40102
---

# Rollback SQL

Issues satisfying all following conditions can be rolled back:

- Issue belongs to the project using [UI-based schema change workflow](/docs/concepts/schema-change-workflow#ui-workflow). On the other hand, if [VCS workflow](/docs/concepts/schema-change-workflow#version-control-workflow) is used, the rollback should be initiated from the code change in VCS.
- Issue is in close state, either "Done" or "Cancelled".
- Issue is an alter schema issue.
- There is at least one completed schema change applied to the database in the issue.

If all conditions are met, then Bytebase will display a "Rollback" button.

![An issue applicable to be rolled back](/static/docs-assets/rollback-sql-waiting.png)

After clicking the button, Bytebase will generate a SQL review ticket template based on the original issue info. It will create the stages in the reverse order of the original SQL review issue. The SQL statement and Rollback statement are also flipped from the original issue.

![Generated rollback issue template](/static/docs-assets/rollback-sql-succeed.png)

Once the rollback issue is created, Bytebase will execute it in the same way as a normal SQL review issue.
