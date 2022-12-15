---
title: LGTM check
---

You can leverage LGTM check if you want multi-stage approval.

The LGTM check requires a "LGTM" comment from project members or owners depending on the setting.
A task can only be approved if there is a "LGTM" comment from the designated person (project member or owner).

## How to use

The LGTM setting is in the project setting page.

![the location of the lgtm setting](/static/docs/change-database/change-workflow/lgtm/setting.png)

The LGTM check takes effect if the [approval policy](/docs/administration/environment-policy/approval-policy) is "Require manual approval".

The LGTM check fails if there isn't a valid LGTM comment, and therefore the task cannot be approved.

![the issue page without lgtm](/static/docs/change-database/change-workflow/lgtm/no-lgtm.png)

The project member or owner clicks the LGTM button in the comment area to send a "LGTM" comment.

![the position of the lgtm button](/static/docs/change-database/change-workflow/lgtm/position.png)

The LGTM check passes if there is a "LGTM" comment from the required persons.

![the issue page with lgtm](/static/docs/change-database/change-workflow/lgtm/has-lgtm.png)
