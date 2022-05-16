<template>
  <DocumentViewer :document="document" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, error }) {
    const locale = "en";
    const document = await $content(locale, params.category, params.document)
      .fetch()
      .catch(() => {
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
