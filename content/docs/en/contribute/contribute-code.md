---
title: Contribute Code
description: This section shows the steps of contributing code to Bytebase.
---

This section will walk you through how to contribute or make changes to the Bytebase code.

## Getting started

- You can check out issues tagged with [good first issue](https://github.com/bytebase/bytebase/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and get familiar with the Bytebase codebase.
- We are maintaining an [online database glossary list](https://bytebase.com/database-glossary/?source=github), you can suggest to add/improve content there.

**Note**: Bytebase is quite disciplined on [tech stack](https://github.com/bytebase/bytebase#installation). If you consider bringing a new programming language, framework and any non-trivial external dependency, please [open a discussion]((https://github.com/bytebase/bytebase/discussions)) first.

## Start developing

Make sure to check out the Bytebase **[Development Guide](https://github.com/bytebase/bytebase/tree/main/docs/dev-guide.md)** before gettin started.

Bytebase is built with a curated tech stack. It is optimized for **developer experience** and is very easy to start working on the code:

1. It has no external dependency.
2. It requires zero config.
3. One command each to start backend & frontend, both with live reload support.

**Tech Stack**

![techstack](/static/docs/contribute/contribute-code/techstack.webp)

**Data Model**

![datamodel](/static/docs/contribute/contribute-code/datamodel_v1.webp)

### Prerequisites

- [Go](https://golang.org/doc/install) (1.16 or later)
- [pnpm](https://pnpm.io/installation)
- [Air](https://github.com/cosmtrek/air#installation) (1.27.10 or later). This is for backend live reload.

### Steps

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
