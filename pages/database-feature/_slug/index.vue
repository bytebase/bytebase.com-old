<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-xl text-center lg:max-w-5xl mx-auto">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        {{ databaseFeature.feature }} for {{ databaseFeature.database }} with
        <span
          class="text-blue-600"
          style="
            box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
              rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
          "
          >Bytebase</span
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
        class="mt-16 lg:mt-24 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        {{ $t("common.features") }}
      </h2>
      <FeatureSection />
    </div>
  </main>
</template>

<script lang="ts">
import { databaseFeatureForSlug } from "../../../common/matrix";

export default {
  async asyncData({ params }: any) {
    return { databaseFeature: databaseFeatureForSlug(params.slug) };
  },
  head() {
    const databaseFeature = (this as any).databaseFeature;
    const title = `${databaseFeature.feature} for ${databaseFeature.database}`;

    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: title,
        },
        {
          hid: databaseFeature.feature,
          name: databaseFeature.feature,
          content: databaseFeature.feature,
        },
        {
          hid: databaseFeature.database,
          name: databaseFeature.database,
          content: databaseFeature.database,
        },
      ],
    };
  },
};
</script>
