<template>
  <div
    class="search-dialog fixed top-0 left-0 bg-transparent w-screen h-screen flex flex-row justify-center items-start pt-16"
    @click="hideSearchDialog"
  >
    <div
      class="w-128 max-w-full h-auto rounded-lg bg-white shadow"
      @click.stop="0"
    >
      <div class="w-full h-auto flex flex-row justify-start p-3 items-center">
        <img
          class="w-5 h-auto mr-2 flex-shrink-0 opacity-60"
          src="~/assets/svg/search.svg"
          alt="search"
        />
        <input
          ref="inputElRef"
          v-model="searchText"
          class="w-full text-base leading-6 outline-none flex-grow"
          type="text"
          placeholder="Search documents"
          @keydown="handleInputKeyDown"
        />
        <img
          v-show="searchText !== ''"
          class="w-5 h-auto mr-2 ml-1 flex-shrink-0 cursor-pointer opacity-60 hover:opacity-100"
          src="~/assets/svg/x.svg"
          alt="clear"
          @click="handleClearSearchText"
        />
      </div>
      <div
        v-show="searchText !== ''"
        class="w-full max-h-64 overflow-y-auto border-t flex flex-col justify-start items-start"
      >
        <div
          v-for="document in searchDocsResult"
          :key="document.path"
          class="w-full"
        >
          <NuxtLink
            :to="{ path: `/docs${document.path}` }"
            class="w-full pl-4 pr-2 py-2 block flex-shrink-0 hover:bg-gray-100"
          >
            <div
              class="w-full flex flex-col justify-start items-start"
              @click="handleLinkClick"
            >
              <p class="text-base text-gray-600">{{ document.title }}</p>
              <p class="text-sm text-gray-400">{{ document.path }}</p>
            </div>
          </NuxtLink>
        </div>

        <div
          v-show="searchDocsResult.length === 0"
          class="w-full py-4 flex flex-col justify-center items-center"
        >
          <span>
            <img
              class="w-8 h-auto flex-shrink-0 mb-2 opacity-60"
              src="~/assets/svg/sad.svg"
              alt="sad"
            />
          </span>
          <p class="text-base text-gray-500">
            No results for "{{ searchText }}"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  useContext,
  onMounted,
  defineComponent,
  ref,
  watch,
  computed,
} from "@nuxtjs/composition-api";
import { IContentDocument } from "@nuxt/content/types/content";
import { useStore } from "~/store";

interface ContentDocument extends IContentDocument {
  title: string;
  order: number;
}

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const inputElRef = ref<HTMLInputElement>();
    const searchText = ref<string>("");
    const searchDocsResult = ref<ContentDocument[]>([]);
    const documentList: ContentDocument[] = [];
    const store = useStore();
    const showSearchDialogFlag = computed(() => store.showSearchDialogFlag);

    onMounted(async () => {
      const data = ((await $content("", { deep: true })
        .sortBy("order")
        .fetch()) as any) as ContentDocument[];

      for (const document of data) {
        documentList.push(document);
      }

      window.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.code === "KeyK" && (event.ctrlKey || event.metaKey)) {
          store.toggleSearchDialog();
        } else if (event.code === "Escape") {
          store.hideSearchDialog();
        }
      });
    });

    watch([showSearchDialogFlag], () => {
      if (showSearchDialogFlag.value) {
        inputElRef.value?.focus();
      }
    });

    watch([searchText], () => {
      searchDocsResult.value = [];
      if (searchText.value !== "") {
        for (const document of documentList) {
          if (
            document.title.includes(searchText.value) ||
            document.path.includes(searchText.value) ||
            String(document.body).includes(searchText.value)
          ) {
            searchDocsResult.value.push(document);
          }
        }
      }
    });

    const handleInputKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        event.stopPropagation();
        inputElRef.value?.blur();
      }
    };

    const handleClearSearchText = () => {
      searchText.value = "";
    };

    const handleLinkClick = () => {
      searchText.value = "";
      store.hideSearchDialog();
    };

    const hideSearchDialog = () => {
      store.hideSearchDialog();
    };

    return {
      inputElRef,
      searchText,
      searchDocsResult,
      handleClearSearchText,
      handleInputKeyDown,
      hideSearchDialog,
      handleLinkClick,
    };
  },
});
</script>

<style scoped>
.router-active-link {
  @apply no-underline;
}
.search-dialog {
  background-color: rgba(101, 108, 133, 0.4);
}
</style>
