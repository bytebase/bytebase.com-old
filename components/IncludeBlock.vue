<template>
  <div v-if="documentRef">
    <h1 v-if="showTitle">{{ documentRef.title }}</h1>
    <nuxt-content :document="documentRef" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
} from "@nuxtjs/composition-api";
import { ContentDocument } from "~/types/docs";

export default defineComponent({
  props: {
    url: {
      type: String,
      default: "info",
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { $content } = useContext();
    const documentRef = ref();

    useFetch(async () => {
      documentRef.value = (await $content(props.url)
        .limit(1)
        .fetch()) as any as ContentDocument;
    });

    return {
      documentRef,
    };
  },
});
</script>

<style scoped>
@import "~/assets/css/github-markdown-style.css";
</style>
