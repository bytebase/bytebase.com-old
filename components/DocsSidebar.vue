<template>
  <div
    class="relative w-full h-full flex flex-col flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto"
  >
    <div
      class="hidden sm:flex w-full flex-row justify-between items-center pl-6 py-4 border-b border-gray-200"
    >
      <span class="flex flex-row justify-start items-center no-underline">
        <img class="h-6 w-auto" src="~/assets/logo-icon.svg" alt="" />
        <span class="ml-2 text-base">Documents</span>
      </span>
      <img
        class="w-5 h-auto mr-3 flex-shrink-0 opacity-60 cursor-pointer hover:opacity-100"
        src="~/assets/svg/search.svg"
        alt="search"
        @click="handleSearchBtnClick"
      />
    </div>
    <div
      ref="sidebarElRef"
      class="w-full flex-grow flex flex-col pb-4 overflow-y-auto"
    >
      <!-- Render document tree. We only support 3 level folder. -->
      <!-- root node -->
      <div
        v-for="node in state.documentTreeRoot.children"
        :key="node.document.path"
        class="pl-3"
        @click="handleLinkClick"
      >
        <span
          v-if="node.document.isHeader"
          class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-600 mt-4 font-bold w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >{{ node.document.title }}</span
        >
        <NuxtLink
          v-else
          :to="{ path: `/docs${node.document.path}` }"
          class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-600 mt-4 font-bold w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
        >
          <span>{{ node.document.title }}</span>
        </NuxtLink>
        <!-- subnode which can toggle leaf children nodes -->
        <div
          v-for="subnode in node.children"
          v-show="node.displayChildren"
          :key="subnode.document.path"
          class="pl-3"
          @click="handleLinkClick"
        >
          <NuxtLink
            :to="{ path: `/docs${subnode.document.path}` }"
            class="pl-3 py-2 flex flex-row justify-between items-center flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >
            <span>{{ subnode.document.title }}</span>
            <span
              v-if="subnode.children.length !== 0"
              class="flex-shrink-0 mr-4"
              @click.prevent.stop="
                subnode.displayChildren = !subnode.displayChildren
              "
            >
              <img
                class="relative w-4 h-auto transition-all opacity-60"
                :class="subnode.displayChildren ? 'rotate-90-arrow' : ''"
                src="~/assets/svg/chevron-right.svg"
                alt="toggle"
              />
            </span>
          </NuxtLink>
          <!-- leaf nodes -->
          <div
            v-for="leafnode in subnode.children"
            v-show="subnode.displayChildren"
            :key="leafnode.document.path"
            class="pl-3 ml-2"
            @click="handleLinkClick"
          >
            <NuxtLink
              :to="{ path: `/docs${leafnode.document.path}` }"
              class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
            >
              <span>{{ leafnode.document.title }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full flex flex-col flex-shrink-0 justify-start py-2 items-start bg-white border-t border-gray-200"
      @click="handleLinkClick"
    >
      <NuxtLink
        :to="{ path: `/docs/document-write-guide` }"
        class="pl-6 flex flex-row justify-start items-center flex-shrink-0 text-gray-500 w-full text-sm border-none"
      >
        <span class="text-base leading-8 mr-2">✍️</span>
        <span class="text-gray-600 hover:text-accent">Write guide</span>
      </NuxtLink>
      <NuxtLink
        :to="{ path: `/` }"
        class="pl-6 flex flex-row justify-start items-center flex-shrink-0 text-gray-500 w-full text-sm border-none"
      >
        <span class="text-base leading-8 mr-2">🏠</span>
        <span class="text-gray-600 hover:text-accent">
          Back to bytebase.com
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  onMounted,
  defineComponent,
  ref,
  nextTick,
} from "@nuxtjs/composition-api";
import { useStore } from "~/store";
import { ContentDocument, Document, DocumentTreeNode } from "~/types/docs";

interface State {
  documentTreeRoot: DocumentTreeNode;
}

export default defineComponent({
  props: {
    documentList: Array,
  },
  emits: ["link-click"],
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive<State>({
      documentTreeRoot: {
        path: "",
        document: null as any,
        children: [],
        displayChildren: true,
      },
    });
    const sidebarElRef = ref<HTMLDivElement>();

    onMounted(async () => {
      const formatedDocumentList = (props.documentList as ContentDocument[])
        .filter((d) => d.order >= 0)
        .map((document) => {
          let level = document.path.split("/").length - 1;
          // The `overview` file is an index file of its directory.
          if (document.path.endsWith("/overview")) {
            level = level - 1;
          }

          return {
            ...document,
            level: level,
          };
        })
        .sort((a, b) => a.level - b.level);

      const root = {
        path: "",
        document: null as any,
        children: [],
        displayChildren: true,
      } as DocumentTreeNode;
      const pathname = window.location.pathname;
      for (const document of formatedDocumentList) {
        if (document.level === 1) {
          root.children.push({
            path: document.dir,
            document: document as Document,
            children: [],
            displayChildren: true,
          });
        } else if (document.level === 2) {
          let dir = document.dir;
          let path = document.path;
          // The `overview` file is an index file of its directory.
          if (document.path.endsWith("/overview")) {
            dir = `/${document.dir.split("/")[1]}`;
            path = document.dir;
          }
          const node = root.children.find((node) => node.path === dir);
          if (node) {
            node.children.push({
              path: path,
              document: document as Document,
              children: [],
              displayChildren: false,
            });
          }
        } else if (document.level === 3) {
          const parentPath = `/${document.dir.split("/")[1]}`;
          const parentNode = root.children.find(
            (node) => node.path === parentPath
          );
          if (parentNode) {
            const node = parentNode.children.find(
              (node) => node.path === document.dir
            );
            if (node) {
              node.children.push({
                path: document.path,
                document: document as Document,
                children: [],
                displayChildren: false,
              });
              if (pathname.includes(`/docs${document.path}`)) {
                node.displayChildren = true;
              }
            }
          }
        }
      }

      state.documentTreeRoot = root;

      // Auto scroll to the active doc node.
      nextTick(() => {
        if (!sidebarElRef.value) {
          return;
        }

        const anchorEl = sidebarElRef.value.querySelector(
          `a[href="${pathname}"]`
        ) as HTMLElement;
        if (anchorEl) {
          if (anchorEl.offsetTop > sidebarElRef.value.clientHeight) {
            sidebarElRef.value.scrollTo(0, anchorEl.offsetTop / 1.5);
          }
        }
      });
    });

    const handleLinkClick = () => {
      emit("link-click");
    };

    const handleSearchBtnClick = () => {
      store.showSearchDialog();
    };

    return {
      state,
      sidebarElRef,
      handleLinkClick,
      handleSearchBtnClick,
    };
  },
});
</script>

<style scoped>
.router-active-link {
  @apply bg-white text-accent no-underline border-gray-200;
}
.rotate-90-arrow {
  transform: rotate(90deg);
}
</style>
