<template>
  <header class="relative pt-5 pb-3 w-full">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6">
      <div
        class="sm:hidden mb-2 flex items-center justify-between w-full sm:w-auto"
      >
        <NuxtLink to="/">
          <span class="sr-only">Bytebase</span>
          <img class="h-6 sm:h-8 w-auto" src="~/assets/logo-full.svg" alt="" />
        </NuxtLink>
      </div>
      <nav
        class="relative w-full flex items-center justify-between sm:h-10 lg:justify-center lg:grid lg:grid-cols-3"
        aria-label="Global"
      >
        <div class="hidden sm:flex flex-row justify-start items-center">
          <div class="flex items-center justify-between w-full sm:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Bytebase</span>
              <img
                class="h-6 sm:h-8 w-auto"
                src="~/assets/logo-full.svg"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-center text-sm sm:text-xl font-semibold space-x-2 sm:space-x-6"
        >
          <NuxtLink
            to="/blog"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('blog.header')"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/docs"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('docs.header')"
            >Docs</NuxtLink
          >
          <NuxtLink
            to="/pricing"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('pricing.header')"
            >Pricing</NuxtLink
          >
        </div>
        <div class="z-10 flex flex-row items-center justify-end">
          <div class="relative flex flex-row" style="margin-top: 6px">
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
            >
              Demo
            </a>
            <NuxtLink
              to="/docs/install/install-with-docker"
              class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600"
              @click.native="track('deploy.header')"
              >Deploy now</NuxtLink
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const { $ga } = useContext() as any;

    const track = (name: string) => {
      trackEvent(name);

      const parts = name.split(".");
      $ga.event({
        eventCategory: parts[0],
        eventLabel: parts[1],
      });
    };

    return { track };
  },
});
</script>
