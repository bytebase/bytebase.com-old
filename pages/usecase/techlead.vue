<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h1
        class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
      >
        Improve team velocity and reduce risk
      </h1>
      <h2 class="mt-4 max-w-3xl text-left text-xl text-gray-500 lg:mx-auto">
        Teams using Bytebase will automatically follow industry best practice
        for managing database schema changes. Tech leads will see an improved
        development velocity and reduced outages caused by database changes.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  layout: "usecase",
  setup() {
    const { title } = useMeta();
    title.value = "Bytebase for Tech Lead";
  },
});
</script>
