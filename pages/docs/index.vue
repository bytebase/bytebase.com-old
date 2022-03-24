<template>
  <div>
    <p>Here is docs index page</p>
  </div>
</template>

<script>
export default {
  layout: "content",
  async asyncData({ $content, redirect }) {
    const documentList = await $content("", { deep: true })
      .sortBy("order")
      .fetch();

    // Now the docs index is an empty page, show the `what-is-bytebase` document.
    const document = documentList.find((item) => item.order === 0);
    redirect(`/docs${document.path}`);

    return {
      documentList,
    };
  },
};
</script>
