<template>
  <div class="mt-5 sm:flex md:mt-8">
    <div class="rounded-md shadow">
      <a
        href="https://github.com/bytebase/bytebase#installation"
        target="_blank"
        @click="track()"
        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-2xl md:px-8"
      >
        {{ actionSentence }}
        <svg
          class="ml-2 w-8 h-8 animate-bounce"
          style="animation: bounce 1s infinite;"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";
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

    const actionSentence = computed(() => {
      if (
        props.moduleName == "deploy.main" ||
        props.moduleName == "deploy.footer"
      ) {
        return "Deploy now in 5 seconds";
      }
      return "Deploy Bytebase in 5 seconds";
    });

    return { track, actionSentence };
  },
});
</script>
