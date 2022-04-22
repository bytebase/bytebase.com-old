<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
    <div
      class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
    >
      <h1>
        <span
          class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
        >
          <span class="block text-gray-900 whitespace-nowrap"
            >Snowflake + Bytebase</span
          >
        </span>
      </h1>
      <h2
        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
      >
        <a
          href="https://snowflake.com/"
          target="__blank"
          class="text-indigo-500"
          >Snowflake®</a
        >
        is a cloud-based data storage and analytics service. It allows corporate
        users to store and analyze data using cloud-based hardware and software.
      </h2>
      <div
        class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
      >
        <ActionSection :module-name="'database'" />
      </div>
    </div>
    <div
      class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
    >
      <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
        <img class="w-full" src="~/assets/bytebase_and_snowflake.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  layout: "integration",
  head: {
    title: "Manage Snowflake schema with Bytebase",
    meta: [
      {
        hid: "Version control your Snowflake database schema",
        name: "Version control your Snowflake database schema",
        content: "Version control your Snowflake database schema.",
      },
    ],
  },
});
</script>
