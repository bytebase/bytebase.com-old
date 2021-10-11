<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-xl text-center lg:max-w-5xl mx-auto">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        Bytebase - {{ databaseAlternative.alternative }} alternative for
        {{ databaseAlternative.database }} version control.
      </h1>
      <div class="mt-8 flex text-center justify-center">
        <img
          class="object-contain h-96 md:h-144"
          src="~/assets/illustration/main.webp"
          alt=""
        />
      </div>
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
          :moduleName="'compare-detail'"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { databaseAlternativeForSlug } from "../../../common/matrix";

export default {
  head() {
    const title = `Bytebase - ${
      (this as any).databaseAlternative.alternative
    } alternative for ${
      (this as any).databaseAlternative.database
    } version control`;
    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: title,
        },
        {
          hid: (this as any).databaseAlternative.database,
          name: (this as any).databaseAlternative.database,
          content: (this as any).databaseAlternative.database,
        },
        {
          hid: (this as any).databaseAlternative.alternative,
          name: (this as any).databaseAlternative.alternative,
          content: (this as any).databaseAlternative.alternative,
        },
      ],
    };
  },
  async asyncData({ params }: any) {
    return { databaseAlternative: databaseAlternativeForSlug(params.slug) };
  },
  methods: {},
};
</script>
