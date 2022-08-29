<template>
  <div
    class="flex flex-row justify-center mb-12 relative mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:px-8 lg:pb-0"
  >
    <div
      class="w-10/12 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-16 gap-y-8"
    >
      <div
        v-for="feature in FEATURE_LIST"
        :key="feature.title"
        class="w-full h-112 flex flex-row justify-center items-center"
      >
        <div
          class="demo-card relative w-72 h-96 flex flex-col justify-between ring-indigo-700 ring-2 shadow-lg rounded-lg p-6 overflow-hidden"
        >
          <div class="flex flex-col items-center h-28 gap-y-1">
            <div class="w-full border-b-2 pb-6">
              <p class="text-2xl text-center font-extrabold tracking-tight">
                {{ $t(`demo.features.${feature.title}.title`) }}
              </p>
            </div>
            <p class="mt-6 text-lg text-gray-500 text-justify">
              {{ $t(`demo.features.${feature.title}.description`) }}
            </p>
          </div>
          <DynamicIcon
            :name="feature.icon"
            class="absolute top-32 left-32 w-48 h-48 opacity-10"
          />
          <div class="flex flex-col justify-end">
            <div class="flex flex-row justify-center w-full">
              <button class="enter-btn" @click="handleKnowMore(feature)">
                <div class="flex flex-row justify-center items-center">
                  <Play class="w-4 h-4 mr-2" />{{ $t("demo.learn-more") }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-112 flex flex-row justify-center items-center">
        <div
          class="demo-card relative w-72 h-96 flex flex-col justify-between ring-indigo-700 ring-2 shadow-lg rounded-lg p-6 overflow-hidden"
        >
          <div class="flex flex-col items-center h-28 gap-y-1">
            <img
              :src="require('~/assets/illustration/offer.webp')"
              class="w-11/12 m-auto -mt-4"
            />
          </div>
          <div
            v-if="subscribed"
            class="flex flex-col items-center -mt-10 text-justify"
          >
            <div class="mb-6 text-2xl font-semibold text-indigo-600">
              {{ $t("demo.book-success") }}
            </div>
            <div class="mb-6 text-lg text-gray-500">
              {{ $t("demo.book-success-description") }}
            </div>
          </div>
          <form v-else @submit="subscribe">
            <div class="flex flex-col justify-center items-center">
              <label for="email-address" class="sr-only">{{
                $t("subscribe.email-address")
              }}</label>
              <input
                id="email-address"
                v-model="email"
                name="email-address"
                type="email"
                autocomplete="email"
                required
                class="w-48 mb-8 px-4 py-2 border border-gray-300 flex-grow shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                :placeholder="$t('subscribe.enter-your-email')"
              />
              <div class="flex flex-row justify-center w-full">
                <button type="submit" class="enter-btn">
                  <div class="flex flex-row justify-center items-center">
                    <Calendar class="w-4 h-4 mr-2" />{{
                      $t("demo.book-a-demo")
                    }}
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  useContext,
  watchEffect,
  reactive,
} from "@nuxtjs/composition-api";
import { Metric, useSegment } from "~/plugin/segment";
import { useAuth0, IAtuhPlugin } from "~/plugin/auth0";
import Plausible from "plausible-tracker";
import { FEATURE_LIST } from "~/common/demo";
import Play from "~/components/Icons/Play.vue";
import DynamicIcon from "~/components/DynamicIcon.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import { Feature } from "~/common/demo";

const { trackEvent } = Plausible();

export default defineComponent({
  components: { Play, DynamicIcon, Calendar },
  setup() {
    const { $ga, app } = useContext() as any;
    const analytics = reactive<{ newsletter: Metric; other: Metric }>({
      newsletter: {} as Metric,
      other: {} as Metric,
    });
    const auth0 = ref<IAtuhPlugin>();
    const email = ref("");
    const subscribed = ref(false);

    const handleKnowMore = (feature: Feature) => {
      track(`demo.video.${feature.title}`);
      if (app.i18n.locale === "zh") {
        window.open(`https://www.bilibili.com/video/${feature.videoId}`);
      } else {
        // show future YouTube player
      }
    };

    const track = (name: string) => {
      trackEvent(name);

      const parts = name.split(".");
      $ga.event({
        eventCategory: parts[0],
        eventType: parts[1],
        eventLabel: parts[2],
      });
      // Segment
      analytics.other.track(name);
    };

    const subscribe = (e: any) => {
      trackEvent("demo");
      analytics.newsletter.identify(email.value, {
        category: "request-demo",
        integrations: {
          MailChimp: {
            subscriptionStatus: "subscribed",
          },
        },
      });
      subscribed.value = true;
      e.preventDefault();
    };

    onMounted(() => {
      watchEffect(() => {
        analytics.newsletter = useSegment().analyticsForNewsletter as Metric;
        auth0.value = useAuth0();
        analytics.other = useSegment().analytics as Metric;
      });
    });

    return {
      FEATURE_LIST,
      handleKnowMore,
      subscribe,
      subscribed,
      email,
    };
  },
  head() {
    return {
      title: "Demo",
      meta: [
        {
          hid: "Bytebase Demo",
          name: "Bytebase Demo",
          content: "Bytebase Demo",
        },
      ],
    };
  },
  nuxtI18n: {
    locales: ["zh"],
  },
});
</script>

<style scoped>
.demo-card {
  min-width: 16rem;
}
.enter-btn {
  @apply bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent w-48 inline-block py-3 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-lg font-medium;
}
</style>
