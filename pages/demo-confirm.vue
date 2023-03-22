<template>
  <div class="overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <h1>
          <span
            class="block text-5xl text-center text-gray-900 font-extrabold tracking-wide"
            >Demo Confirmed</span
          >
        </h1>
        <div
          class="mt-8 max-w-5xl mx-auto text-center text-xl leading-9 text-gray-900"
        >
          Thanks for booking time with us. Talk to you soon!
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Demo Confirm",
    meta: [
      {
        hid: "Demo Confirm",
        name: "Demo Confirm",
        content: "Demo Confirm",
      },
    ],
  },
});
</script>
