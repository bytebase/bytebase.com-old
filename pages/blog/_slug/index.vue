<template>
  <div class="space-y-8">
    <div class="hidden sm:flex sm:h-96 w-full">
      <img
        v-if="blog.featureImage"
        class="w-full h-auto object-scale-down"
        :src="blog.featureImage"
      />
    </div>
    <div class="prose prose sm:prose-xl md:prose-2xl mx-auto px-4">
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
    <div class="flex flex-row">
      <!-- An empty block on the left side for layout -->
      <aside class="w-52 hidden xl:flex" />
      <nuxt-content
        class="w-full px-4 py-6 prose prose-indigo prose-xl 2xl:prose-2xl mx-auto"
        :document="blog"
      />
      <!-- TOC -->
      <aside
        class="hidden xl:flex flex-col justify-start items-start sticky w-52 top-0 right-6 2xl:right-10 pr-4 h-full max-h-screen flex-shrink-0 overflow-x-hidden overflow-y-auto text-sm"
      >
        <span class="text-black pb-2 pl-4 border-l border-gray-200 truncate"
          >Table of Contents</span
        >
        <div class="flex flex-col w-52 md:h-112 2xl:h-screen overflow-y-scroll">
          <a
            v-for="item of toc"
            :key="item.id"
            :border="item.text"
            class="truncate leading-7 text-gray-500 flex-shrink-0 w-full whitespace-nowrap border-l border-gray-200 pl-4 hover:text-accent"
            :class="`pl-${(item.depth - 1) * 4} ${
              state.currentHashId === item.id ? 'text-accent border-accent' : ''
            }`"
            :href="`#${item.id}`"
            @click="state.currentHashId = item.id"
          >
            {{ item.text }}
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { lowerCase, startsWith } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import { PostTag, postTagStyle } from "../../../common/type";

interface TOC {
  id: string;
  depth: number;
  text: string;
}

interface State {
  currentHashId: string;
  showTOC: boolean;
}

interface Data {
  state: State;
}

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
  data(): Data {
    return {
      state: {
        currentHashId: "",
        showTOC: false,
      },
    };
  },
  head() {
    const blog = (this as any).blog;
    let featureImage = blog.featureImage;
    if (startsWith(featureImage, "/")) {
      featureImage = process.env.hostname + featureImage;
    }

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
          content: featureImage,
        },
      ],
    };
  },
  computed: {
    toc(): TOC[] {
      return ((this as any).blog.toc as TOC[]).filter(
        (t) => t.depth >= 2 && t.depth <= 3
      );
    },
  },
  mounted() {
    if (process.client) {
      const options = {
        threshold: 0.1,
      };
      const titles = document.querySelectorAll("h2, h3");
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (this as any).state.currentHashId = entry.target.id;
          }
        });
      }, options);
      titles.forEach((title) => {
        titleObserver.observe(title);
      });
    }
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
