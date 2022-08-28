<template>
  <!-- xl:-mt-8 is negating the empty space used in the hero section  -->
  <div class="xl:-mt-8 overflow-hidden">
    <!-- Hero section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto xl:pt-16 2xl:pt-24">
        <!-- Set z-10 so the action buttons won't be covered by the illustration -->
        <div class="z-10 relative pb-8 xl:max-w-2xl xl:w-full">
          <div class="mx-auto max-w-6xl px-4">
            <div class="sm:text-center xl:text-left">
              <i18n
                path="index-page.title"
                tag="h1"
                class="mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <template #slogan>
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
                    >{{ $t("slogan.safer-and-faster") }}</span
                  >
                  <br />
                </template>
                <template #br>
                  <br class="hidden xl:block" />
                </template>
                <template #teams>
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
                    >{{ $t("common.teams") }}</span
                  >
                </template>
              </i18n>
              <i18n
                path="index-page.description"
                tag="h2"
                class="tracking-tight mt-2 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-2xl xl:mx-0"
              >
                <template #dbas>
                  <span
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >{{ $t("common.dbas") }}</span
                  >
                </template>
                <template #developers>
                  <span
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    >{{ $t("common.developers") }}</span
                  >
                </template>
              </i18n>
              <div class="flex mt-8 justify-center xl:justify-start">
                <DatabaseBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden xl:flex justify-center xl:absolute xl:inset-y-0 xl:-right-24 xl:w-2/3 2xl:w-3/4"
      >
        <img
          class="object-contain h-56 sm:h-72 md:h-96 xl:w-full xl:h-full"
          src="~/assets/illustration/main.webp"
          alt
        />
      </div>
    </div>

    <div class="flex mt-12 px-4 justify-center">
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

    <div class="relative bg-white py-16 sm:py-24 lg:py-32 mt-6 lg:mt-72">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base sm:text-2xl font-semibold tracking-wider text-indigo-600 uppercase"
        >
          {{ $t("index-page.features.database-migration.slogan") }}
        </h2>
        <i18n
          path="index-page.features.database-migration.description"
          tag="h2"
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
        >
          <template #devops>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-700"
              >{{ $t("index-page.features.database-migration.devops") }}</span
            >
          </template>
          <template #collaboration>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
              >{{
                $t("index-page.features.database-migration.collaboration")
              }}</span
            >
          </template>
        </i18n>
        <div class="mt-12">
          <FeatureSection />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{ $t("index-page.features.sql-review-and-version-control.title") }}
        </h2>
        <h3 class="mt-4 max-w-3xl text-left text-xl text-gray-500 lg:mx-auto">
          {{
            $t("index-page.features.sql-review-and-version-control.description")
          }}
        </h3>
      </div>
    </div>

    <div class="relative bg-white pt-16 pb-32 overflow-hidden">
      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="w-6 h-6 text-white"
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
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ $t("index-page.features.ui-workflow.title") }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{ $t("index-page.features.ui-workflow.description") }}
                </h3>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div
              class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/sqlreview.webp"
                alt="Inbox user interface"
                width="600"
                height="400"
              />
            </div>
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
              <div>
                <span
                  class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
                >
                  <svg
                    class="w-6 h-6 text-white"
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
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{
                    $t(
                      "index-page.features.version-control-workflow-gitops.title"
                    )
                  }}
                </h2>
                <h3 class="mt-4 text-lg text-gray-500">
                  {{
                    $t(
                      "index-page.features.version-control-workflow-gitops.description"
                    )
                  }}
                </h3>
                <div class="mt-6">
                  <nuxt-link
                    :to="localePath('/docs/vcs-integration/overview')"
                    class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    @click="track('docs.version-control')"
                    >{{
                      $t(
                        "index-page.features.version-control-workflow-gitops.see-guide"
                      )
                    }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div
              class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/versioncontrol.webp"
                alt="Customer profile user interface"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- begin/SQL Editor Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold tracking-tight text-gray-900"
        >
          {{ $t("index-page.features.all-in-one-sql-editor.title") }}
        </h2>
        <h3 class="mt-4 max-w-3xl text-center text-xl text-gray-500 lg:mx-auto">
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
