<template>
  <div
    class="relative w-full h-screen flex flex-col justify-start items-start overflow-hidden"
  >
    <MainBanner />
    <header
      class="flex-shrink-0 z-10 top-0 left-0 w-full h-14 bg-white flex flex-row justify-between items-center py-2 px-4 sm:px-6 border-b"
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
          to="/docs"
          class="header-link"
          @click.native="track('docs.header')"
          >Docs</nuxt-link
        >
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
      <div class="flex">
        <img
          v-if="state.isMobileView"
          class="h-5 w-auto opacity-60 cursor-pointer"
          src="~/assets/svg/menu.svg"
          alt="menu"
          @click="toggleSidebar"
        />
        <div
          v-else
          class="w-36 h-8 pl-3 border rounded-2xl flex flex-row justify-start items-center opacity-60 cursor-pointer hover:opacity-100"
          @click="handleSearchBtnClick"
        >
          <img class="w-4 h-auto" src="~/assets/svg/search.svg" alt="search" />
          <span class="text-sm ml-2">Search</span>
        </div>
      </div>
    </header>
    <main
      v-show="!state.isLoading"
      class="main-wrapper w-full h-auto flex-grow overflow-y-auto overflow-x-hidden"
    >
      <DocsSidebar
        v-show="state.showSidebar"
        :document-list="state.documentList"
        @link-click="handleSidebarClick"
      />
      <Nuxt />
    </main>
    <SearchDocsDialog v-show="showSearchDialogFlag"></SearchDocsDialog>
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
import { ContentDocument } from "~/types/docs";

interface State {
  isLoading: boolean;
  isMobileView: boolean;
  showSidebar: boolean;
  documentList: ContentDocument[];
}

// From tailwind, `sm` width is 640.
const MOBILE_VIEW_MAX_WIDTH = 640;

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const store = useStore();
    const state = reactive<State>({
      isLoading: true,
      isMobileView: false,
      showSidebar: true,
      documentList: [],
    });

    const showSearchDialogFlag = computed(() => {
      return store.showSearchDialogFlag;
    });

    onMounted(async () => {
      state.documentList = (await $content("", { deep: true })
        .sortBy("order")
        .fetch()) as any as ContentDocument[];
      state.isMobileView = window.innerWidth <= MOBILE_VIEW_MAX_WIDTH;
      if (state.isMobileView) {
        state.showSidebar = false;
      } else {
        state.showSidebar = true;
      }
      state.isLoading = false;
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
      toggleSidebar,
      handleSidebarClick,
      handleSearchBtnClick,
    };
  },
});
</script>

<style scoped>
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
