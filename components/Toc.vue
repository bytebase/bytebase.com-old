<template>
  <!-- Table of Contents-->
  <aside
    v-show="titlesShouldList.length > 0"
    class="hidden xl:flex flex-col justify-start items-start sticky w-52 top-0 right-6 2xl:right-10 pr-4 h-full max-h-screen flex-shrink-0 overflow-x-hidden overflow-y-auto text-sm"
  >
    <span class="text-black pb-2 pl-4 border-l border-gray-200 truncate"
      >Table of Contents</span
    >
    <div class="flex flex-col w-52 md:h-112 2xl:h-screen overflow-y-auto">
      <a
        v-for="item of titlesShouldList"
        :key="item.id"
        :border="item.text"
        class="truncate leading-7 text-gray-500 flex-shrink-0 w-full whitespace-nowrap border-l border-gray-200 pl-4 hover:text-accent"
        :class="`pl-${(item.depth - 1) * 4} ${
          state.activeHashId === item.id ? 'text-accent border-accent' : ''
        }`"
        :href="`#${item.id}`"
        @click="state.activeHashId = item.id"
      >
        {{ item.text }}
      </a>
    </div>
  </aside>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  ref,
} from "@nuxtjs/composition-api";

interface TOC {
  id: string;
  depth: number;
  text: string;
}

interface State {
  activeHashId: string;
  showTOC: boolean;
}

export default defineComponent({
  props: { content: Object },
  setup(props: { content: any }) {
    const state = ref<State>({
      activeHashId: "",
      showTOC: false,
    });
    const titlesShouldList = computed(() =>
      (props.content.toc as TOC[]).filter((t) => t.depth >= 2 && t.depth <= 3)
    );
    /**
     * These IDs are recorded to detect whether the user scrolled up or down.
     *
     * There're only two scenarios where we need to update the active title:
     *  1. The user scrolls down until a new title appears, then mark the new title as active.
     *  2. The user scrolls up until the currently active title is not in view,
     *     so we will select the previous title as the active one.
     */
    const lastAppearedId = ref<string>();
    const currAppearedId = ref<string>();
    const lastDisappearedId = ref<string>();
    const currDisappearedId = ref<string>();

    onMounted(() => {
      if (process.client) {
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        const options = {
          threshold: 0.1,
          rootMargin: `0px 0px -${vh - 214}px 0px`,
        };
        const titles = Array.from(
          document.querySelectorAll(
            "#content-container h2, #content-container h3"
          )
        );
        const Ids = titles.map((t) => t.id);
        lastAppearedId.value = titles[0].id;
        lastDisappearedId.value = titles[0].id;

        const titleObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              currAppearedId.value = entry.target.id;
              if (
                Ids.indexOf(currAppearedId.value) >=
                Ids.indexOf(lastAppearedId.value as string)
              ) {
                // When a title appears during scrolling down, make it active.
                state.value.activeHashId = entry.target.id;
              }
              lastAppearedId.value = currAppearedId.value;
            } else {
              currDisappearedId.value = entry.target.id;
              if (
                Ids.indexOf(currDisappearedId.value as string) <
                Ids.indexOf(lastDisappearedId.value as string)
              ) {
                // When a title disappears during scrolling up, make the title before it active.
                if (Ids.indexOf(entry.target.id) - 1 >= 0) {
                  state.value.activeHashId =
                    Ids[Ids.indexOf(entry.target.id) - 1];
                }
              }
              lastDisappearedId.value = currDisappearedId.value;
            }
          });
        }, options);

        titles.forEach((title) => {
          titleObserver.observe(title);
        });
      }
    });
    return {
      state,
      titlesShouldList,
    };
  },
});
</script>
