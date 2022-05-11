<template>
  <main class="overflow-hidden space-y-8">
    <div class="prose prose-xl md:prose-2xl mx-auto text-center">
      <img
        v-if="post.feature_image"
        class="mx-auto object-cover"
        :src="post.feature_image"
        :alt="post.feature_image_alt"
      />
      <h1>{{ post.title }}</h1>
    </div>
    <span
      class="flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"
    >
      <div class="ml-2 flex space-x-1 text-gray-500 items-center">
        <time :datetime="post.published_at">
          {{
            new Date(post.published_at).toLocaleString("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </time>
        <span aria-hidden="true"> &middot; </span>
        <span> {{ post.reading_time }} min read </span>
        <template v-if="post.authors.length > 0">
          <img
            :src="post.authors[0].profile_image"
            :alt="post.authors[0].profile_image"
            class="w-6 h-6"
          />
          <a
            :href="post.authors[0].url"
            target="_blank"
            class="hover:underline"
          >
            {{ post.authors[0].name }}
          </a>
        </template>
      </div></span
    >
    <div
      class="prose prose-indigo prose-xl md:prose-2xl mx-auto"
      v-html="post.html"
    ></div>
  </main>
</template>

<script lang="ts">
import { getSinglePost } from "../../../api/posts";

export default {
  // Have to use asyncData, CompositionAPI useAsync on the other hand doesn't refresh after first load.
  async asyncData({ params }: any) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  },
  head() {
    const post = (this as any).post;

    return {
      title: post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: post.excerpt,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: post.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: post.excerpt,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: post.feature_image,
        },
      ],
    };
  },
};
</script>
