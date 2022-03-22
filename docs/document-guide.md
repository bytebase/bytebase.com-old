---
title: ✍️ Document guide
order: -1
---

# Document guide

This document mainly represent Markdown files.

## The structure of `.md` file

```markdown
---
title: Document guide
order: 40100
---

# How to write Bytebase document?

Write the document content right here.
```

It's a little different from common Markdown file. We need to save its status data into the `--- xxx ---` block. The mainly useful fields are there:

- `title` is the display text in sidebar;
- `order` indicates the display order. It consists of a array with three two-digit numbers: `{{category}}{{subcategory}}{{document}}`. For example, [Build from Source](/docs/install/build-from-source) is `10200`.
  ![corder-example](/docs-assets/order-example.jpg)

## How to write a new document?

1. Write the full content in any editor that supports Markdown. e.g. [VSCode](https://code.visualstudio.com/)/[typora](https://typora.io/)
2. Think about where the article should display in sidebar.
3. Follow the [example](#the-structure-of-md-file) to figure out the `order` value.
4. Add the meta data block in the top of markdown file.
5. Insert the file into the project folder `./docs/`.
6. Run `yarn dev` start the review server.
7. Go to [localhost:3000/docs](http://localhost:3000/docs) and check your creation.
8. If everything is fine, create a new PR with the changes to [our repo in GitHub](https://github.com/bytebase/bytebase.com).
