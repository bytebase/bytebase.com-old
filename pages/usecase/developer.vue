<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h1
        class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold text-gray-900"
      >
        {{ $t("usecase.developer.title") }}
      </h1>
      <h2
        class="mt-4 tracking-tight max-w-5xl text-left text-2xl sm:text-3xl text-gray-500 lg:mx-auto"
      >
        {{ $t("usecase.developer.description") }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "usecase",
  head: {
    title: "Bytebase for Developer",
    meta: [
      {
        hid: "Bytebase for Developer",
        name: "Bytebase for Developer",
        content:
          "Regardless of working as an IC in a team or managing your own side project, developers using Bytebase will have a holistic view of all the related database info, the ongoing database schema change tasks and the past database migration history.",
      },
    ],
  },
});
</script>
