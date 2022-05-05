# <a href="https://www.bytebase.com"><img alt="Bytebase" src="https://raw.githubusercontent.com/bytebase/bytebase/be87525c1228fe00cdcc3585859664bdd3167aca/frontend/src/assets/logo.svg" height="56px" /></a>

### 🧲 We are hiring. Check out our [jobs page](https://www.bytebase.com/jobs).

This is the source code for Bytebase.com. Our website is hosted on [Render](https://render.com).

## How the website is built

The website has static pages and blog/changelog/newsletter. We use [Ghost](https://bytebase.ghost.io/) as our headless CMS for blog/changelog/newsletter. The entire site is generated with the static pages and then been published online. During the generation process, we will call [Ghost content API](https://ghost.org/docs/content-api/) to fetch the post info in order to generate the blog/changelog static pages.

### How to create a blog post

1. Edit the post on Ghost.

2. Assign a tag, one can choose from [Announcement, Education]

3. Create the post.

4. Visit render.com to manually deploy the site, which will trigger the process to regenerate the entire static page list. We need to manually do this because render is not aware of the new post appeared on Ghost.

### How to create a changelog

Very similar to how to create a blog post, execpt taht one needs to assign the "Changelog" tag to the post.

### How to create/update other static pages.

Just create/update the page and push to the repo. Render can observe the change in this case, generate and redeploy the entire site.

## Quick contribution

If you are interested in contributing, you may take a look at [our online database glossary page](https://www.bytebase.com/database-glossary) and see if you can offer some help.

## 🏗 Development

### Prerequisites

- [pnpm](https://pnpm.io/installation)

### Steps

```bash
pnpm i && pnpm dev
```
