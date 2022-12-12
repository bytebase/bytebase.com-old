---
title: UI Editor
---

<hint-block type="warning">

This feature is in beta and only available for MySQL.

</hint-block>

Bytebase's UI Editor is a modern, friendly tool with an elegant UI that allows you to view and edit database structure in a simple and clean spreadsheet-like editor. Any changes in UI Editor will not be executed into database directly but transform into SQL statement for creating Bytebase issue.

## How to use

By clicking on **Alter Schema** in the Quick Action panel and selecting the database, you will see the UI Editor dialog.

![ui-based-schema-editor-dialog](/static/docs/change-database/ui-based-schema-editor/ui-based-schema-editor-dialog.webp)

### Create table

To create a new table:

1. Click the **New Table** on the top of table list in database tab.
   ![create-table-button](/static/docs/change-database/ui-based-schema-editor/create-table-button.webp)
2. Enter the table name.
3. Add new column by clicking the **Add Column** on the top of column list.
   ![add-column-button](/static/docs/change-database/ui-based-schema-editor/add-column-button.webp)
4. Specify the column's attributes: name, datatype, default, comment, nullable.
5. Click **Preview Issue**, then Bytebase will go to the issue creating page with the generated SQL statement.

### Alter table

To alter a table:

1. Open the table editor tab by clicking the table list.
1. Rename the table name by clicking the **Rename** dropdown item in table tree node, if needed.
   ![table-rename-button](/static/docs/change-database/ui-based-schema-editor/table-rename-button.webp)
1. Add new column by clicking on the **Add Column**.
1. Specify the new column's attributes: name, datatype, default, comment, nullable.
1. Alter the existing column's attributes, if needed.
1. Click **Preview Issue**, then Bytebase will go to the issue creating page with the generated SQL statement.

### Drop table

To drop an existing table:

1. Hover and click the **Drop Table** dropdown item in database item, or the **Drop Table** in database tab.

   ![drop-table-button](/static/docs/change-database/ui-based-schema-editor/drop-table-button.webp)

2. Click **Preview Issue**, then Bytebase will go to the issue creating page with the generated SQL statement.
