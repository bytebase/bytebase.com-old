<template>
  <!-- xl:-mt-8 is negating the empty space used in the hero section  -->
  <div class="xl:-mt-8 overflow-hidden">
    <!-- Hero section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto xl:py-32">
        <!-- Set z-10 so the action buttons won't be covered by the illustration -->
        <div class="z-10 xl:max-w-2xl xl:w-full">
          <div class="mx-auto max-w-6xl px-4">
            <div class="sm:text-center xl:text-left">
              <i18n
                path="index-page.title"
                tag="h1"
                class="mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-8xl xl:text-9xl"
              >
                <template #slogan>
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-700"
                    >{{ $t("slogan.reliable") }}</span
                  >
                </template>
                <template #br>
                  <br class="hidden sm:block" />
                </template>
                <template #developers>
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-700"
                    >{{ $t("common.developers") }}</span
                  >
                </template>
              </i18n>
              <div class="flex mt-8 md:mt-12 justify-center xl:justify-start">
                <DatabaseBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden xl:flex justify-center xl:absolute xl:inset-y-0 xl:-right-48 xl:w-3/4"
      >
        <img
          class="object-contain h-56 sm:h-72 md:h-96 xl:w-full xl:h-full"
          src="~/assets/illustration/main.webp"
          alt="Developer and DBA collaboration"
        />
      </div>
    </div>

    <div class="max-w-7xl w-full mx-auto px-4 mt-12">
      <BookDemoSection />
    </div>

    <div class="mt-16 relative">
      <div class="flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
        <img
          class="order-2 relative lg:absolute shadow-lg mt-6 -ml-2 lg:ml-16 xl:ml-64 lg:z-10 lg:mt-144"
          src="~/assets/screenshot_home.webp"
          alt="App screenshot"
          width="1200"
          height="675"
        />
        <img
          class="order-1 relative shadow-md -ml-2 lg:mb-12"
          src="~/assets/screenshot_task.webp"
          alt="App screenshot"
          width="1200"
          height="900"
        />
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 mt-6 lg:mt-72"
    >
      <div class="text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-7xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{
            $t("index-page.features.database-change-and-version-control.title")
          }}
        </h2>
        <div class="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
          {{
            $t(
              "index-page.features.database-change-and-version-control.description"
            )
          }}
        </div>
      </div>
    </div>

    <div class="relative bg-white mt-16 pb-8 overflow-hidden">
      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div class="flex flex-row lg:justify-end space-x-4">
                <span
                  class="w-12 h-12 flex items-center justify-center p-2 bg-white border-2 border-gray-900 rounded-md shadow-lg"
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="w-10 h-10 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </span>
                <h3
                  class="text-5xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.review-board.title") }}
                </h3>
              </div>
              <div class="mt-6">
                <div class="mt-4 lg:text-right text-lg text-gray-500">
                  {{ $t("index-page.features.review-board.description") }}
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 px-4 sm:mt-16 lg:mt-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="~/assets/feature-review-board.webp"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
          >
            <div>
              <div class="flex flex-row space-x-4">
                <span
                  class="w-12 h-12 flex items-center justify-center p-2 bg-white border-2 border-gray-900 rounded-md shadow-lg"
                >
                  <svg
                    class="w-10 h-10 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <h3
                  class="text-5xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.gitops.title") }}
                </h3>
              </div>
              <div class="mt-6">
                <div class="mt-4 text-lg text-gray-500">
                  {{ $t("index-page.features.gitops.description") }}
                </div>
                <div class="mt-6">
                  <nuxt-link
                    :to="localePath('/docs/vcs-integration/overview')"
                    class="inline-flex px-4 py-2 border-2 border-gray-900 text-xl font-medium rounded-md shadow-sm text-gray-900 bg-white"
                    @click="track('docs.version-control')"
                    >{{ $t("index-page.features.gitops.see-guide") }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="~/assets/feature-version-control.webp"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div class="flex flex-row lg:justify-end space-x-4">
                <span
                  class="w-12 h-12 flex items-center justify-center p-2 bg-white border-2 border-gray-900 rounded-md shadow-lg"
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="w-10 h-10 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </span>
                <h3
                  class="text-5xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.tenant-mode.title") }}
                </h3>
              </div>
              <div class="mt-6">
                <div class="mt-4 lg:text-right text-lg text-gray-500">
                  {{ $t("index-page.features.tenant-mode.description") }}
                </div>
                <div class="mt-6 lg:text-right">
                  <nuxt-link
                    :to="localePath('/docs/tenant-database-management')"
                    class="inline-flex px-4 py-2 border-2 border-gray-900 text-xl font-medium rounded-md shadow-sm text-gray-900 bg-white"
                    @click="track('docs.tenant-mode')"
                    >{{
                      $t("index-page.features.sql-review.see-guide")
                    }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 px-4 sm:mt-16 lg:mt-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="~/assets/feature-tenant-mode.webp"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
          >
            <div>
              <div class="flex flex-row space-x-4">
                <span
                  class="w-12 h-12 flex items-center justify-center p-2 bg-white border-2 border-gray-900 rounded-md shadow-lg"
                >
                  <svg
                    class="w-10 h-10 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </span>
                <h3
                  class="text-5xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.sql-review.title") }}
                </h3>
              </div>
              <div class="mt-6">
                <div class="mt-4 text-lg text-gray-500">
                  {{ $t("index-page.features.sql-review.description") }}
                </div>
                <div class="mt-6">
                  <nuxt-link
                    :to="localePath('/docs/sql-review/sql-advisor/overview')"
                    class="inline-flex px-4 py-2 border-2 border-gray-900 text-xl font-medium rounded-md shadow-sm text-gray-900 bg-white"
                    @click="track('docs.sql-review')"
                    >{{
                      $t("index-page.features.sql-review.see-guide")
                    }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="~/assets/feature-sql-review-policy.webp"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- begin/SQL Editor Section -->
    <div class="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-7xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{ $t("index-page.features.all-in-one-sql-editor.title") }}
        </h2>
        <h3 class="mt-4 max-w-3xl text-center text-xl text-gray-500 mx-auto">
          {{ $t("index-page.features.all-in-one-sql-editor.description") }}
        </h3>
      </div>
      <div class="py-16">
        <img
          class="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="~/static/docs/sql-editor-preview.webp"
          alt="All-in-one SQL Editor"
        />
      </div>
    </div>
    <!-- end of/SQL Editor Section -->

    <div class="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-center mt-2 text-3xl sm:text-5xl lg:text-7xl leading-8 font-extrabold tracking-tight text-gray-900"
      >
        {{ $t("common.features") }}
      </h2>
      <FeatureSection />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  onMounted,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import { useStore } from "~/store";

const { trackEvent } = Plausible();

export default defineComponent({
  components: {},
  setup() {
    const { app } = useContext();
    const store = useStore();
    const track = (name: string) => {
      trackEvent(name);
    };

    onMounted(() => {
      const browserLanguageString = String(navigator.language);
      const browserLocale = browserLanguageString.slice(0, 2);
      const locales = app.i18n.locales.map((locale: any) => locale.code);

      // We now have two locales: `en` and `zh`, the other locales redirect to `en`.
      if (!locales.includes(browserLocale)) {
        app.i18n.setLocale("en");
      } else {
        // Only redirect when browserLocale is `zh` and current locale isn't `zh`.
        // It means that we shouldn't redirect from `/zh` to `/`.
        if (
          app.i18n.locale !== "zh" &&
          browserLocale === "zh" &&
          !store.hasRedirectLocale
        ) {
          app.i18n.setLocale(browserLocale);
          store.setHasRedirectLocale();
        }
      }
    });

    return {
      track,
    };
  },
  head: {
    title: "Bytebase | Database DevOps",
    meta: [
      {
        hid: "bytebase",
        name: "Bytebase | Database DevOps",
        content:
          "Bytebase is a database change and version control tool for the DevOps team. It provides a collaboration workspace to help Developers and DBAs manage the database development lifecycle.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/assets/logo-full.svg`,
      },
    ],
  },
});
</script>
