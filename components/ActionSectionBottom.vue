<template>
  <div class="bg-indigo-700 rounded-3xl">
    <div class="max-w-7xl mx-auto py-8 sm:py-12 px-8 sm:px-12">
      <h2
        class="space-y-1 text-3xl font-semibold tracking-tight text-white sm:text-6xl"
      >
        <span class="block">{{
          $t("slogan.review-change-version-rollback")
        }}</span>
        <i18n
          path="slogan.database-devops-best-practice"
          tag="h2"
          class="block"
        >
          <template #br>
            <br />
          </template>
        </i18n>
      </h2>
      <div class="mt-8 flex">
        <nuxt-link
          :to="localePath('/docs/get-started/install/deploy-with-docker')"
          class="flex items-center justify-center px-8 py-2 border border-transparent text-xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80 md:py-4 md:text-2xl md:px-8"
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
      return app.i18n.t("slogan.deploy-bytebase-in-5-seconds");
    });

    return { track, actionSentence };
  },
});
</script>
