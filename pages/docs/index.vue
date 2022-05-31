<template>
  <div>
    <!-- null -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "content",
  setup() {
    onMounted(() => {
      // `/docs` is an empty page as we need to redirect to `/docs/introduction/what-is-bytebase`.
      window.location.href = "/docs/introduction/what-is-bytebase";
    });
  },
});
</script>
