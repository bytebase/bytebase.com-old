<template>
  <main class="space-y-8">
    <div class="prose sm:prose-xl md:prose-2xl mx-auto text-center">
      <img
        v-if="changelog.featureImage"
        class="mx-auto object-cover"
        :src="changelog.featureImage"
      />
      <h1>{{ changelog.title }}</h1>
    </div>
    <div
      class="flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"
    >
      <div class="ml-2 flex space-x-1 text-gray-500 items-center">
        <time :datetime="changelog.publishedAt">
          {{ changelog.formatedPublishedAt }}
        </time>
        <span aria-hidden="true">&middot;</span>
        <span>{{ changelog.readingTime }}</span>
        <template v-if="changelog.author">
          <span aria-hidden="true">&middot;</span>
          <img
            :src="require(`~/assets/people/${changelog.author.avatar}`)"
            class="w-6 h-6"
          />
          <span>{{ changelog.author.name }}</span>
        </template>
      </div>
    </div>
    <div id="content" class="flex flex-row">
      <aside class="w-52 hidden xl:flex" />
      <nuxt-content
        class="w-full px-4 py-6 prose prose-indigo prose-xl 2xl:prose-2xl mx-auto"
        :document="changelog"
      />
      <Toc :content="changelog" :scroll-offset="135" />
    </div>
  </main>
</template>

<script lang="ts">
import { lowerCase, startsWith } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import Toc from "~/components/Toc.vue";

export default {
  components: { Toc },
  async asyncData({ params, $content }: any) {
    const data = await $content("changelog", params.slug, {
      deep: true,
    }).fetch();

    const author = getTeammateByName(data.author) as any;
    if (author) {
      author.avatar = `${lowerCase(author?.name)}.webp`;
    }

    const changelog = {
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
      changelog,
    };
  },
  head() {
    const changelog = (this as any).changelog;
    let featureImage = changelog.featureImage;
    if (startsWith(featureImage, "/")) {
      featureImage = process.env.hostname + featureImage;
    }

    return {
      title: changelog.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: changelog.description,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: changelog.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: changelog.description,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: featureImage,
        },
      ],
    };
  },
};
</script>
