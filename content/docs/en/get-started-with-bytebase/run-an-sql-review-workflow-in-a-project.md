---
title: Run an SQL Review Workflow in a Project
---
## Create a project

Developers manage their databases within the Bytebase Project. Therefore, before dealing with the sample databases, you need to transfer them into a project first.  

Click `Projects` > `New Project` to create a project called "Employee".  

![_](/static/docs-assets/create-project.png)  

Choose **Standard**. The "Employee" project is created successfully and you are on its detail page.  

![_](/static/docs-assets/project-page.png)  

Choose `Transfer DB` to transfer the two databases synced from the connected instances. You can find them in the default project since they have not been transferred into any specific project yet.  

![_](/static/docs-assets/transfer-db-1.png)  

![_](/static/docs-assets/transfer-db-2.png)  

Now you are ready to manage these two "employee" databases in your project.  

## Add your teammates  

<hint-block type="info">
Remember to add your teammates to the workspace before you try to add them to a specific project.  
</hint-block>
  
On the detail page of your created project, click `Settings` to add project members. In the below example, we add a project member "Adela".  

![_](/static/docs-assets/add-teammate.png)  

## Alter the database schema

Now that everything is prepared, it's time to try the schema change workflow. The task is to add a column named "nickname" to the "employee" table. We will create a single pipeline to propagate the change from the `Test` instance to the `Prod` instance. By default, no manual approval is required on the `Test` environment, so developers can run SQLs without DBAs' approval. Bytebase supports both UI and GitOps workflows to accomplish the task. This demo uses the UI workflow.  

### Create a SQL issue

The whole workflow is encapsulated in a SQL issue.  

Open the "Employee" project. Click `Alter Schema`.  

![_](/static/docs-assets/alter-schema.png)  

Then a dialog box will pop up.  

![_](/static/docs-assets/alter-single-schema.png)  

You need to choose `Alter multiple databases` to create a pipeline propagating changes across multiple databases.  

![_](/static/docs-assets/alter-multiple-databases.png)  

An issue creation page appears now.  

![_](/static/docs-assets/issue-creation-page.png)  

Fill in the required title, SQL statement, and an optional description.  

![_](/static/docs-assets/write-sql.png)  

Click `Apply to other stages`.  For demo purposes, select yourself as the assignee, then click `Create`.  

![_](/static/docs-assets/create-issue.png)  

The SQL Advisor kicks off immediately and checks your SQL statements against various rules automatically.  

![_](/static/docs-assets/sql-advisor-2.png)  

The Test environment doesn't require manual approval, thus the SQL will be applied automatically after passing those advisor checks. Then you are waiting for approval for the Prod environment.  

### Review the SQL issue  

Click `Approve` if everything is OK and the change will be applied to the Prod environment.  

![_](/static/docs-assets/approve-issue.png)  

![_](/static/docs-assets/approve-issue-2.png)  

Now that we have applied the same SQL change to both the `Test` and `Prod` databases, we can click `Resolve issue` to finish the workflow.

![_](/static/docs-assets/resovle-issue.jpeg)  

![_](/static/docs-assets/issue-done.jpeg)  
