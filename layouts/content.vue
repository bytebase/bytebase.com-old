<template>
  <div class="page-wrapper w-full h-screen">
    <MainBanner />
    <header
      class="w-full h-14 bg-white flex flex-row justify-between items-center py-2 px-4 sm:px-6 border-b"
    >
      <nav
        class="flex flex-row relative justify-start items-center h-full sm:justify-center"
        aria-label="Global"
      >
        <span class="sr-only">Bytebase</span>
        <nuxt-link
          to="/"
          class="header-link"
          @click.native="track('docs.header')"
          ><img class="h-6 sm:h-8 w-auto" src="~/assets/logo-icon.svg" alt=""
        /></nuxt-link>
        <nuxt-link
          to="/blog"
          class="header-link"
          @click.native="track('blog.header')"
          >Blog</nuxt-link
        >
        <nuxt-link
          to="/changelog"
          class="header-link"
          @click.native="track('changelog.header')"
          >Changelog</nuxt-link
        >
        <nuxt-link
          to="/pricing"
          class="header-link"
          @click.native="track('pricing.header')"
          >Pricing</nuxt-link
        >
      </nav>
      <div
        class="w-8 sm:w-64 h-8 pl-0 sm:pl-3 border rounded-2xl flex flex-row justify-center sm:justify-start items-center opacity-80 cursor-pointer hover:opacity-100"
        @click="handleSearchBtnClick"
      >
        <img class="w-4 h-auto" src="~/assets/svg/search.svg" alt="search" />
        <span class="text-sm ml-2 hidden sm:block">Search</span>
      </div>
      <div class="flex">
        <img
          v-if="state.isMobileView"
          class="h-5 w-auto opacity-60 cursor-pointer"
          src="~/assets/svg/menu.svg"
          alt="menu"
          @click="toggleSidebar"
        />
        <div v-else class="transition-all flex flex-row">
          <a
            href="https://demo.bytebase.com?ref=bytebase.com"
            target="_blank"
            class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 border border-transparent text-sm font-medium rounded border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300"
            @click="track('demo.header')"
          >
            Demo
          </a>
          <nuxt-link
            :to="localePath('/docs/install/install-with-docker')"
            class="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600"
            @click.native="track('deploy.header')"
            >Deploy now</nuxt-link
          >
        </div>
      </div>
    </header>
    <main
      class="main-wrapper w-full h-auto flex-grow overflow-y-auto overflow-x-hidden"
    >
      <DocsSidebar
        v-show="state.showSidebar"
        @link-click="handleSidebarClick"
      />
      <Nuxt />
    </main>
    <AlgoliaSearchDialog v-show="showSearchDialogFlag"></AlgoliaSearchDialog>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  useContext,
} from "@nuxtjs/composition-api";
import { useStore } from "~/store";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

interface State {
  isMobileView: boolean;
  showSidebar: boolean;
}

// From tailwind, `sm` width is 640.
const MOBILE_VIEW_MAX_WIDTH = 640;

export default defineComponent({
  setup() {
    const { $ga } = useContext() as any;

    const store = useStore();
    const state = reactive<State>({
      isMobileView: false,
      showSidebar: true,
    });

    const showSearchDialogFlag = computed(() => {
      return store.showSearchDialogFlag;
    });

    onMounted(async () => {
      state.isMobileView = window.innerWidth <= MOBILE_VIEW_MAX_WIDTH;
      if (state.isMobileView) {
        state.showSidebar = false;
      } else {
        state.showSidebar = true;
      }
      window.addEventListener("resize", () => {
        const isMobileView = window.innerWidth <= MOBILE_VIEW_MAX_WIDTH;
        if (isMobileView != state.isMobileView) {
          state.isMobileView = window.innerWidth <= MOBILE_VIEW_MAX_WIDTH;
          if (state.isMobileView) {
            state.showSidebar = false;
          } else {
            state.showSidebar = true;
          }
        }
      });
    });

    const track = (name: string) => {
      trackEvent(name);

      const parts = name.split(".");
      $ga.event({
        eventCategory: parts[0],
        eventLabel: parts[1],
      });
    };

    const toggleSidebar = () => {
      state.showSidebar = !state.showSidebar;
    };

    const handleSidebarClick = () => {
      if (state.isMobileView) {
        state.showSidebar = false;
      }
    };

    const handleSearchBtnClick = () => {
      store.showSearchDialog();
    };

    return {
      state,
      showSearchDialogFlag,
      track,
      toggleSidebar,
      handleSidebarClick,
      handleSearchBtnClick,
    };
  },
});
</script>

<style scoped>
.page-wrapper {
  @apply grid;
  grid-template-rows:
    minmax(min-content, max-content) minmax(min-content, max-content)
    auto;
}
.main-wrapper {
  grid-template-columns: 280px auto;
  @apply flex sm:grid;
}
.header-link {
  @apply text-gray-700 mr-4 hover:opacity-80 hover:underline whitespace-nowrap;
}
.router-active-link {
  @apply no-underline;
}
</style>
