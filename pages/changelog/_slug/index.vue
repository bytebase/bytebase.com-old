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
            v-if="changelog.author.avatar"
            :src="changelog.author.avatar"
            class="w-6 h-6"
          />
          <span>{{ changelog.author.name }}</span>
        </template>
      </div>
    </div>
    <div id="content" class="flex flex-row">
      <aside class="w-52 hidden xl:flex" />
      <nuxt-content
        class="changelog-content w-full px-4 py-6 prose prose-indigo prose-xl 2xl:prose-2xl mx-auto"
        :document="changelog"
      />
      <Toc :content="changelog" :scroll-offset="135" />
    </div>
  </main>
</template>

<script lang="ts">
import { startsWith } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";
import Toc from "~/components/Toc.vue";

export default {
  components: { Toc },
  async asyncData({ params, $content }: any) {
    const data = await $content("changelog", params.slug, {
      deep: true,
    }).fetch();
    const author: any = {
      name: data.author,
    };
    const teammate = getTeammateByName(author.name) as any;
    if (teammate) {
      author.avatar = require(`~/assets/people/${teammate.name.toLowerCase()}.webp`);
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
    const route = (this as any).$route;
    const link = process.env.hostname + route.fullPath;
    let featureImage = changelog.featureImage;
    if (startsWith(featureImage, "/")) {
      featureImage = process.env.hostname + featureImage;
    }

    return {
      title: changelog.title,
      meta: [
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:title",
          name: "title",
          property: "og:title",
          content: changelog.title,
        },
        {
          hid: "description",
          name: "description",
          property: "og:description",
          content: changelog.description,
        },
        {
          hid: "og:image",
          name: "image",
          property: "og:image",
          content: featureImage,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: link,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* overwrite prose default styles */
.changelog-content img {
  width: auto !important;
  margin: 0 auto;
  box-shadow: 0px 36px 89px rgb(0 0 0 / 4%),
    0px 23.3333px 52.1227px rgb(0 0 0 / 3%),
    0px 13.8667px 28.3481px rgb(0 0 0 / 2%), 0px 7.2px 14.4625px rgb(0 0 0 / 2%),
    0px 2.93333px 7.25185px rgb(0 0 0 / 2%),
    0px 0.666667px 3.50231px rgb(0 0 0 / 1%) !important;
}
</style>
