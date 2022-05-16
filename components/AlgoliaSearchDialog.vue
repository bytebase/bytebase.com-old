<template>
  <div
    class="search-dialog transition-all z-50 fixed top-0 left-0 bg-transparent px-3 w-screen h-screen flex flex-row justify-center items-start pt-20"
    @click="hideSearchDialog"
  >
    <div
      class="w-128 max-w-full h-auto rounded-lg bg-white shadow"
      @click.stop="0"
    >
      <ais-instant-search
        :search-client="searchClient"
        index-name="bytebase-docs"
        class="rounded-lg"
      >
        <ais-configure
          :attributes-to-highlight.camel="['title', 'path']"
          :attributes-to-snippet.camel="['bodyPlainText']"
        >
          <ais-search-box show-loading-indicator class="p-2 border-b" />
          <ais-hits class="max-h-72 overflow-y-auto rounded-b-lg">
            <template #default="{ items }">
              <div
                v-for="item in items"
                :key="item.objectID"
                class="w-full h-auto border-b"
              >
                <nuxt-link
                  :to="localePath(`/docs${removeI18nPrefixPath(item.path)}`)"
                  class="w-full pl-4 pr-2 py-2 block flex-shrink-0 hover:bg-gray-100"
                >
                  <div
                    class="w-full flex flex-col justify-start items-start"
                    @click="handleLinkClick"
                  >
                    <ais-snippet
                      attribute="bodyPlainText"
                      :hit="item"
                      class="text-sm text-gray-600"
                    />
                    <ais-highlight
                      attribute="title"
                      :hit="item"
                      class="text-sm leading-8 text-gray-400"
                    />
                  </div>
                </nuxt-link>
              </div>
              <div
                v-show="items.length === 0"
                class="w-full py-4 flex flex-col justify-center items-center"
              >
                <span>
                  <img
                    class="w-8 h-auto flex-shrink-0 mb-2 opacity-60"
                    src="~/assets/svg/sad.svg"
                    alt="sad"
                  />
                </span>
                <p class="text-base text-gray-500">No results</p>
              </div>
            </template>
          </ais-hits>
        </ais-configure>
      </ais-instant-search>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import algoliaSearch from "algoliasearch/lite";
import { removeI18nPrefixPath } from "~/common/utils";
import { useStore } from "~/store";

export default defineComponent({
  setup() {
    const store = useStore();
    // configurations for Algolia search
    const searchClient = algoliaSearch(
      // Applictaion ID
      "2M7XI1QIDY",
      // Public Search API key
      "8d8880edf969c457a3f99a22ea7adb83"
    );

    onMounted(async () => {
      window.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.code === "KeyK" && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          store.toggleSearchDialog();
        } else if (event.code === "Escape") {
          store.hideSearchDialog();
        }
      });
    });

    const handleLinkClick = () => {
      store.hideSearchDialog();
    };

    const hideSearchDialog = () => {
      store.hideSearchDialog();
    };

    return {
      searchClient,
      handleLinkClick,
      removeI18nPrefixPath,
      hideSearchDialog,
    };
  },
});
</script>

<style>
@import "instantsearch.css/themes/satellite-min.css";

.router-active-link {
  @apply no-underline;
}
.search-dialog {
  background-color: rgba(101, 108, 133, 0.4);
}

.ais-Hits-item {
  @apply p-0 rounded-none;
}
.ais-SearchBox-input {
  @apply shadow-none rounded-lg border-gray-200;
}
</style>
