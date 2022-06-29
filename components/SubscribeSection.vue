<template>
  <div
    ref="containerRef"
    class="w-full border mx-auto py-8 flex items-center flex-wrap"
    :class="
      size === 'lg'
        ? 'px-8 flex-row justify-between space-x-4'
        : 'px-4 flex-col justify-start'
    "
  >
    <div
      class="flex flex-col justify-start"
      :class="size === 'lg' ? 'items-start' : 'items-center'"
    >
      <h2
        class="font-extrabold text-gray-900"
        :class="size === 'lg' ? 'text-4xl' : 'text-3xl'"
      >
        {{ $t("subscribe.get-database-insight") }} 💡
      </h2>
      <p class="mt-3 text-lg leading-8 text-gray-500">
        {{
          $t("subscribe.learn-product-updates-and-everything-about-database")
        }}
      </p>
    </div>
    <div
      class="flex-shrink-0 flex flex-row justify-center flex-wrap py-3"
      :class="size === 'lg' ? 'mt-0' : 'mt-4'"
    >
      <div v-if="subscribed" class="text-xl font-semibold text-indigo-600">
        <span class="text-3xl mr-2">🎉</span>
        {{ $t("subscribe.email-subscription-success-message") }}
      </div>
      <form
        v-else
        class="flex flex-row justify-start items-center"
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
          class="w-auto border border-gray-300 flex-grow shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mr-3 sm:max-w-xs rounded-md"
          :class="size === 'lg' ? 'px-5 py-3 w-24' : 'px-4 py-2'"
          :placeholder="$t('subscribe.enter-your-email')"
        />
        <button
          type="submit"
          class="w-auto flex items-center justify-center border border-transparent text-base font-medium rounded-md shadow text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      analytics.value?.identify(email.value);
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
