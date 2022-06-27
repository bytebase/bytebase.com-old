<template>
  <!-- Table of Contents-->
  <aside
    v-show="tocList.length > 0"
    :class="`hidden ${breakPoint}:flex flex-col justify-start items-start sticky w-52 top-0 right-6 2xl:right-10 pr-4 h-full max-h-screen flex-shrink-0 overflow-x-hidden overflow-y-auto text-sm`"
  >
    <span class="text-black pb-2 pl-4 border-l border-gray-200 truncate"
      >Table of Contents</span
    >
    <div class="flex flex-col w-52 md:h-112 2xl:h-screen overflow-y-auto">
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

export default defineComponent({
  props: {
    content: { type: Object, required: true },
    scrollOffset: { type: Number, required: true },
    breakPoint: { type: String, default: "xl" },
  },
  setup(props: { content: any; scrollOffset: number }) {
    const activeHashId = ref("");
    const tocList = computed(() =>
      (props.content.toc as TOC[]).filter((t) => t.depth >= 2 && t.depth <= 3)
    );
    onMounted(() => {
      // eslint-disable-next-line no-undef
      if (process.client) {
        const contentContainer = document.querySelector("#content-container");
        const titleElementList: any = Array.from(
          document.querySelectorAll("#content h2, #content h3")
        );
        const onScroll = () => {
          const scrollTop = contentContainer?.scrollTop || 0;
          const titleOffsetTops = titleElementList
            .map((el) => el.offsetTop)
            .sort((a, b) => a - b);
          const activeIndex =
            sortedIndex(titleOffsetTops, scrollTop + props.scrollOffset) - 1;
          if (activeIndex >= 0) {
            activeHashId.value = titleElementList[activeIndex].id;
          }
        };
        contentContainer?.addEventListener("scroll", throttle(onScroll, 100));
      }
    });
    return {
      activeHashId,
      tocList,
    };
  },
});
</script>
