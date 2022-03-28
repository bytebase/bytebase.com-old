<template>
  <DocumentViewer :document="document" :prev="prev" :next="next" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, redirect }) {
    const path = `/${params.category}/${params.subcategory}/${params.document}`;
    const document = await $content(path).where({ path }).fetch();

    if (!document) {
      redirect("/404");
    }

    const [prev, next] = await $content("", { deep: true })
      .where({ hide: { $ne: true } })
      .sortBy("order")
      .surround(path)
      .fetch();

    return {
      document,
      prev,
      next,
    };
  },
};
</script>
