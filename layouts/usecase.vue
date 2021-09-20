<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mt-8 sm:mt-16 max-w-7xl mx-auto px-4">
      <Nuxt />
      <ActionSection class="sm:justify-center" :moduleName="'usercase'" />
      <h2
        class="mt-16 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Features
      </h2>
      <FeatureSection />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},
});
</script>
