<template>
  <div
    ref="containerRef"
    class="w-full border mx-auto px-8 sm:px-12 py-8 sm:py-12 flex flex-wrap bg-indigo-700 rounded-3xl flex-col justify-start"
  >
    <div class="w-full flex flex-col justify-start text-white">
      <p class="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
        {{
          $t("subscribe.learn-product-updates-and-everything-about-database")
        }}
      </p>
    </div>
    <div class="flex-shrink-0 flex flex-row flex-wrap py-3 text-white mt-4">
      <div v-if="subscribed" class="text-xl font-semibold">
        <span class="text-3xl mr-2">🎉</span>
        {{ $t("subscribe.email-subscription-success-message") }}
      </div>
      <form
        v-else
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-start sm:items-center"
        @submit="subscribe"
      >
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
          class="w-72 border border-gray-300 flex-grow shadow-sm placeholder-gray-400 mr-3 sm:max-w-xs text-xl rounded-md"
          :class="size === 'lg' ? 'px-5 py-3' : 'px-4 py-2'"
          :placeholder="$t('subscribe.enter-your-email')"
        />
        <button
          type="submit"
          class="w-36 flex items-center justify-center border border-transparent text-xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80"
          :class="size === 'lg' ? 'px-5 py-3' : 'px-4 py-2'"
        >
          {{ $t("common.subscribe") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watchEffect,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import { useSegment, Metric } from "~/plugin/segment";

const { trackEvent } = Plausible();

export default defineComponent({
  props: {
    moduleName: {
      type: String,
      required: true,
    },
  },
  emits: ["subscribed"],
  setup(props, { emit }) {
    const containerRef = ref<HTMLDivElement>();
    const email = ref("");
    const subscribed = ref(false);
    const size = ref("");
    const analytics = ref<Metric>();

    onMounted(() => {
      watchEffect(() => {
        analytics.value = useSegment().analyticsForNewsletter;
      });

      // The min width could display section in a row.
      const lgMinWidth = 820;

      if (containerRef.value) {
        const containerEl = containerRef.value;
        if (containerEl.clientWidth > lgMinWidth) {
          size.value = "lg";
        } else {
          size.value = "sm";
        }
      }

      window.addEventListener("resize", () => {
        if (containerRef.value) {
          const containerEl = containerRef.value;
          if (containerEl.clientWidth > lgMinWidth) {
            size.value = "lg";
          } else {
            size.value = "sm";
          }
        }
      });
    });

    const subscribe = (e: any) => {
      trackEvent(props.moduleName);
      // Manually updating user subscription status to re-subscribe
      // Doc: https://segment.com/docs/connections/destinations/catalog/mailchimp/#manually-updating-user-subscription-status
      analytics.value?.identify(email.value, {
        category: "subscribe-newsletter",
        integrations: {
          MailChimp: {
            subscriptionStatus: "subscribed",
          },
        },
      });
      subscribed.value = true;
      emit("subscribed");
      e.preventDefault();
    };

    return {
      containerRef,
      email,
      size,
      subscribed,
      subscribe,
    };
  },
});
</script>
