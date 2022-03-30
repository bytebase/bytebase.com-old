<template>
  <div class="w-full h-auto flex flex-col relative overflow-hidden">
    <main
      v-if="!state.isLoading"
      class="w-full h-screen"
      :class="state.isMobileView ? 'mobile-main-view' : 'normal-main-view'"
    >
      <!-- Header banner in mobile view -->
      <div
        v-if="state.isMobileView"
        class="w-full h-16 pl-4 py-4 flex-shrink-0 flex flex-row justify-start items-center border-b"
      >
        <span class="flex flex-row justify-start items-center no-underline">
          <img
            class="h-5 w-auto mr-2 opacity-60 cursor-pointer"
            src="~/assets/svg/menu.svg"
            alt="menu"
            @click="toggleSidebar"
          />
          <img class="h-6 w-auto" src="~/assets/logo-icon.svg" alt="bytebase" />
          <span class="ml-2 text-base">Documents</span>
          <span class="ml-2 text-base text-gray-400">beta</span>
        </span>
      </div>
      <DocsSidebar
        v-show="state.showSidebar"
        :document-list="state.documentList"
        :class="state.showSidebar && state.isMobileView ? 'mobile-sidebar' : ''"
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

    return {
      state,
      toggleSidebar,
      handleSidebarClick,
      showSearchDialogFlag: computed(() => store.showSearchDialogFlag),
    };
  },
});
</script>

<style scoped>
.normal-main-view {
  @apply grid;
  grid-template-columns: 280px auto;
}
.mobile-main-view {
  @apply flex flex-col justify-start items-start;
}
.mobile-sidebar {
  height: calc(100% - 64px);
}
</style>
