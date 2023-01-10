---
title: Schema Diagram
---

<hint-block type="info">

This feature is in beta.

</hint-block>

Bytebase's Schema Diagram provides a [Entity-Relation Diagram](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) of databases.

## View Database Schema Diagram

Click **Schema Diagram** in the database detail page, you will see the Schema Diagram in a popup dialog.

![database-detail-page](/static/docs/change-database/schema-diagram/database-detail-page.webp)

![schema-diagram-dialog](/static/docs/change-database/schema-diagram/schema-diagram-dialog.webp)

**Drag the canvas** to move. Use **mouse wheel**, **trackpad** or **click the -/+ buttons** to zoom in and out.

Click the **Fit content within view** button to restore the initial position and zoom.

![fit-content-within-view](/static/docs/change-database/schema-diagram/fit-content-within-view.webp)

## Working with Schema Editor

While using [Schema Editor](/docs/change-database/schema-editor), you may also preview the database schema and changes via Schema Diagram. Click the **Schema Diagram** and you will switch to the Schema Diagram tab.

![schema-editor-integration](/static/docs/change-database/schema-diagram/schema-editor-integration.webp)

Your temporary changes in Schema Editor will be highlighted and colorized to help you previewing schema changes.

![preview-schema-change](/static/docs/change-database/schema-diagram/preview-schema-change.webp)

Clicking on the **column name**, **column type** and **the pencil icon** beside table name will navigate you to the editable parts in Schema Editor correspondingly.

![edit](/static/docs/change-database/schema-diagram/edit.webp)
