import fse from "fs-extra";
import slug from "slug";
import { camelCase } from "lodash";
import {
  databaseFeatureList,
  databaseVCSList,
  databaseWebhookList,
  databaseSoftwareList,
  databaseAlternativeList,
} from "./common/matrix";
import { ALPHA_LIST } from "./common/glossary";
import { getPosts } from "./api/posts";

function glossaryRouteList() {
  const list = [];
  for (const alpha of ALPHA_LIST) {
    for (const glossary of alpha.list) {
      list.push(`database-glossary/${slug(glossary.name)}`);
    }
  }
  return list;
}

function databaseFeatureRouteList() {
  const list = [];
  for (const feature of databaseFeatureList()) {
    list.push(`database-feature/${feature.slug}`);
  }
  return list;
}

function databaseVCSRouteList() {
  const list = [];
  for (const feature of databaseVCSList()) {
    list.push(`vcs/${feature.slug}`);
  }
  return list;
}

function webhookRouteList() {
  const list = [];
  for (const webhook of databaseWebhookList()) {
    list.push(`webhook/${webhook.slug}`);
  }
  return list;
}

function softwareRouteList() {
  const list = [];
  for (const software of databaseSoftwareList()) {
    list.push(`software/${software.slug}`);
  }
  return list;
}

function compareRouteList() {
  const list = [];
  for (const compare of databaseAlternativeList()) {
    list.push(`compare/${compare.slug}`);
  }
  return list;
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bytebase - Safe Database Schema Change and Version Control",
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
    ],
  },

  router: {
    linkActiveClass: "router-active-link underline",
    linkExactActiveClass: "router-exact-active-link underline",
    prefetchPayloads: false,
  },

  content: {
    dir: "content",
    liveEdit: false,
  },

  i18n: {
    defaultLocale: "en",
    lazy: true,
    seo: true,
    langDir: "locales/",
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
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  generate: {
    routes: async () => {
      const postRoutelist = [];
      const postList = await getPosts([
        "Changelog",
        "Announcement",
        "Education",
        "Hidden",
      ]);
      for (const post of postList) {
        if (post.tags.find((item) => item.name == "Changelog")) {
          postRoutelist.push(`changelog/${post.slug}`);
        } else {
          postRoutelist.push(`blog/${post.slug}`);
        }
      }

      return []
        .concat(postRoutelist)
        .concat(glossaryRouteList())
        .concat(databaseFeatureRouteList())
        .concat(databaseVCSRouteList())
        .concat(webhookRouteList())
        .concat(softwareRouteList())
        .concat(compareRouteList());
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/variables.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Plugin for vue-gtag
    "~/plugin/vue-gtag",
    "~/plugin/vue-instantsearch.js",
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
  modules: [
    "vue-plausible",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-instantsearch", "instantsearch.js/es"],
  },

  plausible: {
    // see configuration section
    domain: "www.bytebase.com",
  },

  googleAnalytics: {
    id: "UA-202806916-1",
  },

  sitemap: {
    hostname: "https://www.bytebase.com",
    gzip: true,
  },

  env: {
    segmentKey: "KWLZljyNlxBs5bkS5xaHN1RL0e5HNXxL",
    // GA4 stream id. https://analytics.google.com/analytics/web/#/a202806916p295313050/admin/streams/table/3080936169
    gtagKey: "G-4BZ4JH7449",
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
      async done() {
        try {
          // Patch docs index objects of algolia.
          const { $content } = require("@nuxt/content");
          const data = await $content("docs", {
            deep: true,
          })
            .where({ slug: { $regex: /^(?!_)/ } })
            .fetch();

          const algoliasearch = require("algoliasearch");
          const client = algoliasearch(
            "2M7XI1QIDY",
            process.env.ALGOLIA_ADMIN_API_KEY
          );

          const index = client.initIndex("bytebase-docs");
          await index.clearObjects();
          await index.saveObjects(
            data.map((item) => {
              const DOC_PATH_PREFIX = "/docs";
              let path = item.path;
              if (path.startsWith(DOC_PATH_PREFIX)) {
                path = path.slice(DOC_PATH_PREFIX.length);
              }

              return {
                objectID: path,
                path: path,
                slug: item.slug,
                title: item.title,
                tags: item.tags,
                bodyPlainText: item.bodyPlainText,
              };
            })
          );
        } catch (error) {
          // We already have a complete data.
          // So if failed in patch, then do nothing.
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
