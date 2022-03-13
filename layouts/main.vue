<template>
  <div class="relative overflow-hidden">
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "MainLayout",
});
</script>
