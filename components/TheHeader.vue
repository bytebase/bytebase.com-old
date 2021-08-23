<template>
  <header class="relative pt-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center space-x-2"
        aria-label="Global"
      >
        <div
          class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Bytebase</span>
              <img class="h-6 md:h-8 w-auto" src="~/assets/logo.svg" alt="" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center justify-between space-x-2 md:space-x-8">
          <a
            href="https://demo.bytebase.com?ref=bytebase.com"
            target="_blank"
            @click="track('demo.header')"
            class="text-blue-600 text-base md:text-xl font-semibold"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >
            Demo
          </a>
          <NuxtLink
            to="/changelog"
            @click.native="track('changelog.header')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500 hover:underline whitespace-nowrap"
          >
            Changelog
          </NuxtLink>
          <NuxtLink
            to="/blog"
            @click.native="track('blog.header')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500 hover:underline whitespace-nowrap"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/jobs"
            @click.native="track('job.header')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500 hover:underline whitespace-nowrap"
          >
            Jobs🔥
          </NuxtLink>
          <a
            href="https://docs.bytebase.com?ref=bytebase.com"
            target="_blank"
            @click="track('doc.header')"
            class="flex text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
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
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/bytebase/bytebase?ref=bytebase.com"
            target="_blank"
            @click="track('github.header')"
            class="flex-shrink-0 md:hidden border-none rounded-full hover:opacity-80"
          >
            <img class="h-8 w-auto" src="~/assets/github_logo.png" alt="" />
          </a>
        </div>
        <div
          class="hidden md:flex absolute items-center justify-end right-0 space-x-4"
        >
          <a
            href="https://github.com/bytebase/bytebase?ref=bytebase.com"
            target="_blank"
            @click="track('github.header')"
            class="right-0 border-none rounded-full hover:opacity-80"
          >
            <img class="h-16 w-auto" src="~/assets/github_logo.png" alt="" />
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const track = (name: string) => {
      trackEvent(name);
    };

    return { track };
  },
});
</script>
