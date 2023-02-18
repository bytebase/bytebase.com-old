<template>
  <div
    class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
  >
    <img
      class="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
      src="~/assets/logo/aptive-logo.webp"
      alt="aptive"
    />
    <img
      class="col-span-2 max-h-16 -mt-2 w-full object-contain lg:col-span-1"
      src="~/assets/logo/dingding-logo.webp"
      alt="kakao"
    />
    <img
      class="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
      src="~/assets/logo/evermos-logo.webp"
      alt="kakao"
    />
    <img
      class="col-span-2 max-h-16 -mt-2 w-full object-contain lg:col-span-1"
      src="~/assets/logo/github-logo-text.webp"
      alt="github"
    />
    <img
      class="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
      src="~/assets/logo/kakao-logo.webp"
      alt="kakao"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  useContext,
  watchEffect,
} from "@nuxtjs/composition-api";
import { Metric, useSegment } from "~/plugin/segment";
import Plausible from "plausible-tracker";
import Calendar from "~/components/Icons/Calendar.vue";

const { trackEvent } = Plausible();

export default defineComponent({
  components: { Calendar },
  setup() {
    const { app } = useContext();
    const analytics = ref<Metric>();
    const email = ref("");
    const subscribed = ref(false);

    const subscribe = (e: any) => {
      trackEvent("demo");
      analytics.value?.identify(
        email.value,
        {
          category: "request-demo",
        },
        {
          integrations: {
            MailChimp: {
              subscriptionStatus: "subscribed",
            },
          },
        }
      );
      subscribed.value = true;
      e.preventDefault();
    };

    onMounted(() => {
      watchEffect(() => {
        analytics.value = useSegment().analyticsForNewsletter as Metric;
      });
    });

    const actionSentence1 = computed(() => {
      return app.i18n.t("slogan.deploy-bytebase-in-5-seconds");
    });

    return {
      subscribed,
      subscribe,
      email,
      actionSentence1,
    };
  },
});
</script>
