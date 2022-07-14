<template>
  <div class="my-5 sm:flex md:my-8">
    <div
      class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center whitespace-nowrap"
    >
      <nuxt-link
        :to="
          localePath(
            '/docs/get-started/install/deploy-with-docker'
          )
        "
        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-indigo-700 text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-2xl md:px-8"
        @click="track('deploy')"
      >
        {{ actionSentence }}
        <svg
          class="ml-2 w-8 h-8"
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
      </nuxt-link>
      <a
        href="https://demo.bytebase.com?ref=bytebase.com"
        target="_blank"
        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300 md:py-4 md:text-2xl md:px-8"
        @click="track('demo')"
      >
        {{ $t("common.live-demo") }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  useContext,
  watchEffect,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import { Metric, useSegment } from "~/plugin/segment";

const { trackEvent } = Plausible();

export default defineComponent({
  props: {
    moduleName: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { app } = useContext();
    const analytics = ref<Metric>();

    onMounted(() => {
      watchEffect(() => {
        analytics.value = useSegment().analytics;
      });
    });

    const track = (component: string) => {
      trackEvent([component, props.moduleName].join("."));
      // Segment
      analytics.value?.track([component, props.moduleName].join("."));
    };

    const actionSentence = computed(() => {
      if (props.moduleName == "main" || props.moduleName == "footer") {
        return app.i18n.t("slogan.deploy-now-in-5-seconds");
      }
      return app.i18n.t("slogan.deploy-bytebase-in-5-seconds");
    });

    return { track, actionSentence };
  },
});
</script>
