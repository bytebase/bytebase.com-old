---
title: One-click to Dump SDL Schema
---

Dumping an SDL format of the database schema from Bytebase to GitOps configuration's LATEST file can save time and improve efficiency, as it eliminates the need to manually write the schema. You may use it when initializing the LATEST file or when the LATEST file needs to be updated due to being outdated.

## How to Baseline

1. Click the `Databases` tab in `Project` details page.
![step-1](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-1.webp)
2. Click the database you want to dump.
![step-2](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-2.webp)
3. Click the `Change History` tab in `Database` details page.
![step-3](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-3.webp)
4. Click the `Establish new baseline` button.
![step-4](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-4.webp)
5. Click the `Establish new baseline` button again.
![step-5](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-5.webp)
6. Click the `Create` button to create the baseline issue.
![step-6](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-6.webp)
7. Click the `Approve` button to approve the baseline issue.
![step-7](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-7.webp)
8. Click the `Approve` button to approve the baseline issue again.
![step-8](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-8.webp)
9. When finish, you can click `View commit` to see the Git commit and the baselined LATEST file in the linked repository.
![step-9](/static/docs/change-database/state-based-migration/one-click-to-dum-sdl-schema/step-9.webp)