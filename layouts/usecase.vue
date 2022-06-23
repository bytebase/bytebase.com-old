<template>
  <div class="page-wrapper absolute w-full h-screen overflow-hidden">
    <div class="w-full bg-white z-20" :class="stickyHeaderAdditionClass">
      <Header />
    </div>
    <div
      ref="contentElementRef"
      class="pt-8 sm:pt-16 w-full h-auto overflow-y-auto overflow-x-hidden"
    >
      <main class="max-w-7xl mx-auto px-4">
        <Nuxt />
        <div class="flex mt-6 justify-center">
          <DatabaseBar />
        </div>
        <ActionSection
          class="mt-16 sm:justify-center"
          :module-name="'usercase'"
        />
        <div class="mt-8 relative">
          <ScreenshotSection />
        </div>
        <h2
          class="mt-16 lg:mt-56 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          Features
        </h2>
        <FeatureSection />
      </main>
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
import { useCookie } from "../plugin/cookie";
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

    watch(route, () => {
      contentElementRef.value?.scrollTo({
        top: 0,
      });
    });

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
