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
            class="text-blue-600 text-base md:text-xl  font-semibold"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >
            Demo
          </a>
          <a
            href="https://docs.bytebase.com?ref=bytebase.com"
            target="_blank"
            @click="track('doc.header')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
          >
            Docs
          </a>
          <a
            href="https://blog.bytebase.com?ref=bytebase.com"
            target="_blank"
            @click="track('blog.header')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
          >
            Blog
          </a>
          <NuxtLink
            to="/about"
            @click.native="track('page.about')"
            class="text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/jobs"
            @click.native="track('page.jobs')"
            class="hidden sm:flex text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
          >
            Jobs 🧲
          </NuxtLink>
          <NuxtLink
            to="/jobs"
            @click.native="track('page.jobs')"
            class="sm:hidden text-gray-700 text-base md:text-xl font-semibold hover:text-gray-500"
          >
            Jobs
          </NuxtLink>
          <a
            href="https://github.com/bytebase/bytebase?ref=bytebase.com"
            target="_blank"
            @click="track('github.header')"
            class="md:hidden border-none rounded-full hover:opacity-80"
          >
            <img class="h-8 w-auto" src="~/assets/logo.png" alt="" />
          </a>
        </div>
        <a
          href="https://github.com/bytebase/bytebase?ref=bytebase.com"
          target="_blank"
          @click="track('github.header')"
          class="hidden md:flex absolute items-center justify-end right-0 mt-2 border-none rounded-full hover:opacity-80"
        >
          <img class="md:h-16 lg:h-20 w-auto" src="~/assets/logo.png" alt="" />
        </a>
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
