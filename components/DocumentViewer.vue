<template>
  <div
    id="content-container"
    ref="ducumentContainerRef"
    class="flex flex-col justify-start items-start px-4 lg:pr-64 w-full h-auto relative overflow-x-hidden overflow-y-auto"
  >
    <div
      id="content"
      class="flex flex-col justify-start items-center w-full mx-auto lg:max-w-3xl 2xl:max-w-4xl"
    >
      <div
        v-if="breadcrumbRouteList.length > 1"
        class="w-full flex flex-row justify-start items-center mt-4 flex-wrap"
      >
        <div
          v-for="(item, index) in breadcrumbRouteList"
          :key="item.path"
          class="flex flex-row justify-start items-center flex-wrap text-base leading-7"
        >
          <nuxt-link
            v-if="item.path"
            :to="localePath(`/docs${item.path}`)"
            class="text-gray-500 no-underline hover:text-accent"
          >
            <span>{{ item.title }}</span>
          </nuxt-link>
          <span v-else class="text-gray-500">
            {{ item.title }}
          </span>
          <span
            v-if="index !== breadcrumbRouteList.length - 1"
            class="font-mono mx-2 text-gray-300"
            >/</span
          >
        </div>
      </div>
      <div class="w-full markdown-body nuxt-content pt-6">
        <h1>{{ document.title }}</h1>
      </div>
      <nuxt-content
        class="w-full pb-6 pt-4 markdown-body"
        :document="document"
      />
      <div
        class="w-full flex flex-col sm:flex-row sm:justify-start sm:items-center text-base"
      >
        <a
          class="py-1 flex flex-row justify-start items-center text-gray-600 hover:text-accent"
          :href="`https://github.com/bytebase/bytebase.com/blob/main${githubFilePath}`"
          target="_blank"
        >
          Edit this page on GitHub
          <img
            class="h-4 ml-2"
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
          class="py-2 flex flex-row justify-start items-center text-base text-gray-600 hover:text-accent"
        >
          <span>{{ "← " + prev.title }}</span>
        </nuxt-link>
        <span v-else></span>
        <nuxt-link
          v-if="next"
          :to="localePath(`/docs${next.path}`)"
          class="py-2 flex flex-row justify-end items-center text-base text-gray-600 hover:text-accent"
        >
          <span>{{ next.title + " →" }}</span>
        </nuxt-link>
        <span v-else></span>
      </div>
      <!-- Ads tracking -->
      <iframe
        v-if="document.slug === 'deploy-with-docker'"
        height="0"
        width="0"
        frameborder="0"
        src="https://wwads.cn/code/tracking/66"
      ></iframe>
    </div>

    <!-- TOC -->
    <div
      class="hidden fixed right-0 top-32 w-60 py-2 pt-12 h-full flex-shrink-0 lg:flex flex-col justify-start items-start overflow-y-auto text-sm"
    >
      <Toc :content="document" :scroll-offset="20" class="md:flex" />
    </div>

    <!-- Subscribtion popup -->
    <div
      v-if="false"
      class="transition-all fixed bottom-0 left-0 w-full bg-white z-10 lg:px-36 border-t shadow"
      :style="{ 'margin-bottom': state.showSubscribtionPopup ? '0' : '-100%' }"
    >
      <span
        class="absolute top-2 right-2 lg:right-44 mr-2 cursor-pointer text-lg opacity-80 hover:opacity-60"
        @click="onCloseSubscribtionPopUp"
        ><img src="~/assets/svg/x.svg" class="w-6 h-auto" alt="" />
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
  defineComponent,
  onMounted,
  reactive,
  ref,
  useFetch,
  useContext,
  useMeta,
  watch,
  nextTick,
} from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ContentDocument } from "~/types/docs";
import storage from "~/common/storage";
import { validDocsCategoryList } from "~/common/const";
import SubscribeSection from "./SubscribeSection.vue";
import Toc from "./Toc.vue";

dayjs.extend(relativeTime);

export default defineComponent({
  components: { SubscribeSection, Toc },
  props: {
    document: Object,
  },
  setup(props) {
    const { $content, route } = useContext();
    const meta = useMeta({});
    const state = reactive({
      showSubscribtionPopup: false,
    });
    const ducumentContainerRef = ref<HTMLDivElement>();
    const prev = ref<any>(undefined);
    const next = ref<any>(undefined);
    const breadcrumbRouteList = ref<any[]>([]);
    const githubFilePath = `/content${props.document?.path}${props.document?.extension}`;

    useFetch(async () => {
      const category = route.value.params.category;
      const validDocsCategoryPathList = validDocsCategoryList.map(
        (t) => t.category
      );
      const currentCategory = validDocsCategoryPathList.includes(category)
        ? category
        : "";
      const layout = (await $content(
        "docs",
        currentCategory,
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
        });

      const index = nodes.findIndex((n) =>
        props?.document?.path.endsWith(n.path)
      );
      let currentNodeLevel = nodes[index].level;
      for (let i = index - 1; i >= 0; i--) {
        const node = nodes[i];
        if (node.level < currentNodeLevel) {
          currentNodeLevel = node.level;
          breadcrumbRouteList.value.unshift(node);
        }
        if (currentNodeLevel === 1) {
          break;
        }
      }
      if (validDocsCategoryPathList.includes(currentCategory)) {
        const temp = validDocsCategoryList.find(
          (t) => t.category === currentCategory
        );
        if (temp) {
          breadcrumbRouteList.value.unshift({
            title: temp.name,
            path: temp.path,
          });
        }
      }
      breadcrumbRouteList.value.push({
        ...nodes[index],
        title: props.document?.title,
      });

      const linkableNodes = nodes.filter((n) => n.path !== undefined);
      const linkableIndex = linkableNodes.findIndex((n) =>
        props?.document?.path.endsWith(n.path)
      );
      prev.value = linkableNodes[linkableIndex - 1];
      next.value = linkableNodes[linkableIndex + 1];
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

      // Add the `Copy` button for pre elements with bash language.
      const preElementNodeList =
        ducumentContainerRef.value?.querySelectorAll("pre.language-bash");
      if (preElementNodeList && preElementNodeList.length > 0) {
        const preElementList = Array.from(preElementNodeList);
        for (const preElement of preElementList) {
          const copyBtn = document.createElement("button");
          copyBtn.innerText = "Copy";
          copyBtn.className = "copy-btn";
          preElement.parentElement?.appendChild(copyBtn);
          copyBtn.addEventListener("click", async () => {
            if (navigator.clipboard) {
              const text = (preElement as HTMLElement).innerText;
              await navigator.clipboard.writeText(text);
            }
            copyBtn.innerText = "Copied";
            setTimeout(() => {
              copyBtn.innerText = "Copy";
            }, 2000);
          });
        }
      }

      nextTick(() => {
        const idValue = route.value.hash.slice(1);
        const targetEl = document.body.querySelector(`[id='${idValue}']`);
        if (targetEl) {
          targetEl.scrollIntoView();
        }
      });
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
      breadcrumbRouteList,
      prev,
      next,
      ducumentContainerRef,
      githubFilePath,
      onCloseSubscribtionPopUp,
      onSubscribed,
    };
  },
  head: {},
});
</script>

<style>
.nuxt-content .copy-btn {
  @apply absolute top-0.5 right-0.5 text-xs px-1 italic bg-gray-200 rounded opacity-60 hover:opacity-100;
}
.nuxt-content .nuxt-content-highlight {
  @apply relative;
}
.nuxt-content .nuxt-content-highlight pre.language-bash {
  @apply flex;
}
.nuxt-content .nuxt-content-highlight pre.language-bash::before {
  @apply text-gray-400;
  content: "$ ";
}
</style>

<style scoped>
@import "~/assets/css/github-markdown-style.css";

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
