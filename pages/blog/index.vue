<template>
  <div class="w-full relative bg-white">
    <!-- Main featured post section -->
    <div
      class="w-full max-w-full flex flex-col lg:grid lg:grid-cols-2 mx-auto lg:py-2 lg:max-w-7xl"
    >
      <nuxt-link
        class="w-full h-auto flex flex-col justify-center items-center hover:opacity-80 lg:pl-8"
        :to="localePath(`/blog/${latestFeaturedBlog.slug}`)"
      >
        <img
          class="w-full h-auto object-cover lg:rounded"
          :src="latestFeaturedBlog.featureImage"
        />
      </nuxt-link>
      <div
        class="w-full h-auto lg:row-start-1 flex flex-col justify-center items-start p-4 lg:pr-0"
      >
        <div class="w-full flex flex-row justify-start items-center">
          <span
            v-for="(tag, tagIndex) in latestFeaturedBlog.tags"
            :key="tagIndex"
            class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
            :class="getTagStyle(tag)"
            >{{ tag }}</span
          >
        </div>
        <nuxt-link
          class="w-full flex flex-col justify-start items-start py-2 hover:opacity-80"
          :to="localePath(`/blog/${latestFeaturedBlog.slug}`)"
        >
          <p class="mt-4 text-6xl font-semibold text-gray-900">
            {{ latestFeaturedBlog.title }}
          </p>
          <p class="mt-6 text-base text-gray-500">
            {{ latestFeaturedBlog.description }}
          </p>
        </nuxt-link>
        <div class="mt-4 flex items-center">
          <img
            class="w-8 mr-2 h-auto rounded-full"
            :src="
              require(`~/assets/people/${latestFeaturedBlog.author.avatar}`)
            "
            alt
          />
          <span class="text-sm font-medium text-gray-500">
            {{ latestFeaturedBlog.author.name }}
          </span>
          <span class="mx-2" aria-hidden="true">&middot;</span>
          <span class="text-sm text-gray-500">{{
            latestFeaturedBlog.readingTime
          }}</span>
        </div>
      </div>
    </div>

    <hr class="block my-4" />

    <!-- Recent featured post list section -->
    <div
      class="w-full lg:max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8"
    >
      <nuxt-link
        v-for="(blog, index) in recentFeaturedBlogs"
        :key="index"
        class="w-full py-2 flex flex-col justify-start items-center hover:opacity-80"
        :to="localePath(`/blog/${blog.slug}`)"
      >
        <div class="inline-flex">
          <span
            v-for="(tag, tagIndex) in blog.tags"
            :key="tagIndex"
            class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
            :class="getTagStyle(tag)"
            >{{ tag }}</span
          >
        </div>
        <p class="text-lg py-2 font-semibold text-gray-700">
          {{ blog.title }}
        </p>
        <p class="flex space-x-1 text-sm text-gray-500">
          <time :datetime="blog.published_at">
            {{ blog.formatedPublishedAt }}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{{ blog.readingTime }}</span>
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
        v-for="(blog, index) in blogList"
        :key="index"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <nuxt-link :to="localePath(`/blog/${blog.slug}`)" class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="blog.featureImage" />
        </nuxt-link>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <div
              v-for="(tag, tagIndex) in blog.tags"
              :key="tagIndex"
              class="inline-flex"
            >
              <span
                class="items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium"
                :class="getTagStyle(tag)"
                >{{ tag }}</span
              >
            </div>
            <nuxt-link
              :to="localePath(`/blog/${blog.slug}`)"
              class="block mt-2 no-underline"
            >
              <p class="text-xl font-semibold text-gray-900">
                {{ blog.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ blog.description }}
              </p>
            </nuxt-link>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <span class="sr-only">{{ blog.author.name }}</span>
              <img
                class="h-10 w-10 rounded-full"
                :src="require(`~/assets/people/${blog.author.avatar}`)"
                alt
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                {{ blog.author.name }}
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="blog.publishedAt">
                  {{ blog.formatedPublishedAt }}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{{ blog.readingTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { first, lowerCase } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import { PostTag, postTagStyle } from "../../common/type";

export default {
  layout: "blog",
  async asyncData({ $content }: any) {
    const data = await $content("blog", {
      deep: true,
    })
      .sortBy("publishedAt", "desc")
      .fetch();
    const blogList = data
      .filter((blog: any) => !blog.tags.includes("Hidden"))
      .map((blog: any) => {
        const author = getTeammateByName(blog.author) as any;
        if (author) {
          author.avatar = `${lowerCase(author?.name)}.webp`;
        }

        return {
          ...blog,
          author: author,
          formatedPublishedAt: new Date(blog.publishedAt).toLocaleString(
            "default",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          ),
          readingTime: calcReadingTime(blog.bodyPlainText),
        };
      });

    const featuredBlogList = blogList.filter((blog: any) => blog.featured);
    // latestFeaturedBlog is the latest feature article.
    const latestFeaturedBlog = first(featuredBlogList);
    // recentFeaturedBlogs are the the other feature articles.
    const recentFeaturedBlogs = featuredBlogList.slice(1, 5);

    return {
      blogList,
      latestFeaturedBlog,
      recentFeaturedBlogs,
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
