<template>
  <header class="relative pt-5 pb-3 w-full">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6">
      <div
        class="sm:hidden mb-2 flex items-center justify-between w-full sm:w-auto"
      >
        <nuxt-link :to="localePath('/')">
          <span class="sr-only">Bytebase</span>
          <img class="h-7 sm:h-8 w-auto" src="~/assets/logo-full.svg" alt="" />
        </nuxt-link>
        <div class="flex relative sm:hidden flex-row" style="margin-top: 6px">
          <div
            class="-mt-5 h-10 w-16"
            :style="{
              backgroundImage: 'url(/imgs/starus.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }"
          ></div>
          <!-- Place this tag where you want the button to render. -->
          <a
            class="github-button"
            href="https://github.com/bytebase/bytebase"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Star bytebase/bytebase on GitHub"
            >Star</a
          >
        </div>
      </div>
      <nav
        class="relative w-full flex items-center justify-between sm:h-10 lg:justify-center lg:grid lg:grid-cols-3"
        aria-label="Global"
      >
        <div
          class="hidden sm:flex flex-shrink-0 flex-row justify-start items-center sm:mr-8 lg:mr-0"
        >
          <nuxt-link :to="localePath('/')" class="flex-shrink-0">
            <span class="sr-only">Bytebase</span>
            <img
              class="h-6 sm:h-8 w-auto"
              src="~/assets/logo-full.svg"
              alt=""
            />
          </nuxt-link>
        </div>
        <div
          class="flex flex-row items-center justify-center text-sm sm:text-xl font-semibold space-x-2 sm:space-x-6"
        >
          <div
            class="relative flyout-menu-trigger hidden text-gray-700 hover:text-gray-500 sm:flex"
          >
            <div
              class="flex flex-row justify-start items-center flex-nowrap cursor-pointer"
            >
              <span class="whitespace-nowrap">{{
                $t("header.solutions")
              }}</span>
            </div>
            <div
              class="flyout-menu-wrapper hidden absolute top-4 -left-4 pt-4 w-auto h-auto"
            >
              <div
                class="flyout-menu-container bg-white w-auto h-auto p-3 px-5 shadow-lg rounded flex-col justify-start items-start"
              >
                <nuxt-link
                  :to="localePath('/usecase/dba')"
                  class="text-base font-normal whitespace-nowrap leading-8 text-gray-700 hover:text-gray-500 hover:underline"
                  >For DBA</nuxt-link
                >
                <nuxt-link
                  :to="localePath('/usecase/techlead')"
                  class="text-base font-normal whitespace-nowrap leading-8 text-gray-700 hover:text-gray-500 hover:underline"
                  >For Tech Lead</nuxt-link
                >
                <nuxt-link
                  :to="localePath('/usecase/developer')"
                  class="text-base font-normal whitespace-nowrap leading-8 text-gray-700 hover:text-gray-500 hover:underline"
                  >For Developer</nuxt-link
                >
              </div>
            </div>
          </div>
          <nuxt-link
            :to="localePath('/blog')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('blog.header')"
            >{{ $t("common.blog") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/docs')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('docs.header')"
            >{{ $t("common.docs") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/pricing')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('pricing.header')"
            >{{ $t("common.pricing") }}</nuxt-link
          >
        </div>
        <div class="z-10 flex flex-row items-center justify-end">
          <div class="hidden relative sm:flex flex-row" style="margin-top: 6px">
            <div
              class="-mt-5 h-10 w-16"
              :style="{
                backgroundImage: 'url(/imgs/starus.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }"
            ></div>
            <!-- Place this tag where you want the button to render. -->
            <a
              class="github-button"
              href="https://github.com/bytebase/bytebase"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Star bytebase/bytebase on GitHub"
              >Star</a
            >
          </div>
          <div class="transition-all flex flex-row">
            <a
              href="https://demo.bytebase.com?ref=bytebase.com"
              target="_blank"
              class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 border border-transparent text-sm font-medium rounded border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300"
              @click="track('demo.header')"
              >{{ $t("common.demo") }}</a
            >
            <nuxt-link
              :to="localePath('/docs/install/install-with-docker')"
              class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600"
              @click.native="track('deploy.header')"
              >{{ $t("header.deploy-now") }}</nuxt-link
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useContext,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import { useSegment } from "~/plugin/segment";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const { $ga } = useContext() as any;
    const analytics = ref();

    onMounted(() => {
      analytics.value = useSegment().analytics;
    });

    const track = (name: string) => {
      trackEvent(name);

      const parts = name.split(".");
      $ga.event({
        eventCategory: parts[0],
        eventLabel: parts[1],
      });
      // Segment
      analytics.value?.track(name);
    };

    return { track };
  },
});
</script>

<style scoped>
.flyout-menu-trigger:hover > .flyout-menu-wrapper {
  @apply flex;
}

.flyout-menu-container {
  box-shadow: 0 0 8px #0003;
}
</style>
