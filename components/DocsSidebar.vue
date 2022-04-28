<template>
  <div
    v-if="documentTreeRoot"
    ref="sidebarElRef"
    class="relative pb-6 w-full h-full flex flex-col flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto"
  >
    <!-- Render document tree. We only support 3 level folder. -->
    <div
      v-for="node in documentTreeRoot.children"
      :key="node.document.path"
      class="w-full flex flex-col justify-start items-start"
    >
      <!-- root node -->
      <div class="pl-3 w-full" @click="handleLinkClick">
        <span
          v-if="node.document.isHeader"
          class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-600 mt-4 font-bold w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >{{ node.document.title }}</span
        >
        <nuxt-link
          v-else
          :to="{ path: `/docs${node.document.path}` }"
          class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-600 mt-4 font-bold w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
        >
          <span>{{ node.document.title }}</span>
        </nuxt-link>
      </div>
      <div
        v-for="subnode in node.children"
        v-show="node.displayChildren"
        :key="subnode.document.path"
        class="w-full flex flex-col justify-start items-start"
      >
        <!-- subnode which can toggle leaf children nodes -->
        <div
          class="pl-6 w-full"
          @click="
            subnode.displayChildren = !subnode.displayChildren;
            handleLinkClick();
          "
        >
          <nuxt-link
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
          </nuxt-link>
        </div>
        <!-- leaf nodes -->
        <div
          v-for="leafnode in subnode.children"
          v-show="subnode.displayChildren"
          :key="leafnode.document.path"
          class="pl-9 w-full"
          @click="handleLinkClick"
        >
          <nuxt-link
            :to="{ path: `/docs${leafnode.document.path}` }"
            class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >
            <span>{{ leafnode.document.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="relative pb-6 w-full h-full flex flex-col justify-center items-center flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto"
  >
    <span class="text-gray-500">loading...</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  nextTick,
  onMounted,
  useContext,
} from "@nuxtjs/composition-api";
import { headerDocumentSuffix } from "~/common/const";
import { useStore } from "~/store";
import { ContentDocument, Document, DocumentTreeNode } from "~/types/docs";

const getDocumentTreeRoot = (
  documentList: ContentDocument[]
): DocumentTreeNode => {
  if (!documentList || !Array.isArray(documentList)) {
    return {
      path: "",
      document: null as any,
      children: [],
      displayChildren: true,
    };
  }

  const formatedDocumentList = documentList
    .filter((d) => d.order >= 0)
    .map((document) => {
      let level = document.path.split("/").length - 1;
      // The header document is an index file of its directory.
      if (document.path.endsWith(headerDocumentSuffix)) {
        level = level - 1;
      }

      return {
        ...document,
        level: level,
      };
    })
    .sort((a, b) => a.level - b.level);

  const documentTreeRoot = {
    path: "",
    document: null as any,
    children: [],
    displayChildren: true,
  } as DocumentTreeNode;

  for (const document of formatedDocumentList) {
    if (document.level === 1) {
      documentTreeRoot.children.push({
        path: document.dir,
        document: document as Document,
        children: [],
        displayChildren: true,
      });
    } else if (document.level === 2) {
      let dir = document.dir;
      let path = document.path;
      // The header document is an index file of its directory.
      if (document.path.endsWith(headerDocumentSuffix)) {
        dir = `/${document.dir.split("/")[1]}`;
        path = document.dir;
      }
      const node = documentTreeRoot.children.find((node) => node.path === dir);
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
      const parentNode = documentTreeRoot.children.find(
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
        }
      }
    }
  }

  return documentTreeRoot;
};

export default defineComponent({
  emits: ["link-click"],
  setup(_, { emit }) {
    const { $content } = useContext();
    const store = useStore();
    const sidebarElRef = ref<HTMLDivElement>();
    const documentTreeRoot = ref<DocumentTreeNode | null>(null);

    onMounted(async () => {
      const data = (await $content("", { deep: true })
        .sortBy("order")
        .fetch()) as any as ContentDocument[];
      documentTreeRoot.value = getDocumentTreeRoot(data) as DocumentTreeNode;

      const pathname = window.location.pathname;
      for (const rootNode of documentTreeRoot.value.children) {
        for (const childNode of rootNode.children) {
          for (const leafNode of childNode.children) {
            if (pathname.includes(`/docs${leafNode.path}`)) {
              childNode.displayChildren = true;
              break;
            }
          }
        }
      }

      nextTick(() => {
        if (!sidebarElRef.value) {
          return;
        }

        for (const anchorEl of Array.from(
          sidebarElRef.value.querySelectorAll("a")
        )) {
          let href = anchorEl.getAttribute("href");
          if (pathname.endsWith("/")) {
            href = href + "/";
          }

          if (pathname === href) {
            if (anchorEl.offsetTop > sidebarElRef.value.clientHeight) {
              sidebarElRef.value.scrollTo(0, anchorEl.offsetTop / 1.5);
            }
            break;
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
      documentTreeRoot,
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
