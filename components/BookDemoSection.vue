<template>
  <div class="bg-indigo-700 rounded-3xl">
    <div class="max-w-7xl mx-auto py-8 sm:py-12 px-8 sm:px-12">
      <div class="xl:grid xl:grid-cols-2 xl:gap-8 xl:items-center">
        <div>
          <h2
            class="text-3xl tracking-tight font-semibold text-white sm:text-6xl"
          >
            {{ $t("past-company.built-by") }}
          </h2>
          <div class="my-5 flex md:my-8 justify-start">
            <div
              v-if="subscribed"
              class="flex flex-row items-center mt-4 text-white"
            >
              <i18n path="demo.book-success-message" class="text-2xl">
                <template #success>
                  <span class="ml-2 text-2xl font-semibol">{{
                    $t("demo.book-success")
                  }}</span>
                </template>
                <template #description>
                  <span class="text-2xl">{{
                    $t("demo.book-success-description")
                  }}</span>
                </template>
              </i18n>
            </div>
            <form v-else @submit="subscribe">
              <div
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 whitespace-nowrap"
              >
                <input
                  id="email-address"
                  v-model="email"
                  name="email-address"
                  type="email"
                  autocomplete="email"
                  required
                  class="w-full sm:w-72 px-4 sm:px-8 py-4 border border-transparent text-xl md:text-2xl flex-1 shadow-sm placeholder-gray-400 rounded-md"
                  :placeholder="$t('subscribe.enter-your-email')"
                />
                <button
                  type="submit"
                  class="w-full sm:w-56 flex items-center justify-center px-4 sm:px-8 py-4 border border-transparent text-xl md:text-2xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80"
                >
                  <div class="flex flex-row justify-center items-center">
                    <Calendar class="w-4 h-4 mr-2" />{{
                      $t("demo.book-a-demo")
                    }}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="mt-8 grid grid-cols-2 gap-0.5 sm:gap-2 xl:mt-0 xl:grid-cols-2"
        >
          <div
            class="col-span-1 flex justify-center py-4 px-4 sm:py-8 sm:px-8 bg-white rounded-tl-lg"
          >
            <img
              class="max-h-8 sm:max-h-14 object-scale-down"
              src="~/assets/logo/google-logo.svg"
              alt="google"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-4 px-4 sm:py-8 sm:px-8 bg-white rounded-tr-lg"
          >
            <img
              class="max-h-8 sm:max-h-14 object-scale-down"
              src="~/assets/logo/microsoft-logo.png"
              alt="microsoft"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-4 px-4 sm:py-8 sm:px-8 bg-white rounded-bl-lg"
          >
            <img
              class="max-h-8 sm:max-h-14 object-scale-down"
              src="~/assets/logo/pingcap-logo.png"
              alt="pingcap"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-4 px-4 sm:py-8 sm:px-8 bg-white rounded-br-lg"
          >
            <img
              class="max-h-8 sm:max-h-14 object-scale-down"
              src="~/assets/logo/ant-group-logo.png"
              alt="ant group"
            />
          </div>
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
    const subscribed = ref(false);

    const subscribe = (e: any) => {
      trackEvent("demo");
      analytics.value?.identify(email.value, {
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
