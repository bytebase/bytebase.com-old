<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-xl text-center lg:max-w-5xl mx-auto">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        {{ databaseSoftware.software }}
        {{ databaseSoftware.feature }} for
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700"
          >{{ databaseSoftware.database }}</span
        >
      </h1>
      <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
        Bytebase is an
        <a href="https://github.com/bytebase/bytebase" target="__blank"
          >open source</a
        >, web-based database schema change and version control tool for teams.
        It offers a web-based collaboration workspace to help
        <span
          class="text-blue-600"
          style="
            box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
              rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
          "
          >DBAs</span
        >
        and
        <span
          class="text-blue-600"
          style="
            box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
              rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
          "
          >Developers</span
        >
        manage the lifecycle of application database schemas.
      </h2>
    </div>
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
      <div class="flex mt-6 justify-center">
        <DatabaseBar />
      </div>
      <div class="mt-8">
        <ActionSection
          class="sm:justify-center"
          :module-name="'feature-detail'"
        />
      </div>
      <div class="mt-8 relative">
        <ScreenshotSection />
      </div>
      <h2
        class="mt-16 lg:mt-56 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Features
      </h2>
      <FeatureSection />
      <div class="border mt-8">
        <ActionSection
          class="sm:justify-center"
          :module-name="'software-detail'"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { databaseSoftwareForSlug } from "../../../common/matrix";

export default {
  async asyncData({ params }: any) {
    return { databaseSoftware: databaseSoftwareForSlug(params.slug) };
  },
  head() {
    const databaseSoftware = (this as any).databaseSoftware;
    const title = `${databaseSoftware.software} ${databaseSoftware.feature} for ${databaseSoftware.database}`;

    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: title,
        },
        {
          hid: databaseSoftware.feature,
          name: databaseSoftware.feature,
          content: databaseSoftware.feature,
        },
        {
          hid: databaseSoftware.database,
          name: databaseSoftware.database,
          content: databaseSoftware.database,
        },
        {
          hid: databaseSoftware.software,
          name: databaseSoftware.software,
          content: databaseSoftware.software,
        },
      ],
    };
  },
  methods: {},
};
</script>
