<template>
  <div class="page-wrapper absolute w-full h-screen overflow-hidden">
    <div class="w-full bg-white z-20" :class="stickyHeaderAdditionClass">
      <MainBanner class="mb-2 hidden sm:block" />
      <Header />
      <div
        class="max-w-full w-full mx-auto text-base px-4 sm:px-6 pb-2 pt-2 lg:pb-4 hidden flex-wrap sm:grid sm:grid-flow-col justify-start lg:justify-center sm:space-x-4 lg:space-x-8"
      >
        <nuxt-link :to="localePath('/')" class="nav-link">
          <span>Home</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/database-glossary')" class="nav-link">
          <span>Database Glossary</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/database-review-guide')" class="nav-link">
          <span>Database Review Guide</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/brand')" class="nav-link">
          <span>Brand</span>
        </nuxt-link>
      </div>
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

.nav-link {
  @apply text-base leading-8 text-gray-700 no-underline whitespace-nowrap hover:text-gray-500 mr-4 sm:mr-0;
}
</style>
