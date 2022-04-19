<template>
  <header class="relative pt-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="sm:hidden mb-2 flex items-center justify-between w-full sm:w-auto"
      >
        <NuxtLink to="/">
          <span class="sr-only">Bytebase</span>
          <img class="h-6 sm:h-8 w-auto" src="~/assets/logo-full.svg" alt="" />
        </NuxtLink>
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
      <nav
        class="relative flex items-center justify-between sm:h-10 sm:justify-center"
        aria-label="Global"
      >
        <div
          class="hidden sm:flex items-center flex-1 sm:absolute sm:inset-y-0 sm:left-0"
        >
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
          class="flex items-center justify-between text-sm sm:text-xl font-semibold space-x-2 sm:space-x-8"
        >
          <NuxtLink
            to="/pricing"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('pricing.header')"
            >Pricing</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('blog.header')"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/changelog"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('changelog.header')"
            >Changelog</NuxtLink
          >
          <NuxtLink
            to="/docs"
            class="text-gray-700 hover:text-gray-500 hover:underline whitespace-nowrap"
            @click.native="track('docs.header')"
            >Docs</NuxtLink
          >
        </div>
        <div class="hidden sm:flex absolute items-center justify-end right-0">
          <div
            class="-mt-8 h-10 w-16"
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
            @click="track('github.header')"
            >Star</a
          >
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
        eventLabe: parts[1],
      });
    };

    return { track };
  },
});
</script>
