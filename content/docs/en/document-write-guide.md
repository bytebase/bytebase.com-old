---
title: ✍️ Document write guide
description: This section shows the steps of contributing documentation.
---

Before getting started, please make sure that you are familiar with the **[basic Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)**.

## The structure of a document `.md` file

```markdown
---
title: Document write guide
description: This section shows the steps of writing a document.
---

# How to write a document?

First, you need to write down the main concept of your documentation.
```

To optimize documentation SEO, we should save its metadata between the `--- xxx ---` block. Typically used fields are:

- `title` should be same as the header title;
- `description` field should be the excerpt of the document.

## Blocks

Use following components to display more styled content in documentations:

### `Table`

| Col1  | Col2 | Col3 |
| ----- | ---- | ---- |
| Bob   | 30   | ✔️   |
| Alice | 15   |      |
| David | 20   | ✔️   |

### `Code`

A code block with copy button.

```bash
echo hello world
```

### `Hint`

Show a hint text with a styled block.

<hint-block type="info">

I am an info block with [link](#hint).

Extra description.

</hint-block>

<hint-block type="warning">

I am an warning block with [link](#hint).

Extra description.

</hint-block>

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

### `Doc`

A pretty link block to another page.

<doc-link-block url="/docs/faq" title="FAQ"></doc-link-block>

#### Usage

```markdown
<doc-link-block url="/docs/faq" title="FAQ"></doc-link-block>
```

#### Props

| Name  | Type     | Default | Description                   |
| ----- | -------- | ------- | ----------------------------- |
| url   | `string` | `''`    | Set the link url              |
| title | `string` | `''`    | Description of the link title |

### `Include`

Include another markdown and render inline.

#### Usage

```markdown
<include-block url="/docs/en/document-write-guide"></include-block>
```

#### Props

| Name | Type     | Default | Description                                                                            |
| ---- | -------- | ------- | -------------------------------------------------------------------------------------- |
| url  | `string` | `''`    | Set the markdown file url, which should be an absolute path without the `/docs` prefix |
