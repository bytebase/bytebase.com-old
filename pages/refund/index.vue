<template>
  <div class="relative bg-white px-4 sm:px-6 lg:px-8 py-8">
    <div
      class="relative max-w-2xl mx-auto px-4 py-8 text-left sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        {{ $t("refund.title") }}
      </h1>
      <i18n
        path="refund.description"
        tag="p"
        class="text-2xl pt-5 leading-relaxed"
      >
        <template #support-team>
          <a
            href="mailto:support@bytebase.com"
            target="__blank"
            class="text-2xl underline text-gray-600 hover:text-gray-900"
            >{{ $t("refund.support-team") }}</a
          >
        </template>
      </i18n>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Bytebase Refund Policy",
    meta: [
      {
        hid: "Bytebase Refund Policy",
        name: "Bytebase Refund Policy",
        content: "",
      },
    ],
  },
});
</script>
