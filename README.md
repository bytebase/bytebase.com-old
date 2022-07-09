# <a href="https://www.bytebase.com"><img alt="Bytebase" src="https://raw.githubusercontent.com/bytebase/bytebase/be87525c1228fe00cdcc3585859664bdd3167aca/frontend/src/assets/logo.svg" height="56px" /></a>

### 🧲 We are hiring. Check out our [jobs page](https://www.bytebase.com/jobs).

This is the source code for Bytebase.com. Our website is hosted on [Vercel](https://vercel.com).

## How the website is built

The website is using [Nuxt](https://nuxtjs.org/) to generate static pages, [nuxt-content](https://content.nuxtjs.org/) to parse and then render blog/changelog/docs markdown files into static pages.

## Quick contribution

If you are interested in contributing, you may take a look at [our online database glossary page](https://www.bytebase.com/database-glossary) and see if you can offer some help.

## 🏗 Development

### Prerequisites

- [Node.js v16](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)

### Steps

1. Install dependencies.

   ```bash
   pnpm install
   ```

2. Run dev server.

   ```bash
   pnpm dev
   ```

This will fetch the SQL review configuration files before starting the nuxt service, you can check the script [fetch_sql_review_file.sh](./scripts/fetch_sql_review_file.sh) for details.

If you have any problems fetching these files, you could download them manually on the [Bytebase repository](https://github.com/bytebase/bytebase)

The SQL review rules are based on the [rule configuration file](https://github.com/bytebase/bytebase/blob/main/frontend/src/types/sqlReviewConfig.yaml) on the Bytebase repository. We need to update that configuration if we want to update the rules.
