<template>
  <DocumentViewer :document="document" />
</template>

<script>
import DocumentViewer from "~/components/DocumentViewer.vue";

export default {
  components: { DocumentViewer },
  layout: "content",
  async asyncData({ $content, params, app, redirect, error }) {
    const document = await $content(app.i18n.locale, params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    if (!document) {
      redirect("/404");
    }

    return {
      document,
    };
  },
};
</script>
