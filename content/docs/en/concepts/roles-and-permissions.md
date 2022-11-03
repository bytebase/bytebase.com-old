---
title: Roles and Permissions
---

Bytebase has two disjoint set of roles:

1. Workspace roles: `Owner`, `DBA`, `Developer`
2. Project roles: `Owner`, `Developer`

## Workspace roles

By default, the first registered user is granted the `Owner` role, all following registered users are granted `Developer` role. `Owner` can update any user's role later.

|                         Workspace Permission |         Developer         | DBA | Owner |
| -------------------------------------------: | :-----------------------: | :-: | :---: |
|                 Change own name and password |            ✔️             | ✔️  |  ✔️   |
|                             View all members |            ✔️             | ✔️  |  ✔️   |
|                        View all environments |            ✔️             | ✔️  |  ✔️   |
|                           View all instances |            ✔️             | ✔️  |  ✔️   |
|                              Create database | Not allowed in Enterprise | ✔️  |  ✔️   |
|                           View all databases |            ✔️             | ✔️  |  ✔️   |
|                            View all projects |            ✔️             | ✔️  |  ✔️   |
|                               Create project |            ✔️             | ✔️  |  ✔️   |
|                              View all issues |            ✔️             | ✔️  |  ✔️   |
|                    Add comment to all issues |            ✔️             | ✔️  |  ✔️   |
|                      Subscribe to all issues |            ✔️             | ✔️  |  ✔️   |
|                                 Alter schema |            ✔️             | ✔️  |  ✔️   |
|                              Add environment |                           | ✔️  |  ✔️   |
|                             Edit environment |                           | ✔️  |  ✔️   |
|                          Reorder environment |                           | ✔️  |  ✔️   |
|                          Archive environment |                           | ✔️  |  ✔️   |
|                                 Add instance |                           | ✔️  |  ✔️   |
|                                Edit instance |                           | ✔️  |  ✔️   |
|                             Archive instance |                           | ✔️  |  ✔️   |
|                         Sync instance schema |                           | ✔️  |  ✔️   |
|                              Re-assign issue |                           | ✔️  |  ✔️   |
|                        Become issue assignee |                           | ✔️  |  ✔️   |
|                                 Add new user |                           |     |  ✔️   |
|                       Change any user's role |                           |     |  ✔️   |
|                 De-activate/re-activate user |                           |     |  ✔️   |
|          Change any user's name and password |                           |     |  ✔️   |
| Manage version control system (VCS) provider |                           |     |  ✔️   |

## Project roles

Any user can create project. By default, the project creator is granted the `Project Owner` role.

<hint-block type="info">

`Project Developer` grants a project membership and does not grant any additional project level permissions. If the user is a project member, that project and the project's databases will be listed on the user's left sidebar.

</hint-block>

<hint-block type="info">

`Workspace DBA` and `Workspace Owner` assume the `Project Owner` role for all projects.

</hint-block>

|                    Project Permission | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ------------------------------------: | :---------------: | :-----------: | :-----------: | :-------------: |
|                   Change project role |                   |      ✔️       |      ✔️       |       ✔️        |
|                          Edit project |                   |      ✔️       |      ✔️       |       ✔️        |
|                       Archive project |                   |      ✔️       |      ✔️       |       ✔️        |
| Configure UI/Version control workflow |                   |      ✔️       |      ✔️       |       ✔️        |

## Database permissions

Bytebase does not define database specific roles. Whether a user can perform certain action to the database is based on the user's Workspace role and the role of the project owning the database.

| Database Permission |     Project Developer     | Project Owner | Workspace DBA | Workspace Owner |
| ------------------: | :-----------------------: | :-----------: | :-----------: | :-------------: |
|  Take manual backup |            ✔️             |      ✔️       |      ✔️       |       ✔️        |
|       Enable backup |                           |      ✔️       |      ✔️       |       ✔️        |
| Edit database label |                           |      ✔️       |      ✔️       |       ✔️        |
|   Transfer database | Not allowed in Enterprise |      ✔️       |      ✔️       |       ✔️        |

## Sheet permissions

User can save sheets from [SQL Editor](/docs/sql-editor/overview). A sheet always belongs to a project. Sheet has three visibility levels:

- Private
- Project
- Public

### Private Sheet

| Permission | Creator | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ---------: | :-----: | :---------------: | :-----------: | ------------- | --------------- |
|       Read |   ✔️    |                   |               |               |                 |
|      Write |   ✔️    |                   |               |               |                 |
|     Delete |   ✔️    |                   |               |               |                 |

### Project Sheet

| Permission | Creator | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ---------: | :-----: | :---------------: | :-----------: | :-----------: | :-------------: |
|       Read |   ✔️    |        ✔️         |      ✔️       |      ✔️       |       ✔️        |
|      Write |   ✔️    |                   |      ✔️       |      ✔️       |       ✔️        |
|     Delete |   ✔️    |                   |      ✔️       |      ✔️       |       ✔️        |

### Public Sheet

| Permission | Creator | Project Developer | Project Owner | Others |
| ---------: | :-----: | :---------------: | :-----------: | :----: |
|       Read |   ✔️    |        ✔️         |      ✔️       |   ✔️   |
|      Write |   ✔️    |                   |      ✔️       |        |
|     Delete |   ✔️    |                   |      ✔️       |        |
