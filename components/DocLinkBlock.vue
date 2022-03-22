<template>
  <div
    class="w-full p-4 flex flex-row justify-start items-start border rounded-lg my-4 shadow hover:border-accent hover:text-accent"
  >
    <NuxtLink
      :to="{ path: url }"
      class="w-full flex flex-row justify-start items-center"
    >
      <span class="font-bold text-3xl mr-4">📖</span>
      <span class="font-bold">
        {{ title }}
      </span>
    </NuxtLink>
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

<style scoped>
.hint-content-container {
  margin-top: 2px;
}
</style>
