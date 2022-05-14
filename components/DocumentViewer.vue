<template>
  <div
    ref="ducumentContainerRef"
    class="flex flex-col justify-start items-start px-4 lg:pr-64 w-full h-auto relative overflow-x-hidden overflow-y-auto"
  >
    <div
      class="flex flex-col justify-start items-center w-full mx-auto lg:max-w-3xl 2xl:max-w-4xl"
    >
      <nuxt-content class="w-full py-6 markdown-body" :document="document" />
      <div
        class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm"
      >
        <span class="text-gray-600 py-1">
          Last updated {{ updatedTsFromNow }}
        </span>
        <a
          class="py-1 flex flex-row justify-start items-center text-gray-600 hover:text-black"
          :href="`https://github.com/bytebase/bytebase.com/blob/main${filePath}`"
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
        <nuxt-link
          v-if="prev"
          :to="localePath(`/docs${prev.path}`)"
          class="py-2 flex flex-row justify-start items-center text-sm text-gray-600 hover:text-black"
        >
          <img class="h-3 mr-2" src="~/assets/svg/arrow-left.svg" alt="prev" />
          <span>{{ prev ? prev.title : "" }}</span>
        </nuxt-link>
        <span v-else></span>
        <nuxt-link
          v-if="next"
          :to="localePath(`/docs${next.path}`)"
          class="py-2 flex flex-row justify-end items-center text-sm text-gray-600 hover:text-black"
        >
          <span>{{ next ? next.title : "" }}</span>
          <img class="h-3 ml-2" src="~/assets/svg/arrow-right.svg" alt="next" />
        </nuxt-link>
        <span v-else></span>
      </div>
    </div>

    <!-- TOC -->
    <div
      v-show="toc.length !== 0"
      class="hidden fixed right-0 top-32 pt-12 w-64 py-2 pr-4 h-auto max-h-screen flex-shrink-0 lg:flex flex-col justify-start items-start overflow-y-auto text-sm"
    >
      <span class="text-black pb-2 pl-4 border-l border-gray-200"
        >Table of Contents</span
      >
      <a
        v-for="item of toc"
        :key="item.id"
        class="leading-7 text-gray-500 flex-shrink-0 w-full truncate whitespace-nowrap border-l border-gray-200 pl-4 hover:text-accent"
        :class="`pl-${(item.depth - 1) * 4} ${
          state.currentHashId === item.id ? 'text-accent border-accent' : ''
        }`"
        :href="`#${item.id}`"
        @click="state.currentHashId = item.id"
      >
        {{ item.text }}
      </a>
    </div>

    <!-- Subscribtion popup -->
    <div
      class="transition-all fixed bottom-0 left-0 w-full bg-white z-10 lg:px-36 border-t shadow"
      :style="{ 'margin-bottom': state.showSubscribtionPopup ? '0' : '-100%' }"
    >
      <span
        class="absolute top-2 right-2 lg:right-44 mr-2 cursor-pointer text-lg opacity-80 hover:opacity-60"
        @click="onCloseSubscribtionPopUp"
        ><img src="@/assets/svg/x.svg" class="w-6 h-auto" alt="" />
      </span>
      <SubscribeSection
        class="border-none"
        :module-name="'subscribe.docs'"
        @subscribed="onSubscribed"
      />
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
  useFetch,
  useContext,
  useMeta,
  watch,
} from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ContentDocument } from "~/types/docs";
import storage from "~/common/storage";
import { validDocsCategoryList } from "~/common/const";
import SubscribeSection from "./SubscribeSection.vue";
dayjs.extend(relativeTime);

// Table of Content Object
interface TOC {
  id: string;
  depth: number;
  text: string;
}

interface State {
  currentHashId: string;
  showSubscribtionPopup: boolean;
}

export default defineComponent({
  components: { SubscribeSection },
  props: {
    document: Object,
  },
  setup(props) {
    const { $content, route } = useContext();
    const meta = useMeta({});
    const state = reactive<State>({
      currentHashId: "",
      showSubscribtionPopup: false,
    });
    const ducumentContainerRef = ref<HTMLDivElement>();
    const toc = computed(() => {
      // Only show h2,h3 in toc.
      return (props.document?.toc as TOC[]).filter(
        (toc) => toc.depth >= 2 && toc.depth <= 3
      );
    });
    const prev = ref<any>(undefined);
    const next = ref<any>(undefined);
    const filePath = `/docs${props.document?.path}${props.document?.extension}`;
    const updatedTsFromNow = dayjs(props.document?.updatedAt).fromNow();

    useFetch(async () => {
      const locale = "en";
      const category = route.value.params.category;
      const layout = (await $content(
        locale,
        validDocsCategoryList.includes(category) ? category : "",
        "_layout"
      ).fetch()) as any as ContentDocument;
      const nodes = layout.body.children
        .filter((n) => n.tag === "h2" || n.tag === "h3" || n.tag === "h4")
        .map((n) => {
          let level = 1;
          if (n.tag === "h3") {
            level = 2;
          } else if (n.tag === "h4") {
            level = 3;
          }

          const child = n.children[1];
          let path = undefined;
          let title = "";
          if (child.type !== "text") {
            path = child.props.to;
            title = child.children[0].value;
          } else {
            title = child.value;
          }

          return {
            level,
            title,
            path,
          };
        })
        .filter((n) => n.path !== undefined);

      const index = nodes.findIndex((n) =>
        props?.document?.path.endsWith(n.path)
      );
      prev.value = nodes[index - 1];
      next.value = nodes[index + 1];
    });

    onMounted(() => {
      // Dynamicly set metadata.
      meta.title.value = props.document?.title || "Bytebase Document";
      meta.meta.value = [
        {
          hid: "description",
          name: "description",
          content:
            props.document?.description ||
            (ducumentContainerRef.value?.textContent || "")
              ?.replaceAll(/\r?\n/g, " ")
              .replaceAll(/\s+/g, " ")
              .slice(meta.title.value?.length, 128)
              .trim() + "...",
        },
      ];

      // Add hash link for each TOC node.
      const hashTagNodeList =
        ducumentContainerRef.value?.querySelectorAll("h2,h3");
      if (hashTagNodeList && hashTagNodeList.length > 0) {
        const tagElementList = Array.from(hashTagNodeList) as HTMLElement[];
        const hash = window.location.hash;
        if (hash !== "#") {
          for (const item of tagElementList) {
            if (hash === `#${item.id}`) {
              (item.firstChild as HTMLAnchorElement).click();
              state.currentHashId = item.id;
            }
          }
        }

        const pagePadding = 16;
        // Dynamic set toc item when scroll page.
        ducumentContainerRef.value?.addEventListener("scroll", () => {
          const scrollTop = ducumentContainerRef.value?.scrollTop || 0;
          for (let i = 0; i < tagElementList.length; i++) {
            if (tagElementList[i].offsetTop + pagePadding > scrollTop) {
              state.currentHashId = tagElementList[i].id;
              break;
            }
          }

          const scrollHeight = ducumentContainerRef.value?.scrollHeight || 0;
          const clientHeight = ducumentContainerRef.value?.clientHeight || 0;
          const gapTriggerValue = 128;
          if (scrollHeight - scrollTop < clientHeight + gapTriggerValue) {
            const { hasShownSubscribtionPopupInDocs } = storage.get([
              "hasShownSubscribtionPopupInDocs",
            ]);
            if (!hasShownSubscribtionPopupInDocs) {
              state.showSubscribtionPopup = true;
            }
          }
        });
      }

      // Add `Copy` button for each pre element.
      const preElementNodeList =
        ducumentContainerRef.value?.querySelectorAll("pre");
      if (preElementNodeList && preElementNodeList.length > 0) {
        const preElementList = Array.from(preElementNodeList);
        for (const preElement of preElementList) {
          const copyBtn = document.createElement("button");
          copyBtn.innerText = "Copy";
          copyBtn.className = "copy-btn";
          preElement.parentElement?.appendChild(copyBtn);
          copyBtn.addEventListener("click", async () => {
            if (navigator.clipboard) {
              let text = preElement.innerText;
              if (text.startsWith("$ ")) {
                text = text.slice(2);
              }
              await navigator.clipboard.writeText(text);
            }
            copyBtn.innerText = "Copied";
            setTimeout(() => {
              copyBtn.innerText = "Copy";
            }, 2000);
          });
        }
      }
    });

    watch(route, () => {
      if (ducumentContainerRef.value) {
        const targetEl = ducumentContainerRef.value.querySelector(
          `a[href='${route.value.hash}']`
        ) as HTMLAnchorElement;
        targetEl?.click();
      }
    });

    const onCloseSubscribtionPopUp = () => {
      state.showSubscribtionPopup = false;
      storage.set({
        hasShownSubscribtionPopupInDocs: true,
      });
    };

    const onSubscribed = () => {
      storage.set({
        hasShownSubscribtionPopupInDocs: true,
      });
    };

    return {
      state,
      prev,
      next,
      toc,
      ducumentContainerRef,
      filePath,
      updatedTsFromNow,
      onCloseSubscribtionPopUp,
      onSubscribed,
    };
  },
  head: {},
});
</script>

<style>
@import "~/assets/css/github-markdown-style.css";

.nuxt-content .nuxt-content-highlight {
  @apply relative;
}
.nuxt-content .copy-btn {
  @apply absolute top-0.5 right-0.5 text-xs px-1 italic bg-gray-200 rounded opacity-60 hover:opacity-100;
}

.nuxt-content h2 > a:first-child:before,
.nuxt-content h3 > a:first-child:before {
  @apply text-blue-600 text-xl leading-6 font-light;
  content: "#";
  margin-left: -1.25rem;
  padding-right: 0.5rem;
  position: absolute;
  visibility: hidden;
}
.nuxt-content h2 > a:first-child:before {
  @apply leading-8;
}

.nuxt-content h2:hover a:first-child:before,
.nuxt-content h3:hover a:first-child:before {
  visibility: visible;
}
</style>
