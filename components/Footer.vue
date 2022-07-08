<template>
  <footer
    class="w-full relative bg-white px-4 pb-8"
    aria-labelledby="footer-heading"
  >
    <div class="max-w-7xl w-full mx-auto mt-12">
      <SubscribeSection :module-name="'footer'" />
    </div>
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl w-full mx-auto pt-12 pb-8 lg:pt-16 lg:px-0">
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:gap-4">
        <div>
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            {{ $t("common.databases") }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <nuxt-link
                :to="localePath('/database/mysql')"
                class="text-base text-gray-500 hover:text-gray-900"
                >MySQL</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database/postgres')"
                class="text-base text-gray-500 hover:text-gray-900"
                >PostgreSQL</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database/clickhouse')"
                class="text-base text-gray-500 hover:text-gray-900"
                >ClickHouse</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database/tidb')"
                class="text-base text-gray-500 hover:text-gray-900"
                >TiDB</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database/snowflake')"
                class="text-base text-gray-500 hover:text-gray-900"
                >Snowflake</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="mt-12 lg:mt-0">
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            {{ $t("footer.integrations") }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <nuxt-link
                :to="localePath('/integration/gitlab')"
                class="text-base text-gray-500 hover:text-gray-900"
                >GitLab</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/slack')"
                class="text-base text-gray-500 hover:text-gray-900"
                >Slack</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/discord')"
                class="text-base text-gray-500 hover:text-gray-900"
                >Discord</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/teams')"
                class="text-base text-gray-500 hover:text-gray-900"
                >Teams</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/dingtalk')"
                class="text-base text-gray-500 hover:text-gray-900"
                >DingTalk</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/feishu')"
                class="text-base text-gray-500 hover:text-gray-900"
                >Lark</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/integration/wecom')"
                class="text-base text-gray-500 hover:text-gray-900"
                >WeCom</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="mt-12 lg:mt-0">
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            {{ $t("footer.resources") }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="https://github.com/bytebase/bytebase"
                target="__blank"
                class="flex flex-row space-x-2 text-base text-gray-500 hover:text-gray-900"
              >
                <span>GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <nuxt-link
                :to="localePath('/docs')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('blog.footer')"
                >{{ $t("common.documentation") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/blog')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('blog.footer')"
                >{{ $t("common.blog") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/changelog')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('changelog.footer')"
                >{{ $t("common.changelog") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database-review-guide')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('dbreview.footer')"
                >{{ $t("database-review-guide.title") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/database-glossary')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('glossary.footer')"
                >{{ $t("footer.database-glossary") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/docs/reference/error-code/overview')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('errordoc.footer')"
                >{{ $t("footer.error-code") }}</nuxt-link
              >
            </li>

            <li>
              <a
                href="https://dbcost.com"
                target="__blank"
                class="flex flex-row space-x-2 items-center text-base text-gray-500 hover:text-gray-900"
              >
                <span>DB Cost</span>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://star-history.com/#bytebase/bytebase"
                target="__blank"
                class="flex flex-row space-x-2 items-center text-base text-gray-500 hover:text-gray-900"
              >
                <span>Star History</span>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-12 lg:mt-0">
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            {{ $t("common.company") }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <nuxt-link
                :to="localePath('/about')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('about.footer')"
                >{{ $t("common.about") }}</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                :to="localePath('/brand')"
                class="text-base text-gray-500 hover:text-gray-900 whitespace-nowrap"
                @click="track('brand.footer')"
                >{{ $t("footer.brand") }}</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                :to="localePath('/pricing')"
                class="text-base text-gray-500 hover:text-gray-900 whitespace-nowrap"
                @click="track('pricing.footer')"
                >{{ $t("common.pricing") }}</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                :to="localePath('/jobs')"
                class="text-base text-gray-500 hover:text-gray-900 whitespace-nowrap"
                @click="track('job.footer')"
                >{{ $t("footer.careers") }}</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                :to="localePath('/techstack')"
                class="text-base text-gray-500 hover:text-gray-900 whitespace-nowrap"
                @click="track('job.footer')"
                >{{ $t("footer.tech-stack") }}</nuxt-link
              >
            </li>

            <li>
              <a
                href="mailto:support@bytebase.com"
                target="__blank"
                class="text-base text-gray-500 hover:text-gray-900"
                >{{ $t("footer.contact") }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="border-t border-gray-200 max-w-7xl mx-auto pt-4 md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <div class="relative flex flex-row justify-start items-center">
          <div
            class="flex flex-row justify-start items-center hover:opacity-80 cursor-pointer"
            @click="state.showLocaleSelector = !state.showLocaleSelector"
          >
            <img src="~/assets/svg/earth.svg" class="w-5 h-auto mr-2" alt="" />
            <span>{{ currentLocale }}</span>
            <img
              src="~/assets/svg/chevron-right.svg"
              class="w-4 h-auto ml-1"
              style="transform: rotate(90deg)"
              alt=""
            />
          </div>
          <div
            v-show="state.showLocaleSelector"
            class="absolute -top-full -mt-16 bg-white shadow flex flex-col p-2 px-4 w-28"
            @click="state.showLocaleSelector = false"
          >
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              exact
              class="w-full leading-8 hover:opacity-60"
              >{{ locale.name }}</nuxt-link
            >
          </div>
        </div>

        <a
          href="https://twitter.com/Bytebase"
          target="__blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>

        <a
          href="https://github.com/bytebase/bytebase"
          target="__blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <p class="flex items-center text-gray-500 hover:text-gray-900">
          <nuxt-link :to="localePath('/terms')">{{
            $t("footer.terms")
          }}</nuxt-link>
        </p>

        <p class="flex items-center text-gray-500 hover:text-gray-900">
          <nuxt-link :to="localePath('/privacy')">{{
            $t("footer.policy")
          }}</nuxt-link>
        </p>
      </div>
      <div class="mt-8 lg:mt-0 md:order-1 flex flex-row items-center space-x-4">
        <img class="h-8" src="~/assets/logo-full.svg" alt="Bytebase" />
        <p class="text-center text-base text-gray-400 mt-1">
          &copy; {{ year }} Bytebase. {{ $t("footer.all-rights-reserved") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  reactive,
} from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";
import SubscribeSection from "./SubscribeSection.vue";

const { trackEvent } = Plausible();

interface LocalState {
  showLocaleSelector: boolean;
}

export default defineComponent({
  components: { SubscribeSection },
  setup() {
    const { app } = useContext();
    const state = reactive<LocalState>({
      showLocaleSelector: false,
    });
    const year = new Date().getFullYear();

    const availableLocales = computed(() => {
      return app.i18n.locales;
    });

    const currentLocale = computed(() => {
      return (app.i18n.locales as any).find(
        (i: any) => i.code === app.i18n.locale
      ).name;
    });

    const track = (name: string) => {
      trackEvent(name);
    };

    return {
      availableLocales,
      currentLocale,
      year,
      state,
      track,
    };
  },
});
</script>
