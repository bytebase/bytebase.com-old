<template>
  <div class="my-5 sm:flex md:my-8">
    <div
      class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center whitespace-nowrap"
    >
      <button
        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-indigo-700 text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-2xl md:px-8"
        @click="loginToHub"
      >
        {{ actionSentence }}
        <Cloud class="ml-2 w-8 h-8" />
      </button>
      <nuxt-link
        v-if="currentLocale === 'zh'"
        :to="localePath('/demo')"
        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300 md:py-4 md:text-2xl md:px-8"
        @click.native="track('demo.header')"
        >{{ $t("common.live-demo") }}</nuxt-link
      >
      <a
        v-else
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
import Cloud from "./Icons/Cloud.vue";
import { useAuth0 } from "~/plugin/auth0";

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

    const currentLocale = computed(() => app.i18n.locale);

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
      return app.i18n.t("slogan.free-signup-for-cloud");
    });

    const loginToHub = () => {
      track("saas");
      useAuth0().loginWithRedirect({
        redirectUrl: `https://hub.bytebase.com?ref=${window.location.href}`,
      });
    };

    return { track, actionSentence, currentLocale, loginToHub };
  },
});
</script>
