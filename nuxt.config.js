import tailwindTypography from "@tailwindcss/typography";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import slug from "slug";
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

const docsRouteList = async () => {
  const { $content } = require("@nuxt/content");
  const documentList = await $content("", { deep: true })
    .sortBy("order")
    .fetch();
  const routeList = [];
  for (const document of documentList) {
    routeList.push(`docs${document.path}`);
  }
  return routeList;
};

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
    title: "Bytebase - Database Schema Change and Version Control",
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
          "Open source, web-based, zero-config, dependency-free database schema change and version control for Developers and DBAs",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  router: {
    linkActiveClass: "router-active-link underline",
    linkExactActiveClass: "router-exact-active-link underline",
    prefetchPayloads: false,
  },

  content: {
    dir: "docs",
    liveEdit: false,
  },

  generate: {
    routes: async () => {
      const postRoutelist = [];
      const postList = await getPosts([
        "Changelog",
        "Announcement",
        "Education",
        "Chinese",
      ]);
      for (const post of postList) {
        if (post.tags.find((item) => item.name == "Changelog")) {
          postRoutelist.push(`changelog/${post.slug}`);
        } else {
          postRoutelist.push(`blog/${post.slug}`);
        }
      }

      return postRoutelist
        .concat(glossaryRouteList())
        .concat(databaseFeatureRouteList())
        .concat(databaseVCSRouteList())
        .concat(await docsRouteList())
        .concat(webhookRouteList())
        .concat(softwareRouteList())
        .concat(compareRouteList());
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/variables.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-plausible", "@nuxtjs/sitemap", "@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      plugins: [tailwindTypography, tailwindAspectRatio],
      purge: {
        // "bg-", "text-" are used by tag
        safelist: [/^bg-/, /^text-/],
      },
      theme: {
        extend: {
          spacing: {
            112: "28rem",
            128: "32rem",
            144: "36rem",
            160: "40rem",
            176: "44rem",
            192: "48rem",
            208: "52rem",
          },
        },
      },
    },
  },

  plausible: {
    // see configuration section
    domain: "bytebase.com",
  },

  googleAnalytics: {
    id: "UA-202806916-1",
  },

  sitemap: {
    hostname: "https://bytebase.com",
    gzip: true,
  },

  env: {
    segmentKey: "KWLZljyNlxBs5bkS5xaHN1RL0e5HNXxL"
  }
};
