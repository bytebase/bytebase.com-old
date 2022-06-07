---
title: ✍️ Document write guide
description: This section shows the steps of writing a document.
---

Before getting started, please make sure that you are familiar with the **[basic Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)**.

## The structure of a document `.md` file

```markdown
---
title: Document write guide
description: This section shows the steps of writing a document.
---

# How to write a document?

Firstly you need to write down the main concept of your documention.
```

To optimize documentation SEO, we should save its metadata between the `--- xxx ---` block. Typically used fields are:

- `title` should be same as the header title;
- `description` field should be the excerpt of the document;

## How to write a new document?

1. Write the full content in any editor that supports Markdown. e.g. [VSCode](https://code.visualstudio.com/)/[typora](https://typora.io/)/[notion](https://notion.so/)
2. Add the metadata block at the top of the markdown file.
3. Add an entry for the document in `_layout.md`.
4. Run `pnpm dev` start the review server.
5. Go to [localhost:3000/docs](http://localhost:3000/docs) and check your creation.
6. If everything is fine, create a new PR with the changes to [our repo in GitHub](https://github.com/bytebase/bytebase.com).

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
