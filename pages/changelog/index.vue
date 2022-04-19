<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white px-4 sm:px-6 lg:px-8 py-8">
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
        >
          Bytebase Changelog
        </h1>
        <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
            >Safer and faster</span
          >
          database schema change and version control tool for Developer and DBA.
        </h2>
        <div class="mt-8">
          <SubscribeSection :moduleName="'subscribe.changelog'" />
        </div>
      </div>

      <div>
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div class="mt-12 space-y-20">
            <div
              v-for="(post, index) in posts"
              :key="index"
              class="flex flex-col col-span-3 overflow-hidden"
            >
              <NuxtLink
                :to="{ path: `changelog/${post.slug}` }"
                class="flex-1 flex flex-col justify-between"
              >
                <div class="pt-6 prose prose-xl md:prose-2xl mx-auto text-center hover:underline">
                  <h1>{{ post.title }}</h1>
                </div>
                <span
                  class="pt-4 flex flex-row items-center justify-center block text-base text-gray-900 font-semibold tracking-wide uppercase"
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
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ post.reading_time }} min read</span>
                    <template v-if="post.authors.length > 0">
                      <img
                        :src="post.authors[0].profile_image"
                        :alt="post.authors[0].profile_image"
                        class="w-6 h-6"
                      />
                      <span>{{ post.authors[0].name }}</span>
                    </template>
                  </div>
                </span>
              </NuxtLink>
              <NuxtLink
                v-if="post.feature_image"
                :to="{ path: `changelog/${post.slug}` }"
                class="flex-shrink-0 py-6"
              >
                <div class="flex justify-center items-center">
                  <img
                    class="mx-auto object-cover"
                    :src="post.feature_image"
                    :alt="post.feature_image_alt"
                  />
                </div>
              </NuxtLink>
              <div class="prose prose-indigo prose-xl md:prose-2xl mx-auto" v-html="post.html"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!lastPage" class="py-12">
        <NuxtLink
          :to="{ path: `changelog?page=${page + 1}` }"
          class="text-xl text-indigo-600"
        >Next page</NuxtLink>
      </div>
      <div class="border mt-8 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
        <ActionSection class="sm:justify-center" :moduleName="'changelog'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PostsOrPages } from "@tryghost/content-api";
import { getPosts } from "../../api/posts";

export default {
  head() {
    return {
      title: "Changelog",
      meta: [
        {
          hid: "Bytebase Changelog",
          name: "Bytebase Changelog",
          content: "Bytebase Changelog",
        },
      ],
    };
  },
  // Have to use asyncData, CompositionAPI useAsync on the other hand doesn't refresh after first load.
  async asyncData({ params }: any) {
    const page = parseInt(params.page) ? parseInt(params.page) : 1;
    const posts = (await getPosts(["Changelog"], page)) as PostsOrPages;
    const lastPage =
      posts.length == 0 || posts[posts.length - 1].title == "Bytebase 0.1.0";

    return { posts, page, lastPage };
  },
};
</script>
