<template>
  <div class="page-wrapper absolute w-full h-screen overflow-hidden">
    <div class="w-full bg-white z-20" :class="stickyHeaderAdditionClass">
      <Header />
    </div>
    <div
      ref="contentElementRef"
      class="pt-8 sm:pt-16 px-4 w-full h-auto overflow-y-auto overflow-x-hidden"
    >
      <main class="max-w-7xl mx-auto px-4">
        <QrcodeBlock />
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
          {{ $t("common.features") }}
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
import QrcodeBlock from "~/components/QrcodeBlock.vue";

export default defineComponent({
  components: { QrcodeBlock },
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
