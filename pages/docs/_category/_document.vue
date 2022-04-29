<template>
  <DocumentViewer :document="document" :prev="prev" :next="next" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, app, redirect, error }) {
    const path = `/${params.category}/${params.document}`;
    const document = await $content(app.i18n.locale, path, {
      deep: true,
    })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    if (!document) {
      redirect("/404");
    }
    // The first level overview document isn't clickable, redirect it to /docs.
    if (document.isHeader) {
      redirect("/docs");
    }

    const [prev, next] = await $content("", { deep: true })
      .where({ isHeader: { $ne: true } })
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
