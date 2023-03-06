<template>
  <footer
    class="w-full relative bg-white px-4 pb-8"
    aria-labelledby="footer-heading"
  >
    <div class="max-w-7xl w-full mx-auto mt-8">
      <LogoCloudSection />
      <ActionSectionBottom
        class="mt-8 sm:justify-center"
        :module-name="'footer'"
      />
    </div>
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl w-full mx-auto pt-12 pb-8 lg:pt-16 lg:px-0">
      <div class="grid grid-cols-2 lg:grid-cols-5 lg:gap-4">
        <div>
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            {{ $t("common.solutions") }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <nuxt-link
                :to="localePath('/usecase/dba')"
                class="text-base text-gray-500 hover:text-gray-900"
                >For DBA</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/usecase/techlead')"
                class="text-base text-gray-500 hover:text-gray-900"
                >For Tech Lead</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/usecase/developer')"
                class="text-base text-gray-500 hover:text-gray-900"
                >For Developer</nuxt-link
              >
            </li>
          </ul>
        </div>

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
                :to="localePath('/integration/github')"
                class="text-base text-gray-500 hover:text-gray-900"
                >GitHub</nuxt-link
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
              <nuxt-link
                :to="localePath('/tutorial')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('tutorial.footer')"
                >{{ $t("common.tutorials") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('/docs/introduction/what-is-bytebase')"
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
                :to="localePath('/sql-review-guide')"
                class="text-base text-gray-500 hover:text-gray-900"
                @click="track('dbreview.footer')"
                >{{ $t("sql-review-guide.title") }}</nuxt-link
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

            <li v-if="currentLocale === '简体中文'">
              <a
                href="https://devjoy.org"
                target="__blank"
                class="flex flex-row space-x-2 items-center text-base text-gray-500 hover:text-gray-900"
              >
                <span>DevJoy</span>
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
      <div class="flex justify-center space-x-3 sm:space-x-6 md:order-2">
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

        <div
          v-if="currentLocale === '简体中文'"
          class="wechat-qrcode-wrapper relative"
        >
          <span class="sr-only">Wechat</span>
          <img
            class="w-6 h-auto opacity-90 hover:opacity-70"
            src="~/assets/wechat.webp"
            alt=""
          />
          <div
            class="wechat-qrcode-container hidden absolute bottom-4 -left-2 pb-4"
          >
            <div
              class="w-44 h-auto border shadow rounded bg-white flex flex-col justify-start items-center"
            >
              <img
                class="w-full h-auto"
                src="~/assets/wechat-bb-qrcode.webp"
                alt=""
              />
              <span class="text-xs mb-2">关注 Bytebase 微信公众号</span>
            </div>
          </div>
        </div>

        <a
          href="https://twitter.com/Bytebase"
          target="__blank"
          class="text-gray-800 hover:text-gray-600"
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
          href="https://discord.gg/huyw7gRsyA"
          target="__blank"
          class="text-gray-800 hover:text-gray-600"
        >
          <span class="sr-only">Discord</span>
          <svg
            class="h-6 w-6"
            viewBox="0 0 71 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="71" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a
          href="https://github.com/bytebase/bytebase"
          target="__blank"
          class="text-gray-800 hover:text-gray-600"
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

<style scoped>
.wechat-qrcode-wrapper:hover .wechat-qrcode-container {
  @apply block;
}
</style>
