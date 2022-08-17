<template>
  <div class="my-5 sm:flex md:my-8">
    <div v-if="subscribed" class="flex flex-row items-center mt-8">
      <div class="mr-6 text-3xl font-semibold text-indigo-600">
        {{ $t("demo.appointment-success") }}
      </div>
      <div class="h-6 text-xl leading-6 text-gray-500">
        {{ $t("demo.appointment-success-description") }}
      </div>
    </div>
    <form v-else @submit="subscribe">
      <div
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center whitespace-nowrap"
      >
        <input
          id="email-address"
          v-model="email"
          name="email-address"
          type="email"
          autocomplete="email"
          required
          class="w-full md:w-96 px-8 py-2 text-sm md:text-2xl border border-gray-300 flex-1 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md md:py-4"
          :placeholder="$t('subscribe.enter-your-email')"
        />
        <div class="flex flex-row justify-center w-full sm:w-56">
          <button
            type="submit"
            class="w-full flex items-center justify-center px-8 py-2 md:py-4 md:text-2xl border border-transparent text-sm rounded-md border-indigo-700 text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <div class="flex flex-row justify-center items-center">
              <Calendar class="w-4 h-4 mr-2" />{{ $t("demo.book-a-demo") }}
            </div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watchEffect,
} from "@nuxtjs/composition-api";
import { Metric, useSegment } from "~/plugin/segment";
import Plausible from "plausible-tracker";
import Calendar from "~/components/Icons/Calendar.vue";

const { trackEvent } = Plausible();

export default defineComponent({
  components: { Calendar },
  setup() {
    const analytics = ref<Metric>();
    const email = ref("");
    const subscribed = ref(true);

    const subscribe = (e: any) => {
      trackEvent("demo");
      analytics.value?.identify(email.value, {
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
        analytics.value = useSegment().analyticsForNewsletter as Metric;
      });
    });

    return {
      subscribed,
      subscribe,
      email,
    };
  },
});
</script>
