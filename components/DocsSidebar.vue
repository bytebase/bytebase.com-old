<template>
  <div
    class="w-full h-full flex flex-col flex-shrink-0 py-4 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto"
  >
    <div class="hidden sm:flex w-full flex-row pl-6 pt-2">
      <span class="flex flex-row justify-start items-center no-underline">
        <img class="h-6 w-auto" src="~/assets/logo-icon.svg" alt="" />
        <span class="ml-2 text-base">Documents</span>
        <span class="ml-2 text-base text-gray-400">beta</span>
      </span>
    </div>
    <div class="w-full flex flex-col mt-4">
      <div
        v-for="document in state.documentList"
        :key="document.title"
        :class="`pl-3 ml-${(document.level - 1) * 4}`"
        @click="handleLinkClick"
      >
        <NuxtLink
          :to="{ path: `/docs${document.path}` }"
          class="pl-3 py-2 block flex-shrink-0 text-gray-500 w-full text-sm border border-transparent whitespace-pre hover:text-gray-700"
          :class="`${document.level === 1 ? 'text-gray-600 mt-4' : ''}`"
        >
          <span>{{ document.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  useContext,
  reactive,
  onMounted,
  defineComponent,
} from "@nuxtjs/composition-api";
import { IContentDocument } from "@nuxt/content/types/content";

interface Document extends IContentDocument {
  level: number;
}

interface State {
  documentList: Document[];
}

export default defineComponent({
  emits: ["link-click"],
  setup(_, { emit }) {
    const { $content } = useContext();
    const state = reactive<State>({
      documentList: [],
    });

    onMounted(async () => {
      const documentList = ((await $content("", { deep: true })
        .sortBy("position")
        .fetch()) as any) as IContentDocument[];
      state.documentList = documentList.map(document => {
        let level = document.path.split("/").length - 1;
        // The `overview` file is an index file of its directory.
        if (document.path.endsWith("/overview")) {
          level = level - 1;
        }

        return {
          ...document,
          level: level,
        };
      });
    });

    const handleLinkClick = () => {
      emit("link-click");
    };

    return {
      state,
      handleLinkClick,
    };
  },
});
</script>

<style scoped>
.router-active-link {
  @apply bg-white text-accent no-underline border border-gray-200 border-r-0;
}
</style>
