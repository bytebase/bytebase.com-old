<template>
  <div
    ref="ducumentContainerRef"
    class="w-full h-auto relative px-8 lg:pr-72 flex flex-row justify-center overflow-x-hidden overflow-y-auto"
    :class="classname"
  >
    <div class="flex flex-col justify-start items-center w-full max-w-3xl">
      <nuxt-content class="w-full py-6 markdown-body" :document="document" />
      <div
        class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm"
      >
        <span class="text-gray-600 py-1">
          Last updated {{ updatedTsFromNow }}
        </span>
        <a
          class="py-1 flex flex-row justify-start items-center text-gray-600 hover:text-black"
          :href="
            `https://github.com/bytebase/bytebase.com/blob/main${filePath}`
          "
        >
          Edit this page on GitHub
          <img
            class="h-3 ml-2"
            src="~/assets/svg/external-link.svg"
            alt="prev"
          />
        </a>
      </div>
      <div
        class="w-full mt-4 pb-12 pt-4 flex flex-row justify-between border-t border-gray-200"
      >
        <NuxtLink
          v-if="prev"
          :to="{ path: `/docs${prev ? prev.path : ''}` }"
          class="py-2 flex flex-row justify-start items-center text-sm text-gray-600 hover:text-black"
        >
          <img class="h-3 mr-2" src="~/assets/svg/arrow-left.svg" alt="prev" />
          <span>{{ prev ? prev.title : "" }}</span>
        </NuxtLink>
        <span v-else></span>
        <NuxtLink
          v-if="next"
          :to="{ path: `/docs${next ? next.path : ''}` }"
          class="py-2 flex flex-row justify-end items-center text-sm text-gray-600 hover:text-black"
        >
          <span>{{ next ? next.title : "" }}</span>
          <img class="h-3 ml-2" src="~/assets/svg/arrow-right.svg" alt="next" />
        </NuxtLink>
        <span v-else></span>
      </div>
    </div>
    <!-- TOC -->
    <div
      v-show="toc.length !== 0"
      class="hidden fixed right-0 mt-12 w-64 py-2 pr-4 h-auto flex-shrink-0 lg:flex flex-col justify-start items-start text-sm border-l border-gray-200 pl-4"
    >
      <span class="text-black mb-2">Table of Contents</span>
      <a
        v-for="item of toc"
        :key="item.id"
        class="leading-6 mt-2 text-gray-500 w-full truncate whitespace-nowrap hover:text-accent"
        :class="
          `pl-${(item.depth - 2) * 4} ${
            state.currentHashId === item.id ? 'text-accent' : ''
          }`
        "
        :href="`#${item.id}`"
        @click="state.currentHashId = item.id"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// Table of Content Object
interface TOC {
  id: string;
  depth: number;
  text: string;
}

interface State {
  currentHashId: string;
}

export default defineComponent({
  props: {
    classname: {
      type: String,
      default: "",
    },
    document: Object,
    prev: Object,
    next: Object,
  },
  setup(props) {
    const state = reactive<State>({
      currentHashId: "",
    });
    const ducumentContainerRef = ref<HTMLDivElement>();
    const toc = computed(() => {
      // Only show h2,h3 in toc.
      return (props.document?.toc as TOC[]).filter(
        a => a.depth >= 2 && a.depth <= 3
      );
    });
    const filePath = computed(() => {
      return `/docs${props.document?.path}${props.document?.extension}`;
    });
    const updatedTsFromNow = computed(() => {
      return dayjs(props.document?.updatedAt).fromNow();
    });

    onMounted(() => {
      window.document.title = props.document?.title || "Bytebase Document";
      const hashTags = ducumentContainerRef.value?.querySelectorAll("h2,h3");
      if (hashTags && hashTags.length > 0) {
        const tagElementList = Array.from(hashTags) as HTMLElement[];
        const hash = window.location.hash;
        if (hash !== "#") {
          for (const item of tagElementList) {
            if (hash === `#${item.id}`) {
              (item.firstChild as HTMLAnchorElement).click();
              state.currentHashId = item.id;
            }
          }
        }

        // Dynamic set toc item when scroll page.
        ducumentContainerRef.value?.addEventListener("scroll", () => {
          const scrollTop = ducumentContainerRef.value?.scrollTop || 0;
          for (let i = 0; i < tagElementList.length; i++) {
            if (tagElementList[i].offsetTop > scrollTop) {
              state.currentHashId = tagElementList[i].id;
              break;
            }
          }
        });
      }
    });

    return {
      state,
      toc,
      ducumentContainerRef,
      filePath,
      updatedTsFromNow,
    };
  },
});
</script>

<style scoped>
@import "~/assets/css/github-markdown-style.css";
</style>
