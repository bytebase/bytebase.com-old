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
          <a
            href="https://docs.bytebase.com?ref=bytebase.com"
            target="_blank"
            class="flex text-gray-700 hover:text-gray-500"
            @click="track('doc.header')"
          >
            Docs
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div class="hidden sm:flex absolute items-center justify-end right-0">
          <img class="-mt-8 h-10 w-auto" src="~/assets/starus.png" alt="" />
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
