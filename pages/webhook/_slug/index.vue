<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-xl text-center lg:max-w-6xl mx-auto">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        Version control your
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700"
          >{{ databaseWebhook.database }}</span
        >
        schema with
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-700"
          >{{ databaseWebhook.vcs }}</span
        >
      </h1>
      <h1
        class="mt-2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        Get status update from
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-700"
          >{{ databaseWebhook.webhook }}</span
        >
      </h1>
      <div class="mt-8 flex text-center justify-center">
        <img
          class="object-contain h-96 md:h-144"
          src="~/assets/illustration/main.webp"
          alt=""
        />
      </div>
      <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
        Bytebase is an
        <a href="https://github.com/bytebase/bytebase" target="__blank"
          >open source</a
        >, web-based database schema change and version control tool for teams.
        It offers a web-based collaboration workspace to help
        <span
          class="text-blue-600"
          style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >DBAs</span
        >
        and
        <span
          class="text-blue-600"
          style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >Developers</span
        >
        manage the lifecycle of application database schemas.
      </h2>
    </div>
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
      <div class="flex mt-6 justify-center">
        <DatabaseBar />
      </div>
      <h2
        class="mt-16 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Features
      </h2>
      <FeatureSection />
      <div class="border mt-8">
        <ActionSection
          class="sm:justify-center"
          :moduleName="'feature-detail'"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { databaseWebhookForSlug } from "../../../common/type";

export default {
  head() {
    const title = `${
      (this as any).databaseWebhook.database
    } schema version control with ${(this as any).databaseWebhook.vcs} and ${
      (this as any).databaseWebhook.webhook
    }`;
    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: title,
        },
        {
          hid: (this as any).databaseWebhook.database,
          name: (this as any).databaseWebhook.database,
          content: (this as any).databaseWebhook.database,
        },
        {
          hid: (this as any).databaseWebhook.vcs,
          name: (this as any).databaseWebhook.vcs,
          content: (this as any).databaseWebhook.vcs,
        },
        {
          hid: (this as any).databaseWebhook.webhook,
          name: (this as any).databaseWebhook.webhook,
          content: (this as any).databaseWebhook.webhook,
        },
        {
          hid: (this as any).databaseWebhook.webhook,
          name: (this as any).databaseWebhook.webhook,
          content: (this as any).databaseWebhook.webhook,
        },
      ],
    };
  },
  async asyncData({ params }: any) {
    return { databaseWebhook: databaseWebhookForSlug(params.slug) };
  },
  methods: {},
};
</script>
