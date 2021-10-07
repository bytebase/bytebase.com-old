<template>
  <main class="overflow-hidden space-y-8">
    <div class="prose prose-xl md:prose-2xl mx-auto text-center">
      <img
        v-if="post.feature_image"
        class="object-cover"
        :src="post.feature_image"
        :alt="post.feature_image_alt"
      />
      <h1>{{ post.title }}</h1>
    </div>
    <span
      class="flex flex-row items-center justify-center block text-base text-gray-900 font-semibold tracking-wide uppercase"
    >
      <div class="ml-2 flex space-x-1 text-gray-500">
        <time :datetime="post.published_at">
          {{
            new Date(post.published_at).toLocaleString("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </time>
        <span aria-hidden="true">
          &middot;
        </span>
        <span> {{ post.reading_time }} min read </span>
      </div></span
    >
    <div
      class="prose prose-indigo prose-xl md:prose-2xl mx-auto"
      v-html="post.html"
    ></div>

    <div class="border mt-8 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
      <ActionSection
        class="sm:justify-center"
        :moduleName="'changelog-detail'"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { getSinglePost } from "../../../api/posts";

export default {
  head() {
    return {
      title: (this as any).post.title,
    };
  },
  // Have to use asyncData, CompositionAPI useAsync on the other hand doesn't refresh after first load.
  async asyncData({ params }: any) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  },
  methods: {},
};
</script>
