<template>
  <div class="relative bg-blue-500">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <div class="pr-16 text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="inline">
            We raised a $3M seed led by Matrix Partners China!
          </span>
          <span class="block sm:ml-2 sm:inline-block">
            <NuxtLink
              to="blog/announcing-our-3m-seed-round"
              class="text-white font-bold underline"
            >
              Read our announcement
              <span aria-hidden="true">&rarr;</span></NuxtLink
            >
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},
});
</script>
