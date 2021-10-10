<template>
  <div class="bg-white">
    <div>
      <!--
      Mobile filter dialog

      Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    -->
      <div
        v-if="state.showSidebar"
        class="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div
          class="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        ></div>

        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div
          class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto"
        >
          <div class="px-4 flex items-center justify-between">
            <div class="text-lg font-medium text-gray-900">Filters</div>
            <button
              type="button"
              class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
              @click.prevent="state.showSidebar = false"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Filters -->
          <form class="mt-4">
            <div class="border-t border-gray-200 pt-4 pb-4">
              <fieldset>
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    Category
                  </div>
                </legend>
                <div class="pt-4 pb-2 px-4" id="filter-section-0">
                  <div class="space-y-6">
                    <div
                      v-for="(filter, index) in state.filterList"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        type="checkbox"
                        :value="filter.value"
                        :checked="filter.checked"
                        @input="
                          () => {
                            filter.checked = !filter.checked;
                          }
                        "
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label class="ml-3 text-sm text-gray-600">
                        {{ filter.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="border-t border-gray-200 pt-4 space-y-4">
              <fieldset
                v-for="(alphaItem, index) in filteredAlphaList"
                :key="index"
              >
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    {{ alphaItem.letter }}
                  </div>
                </legend>
                <div
                  v-for="(glossary, glossaryIndex) in alphaItem.list"
                  :key="glossaryIndex"
                  class="pt-2 px-4"
                >
                  <a
                    :href="`#${glossaryAnchor(glossary.name)}`"
                    class="text-sm text-gray-600 hover:underline"
                  >
                    {{ glossary.name }}
                  </a>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>

      <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pb-4">
          <h1
            class="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            📕 Database Glossary
          </h1>
          <h2 class="mt-4 text-base text-gray-500">
            A handy database term dictionary on the internet. We cover general
            database, MySQL, PostgreSQL as well as Bytebase specific topics.
          </h2>
          <div class="text-right">
            <a
              href="https://github.com/bytebase/bytebase.com/edit/main/pages/glossary.ts"
              target="__blank"
              class="text-sm text-blue-600 hover:underline"
              >Suggest changes on GitHub</a
            >
          </div>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
            <button
              type="button"
              class="inline-flex items-center lg:hidden"
              @click="state.showSidebar = true"
            >
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <!-- Heroicon name: solid/plus-sm -->
              <svg
                class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div class="hidden lg:block">
              <form class="divide-y divide-gray-200 space-y-10">
                <div>
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">
                      Category
                    </legend>
                    <div class="pt-6 space-y-3">
                      <div
                        v-for="(filter, index) in state.filterList"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          type="checkbox"
                          :value="filter.value"
                          :checked="filter.checked"
                          @input="
                            () => {
                              filter.checked = !filter.checked;
                            }
                          "
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label class="ml-3 items-center text-sm text-gray-600">
                          {{ filter.name }}
                          <span
                            class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                          >
                            {{ tagItemCount(filter.value) }}
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="pt-10 space-y-6">
                  <fieldset
                    v-for="(alphaItem, index) in filteredAlphaList"
                    :key="index"
                  >
                    <a
                      :href="`#${alphaItem.letter}`"
                      class="block text-sm font-medium text-gray-900 hover:underline"
                    >
                      {{ alphaItem.letter }}
                    </a>
                    <div
                      v-for="(glossary, glossaryIndex) in alphaItem.list"
                      :key="glossaryIndex"
                      class="pt-2"
                    >
                      <a
                        :href="`#${glossaryAnchor(glossary.name)}`"
                        class="flex items-center text-sm text-gray-600 hover:underline"
                      >
                        {{ glossary.name }}
                      </a>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Glossary grid -->
          <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div class="relative bg-white overflow-hidden space-y-6">
              <div
                v-for="(alphaItem, index) in filteredAlphaList"
                :key="index"
                class="mx-2"
              >
                <a
                  :href="`#${alphaItem.letter}`"
                  :id="alphaItem.letter"
                  class="block text-2xl text-left text-indigo-600 font-semibold tracking-wide uppercase hover:underline"
                >
                  {{ alphaItem.letter }}
                </a>

                <div
                  v-for="(glossary, glossaryIndex) in alphaItem.list"
                  :key="glossaryIndex"
                  class="mt-6"
                >
                  <div class="flex items-center space-x-4">
                    <a
                      :href="`#${glossaryAnchor(glossary.name)}`"
                      :id="glossaryAnchor(glossary.name)"
                      class="text-xl text-gray-800 font-semibold hover:underline"
                      >{{ glossary.name }}</a
                    >
                    <div
                      v-for="(tag, tagIndex) in glossary.tagList"
                      :key="tagIndex"
                    >
                      <span
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                        :class="tagStyle(tag)"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  <p class="mt-4 text-gray-600">
                    {{ glossary.description }}
                  </p>
                  <div v-if="glossary.reference" class="flex justify-end mt-2">
                    <a
                      :href="glossary.reference"
                      target="__blank"
                      class="flex items-center text-blue-600 hover:underline"
                      >Reference
                      <svg
                        class="w-4 h-4"
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
                        ></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@nuxtjs/composition-api";
import { AlphaItem, Glosssary, Tag } from "./glossaryTypes";
import { ALPHA_LIST } from "./glossary";
import { tagStyle } from "./util";

type FilterItem = {
  value: Tag;
  name: string;
  checked: boolean;
};

const FILTER_LIST: FilterItem[] = [
  {
    value: "General",
    name: "General",
    checked: false,
  },
  {
    value: "Bytebase",
    name: "Bytebase",
    checked: false,
  },
  {
    value: "MySQL",
    name: "MySQL",
    checked: false,
  },
  {
    value: "PostgreSQL",
    name: "PostgreSQL",
    checked: false,
  },
];

interface LocalState {
  filterList: FilterItem[];
  showSidebar: false;
}

export default defineComponent({
  head: {
    title: "Database Glossary",
    meta: [
      {
        hid: "Database Glossary",
        name: "Database Glossary",
        content: "",
      },
    ],
  },
  setup() {
    const state = reactive<LocalState>({
      filterList: FILTER_LIST,
      showSidebar: false,
    });

    const glossaryAnchor = (name: string): string => {
      return name.toLowerCase().replaceAll(" ", "-");
    };

    const tagItemCount = (tag: Tag): number => {
      let count = 0;
      for (const alpha of ALPHA_LIST) {
        for (const glossary of alpha.list) {
          if (tag == "All" || glossary.tagList.includes(tag)) {
            count++;
          }
        }
      }
      return count;
    };

    const filteredAlphaList = computed(() => {
      const filterTagList: Tag[] = [];
      for (const filter of state.filterList) {
        if (filter.checked) {
          filterTagList.push(filter.value);
        }
      }

      if (filterTagList.length > 0) {
        const list: AlphaItem[] = [];
        for (const alpha of ALPHA_LIST) {
          const glossaryList: Glosssary[] = [];
          for (const glossary of alpha.list) {
            for (const tag of glossary.tagList) {
              if (filterTagList.includes(tag)) {
                glossaryList.push(glossary);
                break;
              }
            }
          }

          if (glossaryList.length > 0) {
            list.push({
              letter: alpha.letter,
              list: glossaryList,
            });
          }
        }
        return list;
      }
      return ALPHA_LIST;
    });

    return {
      state,
      tagItemCount,
      glossaryAnchor,
      filteredAlphaList,
      tagStyle,
    };
  },
});
</script>
