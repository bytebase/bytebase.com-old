<template>
  <div
    ref="pageWrapperRef"
    class="relative w-full h-screen overflow-x-hidden overflow-y-auto"
  >
    <div
      class="sticky top-0 w-full bg-white z-20"
      :class="stickyHeaderAdditionClass"
    >
      <MainBanner class="mb-2" />
      <TheHeader />
    </div>
    <main class="mt-8 mx-auto">
      <Nuxt />
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
