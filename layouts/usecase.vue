<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mt-8 sm:mt-16 max-w-7xl mx-auto px-4">
      <Nuxt />
      <div class="mt-8 flex justify-center">
        <img
          class="object-contain h-96 md:h-144"
          src="~/assets/illustration/main.webp"
          alt=""
        />
      </div>
      <div class="flex mt-6 justify-center">
        <DatabaseBar />
      </div>
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
