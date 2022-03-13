<template>
  <div class="relative overflow-hidden">
    <MainBanner class="mb-2" />
    <TheHeader />
    <main class="mt-8 mx-auto">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "DefaultLayout",
});
</script>
