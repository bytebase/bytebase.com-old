<template>
  <div ref="containerRef" class="w-full"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useContext,
  ref,
} from "@nuxtjs/composition-api";
import { ContentDocument, DocumentBodyNode } from "~/types/docs";

const renderContentObjectToElement = (
  contentObject: DocumentBodyNode,
  element: HTMLElement
) => {
  if (contentObject.type === "root") {
    for (const node of contentObject.children) {
      renderContentObjectToElement(node, element);
    }
  } else if (contentObject.type === "text") {
    const textNode = document.createTextNode(contentObject.value);
    element.appendChild(textNode);
  } else {
    const childElement = document.createElement(contentObject.tag);
    for (const attr in contentObject.props) {
      if (attr === "className") {
        childElement.setAttribute("class", contentObject.props[attr].join(" "));
      } else {
        childElement.setAttribute(attr, contentObject.props[attr]);
      }
    }
    for (const node of contentObject.children) {
      renderContentObjectToElement(node, childElement);
    }
    element.appendChild(childElement);
  }
};

export default defineComponent({
  props: {
    url: {
      type: String,
      default: "info",
    },
  },
  setup(props) {
    const { $content } = useContext();
    const containerRef = ref<HTMLDivElement>();

    onMounted(async () => {
      try {
        const locale = "en";
        const document = (await $content("docs", locale, props.url)
          .limit(1)
          .fetch()) as any as ContentDocument;

        if (document && containerRef.value) {
          renderContentObjectToElement(document.body, containerRef.value);
        }
      } catch (error) {
        // Do nothing when cannot find the document.
      }
    });

    return {
      containerRef,
    };
  },
});
</script>
