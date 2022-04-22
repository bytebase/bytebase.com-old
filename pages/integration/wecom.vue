<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
    <div
      class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
    >
      <h1>
        <span
          class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
        >
          <span class="block text-gray-900">WeCom (企业微信) + Bytebase</span>
        </span>
      </h1>
      <h2
        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
      >
        Bytebase supports webhook to post database schema related events to the
        configured WeCom group. Those webhook events are specifically customized
        for WeCom in order to display the optimal format.
      </h2>
      <div
        class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
      >
        <ActionSection :module-name="'integration'" />
      </div>
    </div>
    <div
      class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
    >
      <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
        <img class="w-full" src="~/assets/bytebase_and_wecom.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "integration",
  head: {
    title: "Integration with WeCom",
    meta: [
      {
        hid: "Integration with WeCom",
        name: "Integration with WeCom",
        content:
          "Bytebase supports webhook to post database schema related events to the configured WeCom group. Those webhook events are specifically customized for WeCom in order to display the optimal format.",
      },
    ],
  },
});
</script>
