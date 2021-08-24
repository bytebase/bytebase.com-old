<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Bytebase Blog
        </h1>
        <h2 class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Open source, web-based, zero-config, dependency-free database schema
          change and version control tool for Developer and DBA.
        </h2>
      </div>

      <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2
              class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
              Featured
            </h2>
          </div>
          <div class="mt-12">
            <div class="flex flex-col col-span-3 border p-4 overflow-hidden">
              <NuxtLink to="/blog/announce-bytebase" class="flex-shrink-0">
                <img
                  class="w-full object-cover"
                  src="~/assets/blog/LogoText.png"
                  alt=""
                />
              </NuxtLink>
              <NuxtLink
                to="/blog/announce-bytebase"
                class="flex-1 bg-white p-6 flex flex-col justify-between"
              >
                <div class="flex-1">
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    New Release
                  </span>
                  <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Announcing Bytebase
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Open source, web-based, zero-config, dependency-free
                      database schema change and version control tool for
                      Developer and DBA.
                    </p>
                  </div>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="~/assets/avatar/tianzhou.webp"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      Tianzhou Chen
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2021-07-12">
                        Jul 12, 2021
                      </time>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div
          class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
        >
          <div>
            <h2
              class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
              Recent publications
            </h2>
          </div>
          <div
            class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
          >
            <div>
              <div>
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  Database Schema Design
                </span>
              </div>
              <NuxtLink
                to="/blog/choose-primary-key-uuid-or-auto-increment"
                class="block mt-4"
              >
                <p class="text-xl font-semibold text-gray-900">
                  Choose Primary Key - UUID vs Auto Increment Integer?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Choosing which primary key type to use can have a
                  consequential effect down the road. And it's the one almost
                  impossible to switch later. We list Pros and Cons between
                  these 2 appoaches and give our recommendation.
                </p>
              </NuxtLink>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="~/assets/avatar/tianzhou.webp"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    Tianzhou Chen
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2021-08-24">
                      Aug 24, 2021
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Blog",
    meta: [
      {
        hid: "Bytebase Blog",
        name: "Bytebase Blog",
        content: "Bytebase Blog",
      },
    ],
  },
  setup() {},
});
</script>
