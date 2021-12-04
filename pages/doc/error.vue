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
            <div class="text-lg font-medium text-gray-900">Navigator</div>
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
            <div class="border-t border-gray-200 pt-4 space-y-4">
              <fieldset
                v-for="(category, categoryIndex) in filteredCategoryList"
                :key="categoryIndex"
              >
                <legend class="w-full px-2">
                  <div
                    class="w-full p-2 flex items-center justify-between text-sm text-gray-900"
                  >
                    {{ category.name }}
                  </div>
                </legend>
                <div
                  v-for="(error, index) in category.list"
                  :key="index"
                  class="pt-2 px-4"
                >
                  <a
                    :href="`#${error.hash}`"
                    class="text-sm text-gray-600 hover:underline"
                  >
                    {{ error.code }} - {{ error.name }}
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
            🐞 Bytebase Error Codes
          </h1>
          <h2 class="mt-4 text-base text-gray-500">
            Documentation for all error codes emitted by Bytebase.
          </h2>
          <div class="text-right">
            <a
              href="https://github.com/bytebase/bytebase.com/edit/main/common/errorList.ts"
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
              <span class="text-sm font-medium text-gray-700">Navigator</span>
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
              <div class="space-y-6">
                <fieldset
                  v-for="(category, categoryIndex) in ERROR_LIST"
                  :key="categoryIndex"
                >
                  <a
                    :href="`#${category.hash}`"
                    class="block text-sm font-medium text-gray-900 hover:underline"
                  >
                    {{ category.name }}
                  </a>
                  <div
                    v-for="(error, index) in category.list"
                    :key="index"
                    class="pt-2"
                  >
                    <a
                      :href="`#${error.hash}`"
                      class="flex items-center text-sm text-gray-600 hover:underline"
                    >
                      {{ error.code }} - {{ error.name }}
                    </a>
                  </div>
                </fieldset>
              </div>
            </div>
          </aside>

          <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div class="relative bg-white overflow-hidden space-y-6">
              <div
                v-for="(category, categoryIndex) in ERROR_LIST"
                :key="categoryIndex"
                class="mx-2"
              >
                <a
                  :href="`#${category.hash}`"
                  :id="category.hash"
                  class="block text-2xl text-left text-indigo-600 font-semibold tracking-wide hover:underline"
                >
                  {{ category.name }}
                </a>

                <div
                  v-for="(error, index) in category.list"
                  :key="index"
                  class="mt-6"
                >
                  <div class="flex items-center space-x-4">
                    <a
                      :href="`#${error.hash}`"
                      :id="error.hash"
                      class="text-xl text-gray-800 font-semibold hover:underline"
                      >{{ error.code }} - {{ error.name }}</a
                    >
                  </div>
                  <p
                    class="mt-4 text-gray-600 prose prose-indigo"
                    v-html="error.description"
                  ></p>
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
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import { ERROR_LIST } from "../../common/errorList";

interface LocalState {
  showSidebar: false;
}

export default defineComponent({
  head: {
    title: "Error codes",
    meta: [
      {
        hid: "Error codes",
        name: "Error codes",
        content: "Bytebase error codes documentation",
      },
    ],
  },
  setup() {
    const state = reactive<LocalState>({
      showSidebar: false,
    });

    return {
      state,
      ERROR_LIST,
    };
  },
});
</script>
