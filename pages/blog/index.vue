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
          <div class="flex space-x-2">
            <img
              v-for="(
                integration, integrationIndex
              ) in latestFeaturedBlog.integrations"
              :key="integrationIndex"
              :src="require(`~/assets/logo/${getIntegrationLogo(integration)}`)"
              class="h-6 w-auto"
            />
          </div>
        </div>
        <nuxt-link
          class="w-full flex flex-col justify-start items-start py-2 hover:opacity-80"
          :to="localePath(`/blog/${latestFeaturedBlog.slug}`)"
        >
          <h2 class="mt-4 text-2xl sm:text-6xl font-semibold text-gray-900">
            {{ latestFeaturedBlog.title }}
          </h2>
          <p class="mt-6 text-base text-gray-500">
            {{ latestFeaturedBlog.description }}
          </p>
        </nuxt-link>
        <div class="mt-4 flex items-center">
          <img
            v-if="latestFeaturedBlog.author.avatar"
            class="w-8 mr-2 h-auto rounded-full"
            :src="latestFeaturedBlog.author.avatar"
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
        class="w-full py-2 flex flex-col justify-start items-start hover:opacity-80"
        :to="localePath(`/blog/${blog.slug}`)"
      >
        <h2 class="text-lg py-2 font-semibold text-gray-700">
          {{ blog.title }}
        </h2>
        <div class="flex w-full mb-3 gap-2 justify-between">
          <span
            v-for="(tag, tagIndex) in blog.tags"
            :key="tagIndex"
            class="items-center px-3 py-0.5 rounded-full text-sm font-medium"
            :class="getTagStyle(tag)"
            >{{ tag }}</span
          >
          <div class="flex space-x-2">
            <img
              v-for="(integration, integrationIndex) in blog.integrations"
              :key="integrationIndex"
              :src="require(`~/assets/logo/${getIntegrationLogo(integration)}`)"
              class="h-6 w-auto"
            />
          </div>
        </div>
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
    <div class="max-w-7xl mx-auto px-4">
      <SubscribeSection :module-name="'subscribe.blog'" />
    </div>

    <!-- Other post list section -->
    <h1
      class="w-full max-w-full flex mx-auto justify-center mt-8 mb-8 lg:max-w-7xl text-xl sm:text-4xl font-semibold text-gray-900"
    >
      Bytebase Blog
    </h1>
    <div
      class="relative w-full mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(blog, index) in blogList"
        :key="index"
        class="flex flex-col border shadow-md overflow-hidden"
      >
        <nuxt-link :to="localePath(`/blog/${blog.slug}`)" class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="blog.featureImage" />
        </nuxt-link>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <div class="flex justify-between">
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
              <div class="flex space-x-2">
                <img
                  v-for="(integration, integrationIndex) in blog.integrations"
                  :key="integrationIndex"
                  :src="
                    require(`~/assets/logo/${getIntegrationLogo(integration)}`)
                  "
                  class="h-6 w-auto"
                />
              </div>
            </div>
            <nuxt-link
              :to="localePath(`/blog/${blog.slug}`)"
              class="block mt-2 no-underline"
            >
              <h2 class="text-xl font-semibold text-gray-900">
                {{ blog.title }}
              </h2>
              <p class="mt-3 text-base text-gray-500">
                {{ blog.description }}
              </p>
            </nuxt-link>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <span class="sr-only">{{ blog.author.name }}</span>
              <img
                v-if="blog.author.avatar"
                class="h-10 w-10 rounded-full"
                :src="blog.author.avatar"
                alt="avatar"
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
import { first } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import {
  PostTag,
  postTagStyle,
  Integration,
  integrationLogo,
} from "~/common/type";

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
      .sort(
        (a: any, b: any) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .map((blog: any) => {
        const author: any = {
          name: blog.author,
        };
        const teammate = getTeammateByName(author.name) as any;
        if (teammate) {
          author.avatar = require(`~/assets/people/${teammate.name.toLowerCase()}.webp`);
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
    getIntegrationLogo(integration: Integration): string {
      return integrationLogo(integration);
    },
  },
};
</script>
