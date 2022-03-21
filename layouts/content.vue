<template>
  <div class="w-full h-auto flex flex-col relative overflow-hidden">
    <main
      v-show="!state.isLoading"
      class="w-full h-screen"
      :class="state.isMobileView ? 'mobile-main-view' : 'normal-main-view'"
    >
      <!-- Header banner in mobile view -->
      <div
        v-if="state.isMobileView"
        class="w-full flex flex-row pl-4 py-4 border-b"
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
        class="-ml-100 -translate-x-full"
        @link-click="handleSidebarClick"
      />
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "@nuxtjs/composition-api";

interface State {
  isLoading: boolean;
  isMobileView: boolean;
  showSidebar: boolean;
}

// From tailwind, `sm` width is 640.
const MOBILE_VIEW_MAX_WIDTH = 640;

export default defineComponent({
  setup() {
    const state = reactive<State>({
      isLoading: true,
      isMobileView: false,
      showSidebar: true,
    });

    onMounted(() => {
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
</style>
