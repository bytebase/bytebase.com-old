<template>
  <div class="w-full relative bg-white">
    <!-- Main featured post section -->
    <div
      class="w-full max-w-full flex flex-col lg:grid lg:grid-cols-2 mx-auto lg:py-2 lg:max-w-7xl"
    >
      <nuxt-link
        class="w-full h-auto hover:opacity-80"
        :to="{ path: `blog/${latestFeaturedPost.slug}` }"
      >
        <img
          class="h-full w-full object-cover rounded"
          :src="latestFeaturedPost.feature_image"
          :alt="latestFeaturedPost.feature_image_alt"
        />
      </nuxt-link>
      <div
        class="w-full h-auto lg:row-start-1 flex flex-col justify-start items-start px-8 py-4 lg:px-4"
      >
        <div class="w-full flex flex-row justify-start items-center">
          <span
            v-for="(tag, tagIndex) in latestFeaturedPost.tags"
            :key="tagIndex"
            class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
            :class="getTagStyle(tag.name)"
            >{{ tag.name }}</span
          >
        </div>
        <nuxt-link
          class="w-full flex flex-col justify-start items-start hover:opacity-80"
          :to="{ path: `blog/${latestFeaturedPost.slug}` }"
        >
          <p class="mt-4 text-6xl font-semibold text-gray-900">
            {{ latestFeaturedPost.title }}
          </p>
          <p class="mt-4 text-base text-gray-500">
            {{ latestFeaturedPost.excerpt }}
          </p>
        </nuxt-link>
        <div class="mt-4 flex items-center">
          <img
            class="w-8 mr-2 h-auto rounded-full"
            :src="latestFeaturedPost.authors[0].profile_image"
            alt
          />
          <span class="text-sm font-medium text-gray-500">
            {{ latestFeaturedPost.authors[0].name }}
          </span>
          <span class="mx-2" aria-hidden="true">&middot;</span>
          <span class="text-sm text-gray-500"
            >{{ latestFeaturedPost.reading_time }} min read</span
          >
        </div>
      </div>
    </div>

    <hr class="block my-4" />

    <!-- Recent featured post list section -->
    <div
      class="w-full lg:max-w-7xl mx-auto py-6 px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-6"
    >
      <nuxt-link
        v-for="(post, index) in recentFeaturedPosts"
        :key="index"
        class="w-full py-2 flex flex-col justify-start items-center hover:opacity-80"
        :to="{ path: `blog/${post.slug}` }"
      >
        <div class="inline-flex">
          <span
            v-for="(tag, tagIndex) in post.tags"
            :key="tagIndex"
            class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
            :class="getTagStyle(tag.name)"
            >{{ tag.name }}</span
          >
        </div>
        <p class="text-lg py-2 font-semibold text-gray-700">
          {{ post.title }}
        </p>
        <p class="flex space-x-1 text-sm text-gray-500">
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
        </p>
      </nuxt-link>
    </div>

    <!-- Full width subscribtion section -->
    <div
      class="w-full pt-2 bg-yellow-100 flex flex-row justify-center items-center"
    >
      <div class="w-160 h-auto">
        <SubscribeSection
          class="border-none flex-col justify-start"
          :module-name="'subscribe.blog'"
        />
      </div>
    </div>

    <!-- Other post list section -->
    <div
      class="relative w-full mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl mt-12 mb-8 grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <NuxtLink :to="{ path: `blog/${post.slug}` }" class="flex-shrink-0">
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
                >{{ tag.name }}</span
              >
            </div>
            <NuxtLink :to="{ path: `blog/${post.slug}` }" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
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
                alt
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                {{ post.authors[0].name }}
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-xl mx-auto border lg:max-w-7xl">
      <SubscribeSection class="border-none" :module-name="'subscribe.blog'" />
    </div>
  </div>
</template>

<script lang="ts">
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { PostTag, postTagStyle } from "../../common/type";
import { getPosts } from "../../api/posts";

export default {
  layout: "blog",
  async asyncData() {
    const posts = (await getPosts([
      "Announcement",
      "Education",
    ])) as PostsOrPages;
    const featuredPosts: PostOrPage[] = [];
    for (const post of posts) {
      if (post.featured) {
        featuredPosts.push(post);
      }
    }

    // latestFeaturedPost is the latest feature article.
    const latestFeaturedPost = featuredPosts.shift();
    // recentFeaturedPosts are the the other feature articles.
    const recentFeaturedPosts = featuredPosts.slice(0, 4);

    return {
      posts,
      latestFeaturedPost,
      recentFeaturedPosts,
    };
  },
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
  methods: {
    getTagStyle(tag: PostTag): string {
      return postTagStyle(tag);
    },
  },
};
</script>
