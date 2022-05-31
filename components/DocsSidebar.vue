<template>
  <div
    v-if="documentTreeRoot"
    ref="sidebarElRef"
    class="relative pb-6 w-full h-full flex flex-col flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto"
  >
    <a
      v-if="shouldShowBackToMainDocs"
      :href="localePath('/docs/introduction/what-is-bytebase/')"
      exact
      class="pl-6 pr-1 mt-3 py-2 text-gray-500 text-sm border border-transparent border-r-0 whitespace-pre-wrap break-all hover:text-accent"
    >
      <span>← back to main docs</span>
    </a>
    <!-- Render document tree. We only support 3 level folder. -->
    <div
      v-for="node in documentTreeRoot.children"
      :key="node.title"
      class="w-full flex flex-col justify-start items-start"
    >
      <!-- root node -->
      <div
        class="pl-3 mt-3 w-full flex flex-row justify-between cursor-pointer items-start"
        @click="
          node.displayChildren = !node.displayChildren;
          handleLinkClick();
        "
      >
        <div
          v-if="node.type === 'text'"
          class="pl-3 py-2 w-full flex flex-row justify-between items-start text-gray-600 font-bold text-sm border border-transparent border-r-0 whitespace-pre-wrap break-all hover:text-gray-700"
        >
          <span class="pr-1 leading-6">{{ node.title }}</span>
          <span
            v-if="node.children.length !== 0"
            class="flex-shrink-0 h-6 mr-5 flex flex-row justify-center items-center cursor-pointer select-none"
            @click.prevent.stop="node.displayChildren = !node.displayChildren"
          >
            <img
              class="relative w-4 h-auto transition-all opacity-60"
              :class="node.displayChildren ? 'rotate-90-arrow' : ''"
              src="~/assets/svg/chevron-right.svg"
              alt="toggle"
            />
          </span>
        </div>
        <nuxt-link
          v-else
          :to="
            node.type === 'page-link'
              ? localePath(`/docs${node.path}`)
              : { hash: node.path }
          "
          exact
          class="pl-3 py-2 w-full flex flex-row justify-between items-start text-gray-600 font-bold text-sm border border-transparent border-r-0 whitespace-pre-wrap break-all hover:text-gray-700"
        >
          <span class="pr-1 leading-6">{{ node.title }}</span>
          <span
            v-if="node.children.length !== 0"
            class="flex-shrink-0 h-6 mr-5 flex flex-row justify-center items-center cursor-pointer select-none"
            @click.prevent.stop="node.displayChildren = !node.displayChildren"
          >
            <img
              class="relative w-4 h-auto transition-all opacity-60"
              :class="node.displayChildren ? 'rotate-90-arrow' : ''"
              src="~/assets/svg/chevron-right.svg"
              alt="toggle"
            />
          </span>
        </nuxt-link>
      </div>
      <div
        v-for="subnode in node.children"
        v-show="node.displayChildren"
        :key="subnode.title"
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
            :to="
              subnode.type === 'page-link'
                ? localePath(`/docs${subnode.path}`)
                : { hash: subnode.path }
            "
            class="pl-3 pr-1 py-2 flex flex-row justify-between items-center flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >
            <span>{{ subnode.title }}</span>
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
          :key="leafnode.title"
          class="pl-9 w-full"
          @click="handleLinkClick"
        >
          <nuxt-link
            :to="
              leafnode.type === 'page-link'
                ? localePath(`/docs${leafnode.path}`)
                : { hash: leafnode.path }
            "
            class="pl-3 pr-1 py-2 block flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap hover:text-gray-700"
          >
            <span>{{ leafnode.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  useContext,
  useFetch,
  watch,
} from "@nuxtjs/composition-api";
import { last } from "lodash";
import { useStore } from "~/store";
import { ContentDocument, DocumentTreeNode } from "~/types/docs";
import { validDocsCategoryList } from "~/common/const";

const getDocumentTreeRoot = (
  documentList: any[],
  expandAll = false
): DocumentTreeNode => {
  if (!documentList || !Array.isArray(documentList)) {
    return {
      path: "",
      title: "",
      type: "text",
      children: [],
      displayChildren: true,
    };
  }

  const documentTreeRoot = {
    path: "",
    title: "",
    type: "text",
    children: [],
    displayChildren: true,
  } as DocumentTreeNode;

  for (const document of documentList) {
    if (document.level === 1) {
      documentTreeRoot.children.push({
        title: document.title,
        path: document.path,
        type: document.type,
        children: [],
        displayChildren: expandAll,
      });
    } else if (document.level === 2) {
      const parentNode = last(documentTreeRoot.children);
      if (parentNode) {
        parentNode.children.push({
          title: document.title,
          path: document.path,
          type: document.type,
          children: [],
          displayChildren: expandAll,
        });
      }
    } else if (document.level === 3) {
      const parentNode = last(last(documentTreeRoot.children)?.children);
      if (parentNode) {
        parentNode.children.push({
          title: document.title,
          path: document.path,
          type: document.type,
          children: [],
          displayChildren: expandAll,
        });
      }
    }
  }

  return documentTreeRoot;
};

export default defineComponent({
  emits: ["link-click"],
  setup(_, { emit }) {
    const { $content, route } = useContext();
    const store = useStore();
    const sidebarElRef = ref<HTMLDivElement>();
    const documentTreeRoot = ref<DocumentTreeNode>();

    const category = route.value.params.category;
    const shouldShowBackToMainDocs = computed(() =>
      validDocsCategoryList.includes(category)
    );

    useFetch(async () => {
      // Valid category for separate menu items. e.g. "cli"
      // Now we don't have a needed and finished submenus, so it's empty.
      const locale = "en";
      const layout = (await $content(
        "docs",
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
          let type = "text";
          if (child.type !== "text") {
            if (child.props.to) {
              type = "page-link";
              path = child.props.to;
            } else {
              type = "hash-link";
              path = child.props.href;
            }
            title = child.children[0].value;
          } else {
            title = child.value;
          }

          return {
            level,
            title,
            path,
            type,
          };
        });

      documentTreeRoot.value = getDocumentTreeRoot(
        nodes,
        layout.expandAll
      ) as DocumentTreeNode;
    });

    const relocateSidebar = () => {
      const pathname = window.location.pathname;

      if (documentTreeRoot.value) {
        for (const rootNode of documentTreeRoot.value.children) {
          for (const childNode of rootNode.children) {
            for (const leafNode of childNode.children) {
              if (pathname.includes(`/docs${leafNode.path}`)) {
                rootNode.displayChildren = true;
                childNode.displayChildren = true;
                break;
              }
            }
            if (pathname.includes(`/docs${childNode.path}`)) {
              rootNode.displayChildren = true;
              break;
            }
          }
        }
      }

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
    };

    onMounted(() => {
      relocateSidebar();
    });

    watch(route, () => {
      relocateSidebar();
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
      shouldShowBackToMainDocs,
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
