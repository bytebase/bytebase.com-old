<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">Bytebase Brand</h1>
      <a
        href="/bytebase-brand-kit.zip"
        download
        class="mt-4 text-lg font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
      >
        Download Brand Kit
        <span aria-hidden="true">&darr;</span>
      </a>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
      <div class="aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
        <img
          src="~/assets/logo-icon.svg"
          alt="Logo icon"
          class="border p-4 object-center object-contain"
        />
      </div>
      <div class="aspect-w-2 aspect-h-1 overflow-hidden sm:relative sm:aspect-none sm:h-full">
        <img
          src="~/assets/logo-text.svg"
          alt="Logo text"
          class="border p-4 object-center object-contain sm:absolute sm:inset-0 sm:w-full sm:h-full"
        />
      </div>
      <div class="aspect-w-2 aspect-h-1 overflow-hidden sm:relative sm:aspect-none sm:h-full">
        <img
          src="~/assets/logo-full.svg"
          alt="Logo icon and text"
          class="border p-4 object-center object-contain sm:absolute sm:inset-0 sm:w-full sm:h-full"
        />
      </div>

      <div
        class="aspect-w-2 aspect-h-1 overflow-hidden sm:row-span-2"
        style="background-color: #4F46E5"
      >
        <div class="p-6 flex items-end">
          <div>
            <h3 class="font-semibold text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                #4F46E5
              </a>
            </h3>
            <p aria-hidden="true" class="mt-1 text-sm text-white">Theme color</p>
          </div>
        </div>
      </div>
      <div
        class="aspect-w-2 aspect-h-1 overflow-hidden sm:row-span-2"
        style="background-color: #111827"
      >
        <div class="p-6 flex items-end">
          <div>
            <h3 class="font-semibold text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                #111827
              </a>
            </h3>
            <p aria-hidden="true" class="mt-1 text-sm text-white">Logo color</p>
          </div>
        </div>
      </div>
      <img class="sm:col-span-2" src="~/assets/illustration/about_banner.webp" alt />
      <img class="sm:col-span-2" src="~/assets/illustration/allyourbase.webp" alt />
    </div>

    <EmojiSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import EmojiSection from "~/components/EmojiSection.vue";

export default defineComponent({
  head: {
    title: "Bytebase Brand",
    meta: [
      {
        hid: "Bytebase Brand",
        name: "Bytebase Brand",
        content: "Bytebase Brand",
      },
    ],
  },
  setup() { },
  components: { EmojiSection }
});
</script>
