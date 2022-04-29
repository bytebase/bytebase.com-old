---
title: ✍️ Document write guide
description: This section shows the steps of writing a document. It's a little different from a common Markdown file. In order not to involve changes to code files, we need to save its metadata between the `--- xxx ---`.
order: 999999
---

# ✍️ Document write guide

This section shows the steps of writing a document.

## The structure of a `.md` file

```markdown
---
title: Document write guide
order: 40100
---

# How to write a document?

Firstly you need to write down the main concept of your documention.
```

It's a little different from a common Markdown file. In order not to involve changes to code files, we need to save its metadata between the `--- xxx ---` block. Typically used fields are:

- `title` is the display text in sidebar;
- `order` indicates the display order. It is an integer representing an array of three two-digit numbers: `{{category}}{{subcategory}}{{document}}`. **We support up to three folder structure. And the sub-directory structure determines the hierarchy.**

  For example, [Build from Source](/docs/install/build-from-source) is `10200` which can be `[1][2][0]`. This means that it's the second in the category, the third in the subcategory and the first in the leaf.

## How to write a new document?

1. Write the full content in any editor that supports Markdown. e.g. [VSCode](https://code.visualstudio.com/)/[typora](https://typora.io/)
2. Think about where the article should be displayed in sidebar.
3. Follow the [example](#the-structure-of-md-file) to figure out the `order` value.
4. Add the metadata block at the top of the markdown file.
5. Refer to an existing structure, put the file under a folder of `./docs/`.
6. Run `pnpm dev` start the review server.
7. Go to [localhost:3000/docs](http://localhost:3000/docs) and check your creation.
8. If everything is fine, create a new PR with the changes to [our repo in GitHub](https://github.com/bytebase/bytebase.com).

## Using powerful components into Markdown

To display more styled blocks in documentation, we support some powerful components:

### `hint-block`

Show a hint text with a styled block.

![hint-block-example](/static/docs-assets/hint-block-example.png)

#### Usage

```markdown
<hint-block type="info">

Bytebase has already prepared some sample data. In particular, it has created a Test environment and a Prod environment, each containing a mysql instance. To establish the connection to those instances, one quick way is to [start a MySQL docker instance](#start-a-mysql-docker-instance-for-testing).

</hint-block>
```

#### Props

| Name | Type                | Default | Description        |
| ---- | ------------------- | ------- | ------------------ |
| type | `info` \| `warning` | `info`  | Set the hint style |

### `doc-link-block`

A pretty link block to another page.

![doc-link-block-example](/static/docs-assets/doc-link-block-example.png)

#### Usage

```markdown
<doc-link-block url="/docs/use-bytebase/webhook-integration/overview" title="Webhook Integration"></doc-link-block>
```

#### Props

| Name  | Type     | Default | Description                   |
| ----- | -------- | ------- | ----------------------------- |
| url   | `string` | `''`    | Set the link url              |
| title | `string` | `''`    | Description of the link title |

### `include-block`

Include another markdown and render inline.

#### Usage

```markdown
<include-block url="features/archive"></include-block>
```

#### Props

| Name | Type     | Default | Description                                                                            |
| ---- | -------- | ------- | -------------------------------------------------------------------------------------- |
| url  | `string` | `''`    | Set the markdown file url, which should be an absolute path without the `/docs` prefix |
