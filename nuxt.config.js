import path from "path";
import fse from "fs-extra";
import slug from "slug";
import { camelCase } from "lodash";
import {
  databaseFeatureList,
  databaseVCSList,
  databaseWebhookList,
} from "./common/matrix";
import { ALPHA_LIST } from "./common/glossary";
import generateSearchIndex from "./scripts/generateSearchIndex";

const VERSION = fse.readFileSync("VERSION").toString();

// unwantedRouteListForSitemap is the unwanted url(prefix) for sitemap.
const unwantedRouteListForSitemap = ["/zh/docs", "/zh/changelog", "/zh/blog"];

const generateSitemap = async (routes) => {
  const baseUrl = "https://www.bytebase.com";
  const routeXMLTagSet = new Set();

  for (const route of routes) {
    let isUnwantedRoute = false;
    for (const item of unwantedRouteListForSitemap) {
      if (route.startsWith(item)) {
        isUnwantedRoute = true;
        break;
      }
    }

    if (isUnwantedRoute === false) {
      routeXMLTagSet.add(`<url>
  <loc>${baseUrl}${route}</loc>
</url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${Array.from(routeXMLTagSet).join("\n")}
</urlset>`;

  fse.appendFileSync("./dist/sitemap.xml", xml);
};

function glossaryRouteList() {
  const list = [];
  for (const alpha of ALPHA_LIST) {
    for (const glossary of alpha.list) {
      list.push(`/database-glossary/${slug(glossary.name)}`);
    }
  }
  return list;
}

function databaseFeatureRouteList() {
  const list = [];
  for (const feature of databaseFeatureList()) {
    list.push(`/database-feature/${feature.slug}`);
  }
  return list;
}

function databaseVCSRouteList() {
  const list = [];
  for (const feature of databaseVCSList()) {
    list.push(`/vcs/${feature.slug}`);
  }
  return list;
}

function webhookRouteList() {
  const list = [];
  for (const webhook of databaseWebhookList()) {
    list.push(`/webhook/${webhook.slug}`);
  }
  return list;
}

async function getChineseBlogRouteList() {
  const { $content } = require("@nuxt/content");
  const data = await $content("blog").fetch();

  const list = [];
  for (const item of data) {
    if (item.tags.includes("Chinese")) {
      list.push(`/blog/${item.slug}`);
    }
  }

  return list;
}

async function getDocsRouteList() {
  const { $content } = require("@nuxt/content");
  const list = await $content("docs", {
    deep: true,
  })
    .only(["path"])
    .fetch();
  const routeList = [];

  for (const item of list) {
    if (item.path.endsWith("_layout")) {
      continue;
    }
    routeList.push(item.path.replace("/docs/en", "/docs"));
  }

  return routeList;
}

function mergedLocalMessages(folder) {
  const message = {};
  const pathes = fse.readdirSync(folder);
  for (const name of pathes) {
    const fullpath = path.resolve(folder, name);
    if (fse.statSync(fullpath).isFile() && /\.json$/.test(name)) {
      const local = name.split(".")[0];
      console.log(`reading localization file from fullpath: ${fullpath}`);
      message[local] = {
        ...(message[local] || {}),
        ...fse.readJSONSync(fullpath),
      };
    } else if (fse.statSync(fullpath).isDirectory()) {
      const nestedMessage = mergedLocalMessages(fullpath);
      for (const [key, value] of Object.entries(nestedMessage)) {
        console.log(`merge ${name}:${key} into localization message`);
        const existed = message[key] || {};
        message[key] = {
          ...existed,
          [name]: {
            ...(existed[name] || {}),
            ...value,
          },
        };
      }
    }
  }

  return message;
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    host: "0.0.0.0",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bytebase | Database DevOps",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Safer and faster database change and version control for DBAs and Developers",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/*",
        href: "/favicon.ico",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOriginIsolated: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap",
      },
    ],
  },

  router: {
    linkActiveClass: "router-active-link underline",
    linkExactActiveClass: "router-exact-active-link underline",
    prefetchPayloads: false,
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/database-review-guide",
        redirect: "/sql-review-guide",
      });
    },
  },

  content: {
    dir: "content",
    liveEdit: false,
  },

  i18n: {
    defaultLocale: "en",
    seo: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        name: "简体中文",
        code: "zh",
        iso: "zh-CN",
        file: "zh.json",
      },
    ],
    vueI18n: {
      fallbackLocale: "en",
      messages: mergedLocalMessages(path.resolve(__dirname, "./locales/")),
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    pages: {
      demo: {
        en: false,
      },
    },
  },

  generate: {
    // Generate the docs routes manually instead of using nuxt crawler, 
    // which may cause 404 errors with dynamic routes in production.
    // Reference: https://stackoverflow.com/a/73790178
    crawler: false,
    routes: async () => {
      const routeList = [];
      const docsRouteList = await getDocsRouteList();

      return routeList
        .concat(glossaryRouteList())
        .concat(databaseFeatureRouteList())
        .concat(databaseVCSRouteList())
        .concat(webhookRouteList())
        .concat(docsRouteList);
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/variables.css", "~/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Plugin for vue-gtag
    "~/plugin/vue-gtag",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "@pinia/nuxt",
    "@nuxtjs/google-analytics",
    "@nuxtjs/web-vitals",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-plausible", "@nuxt/content", "@nuxtjs/i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        loader: "yaml-loader",
      });
    },
  },

  plausible: {
    // see configuration section
    domain: "www.bytebase.com",
  },

  googleAnalytics: {
    id: "UA-202806916-1",
  },

  env: {
    // GA4 stream id. https://analytics.google.com/analytics/web/#/a202806916p295313050/admin/streams/table/3080936169
    gtagKey: "G-4BZ4JH7449",
    hostname: "https://www.bytebase.com",
    version: VERSION,
  },

  // Using hooks to solve static prefix problem in dev server and built.
  hooks: {
    // redirect /static to / in dev server.
    render: {
      setupMiddleware(app) {
        const staticPath = "/static";

        app.use(staticPath, (req, res) => {
          res.writeHead(302, {
            location: req.originalUrl.slice(staticPath.length),
          });
          res.end();
        });
      },
    },
    // copy /static to ./dist/static in generation folder.
    generate: {
      async done(generator) {
        // Generate `sitemap.xml` with chinese blogs.
        const chineseBlogRouteList = await getChineseBlogRouteList();
        generateSitemap(
          Array.from(generator.generatedRoutes).concat(chineseBlogRouteList)
        );

        // Patch docs index objects of algolia.
        try {
          await generateSearchIndex();
        } catch (error) {
          // We already have a complete data.
          // So if failed in patch, then do nothing.
          console.log("error", error);
        }

        console.log("Copying ./static folder to ./dist/static/");
        try {
          await fse.copy("./static", "./dist/static");
          console.log("Copy succeed!");
        } catch (error) {
          console.error("Copy failed, err", error);
        }
      },
    },
    "content:file:beforeParse": (file) => {
      if (
        file.extension === ".md" &&
        ["docs", "blog"].some((dir) => file.path.includes(dir))
      ) {
        file.data = file.data.replace(/%%bb_version%%/g, VERSION);
        // Use `$$bb_version$$` to escape `%%bb_version%%`.
        file.data = file.data.replace(/\$\$bb_version\$\$/g, "%%bb_version%%");
      }
    },
    "content:file:beforeInsert": (document) => {
      if (document.extension === ".md") {
        const removeMd = require("remove-markdown");
        document.bodyPlainText = removeMd(document.text);

        if (document.tags) {
          document.tags = document.tags.split(", ");
        } else {
          const invalidTags = ["en", "zh"];
          const rawTags = document.dir.split("/");
          const tags = [];
          for (const tag of rawTags) {
            if (tag && !invalidTags.includes(tag)) {
              tags.push(tag);
            }
          }
          document.tags = tags;
        }

        for (const key of Object.keys(document)) {
          if (key !== camelCase(key)) {
            document[camelCase(key)] = document[key];
          }
        }
      }
    },
  },
};
