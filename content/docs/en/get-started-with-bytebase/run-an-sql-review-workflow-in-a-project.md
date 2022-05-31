---
title: Run an SQL Review Workflow in a Project
---
## Create a project

Developers manage their databases within the Bytebase Project. Therefore, before dealing with the sample databases, you need to transfer them into a project first.  

Click `Projects` > `New Project` to create a project called "Employee".  

![_](/static/docs-assets/create-project.png)  

Choose **Standard**. The "Employee" project is created successfully and you are on its detail page.  

![_](/static/docs-assets/project-page.png)  

Choose `Transfer DB` to import the two databases synced from the connected instances. You can find them in the default project since they are not transferred into any specific project yet.  

![_](/static/docs-assets/transfer-db-1.png)  

![_](/static/docs-assets/transfer-db-2.png)  

Now the "employee" databases are available.  

## Add your teammates  

Remember to add your teammates to the workspace before you try to add them to a specific project.  

On the detail page of your created project, click `Settings` to add project members. In the below example, we add a project member "Adela".  

![_](/static/docs-assets/add-teammate.png)  

## Alter the database schema

Now that everything is prepared, it's time to try the schema change workflow. The task is to add a column named "nickname" to the "employee" table. We will create a single pipeline to propagate the change from the Test instance to the Prod instance. By default, no manual approval is required on Test, so developers can run SQLs without DBAs' permission. Bytebase supports both UI and GitOps workflows to accomplish the task. This demo uses the UI workflow.  

### Create an SQL issue

The whole workflow begins with an SQL issue.  

Open the "Employee" project. Click `Alter Schema`.  

![_](/static/docs-assets/alter-schema.png)  

Then a dialog box will pop up.  

![_](/static/docs-assets/alter-single-schema.png)  

You need to choose `Alter multiple databases` to make the pipeline work.  

![_](/static/docs-assets/alter-multiple-databases.png)  

You need to choose Alter multiple databases to make the pipeline work.  

![_](/static/docs-assets/issue-creation-page.png)  

Fill in the title and the SQL field. Add a description if needed.  

![_](/static/docs-assets/write-sql.png)  

Click `Apply to other stages`. Assign this issue to a user for Prod review. Select yourself as the assignee for this demo, then click `Create`.  

![_](/static/docs-assets/create-issue.png)  

The SQL Advisor kicks off immediately and checks your SQL statements automatically.  

![_](/static/docs-assets/sql-advisor-2.png)  

Your query runs successfully against the Test environment, which doesn't require manual approval, and waits for approval for the Prod environment.  

### Review the SQL issue  

Click `Approve` if everything is OK. Now you apply the change to the Prod environment.  

![_](/static/docs-assets/approve-issue.png)  

![_](/static/docs-assets/approve-issue-2.png)  

Click `Resovle issue`, and the issue will be done.  

![_](/static/docs-assets/resovle-issue.jpeg)  

![_](/static/docs-assets/issue-done.jpeg)  
