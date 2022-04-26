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
      // `/docs` is an empty page as we need to redirect to `/docs/what-is-bytebase`.
      window.location.href = "/docs/what-is-bytebase";
    });
  },
});
</script>
