<template>
  <div class="page-wrapper absolute w-full h-screen overflow-hidden">
    <div class="w-full bg-white z-20" :class="stickyHeaderAdditionClass">
      <MainBanner class="mb-2" />
      <Header />
    </div>
    <div
      ref="contentElementRef"
      class="w-full pt-8 h-auto overflow-y-auto overflow-x-hidden"
    >
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
  watch,
  watchEffect,
} from "@nuxtjs/composition-api";
import { useCookie } from "~/plugin/cookie";
import { useSegment } from "~/plugin/segment";

export default defineComponent({
  setup() {
    const route = useRoute();
    const contentElementRef = ref<HTMLDivElement>();
    const stickyHeaderAdditionClass = ref<string>();

    onMounted(() => {
      useCookie().setURLParams();

      watchEffect(() => {
        useSegment().analytics?.page(route.value.name);
      });

      if (contentElementRef.value) {
        contentElementRef.value.addEventListener("scroll", () => {
          const scrollTop = contentElementRef.value?.scrollTop as number;
          if (scrollTop > 0) {
            stickyHeaderAdditionClass.value = "shadow";
          } else {
            stickyHeaderAdditionClass.value = "";
          }
        });
      }
    });

    watch(
      () => route.value.path,
      () => {
        contentElementRef.value?.scrollTo({
          top: 0,
        });
      }
    );

    return {
      contentElementRef,
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
    auto;
}
</style>
