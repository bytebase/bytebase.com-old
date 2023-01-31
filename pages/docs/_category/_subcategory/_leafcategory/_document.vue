<template>
  <DocumentViewer :document="document" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, error }) {
    const pathArgs = [
      "docs",
      params.category,
      params.subcategory,
      params.leafcategory,
      params.document,
    ];
    const document = await $content(...pathArgs, {
      deep: true,
    })
      .fetch()
      .catch((err) => {
        console.error("Not found with path args", pathArgs, err);
        error({ statusCode: 404, message: "Page not found" });
      });

    if (!document) {
      error({ statusCode: 404, message: "Page not found" });
      return;
    }

    return {
      document,
    };
  },
};
</script>
