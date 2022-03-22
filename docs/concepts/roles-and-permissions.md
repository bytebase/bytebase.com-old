---
title: Roles and Permissions
order: 20200
---

# Roles and Permissions

Bytebase has two disjoint set of roles:

1. Workspace roles: `Owner`**,** `DBA`**,** `Developer`
2. Project roles: `Owner`**,** `Developer`

> Workspace role and project role are **disjoint**, which means a Workspace Owner does not automatically assume a Project Owner. One must be granted a separate Project Owner role in order to obtain project specific permissions.&#x20;
>
> **Except** there is a break-glass rule, the Workspace Owner can also manage Project Role. You may wonder does it defeat the purpose of having disjoint workspace and project roles? We design this way because for most of the time, the Workspace Owner does not need to deal with any particular project, so it's prudent to limit the permissions to prevent mistakes. On the other hand, it may happen the Project needs to perform emergent admin operations and all existing Project Owners are not available, then the Workspace Owner can jump in.

## Workspace roles

By default, the first registered user is granted the `Owner` role, all following registered users are granted `Developer` role. `Owner` can update any user's role later.

| Workspace level permission                                       | Developer | DBA | Owner |
| ---------------------------------------------------------------- | --------- | --- | ----- |
| Change own name and password                                     | ✔️        | ✔️  | ✔️    |
| View all members                                                 | ✔️        | ✔️  | ✔️    |
| View all environments                                            | ✔️        | ✔️  | ✔️    |
| View all instances                                               | ✔️        | ✔️  | ✔️    |
| Create database                                                  | ✔️        | ✔️  | ✔️    |
| View all databases                                               | ✔️        | ✔️  | ✔️    |
| View all projects                                                | ✔️        | ✔️  | ✔️    |
| Create project                                                   | ✔️        | ✔️  | ✔️    |
| View all issues                                                  | ✔️        | ✔️  | ✔️    |
| Add comment to all issues                                        | ✔️        | ✔️  | ✔️    |
| Subscribe to all issues                                          | ✔️        | ✔️  | ✔️    |
| Alter schema                                                     | ✔️        | ✔️  | ✔️    |
| Add environment                                                  |           | ✔️  | ✔️    |
| Edit environment                                                 |           | ✔️  | ✔️    |
| Reorder environment                                              |           | ✔️  | ✔️    |
| Archive environment                                              |           | ✔️  | ✔️    |
| Add instance                                                     |           | ✔️  | ✔️    |
| Edit instance                                                    |           | ✔️  | ✔️    |
| Archive instance                                                 |           | ✔️  | ✔️    |
| Sync instance schema                                             |           | ✔️  | ✔️    |
| Re-assign issue                                                  |           | ✔️  | ✔️    |
| Become issue assignee                                            |           | ✔️  | ✔️    |
| Add new user                                                     |           |     | ✔️    |
| Change any user's role                                           |           |     | ✔️    |
| De-activate/re-activate user                                     |           |     | ✔️    |
| Change any user's name and password                              |           |     | ✔️    |
| Edit [external SQL console](../settings/external-sql-console.md) |           |     | ✔️    |
| Manage version control system (VCS) provider                     |           |     | ✔️    |

## Project roles

Any user can create project. By default, the project creator is granted the `Project Owner` role.

> Project Developer does not have any additional project level permissions. It's for the sidebar to list the projects where the user is a member, as well as the databases belonged to those projects.

| Project level permission              | Project Developer | Project Owner | Workspace Owner |
| ------------------------------------- | ----------------- | ------------- | --------------- |
| Change any user's project role        |                   | ✔️            | ✔️              |
| Edit project                          |                   | ✔️            |                 |
| Archive project                       |                   | ✔️            |                 |
| Configure UI/Version control workflow |                   | ✔️            |                 |

## Database permissions

Bytebase does not define database specific roles. Whether a user can perform certain action to the database is based on the user's Workspace role and the role of the project owning the database.

| Database level permission | Project Developer | Project Owner | Workspace Developer | Workspace DBA | Workspace Owner |
| ------------------------- | ----------------- | ------------- | ------------------- | ------------- | --------------- |
| Take manual backup        | ✔️                | ✔️            |                     | ✔️            | ✔️              |
| Transfer database         |                   | ✔️            |                     | ✔️            | ✔️              |
| Enable backup             |                   | ✔️            |                     | ✔️            | ✔️              |
