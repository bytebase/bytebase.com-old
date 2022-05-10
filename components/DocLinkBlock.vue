<template>
  <div
    class="w-full p-4 flex flex-row justify-start items-start border rounded-lg my-4 shadow hover:border-accent hover:text-accent"
  >
    <nuxt-link
      :to="localePath(url)"
      class="w-full flex flex-row justify-start items-center"
    >
      <span class="font-bold text-3xl mr-4">📖</span>
      <span class="font-bold">
        {{ title }}
      </span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    url: {
      type: String,
      default: "/docs",
    },
    title: {
      type: String,
      default: "Bytebase Documentation",
    },
  },
  setup() {
    // do nth
  },
});
</script>
