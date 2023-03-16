<template>
  <div class="bg-indigo-700 rounded-3xl">
    <div class="max-w-7xl mx-auto py-8 sm:py-12 px-8 sm:px-12">
      <h2
        class="space-y-1 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
      >
        <span class="block">{{
          $t("slogan.change-query-secure-one-place")
        }}</span>
        <span class="block pt-1">{{
          $t("slogan.database-devops-best-practice")
        }}</span>
      </h2>
      <div
        class="mt-8 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4"
      >
        <a
          href="https://hub.bytebase.com?ref=bytebase.com"
          target="_blank"
          class="flex items-center justify-center px-2 sm:px-8 py-2 border border-transparent text-base sm:text-xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80 md:py-4 md:text-2xl md:px-8"
          @click="track('saas')"
        >
          {{ actionSentence1 }}
          <Cloud class="ml-2 w-8 h-8" />
        </a>
        <a
          href="https://cal.com/adela-bytebase/30min"
          target="__blank"
          class="w-full sm:w-auto flex items-center justify-center px-8 py-2 border border-transparent text-base sm:text-xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80 md:py-4 md:text-2xl md:px-8"
          @click="track('book-demo')"
        >
          {{ actionSentence2 }}
          <svg
            class="ml-2 w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        </a>
      </div>
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
import Cloud from "./Icons/Cloud.vue";

const { trackEvent } = Plausible();

export default defineComponent({
  props: {
    moduleName: {
      required: true,
      type: String,
    },
  },
  components: {
    Cloud,
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

    const actionSentence1 = computed(() => {
      return app.i18n.t("slogan.free-signup-for-cloud");
    });

    const actionSentence2 = computed(() => {
      return app.i18n.t("slogan.book-demo");
    });

    return { track, actionSentence1, actionSentence2 };
  },
});
</script>
