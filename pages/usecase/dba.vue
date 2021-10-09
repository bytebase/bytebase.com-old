<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h1
        class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold text-gray-900"
      >
        10x DBA operational efficiency
      </h1>
      <h2
        class="mt-4 tracking-tight max-w-5xl text-left text-2xl sm:text-3xl text-gray-500 lg:mx-auto"
      >
        Bytebase provides a collaborative web-console and cohensive workflow to
        allow DBA to manage database tasks and handle developer tickets much
        more efficently than traditonal tools.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Bytebase for DBA",
    meta: [
      {
        hid: "Bytebase for DBA",
        name: "Bytebase for DBA",
        content:
          "Bytebase provides a collaborative web-console and cohensive workflow to allow DBA to manage database tasks and handle developer tickets much more efficently than traditonal tools.",
      },
    ],
  },
  layout: "usecase",
  setup() {},
});
</script>
