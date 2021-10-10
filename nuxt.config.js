import tailwindTypography from "@tailwindcss/typography";
import slug from "slug";
import {
  databaseFeatureList,
  databaseVCSList,
  databaseWebhookList,
} from "./common/type";
import { ALPHA_LIST } from "./common/glossary";

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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    linkExactActiveClass: "underline",
    linkActiveClass: "underline",
  },

  generate: {
    routes: glossaryRouteList()
      .concat(databaseFeatureRouteList())
      .concat(databaseVCSRouteList())
      .concat(webhookRouteList()),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

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
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-plausible"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
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
};
