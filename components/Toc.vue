<template>
  <!-- Table of Contents-->
  <aside
    v-show="tocList.length > 0"
    class="hidden xl:flex flex-col justify-start items-start sticky w-52 top-0 pb-36 right-6 2xl:right-10 pr-4 h-full max-h-screen flex-shrink-0 overflow-x-hidden overflow-y-auto text-sm"
  >
    <span class="text-black pb-2 pl-4 border-l border-gray-200 truncate"
      >Table of Contents</span
    >
    <div
      ref="container"
      class="flex flex-col w-52 h-full overflow-y-auto hide-scrollbar"
    >
      <a
        v-for="item of tocList"
        :key="item.id"
        :border="item.text"
        class="truncate leading-7 text-gray-500 flex-shrink-0 w-full whitespace-nowrap border-l border-gray-200 pl-4 hover:text-accent"
        :class="`pl-${(item.depth - 1) * 4} ${
          activeHashId === item.id ? 'text-accent border-accent' : ''
        }`"
        :href="`#${item.id}`"
        @click="activeHashId = item.id"
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
import { sortedIndex, throttle } from "lodash";

interface TOC {
  id: string;
  depth: number;
  text: string;
}

const ACTIVE_TITLE_OFFSET = 4
const TITLE_HEIGHT = 28;

export default defineComponent({
  props: {
    content: { type: Object, required: true },
    scrollOffset: { type: Number, required: true },
  },
  setup(props: { content: any; scrollOffset: number }) {
    const activeHashId = ref("");
    const container = ref<HTMLElement>()
    const tocList = computed(() =>
      (props.content.toc as TOC[]).filter((t) => t.depth >= 2 && t.depth <= 3)
    );
    onMounted(() => {
      // eslint-disable-next-line no-undef
      if (process.client) {
        const contentContainer = document.querySelector("#content-container");
        const titleElementList: HTMLElement[] = Array.from(
          document.querySelectorAll("#content h2, #content h3")
        );
        const onScroll = () => {
          const scrollTop = contentContainer?.scrollTop || 0;
          const titleOffsetTops = titleElementList
            .map((el: HTMLElement) => el.offsetTop)
            .sort((a: number, b: number) => a - b);
          const activeIndex =
            sortedIndex(titleOffsetTops, scrollTop + props.scrollOffset) - 1;
          if (activeIndex >= 0) {
            activeHashId.value = titleElementList[activeIndex].id;
            container.value?.scrollTo({
              top: (activeIndex - ACTIVE_TITLE_OFFSET) * TITLE_HEIGHT,
              behavior: "smooth"
            })
          }
        };
        contentContainer?.addEventListener("scroll", throttle(onScroll, 100));
      }
    });
    return {
      activeHashId,
      tocList,
      container
    };
  },
});
</script>

<style scoped>
/* Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
