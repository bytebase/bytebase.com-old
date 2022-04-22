<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-xl text-center lg:max-w-5xl mx-auto">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        Bytebase - {{ databaseAlternative.alternative }} alternative for
        {{ databaseAlternative.database }} version control.
      </h1>
      <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
        Unlike {{ databaseAlternative.alternative }}, Bytebase is an
        <a href="https://github.com/bytebase/bytebase" target="__blank"
          >open source</a
        >,
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-700"
          >web-based</span
        >
        database schema change and version control tool for
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-700"
          >teams</span
        >. It offers a web-based
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-700"
          >collaboration</span
        >
        workspace to help
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
          :module-name="'compare-detail'"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { databaseAlternativeForSlug } from "../../../common/matrix";

export default {
  async asyncData({ params }: any) {
    return { databaseAlternative: databaseAlternativeForSlug(params.slug) };
  },
  head() {
    const databaseAlternative = (this as any).databaseAlternative;
    const title = `Bytebase - ${databaseAlternative.alternative} alternative for ${databaseAlternative.database} version control`;

    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: title,
        },
        {
          hid: databaseAlternative.database,
          name: databaseAlternative.database,
          content: databaseAlternative.database,
        },
        {
          hid: databaseAlternative.alternative,
          name: databaseAlternative.alternative,
          content: databaseAlternative.alternative,
        },
      ],
    };
  },
};
</script>
