<template>
  <span class="items-center flex justify-center">
    <div class="flex flex-col">
      <span
        class="text-center text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
        >{{ $t("slogan.change-query-secure-one-place") }}</span
      >
      <div class="mt-12 rounded-xl">
        <img src="~/assets/with-vs-without.webp" alt="With vs Without" />
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // do nth
  },
});
</script>
