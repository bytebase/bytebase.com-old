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
          <!-- Using backgroud-image is to prevent it as icon when sharing in wechat -->
          <div
            class="-mt-5 h-10 w-16"
            :style="{
              backgroundImage: `url(${require('~/assets/starus.webp')})`,
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
            @click="track('starus.header')"
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
          class="flex flex-row items-center justify-center text-sm sm:text-lg font-semibold space-x-2 sm:space-x-4"
        >
          <nuxt-link
            v-if="currentLocale === 'zh'"
            :to="localePath('/demo')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('demo.header')"
            >{{ $t("common.live-demo") }}</nuxt-link
          >
          <a
            v-else
            href="https://demo.bytebase.com?ref=bytebase.com"
            target="_blank"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click="track('demo')"
          >
            {{ $t("common.live-demo") }}
          </a>
          <nuxt-link
            :to="localePath('/tutorial')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('tutorial.header')"
            >{{ $t("common.tutorials") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/docs/introduction/what-is-bytebase')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('docs.header')"
            >{{ $t("common.docs") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/blog')"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('blog.header')"
            >{{ $t("common.blog") }}</nuxt-link
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
                backgroundImage: `url(${require('~/assets/starus.webp')})`,
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
              @click="track('starus.header')"
              >Star</a
            >
          </div>
          <div class="transition-all flex flex-row">
            <nuxt-link
              :to="localePath('/docs/get-started/install/deploy-with-docker')"
              class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 border border-transparent text-sm font-medium rounded border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300"
              >{{ $t("common.self-host") }}</nuxt-link
            >
            <button
              class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600"
              @click="loginToHub"
            >
              {{ $t("common.signup-for-cloud") }}
            </button>
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
  watchEffect,
  computed,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import { Metric, useSegment } from "~/plugin/segment";
import { useAuth0 } from "~/plugin/auth0";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const { $ga, app } = useContext() as any;
    const analytics = ref<Metric>();

    const currentLocale = computed(() => app.i18n.locale);

    onMounted(() => {
      watchEffect(() => {
        analytics.value = useSegment().analytics;
      });
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

    const loginToHub = () => {
      track("saas");
      useAuth0().loginWithRedirect({
        redirectUrl: `https://hub.bytebase.com/workspace?ref=${window.location.href}`,
      });
    };

    return { track, currentLocale, loginToHub };
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
