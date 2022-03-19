---
title: ✍️  Document guide
slug: document-guide
position: 40000
---

# Document guide

This document mainly represent Markdown files.

## An example of `.md` file

```markdown
---
title: Server Startup Options
slug: server-startup-options
position: 40000
---

# Document guide

This document mainly represent Markdown files.

## An example of `.md` file
```

It's a bit different from normal Markdown file. We need to save its status data into the `--- xxx ---` block. The mainly useful fields are those three:

- `title` is the document's tile in website;
- `slug` is an **unique** name for document;
- `position` indicates the display order. It consists of three two-digit numbers, present the level of `{{category}}/{{subcategory}}/{{document}}` structure. For example, this file's position is `40000`

TBC
