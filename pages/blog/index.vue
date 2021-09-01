<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Bytebase Blog
        </h1>
        <h2 class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Open source, web-based, zero-config, dependency-free database schema
          change and version control tool for Developer and DBA.
        </h2>
        <div class="mt-8">
          <SubscribeSection />
        </div>
      </div>

      <div class="bg-white py-12">
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div
            class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
          >
            Featured
          </div>
          <div class="mt-12 space-y-6">
            <div
              v-for="(post, index) in featuredPosts"
              :key="index"
              class="flex flex-col col-span-3 border overflow-hidden"
            >
              <NuxtLink
                :to="{ path: `blog/${post.slug}` }"
                class="flex-shrink-0"
              >
                <img
                  class="h-60 w-full object-cover"
                  :src="post.feature_image"
                  :alt="post.feature_image_alt"
                />
              </NuxtLink>
              <NuxtLink
                :to="{ path: `blog/${post.slug}` }"
                class="flex-1 bg-white p-6 flex flex-col justify-between"
              >
                <div class="flex-1">
                  <div
                    v-for="(tag, tagIndex) in post.tags"
                    :key="tagIndex"
                    class="inline-flex"
                  >
                    <span
                      class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
                      :class="getTagStyle(tag.name)"
                    >
                      {{ tag.name }}
                    </span>
                  </div>
                  <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      {{ post.excerpt }}
                    </p>
                  </div>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.authors[0].profile_image"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      {{ post.authors[0].name }}
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time :datetime="post.published_at">
                        {{
                          new Date(post.published_at).toLocaleString(
                            "default",
                            { year: "numeric", month: "short", day: "numeric" }
                          )
                        }}
                      </time>
                      <span aria-hidden="true">
                        &middot;
                      </span>
                      <span> {{ post.reading_time }} min read </span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-12">
        <div
          class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
        >
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
          >
            Recent publications
          </h2>
          <div
            class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
          >
            <div
              v-for="(post, index) in posts"
              :key="index"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <NuxtLink
                :to="{ path: `blog/${post.slug}` }"
                class="flex-shrink-0"
              >
                <img
                  class="h-48 w-full object-cover"
                  :src="post.feature_image"
                  :alt="post.feature_image_alt"
                />
              </NuxtLink>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <div
                    v-for="(tag, tagIndex) in post.tags"
                    :key="tagIndex"
                    class="inline-flex"
                  >
                    <span
                      class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
                      :class="getTagStyle(tag.name)"
                    >
                      {{ tag.name }}
                    </span>
                  </div>
                  <NuxtLink
                    :to="{ path: `blog/${post.slug}` }"
                    class="block mt-2"
                  >
                    <p class="text-xl font-semibold text-gray-900">
                      {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500 ">
                      {{ post.excerpt }}
                    </p>
                  </NuxtLink>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span class="sr-only">{{ post.authors[0].name }}</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.authors[0].profile_image"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      {{ post.authors[0].name }}
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time :datetime="post.published_at">
                        {{
                          new Date(post.published_at).toLocaleString(
                            "default",
                            { year: "numeric", month: "short", day: "numeric" }
                          )
                        }}
                      </time>
                      <span aria-hidden="true">
                        &middot;
                      </span>
                      <span> {{ post.reading_time }} min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { PostTag, tagStyle } from "./util";
import { getPosts } from "../../api/posts";

export default {
  head() {
    return {
      title: "Blog",
      meta: [
        {
          hid: "Bytebase Blog",
          name: "Bytebase Blog",
          content: "Bytebase Blog",
        },
      ],
    };
  },
  // Have to use asyncData, CompositionAPI useAsync on the other hand doesn't refresh after first load.
  async asyncData() {
    const list = (await getPosts()) as PostsOrPages;
    const featuredPosts: PostOrPage[] = [];
    const posts: PostOrPage[] = [];
    for (const post of list) {
      if (post.featured) {
        featuredPosts.push(post);
      } else {
        posts.push(post);
      }
    }
    return { posts, featuredPosts };
  },
  methods: {
    getTagStyle(tag: PostTag): string {
      return tagStyle(tag);
    },
  },
};
</script>
