# Introducing gh-ost Based Online Schema Migration for MySQL
- - - -
title: “Introducing gh-ost Based Online Schema Migration for MySQLL”
author: Candy
published_at: 2022/08/09 16:37:17
feature_image: _static_blog-changelog-assets_2022/04_Wildabeest_Cover.jpeg
tags: Education
featured: true
description: This article explains why we introduce gh-ost based online schema migration and how to perform an online schema migration without downtime in Bytebase.
- - - -

Bytebase is an open-source database DevOps tool; it’s the GitLab for managing databases throughout the software development lifecycle (SDLC). It offers a web-based workspace for Developers and DBAs to collaborate and execute database changes safely and efficiently.

Database schema migration is one of the most common operations for developers and DBAs. However, it is one of the most challenging operations as well. What’s more painful, it will take hours, even days to migrate schema for large tables. Regular schema migration must lock the database table and render the service offline. For most businesses, it’s unacceptable to endure such extended downtime. To solve it, the industry has developed various online schema change solutions:
* [gh-ost](https://github.com/github/gh-ost)
* [Pt-online-schema-change](https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html)
* [Facebook OSC](https://github.com/facebookincubator/OnlineSchemaChange)

By adopting these tools, teams can reduce schema migration downtime from days and hours to seconds. On the other hand, operating these tools still requires a lot of expertise. And their usage is limited to the seasoned DBAs, while Developers still need to ask their DBA peers to perform online schema changes on their behalf.

Since Bytebase is a database tool for the DevOps teams, we want to hand over the powerful online schema change capability to the Developers.

In this blog post, we will introduce you to the beta release of Bytebase online schema migration solution based on gh-ost. Bytebase solution provides a step-by-step interface with continuous progress updates to oversee the entire migration process.


## Why We Choose gh-ost
All existing online schema change solutions share a similar workflow:![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/EpEOEkScVy2t1Q5-fqjI5n0dHNU90AQmwEzchrn5cDYmDR5twLUF_aulg0b3sqr4Tkitdl3QR6WdBip-esplvV_TqNQcgohsP-suluDFCBxTriRD_KU8wKps8adu5Qn8pOCEGbFBlAsafWWkH00LNr8.png)
1 Create a new, empty table (called ghost/shadow table) with an exact copy of the original table’s schema
2 Apply schema migration to the ghost table
3 Copy the existing rows from the original table to the ghost table
4 Capture the ongoing changes to the original table and continuously apply them to the ghost table
5 Swap the original table with the ghost table


Why do we decide to integrate gh-ost into Bytebase? The most crucial factor is that gh-ost is a triggerless online schema migration solution for MySQL. gh-ost uses the binary log stream to capture table changes and asynchronously applies them to the ghost table. As a result, it avoids the performance overhead due to trigger and lock contention. Secondly, gh-ost has greater control over the migration process. Bytebase can leverage it to expose the migration progress and provide a better user experience with parameters supported by gh-ost.

## How to Make Online Schema Migration for Large Tables
Bytebase provides two types of schema migration: regular migration and gh-ost. You can operate it by creating an issue in three steps. Let’s demonstrate how to use gh-ost to alter schema.

The screenshot below shows the table “sbtest1” information before applying schema migration. We can see that the table has 4 columns and 694 MB data.
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/hYzVY3lTwC_gCEkEouudA7NEs6b-0IwG8Fn1ABqug-fMkQssoiKBlWoPbROPQxP3bh7lfG8_1uVi8bTEmb7rSx01HeRbuAm2VHK2AxDCdxH3TsiYaObi8yuf0yPVTTW1ej6oDKdABLtd_d3KEfvFnsU.png)

**Step 1**. Create a gh-ost issue
1. Click **Alter Schema** on the database details page. 
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/gI3kEtfcPyhP1eKG0ccDRKa1U5oXNT23snizAdvd4LxO8eyd1BbZdLv-IzKcPvKMB2HvKrcMn5UyKqFYCeYl7aAhSp4zI01jhy_JxKRLWoS_TPYMgOmiAwv9noZoroKILj5EYWsavojj-bhTCUYbfv4.png)

2. Select **Online migration**and click **Next.**
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/GRgiUQukCn3LLAMxwqwKmiu_EpYeeJWa_PSuHE023Weh7h_mUP7lHRWHty38OnMBhH-98qOACpIU3Vby9MlqX9sWvCpQGh5CTr28RtiVOVDX4q828oeJ2BpMP3K1RrqkQ9FYsIywPBPRKn4Fn3fyULY.png)

3. Enter SQL statements for the task “Sync data”, and click **Create** after selecting a reviewer to approve the issue.
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/wOk871fRoc_K2bVg7oeb4ekMOVdtKXyZ868U4Nt-DhY6qy-FsWLR6gyPIOC577nULn3Kv1JKghUck3u7_XJdk1b7aase2ki9IvnDgPsTU_82jt0k7la9t3XqT47bPGQ87S7Sd91j81LO-hWSCJtDCCI.png)

**Step 2**. Execute the task “Sync data”.
The task “Sync data” runs after the designated reviewer clicks **Approve**. See the screenshot below, it shows that the progress of “Sync data” is 59%. 

![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/ClJ0xXeDQSAOK_IcIfcrxCMYdbA4GBnliBj-hR96_j5npPDMZnN6rD8WDgsA2CAiXf39XtEgriN0Rh-WL09kOmxywiWDaO1yxeHf6Zkr-c9OhG0niw9dJXKCfojdIoac3MpdkzYFDaTAtHqo2yv9xs0.png)

**Step 3**. Perform the task “Switch tables”.
The screenshot below shows that the first task has been completed.  
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/loTe0YxBr40RwOriEuOBJmjt9NHs3MUOfiCeJ9yydS4uf1QSbKJVIKgrnIKBfx1IBw_YoqxXktCepIHpqwbXbjUIXPrHG_iPvmwlUiPoEAwNSKf3RICMo4V6X6Xsv1GcWAO_tT8lgBcA4Mk0LXiu7LY.png)

Then the designated reviewer clicks **Approve** to execute the second task “Switch tables”.
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/fPruR5JBDpyRslKo32snb_3UjzMsKgldiP6R2rOxfESLCo4GB_vKGE_G1lXO__jjbZeME9NhCTZN04yhFCMBP7qAW5KDzZPjXtmASVQKZeVHRRL2duZj9HEITBJ9eriyeZmvAS253T5YwnlYQ_QBSe4.png)

Here is the result of gh-ost. It says that the database performs gh-ost successfully.
![](Introducing%20gh-ost%20Based%20Online%20Schema%20Migration%20for%20MySQL/B83AX6T0YAVcSb4VFXye7qk5K6Uz-JAkucLu9_b2ESJ1u1QbY8oyF_DkRRSuW7r--4meHypi4B_qFn5HTIrtla3FRhIx8KRWfsZ21ubTWLNsr9gI0OSULICTY1Q6cdyaBPVgqWw0sLCiqbPqPpLHRi8.png)
 
## Learn More
Bytebase supports online schema migration for large tables based on gh-ost, a triggerless online schema migration solution that can reduce the application downtime from hours to seconds. It offers a step-by-step interface with continuous progress update to oversee the entire migration process. You can check out the [documentation](https://www.bytebase.com/docs/change-database/online-schema-migration-for-mysql) to learn more.

If you have any feedback, we’d love to hear from you. You can find us on our [GitHub issue board](https://github.com/bytebase/bytebase/issues).

