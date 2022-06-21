<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white px-4 sm:px-6 lg:px-8 py-8">
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
        >
          Bytebase {{ $t("common.changelog") }}
        </h1>
        <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700"
            >{{ $t("slogan.safer-and-faster") }}</span
          >
          {{ $t("slogan.mission") }}
        </h2>
        <div class="mt-8">
          <SubscribeSection :module-name="'subscribe.changelog'" />
        </div>
      </div>

      <div>
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div class="mt-12 space-y-20">
            <div
              v-for="changelog in changelogList"
              :key="changelog.slug"
              class="flex flex-col col-span-3 overflow-hidden"
            >
              <nuxt-link
                :to="localePath(`/changelog/${changelog.slug}`)"
                class="flex-1 flex flex-col justify-between"
              >
                <div
                  class="pt-6 prose sm:prose-xl md:prose-2xl mx-auto text-center hover:underline"
                >
                  <h1>{{ changelog.title }}</h1>
                </div>
                <span
                  class="pt-4 flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"
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
                        :src="
                          require(`~/assets/people/${changelog.author.avatar}`)
                        "
                        class="w-6 h-6"
                      />
                      <span>{{ changelog.author.name }}</span>
                    </template>
                  </div>
                </span>
              </nuxt-link>
              <nuxt-link
                v-if="changelog.featureImage"
                :to="localePath(`/changelog/${changelog.slug}`)"
                class="flex-shrink-0 py-6"
              >
                <div class="flex justify-center items-center">
                  <img
                    class="mx-auto object-cover"
                    :src="changelog.featureImage"
                  />
                </div>
              </nuxt-link>
              <nuxt-content
                class="w-full py-6 prose prose-indigo sm:prose-xl md:prose-2xl mx-auto"
                :document="changelog"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { lowerCase } from "lodash";
import { getTeammateByName } from "~/common/teammate";
import { calcReadingTime } from "~/common/utils";

export default {
  async asyncData({ $content }: any) {
    const data = await $content("changelog", {
      deep: true,
    })
      .sortBy("publishedAt", "desc")
      .fetch();

    const changelogList = data
      .sort(
        (a: any, b: any) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .map((changlog: any) => {
        const author = getTeammateByName(changlog.author) as any;
        if (author) {
          author.avatar = `${lowerCase(author?.name)}.webp`;
        }

        return {
          ...changlog,
          author: author,
          formatedPublishedAt: new Date(changlog.publishedAt).toLocaleString(
            "default",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          ),
          readingTime: calcReadingTime(changlog.bodyPlainText),
        };
      });

    return {
      changelogList,
    };
  },
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
};
</script>
