<template>
  <main class="overflow-hidden space-y-8">
    <div class="prose prose-xl md:prose-2xl mx-auto text-center">
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
    <nuxt-content
      class="w-full py-6 prose prose-indigo prose-xl md:prose-2xl mx-auto"
      :document="changelog"
    />
  </main>
</template>

<script lang="ts">
import { lowerCase } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";

export default {
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
          content: changelog.featureImage,
        },
      ],
    };
  },
};
</script>
