<template>
  <div class="border mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
    <div class="lg:w-0 lg:flex-1 text-left">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Never miss a thing
      </h2>
      <p class="mt-3 max-w-3xl text-lg text-gray-500">
        Learn product updates and everything about database.
      </p>
    </div>
    <div class="mt-8 lg:mt-0 lg:ml-8">
      <a
        href="https://newsletter.bytebase.com/#/portal/signup"
        @click="track()"
        class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Subscribe
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  props: {
    moduleName: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const track = () => {
      trackEvent(props.moduleName);
    };

    return { track };
  },
});
</script>
