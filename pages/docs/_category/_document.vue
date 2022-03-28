<template>
  <DocumentViewer :document="document" :prev="prev" :next="next" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, redirect }) {
    const path = `/${params.category}/${params.document}`;
    const document = await $content(path).where({ path }).fetch();

    if (!document) {
      redirect("/404");
    }

    const [prev, next] = await $content("", { deep: true })
      .where({ isHeader: { $ne: true } })
      .sortBy("order")
      .surround(path)
      .fetch();

    if (path.endsWith("/overview")) {
      // The first level overview document isn't clickable, redirect it to /docs.
      redirect("/docs");
    }

    return {
      document,
      prev,
      next,
    };
  },
};
</script>
