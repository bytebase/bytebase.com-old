<template>
  <div>
    <p>Here is docs index page</p>
  </div>
</template>

<script>
export default {
  layout: "content",
  async asyncData({ $content, redirect }) {
    const ducoments = await $content("", { deep: true })
      .sortBy("order")
      .fetch();

    // Now the docs index is an empty page, redirect to first document page.
    redirect(`/docs${ducoments[0].path}`);

    return {
      ducoments,
    };
  },
};
</script>
