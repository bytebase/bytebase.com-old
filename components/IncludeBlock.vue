<template>
  <div v-if="documentRef">
    <h1>{{ documentRef.title }}</h1>
    <nuxt-content :document="documentRef" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useContext,
  ref,
} from "@nuxtjs/composition-api";
import { ContentDocument } from "~/types/docs";

export default defineComponent({
  props: {
    url: {
      type: String,
      default: "info",
    },
  },
  setup(props) {
    const { $content } = useContext();
    const documentRef = ref();

    onMounted(async () => {
      const locale = "en";
      documentRef.value = (await $content("docs", locale, props.url)
        .limit(1)
        .fetch()) as any as ContentDocument;
    });

    return {
      documentRef,
    };
  },
});
</script>
