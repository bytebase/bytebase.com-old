<template>
  <div ref="pageWrapperRef" class="w-full relative overflow-hidden">
    <div
      class="sticky top-0 left-0 w-full z-20"
      :class="stickyHeaderAdditionClass"
    >
      <TheHeader />
    </div>
    <main class="mt-8 sm:mt-16 max-w-7xl mx-auto px-4">
      <Nuxt />
      <div class="flex mt-12 justify-center">
        <DatabaseBar />
      </div>
      <div class="mt-12 relative">
        <ScreenshotSection />
      </div>
      <h2
        class="mt-16 lg:mt-56 text-center text-3xl sm:text-5xl font-extrabold text-gray-900"
      >
        Features
      </h2>
      <FeatureSection />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const pageWrapperRef = ref<HTMLDivElement>();
    const stickyHeaderAdditionClass = ref<string>();

    onMounted(() => {
      if (pageWrapperRef.value) {
        pageWrapperRef.value.addEventListener("scroll", () => {
          const scrollTop = pageWrapperRef.value?.scrollTop as number;
          if (scrollTop > 0) {
            stickyHeaderAdditionClass.value = "shadow";
          } else {
            stickyHeaderAdditionClass.value = "";
          }
        });
      }
    });

    return {
      pageWrapperRef,
      stickyHeaderAdditionClass,
    };
  },
});
</script>

<style scoped>
.page-wrapper {
  @apply grid;
  grid-template-rows:
    minmax(min-content, max-content)
    auto auto;
}
</style>
