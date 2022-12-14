---
title: Roles and Permissions (RBAC)
---

<hint-block type="info">

RBAC is only available in Team and Enterprise plan. In Free plan, Bytebase does not enforce RBAC and every user has full permissions.

</hint-block>

## Overview

Bytebase employs RBAC (Role-Based-Access-Control) and provides two role sets at the workspace and project level:

- Workspace roles: `Owner`, `DBA`, `Developer`
- Project roles: `Owner`, `Developer`

The workspace role maps to the role in an engineering organization, while the project level role maps to the role in a specific team or project. Every user is assigned a workspace role, and if a particular user is involved in a particular project, then she will also be assigned a project role accordingly.

![org-role-mapping](/static/docs/rbac/org-role-mapping.webp)

Above diagram describes the mapping between an engineering org and the corresponding roles in the Bytebase workspace. Note, a particular user can be assigned multiple roles as well:

- A user can only be assigned one of the workspace roles.
- In a particular project, a user can be assigned one of the project roles, while a user can be assigned different project roles in the different projects.

Real-world scenarios:

- Engineering orgs may not establish a dedicated DBA or platform engineering group. In such case, usaually the application engineering group head and the tech leads will wear those hats. Say a user named Alice can be a `Workspace DBA` and a `Project Owner` for Project Apollo at the same time.

- An application developer could be involved in multiple projects. In such case, that engineer would also be assigned project roles in different projects respectively. Say a user named Bob can be a `Workspace Developer`, a `Project Owner` for Project Apollo and a `Project Developer` for Project Mars at the same time.

## Workspace roles

By default, the first registered user is granted the `Owner` role, all following registered users are granted `Developer` role. `Owner` can update any user's role later.

|                         Workspace Permission |         Developer         | DBA | Owner |
| -------------------------------------------: | :-----------------------: | :-: | :---: |
|                 Change own name and password |            ✔️             | ✔️  |  ✔️   |
|                                 Add new user |                           |     |  ✔️   |
|                               View all users |            ✔️             | ✔️  |  ✔️   |
|                       Change any user's role |                           |     |  ✔️   |
|                 De-activate/re-activate user |                           |     |  ✔️   |
|          Change any user's name and password |                           |     |  ✔️   |
|                              Add environment |                           | ✔️  |  ✔️   |
|                        View all environments |            ✔️             | ✔️  |  ✔️   |
|                             Edit environment |                           | ✔️  |  ✔️   |
|                          Reorder environment |                           | ✔️  |  ✔️   |
|                          Archive environment |                           | ✔️  |  ✔️   |
|                           View all instances |                           | ✔️  |  ✔️   |
|                                 Add instance |                           | ✔️  |  ✔️   |
|                                Edit instance |                           | ✔️  |  ✔️   |
|                             Archive instance |                           | ✔️  |  ✔️   |
|                         Sync instance schema |                           | ✔️  |  ✔️   |
|                              Create database | Not allowed in Enterprise | ✔️  |  ✔️   |
|                           View all databases |                           | ✔️  |  ✔️   |
|                               Create project |            ✔️             | ✔️  |  ✔️   |
|                            View all projects |                           | ✔️  |  ✔️   |
|                                 Create issue |            ✔️             | ✔️  |  ✔️   |
|                              View all issues |                           | ✔️  |  ✔️   |
|                        Become issue assignee |                           | ✔️  |  ✔️   |
|                              Re-assign issue |                           | ✔️  |  ✔️   |
|                    Add comment to all issues |            ✔️             | ✔️  |  ✔️   |
|                      Subscribe to all issues |            ✔️             | ✔️  |  ✔️   |
|                                 Alter schema |            ✔️             | ✔️  |  ✔️   |
|                                  Change data |            ✔️             | ✔️  |  ✔️   |
|                  Configure SQL Review Policy |                           | ✔️  |  ✔️   |
| Manage version control system (VCS) provider |                           |     |  ✔️   |
|                        Manage sensitive data |                           | ✔️  |  ✔️   |
|              Manage database acccess control |                           | ✔️  |  ✔️   |
|                        Manage IM integration |                           |     |  ✔️   |
|                                  Change logo |                           |     |  ✔️   |

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
|                   Sync sheet from VCS |        ✔️         |      ✔️       |      ✔️       |       ✔️        |
|                   Change project role |                   |      ✔️       |      ✔️       |       ✔️        |
|                          Edit project |                   |      ✔️       |      ✔️       |       ✔️        |
|                       Archive project |                   |      ✔️       |      ✔️       |       ✔️        |
| Configure UI/GitOps workflow |                   |      ✔️       |      ✔️       |       ✔️        |

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
|       Star |   ✔️    |                   |               |               |                 |
|       Read |   ✔️    |                   |               |               |                 |
|      Write |   ✔️    |                   |               |               |                 |
|     Delete |   ✔️    |                   |               |               |                 |

### Project Sheet

| Permission | Creator | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ---------: | :-----: | :---------------: | :-----------: | :-----------: | :-------------: |
|       Star |   ✔️    |        ✔️         |      ✔️       |      ✔️       |       ✔️        |
|       Read |   ✔️    |        ✔️         |      ✔️       |      ✔️       |       ✔️        |
|      Write |   ✔️    |                   |      ✔️       |      ✔️       |       ✔️        |
|     Delete |   ✔️    |                   |      ✔️       |      ✔️       |       ✔️        |

### Public Sheet

| Permission | Creator | Project Developer | Project Owner | Others |
| ---------: | :-----: | :---------------: | :-----------: | :----: |
|       Star |   ✔️    |        ✔️         |      ✔️       |   ✔️   |
|       Read |   ✔️    |        ✔️         |      ✔️       |   ✔️   |
|      Write |   ✔️    |                   |      ✔️       |        |
|     Delete |   ✔️    |                   |      ✔️       |        |

## Issue permissions

|          Issue Permission | Assignee | Creator | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ------------------------: | :------: | :-----: | :---------------: | :-----------: | ------------- | --------------- |
|              Create issue |   N/A    |   N/A   |        ✔️         |      ✔️       | ✔️            | ✔️              |
|           Re-assign issue |    ✔️    |   ✔️    |                   |               | ✔️            | ✔️              |
|       Change issue status |    ✔️    |         |                   |   Depends\*   | ✔️            | ✔️              |
| Edit name and description |    ✔️    |   ✔️    |                   |               | ✔️            | ✔️              |
|        Edit SQL Statement |          |   ✔️    |                   |               |               |                 |
|     Subscribe/Unsubscribe |    ✔️    |   ✔️    |        ✔️         |      ✔️       | ✔️            | ✔️              |
|               Add comment |    ✔️    |   ✔️    |        ✔️         |      ✔️       | ✔️            | ✔️              |

\* `Project Owner` can change issue status when the current active [Environment Approval Policy](/docs/administration/environment-policy/approval-policy) is set to _Require manual approval_.
