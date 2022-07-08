---
title: 🕊️ Contribute to Bytebase
description: This section shows the steps of contributing to Bytebase.
---

This section will walk you through how to contribute to and improve Bytebase.

## Contributing docs

1. Set up your [development environment](https://github.com/bytebase/bytebase.com#-development).
2. Write the full content in any editor that supports Markdown. e.g. [VSCode](https://code.visualstudio.com/), [Typora](https://typora.io/), or [Notion](https://notion.so/). Make sure to follow the [Document Write Guide](/docs/document-write-guide).
3. Add your edits to the corresponding folders:
   1. Add your .md file to the folder `/content/docs/en/xxx`
   2. Add your images to the folder `/static/docs/xxx`
   3. Add an entry for the document in `_layout.md`, under the proper section
4. Run `pnpm dev` start the review server.
5. Go to [localhost:3000/docs](http://localhost:3000/docs) and check your creation.
6. If everything looks fine, submit a PR with the changes to [our repo in GitHub](https://github.com/bytebase/bytebase.com).

## Contributing code

- You can check out issues tagged with [good first issue](https://github.com/bytebase/bytebase/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and get familiar with the Bytebase codebase.
- We are maintaining an [online database glossary list](https://bytebase.com/database-glossary/?source=github), you can suggest to add/improve content there.

**Note**: Bytebase is quite disciplined on [tech stack](https://github.com/bytebase/bytebase#installation). If you consider bringing a new programming language, framework and any non-trivial external dependency, please [open a discussion]((https://github.com/bytebase/bytebase/discussions)) first.

### Start developing

Make sure to check out the Bytebase **[Development Guide](https://github.com/bytebase/bytebase/tree/main/docs/dev-guide.md)** before gettin started.

Bytebase is built with a curated tech stack. It is optimized for **developer experience** and is very easy to start working on the code:

1. It has no external dependency.
2. It requires zero config.
3. One command each to start backend & frontend, both with live reload support.

**Tech Stack**

![techstack](/static/docs/en/contribute-to-bytebase/tech-stack.webp)

**Data Model**

![datamodel](/static/docs/en/contribute-to-bytebase/data-model-v1.webp)

#### Prerequisites

- [Go](https://golang.org/doc/install) (1.16 or later)
- [pnpm](https://pnpm.io/installation)
- [Air](https://github.com/cosmtrek/air#installation) (1.27.10 or later). This is for backend live reload.

#### Steps

1. Install [Air](https://github.com/cosmtrek/air#installation).

2. Pull source.

   ```bash
   git clone https://github.com/bytebase/bytebase
   ```

3. Set up pre-commit hooks.

   - Install [pre-commit](https://pre-commit.com/index.html#install)

   ```bash
    cd bytebase
    pre-commit install
    pre-commit install --hook-type commit-msg
   ```

4. Start backend using air (with live reload).

   ```bash
   air -c scripts/.air.toml
   ```

   Change the open file limit if you encounter "error: too many open files".

   ```bash
   ulimit -n 10240
   ```

5. Start frontend (with live reload).

   ```bash
   cd frontend && pnpm i && pnpm dev
   ```

Bytebase should now be running at https://localhost:3000. Change either frontend or backend code would trigger live reload.

## Improving Bytebase

There are ways other than writing docs or code to contribute to Bytebase, for example:

### Report a Bug

Found a bug? You can help us improve Bytebase by filing bug reports and creating an Issue. From [the New Issue tab](https://github.com/bytebase/bytebase/issues/new/choose), choose Bug Report.
Please make sure to include as much information as possible in your report, so that it’s easier for us to reproduce the bug.

### Request a Feature

Is there a feature you would like to see Bytebase support but don’t see it on the [Roadmap](https://github.com/bytebase/bytebase#features) yet? Submit a feature request from the Issue tracker! From [the New Issue tab](https://github.com/bytebase/bytebase/issues/new/choose), choose **Feature request**.

### Start a Discussion

You can initiate discussions and ask your question about Bytebase & related topics on the [Bytebase Discussion board](https://github.com/bytebase/bytebase/discussions).

### Other content

If you have written an article or recorded a video featuring Bytebase, please make sure to let us know at [support@bytebase.com](mailto:support@bytebase.com)!
