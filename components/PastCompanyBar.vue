<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nuxt-link
        :to="localePath('/about')"
        class="text-gray-500 hover:underline"
      >
        <p class="text-center text-2xl tracking-wider">
          {{ $t("past-company.built-by") }}
        </p>
      </nuxt-link>
      <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-10" src="~/assets/logo/google-logo.webp" alt="google" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            class="h-10"
            src="~/assets/logo/microsoft-logo.webp"
            alt="microsoft"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            class="h-10"
            src="~/assets/logo/pingcap-logo.webp"
            alt="pingcap"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-10" src="~/assets/logo/ant-group-logo.webp" alt="ant" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // do nth
  },
});
</script>
