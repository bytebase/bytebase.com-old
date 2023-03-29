<template>
  <div class="w-full relative bg-indigo-500">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <div class="text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="inline">{{ $t("banner.sql-chat") }}</span>
          <span class="block sm:ml-2 sm:inline-block">
            <nuxt-link
              :to="localePath('/blog/sql-chat')"
              class="text-white font-bold underline"
            >
              {{ $t("banner.checkout-now") }}
              <span aria-hidden="true">&rarr;</span>
            </nuxt-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { app } = useContext();

    const currentLocale = computed(() => {
      return (app.i18n.locales as any).find(
        (i: any) => i.code === app.i18n.locale
      ).name;
    });

    return { currentLocale };
  },
});
</script>
