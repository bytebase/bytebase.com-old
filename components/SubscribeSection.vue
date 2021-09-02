<template>
  <div class="border mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
    <div class="lg:w-0 lg:flex-1 text-left">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Never miss a thing
      </h2>
      <p class="mt-3 max-w-3xl text-lg text-gray-500">
        Learn product updates and everything about database.
      </p>
    </div>
    <div class="mt-8 lg:mt-0 lg:ml-8">
      <div v-if="subscribed" class="text-xl font-semibold text-indigo-600">
        <span class="text-3xl mr-2">🙌</span> Now check {{ email }} to confirm
        the subscription.
      </div>
      <form v-else class="sm:flex" @submit="subscribe">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          autocomplete="email"
          required
          class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
          placeholder="Enter your email"
          v-model="email"
        />
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  props: {
    moduleName: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const email = ref("");
    const subscribed = ref(false);

    const subscribe = (e: any) => {
      trackEvent(props.moduleName);
      fetch("https://newsletter.bytebase.com/members/api/send-magic-link/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          name: "",
          requestSrc: "bytebase.com",
        }),
      }).then(() => {
        subscribed.value = true;
      });
      e.preventDefault();
    };

    return { email, subscribed, subscribe };
  },
});
</script>
