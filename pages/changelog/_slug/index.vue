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
      class="flex flex-row items-center justify-center block text-base text-gray-900 font-semibold tracking-wide uppercase"
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
        <span aria-hidden="true">
          &middot;
        </span>
        <span> {{ post.reading_time }} min read </span>
        <template v-if="post.authors.length > 0">
          <img
            :src="post.authors[0].profile_image"
            :alt="post.authors[0].profile_image"
            class="w-6 h-6"
          />
          <span>{{ post.authors[0].name }}</span>
        </template>
      </div></span
    >
    <div
      class="prose prose-indigo prose-xl md:prose-2xl mx-auto"
      v-html="post.html"
    ></div>

    <div class="flex flex-col justify-center items-center py-10" v-if="post.authors.length > 0">
      <div class="flex">
        <div class="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mr-5">
          <img
            :src="post.authors[0].profile_image"
            :alt="post.authors[0].profile_image"
            class="w-16 h-16"
          />
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-2xl md:text-3xl font-medium mb-3">
            {{ post.authors[0].name }}
          </div>
          <a
            :href="post.authors[0].url"
            target="_blank"
            class="flex items-center hover:underline"
          >
            VIEW PROFILE
            <!-- Heroicon name: outline/chevron-right -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

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
