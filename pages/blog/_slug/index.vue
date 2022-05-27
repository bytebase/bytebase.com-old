<template>
  <div class="space-y-8">
    <div class="hidden sm:flex sm:h-96 w-full">
      <img
        v-if="blog.featureImage"
        class="w-full h-auto object-scale-down"
        :src="blog.featureImage"
      />
    </div>
    <div class="prose prose-xl md:prose-2xl mx-auto px-4">
      <div
        v-for="(tag, tagIndex) in blog.tags"
        :key="tagIndex"
        class="mb-4 inline-flex"
      >
        <span
          v-if="getTagStyle(tag)"
          class="items-center px-3 py-0.5 mr-2 rounded-full text-base font-medium"
          :class="getTagStyle(tag)"
        >
          {{ tag }}
        </span>
      </div>
      <h1>{{ blog.title }}</h1>
    </div>
    <div
      class="flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"
    >
      <img
        class="h-10 w-10 rounded-full mr-2"
        :src="require(`~/assets/people/${blog.author.avatar}`)"
        alt=""
      />{{ blog.author.name }}
      <div class="ml-2 flex space-x-1 text-gray-500">
        <time :datetime="blog.publishedAt">
          {{ blog.formatedPublishedAt }}
        </time>
        <span aria-hidden="true">&middot;</span>
        <span>{{ blog.readingTime }}</span>
      </div>
    </div>
    <nuxt-content
      class="w-full px-4 py-6 prose prose-indigo prose-xl md:prose-2xl mx-auto"
      :document="blog"
    />
  </div>
</template>

<script lang="ts">
import { lowerCase } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import { PostTag, postTagStyle } from "../../../common/type";

export default {
  layout: "blog",
  async asyncData({ params, $content }: any) {
    const data = await $content("blog", params.slug, {
      deep: true,
    }).fetch();
    const author = getTeammateByName(data.author) as any;
    if (author) {
      author.avatar = `${lowerCase(author?.name)}.webp`;
    }

    const blog = {
      ...data,
      author: author,
      formatedPublishedAt: new Date(data.publishedAt).toLocaleString(
        "default",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      ),
      readingTime: calcReadingTime(data.bodyPlainText),
    };

    return {
      blog,
    };
  },
  head() {
    const blog = (this as any).blog;

    return {
      title: blog.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: blog.description,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: blog.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: blog.description,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: blog.featureImage,
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

<style scoped>
.nuxt-content table pre {
  white-space: pre-wrap;
  margin: 0;
}
</style>
