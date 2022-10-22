---
title: Roles and Permissions
---

Bytebase has two disjoint set of roles:

1. Workspace roles: `Owner`, `DBA`, `Developer`
2. Project roles: `Owner`, `Developer`

## Workspace roles

By default, the first registered user is granted the `Owner` role, all following registered users are granted `Developer` role. `Owner` can update any user's role later.

|                   Workspace level permission | Developer | DBA | Owner |
| -------------------------------------------: | :-------: | :-: | :---: |
|                 Change own name and password |    ✔️     | ✔️  |  ✔️   |
|                             View all members |    ✔️     | ✔️  |  ✔️   |
|                        View all environments |    ✔️     | ✔️  |  ✔️   |
|                           View all instances |    ✔️     | ✔️  |  ✔️   |
|                              Create database |    ✔️     | ✔️  |  ✔️   |
|                           View all databases |    ✔️     | ✔️  |  ✔️   |
|                            View all projects |    ✔️     | ✔️  |  ✔️   |
|                               Create project |    ✔️     | ✔️  |  ✔️   |
|                              View all issues |    ✔️     | ✔️  |  ✔️   |
|                    Add comment to all issues |    ✔️     | ✔️  |  ✔️   |
|                      Subscribe to all issues |    ✔️     | ✔️  |  ✔️   |
|                                 Alter schema |    ✔️     | ✔️  |  ✔️   |
|                              Add environment |           | ✔️  |  ✔️   |
|                             Edit environment |           | ✔️  |  ✔️   |
|                          Reorder environment |           | ✔️  |  ✔️   |
|                          Archive environment |           | ✔️  |  ✔️   |
|                                 Add instance |           | ✔️  |  ✔️   |
|                                Edit instance |           | ✔️  |  ✔️   |
|                             Archive instance |           | ✔️  |  ✔️   |
|                         Sync instance schema |           | ✔️  |  ✔️   |
|                              Re-assign issue |           | ✔️  |  ✔️   |
|                        Become issue assignee |           | ✔️  |  ✔️   |
|                                 Add new user |           |     |  ✔️   |
|                       Change any user's role |           |     |  ✔️   |
|                 De-activate/re-activate user |           |     |  ✔️   |
|          Change any user's name and password |           |     |  ✔️   |
| Manage version control system (VCS) provider |           |     |  ✔️   |

## Project roles

Any user can create project. By default, the project creator is granted the `Project Owner` role.

<hint-block type="info">

Project Developer grants a project membership and does not grant any additional project level permissions. If the user is a project member, that project and the project's databases will be listed on the user's left sidebar.

</hint-block>

<hint-block type="info">

Workspace role and project role are **disjoint**, which means a Workspace Owner does not automatically assume a Project Owner. One must be granted a separate project role in order to obtain project specific permissions and Workspace Owner can grant any project role.

We design this way because for most of the time, the Workspace Owner should not interfere with a particular project, so it's prudent to limit the permissions to prevent mistakes. On the other hand, if emergency happens and all existing Project Owners are not available, then the Workspace Owner can jump in.

</hint-block>

|              Project level permission | Project Developer | Project Owner | Workspace Owner |
| ------------------------------------: | :---------------: | :-----------: | :-------------: |
|               Change any project role |                   |               |       ✔️        |
|                   Change project role |                   |      ✔️       |                 |
|                          Edit project |                   |      ✔️       |                 |
|                       Archive project |                   |      ✔️       |                 |
| Configure UI/Version control workflow |                   |      ✔️       |                 |

## Database permissions

Bytebase does not define database specific roles. Whether a user can perform certain action to the database is based on the user's Workspace role and the role of the project owning the database.

| Database level permission | Project Developer | Project Owner | Workspace DBA | Workspace Owner |
| ------------------------: | :---------------: | :-----------: | :-----------: | :-------------: |
|        Take manual backup |        ✔️         |      ✔️       |      ✔️       |       ✔️        |
|             Enable backup |                   |      ✔️       |      ✔️       |       ✔️        |
|         Transfer database |                   |      ✔️       |      ✔️       |       ✔️        |
