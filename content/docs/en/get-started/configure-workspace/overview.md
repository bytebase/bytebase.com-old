---
title: Configure the Workspace
---

You've already deployed Bytebase to proudction, before making any changes to databases, you should first configure the workspace.

The entire Bytebase instance hosts a single **Workspace**. At the workspace level you can configure global settings applicable to all later created projects. There are three roles at the workspace level: **Owner**, **DBA**, and **Developer**.

This section guides you through the workspace level configuration before you start any **Project**.

At workspace level, you can 
- [Register accounts](register-accounts) or [Add Owners, DBAs and Developers](manage-members) to the workspace.
- [Set up environments](set-up-environments) (e.g. Test, Prod) to fit your working process.
- [Add instances](add-an-instance) to make it possible to synchronize databases - the quickest way to test MySQL Instace is to [Run a MySQL in Docker](add-a-mysql-instance-for-testing).
- [Customize the Logo](customize-the-logo).