<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h1
        class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold text-gray-900"
      >
        {{ $t("usecase.techlead.title") }}
      </h1>
      <h2
        class="mt-4 tracking-tight max-w-5xl text-left text-2xl sm:text-3xl text-gray-500 lg:mx-auto"
      >
        {{ $t("usecase.techlead.description") }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "usecase",
  head: {
    title: "Bytebase for Tech Lead",
    meta: [
      {
        hid: "Bytebase for Tech Lead",
        name: "Bytebase for Tech Lead",
        content:
          "Teams using Bytebase will automatically follow industry best practice for managing database schema changes. Tech leads will see an improved development velocity and reduced outages caused by database changes.",
      },
    ],
  },
});
</script>
