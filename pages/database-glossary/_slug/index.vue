<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <div class="prose prose-lg prose-indigo mx-auto">
      <h1>📕 What is {{ glossary.name }}?</h1>
      <div
        v-for="(tag, tagIndex) in glossary.tagList"
        :key="tagIndex"
        class="inline-flex"
      >
        <span
          class="items-center px-3 py-0.5 mr-2 rounded-full text-base font-medium"
          :class="getTagStyle(tag)"
        >
          {{ tag }}
        </span>
      </div>
      <p>
        {{ glossary.description }}
        <NuxtLink to="/database-glossary">
          Check other glossaries.
        </NuxtLink>
      </p>
      <h2>Manage database schema with Bytebase</h2>
      <div class="flex text-center justify-center">
        <img
          class="object-contain h-96 md:h-144"
          src="~/assets/illustration/main.webp"
          alt=""
        />
      </div>
      <p>
        Bytebase is an
        <a href="https://github.com/bytebase/bytebase" target="__blank"
          >open source</a
        >, web-based database schema change and version control tool for teams.
        It offers a web-based collaboration workspace to help DBAs and
        Developers manage the lifecycle of application database schemas.
      </p>
    </div>
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
      <div class="flex mt-6 justify-center">
        <DatabaseBar />
      </div>
      <h2
        class="mt-16 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Features
      </h2>
      <FeatureSection />
      <div class="border mt-8">
        <ActionSection class="sm:justify-center" :moduleName="'blog-detail'" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { tagStyle } from "../util";
import { Tag } from "../glossaryTypes";
import { glossaryForSlug } from "../glossary";

export default {
  head() {
    return {
      title: `What is ${(this as any).glossary.name}`,
    };
  },
  async asyncData({ params }: any) {
    return { glossary: glossaryForSlug(params.slug) };
  },
  methods: {
    getTagStyle(tag: Tag): string {
      return tagStyle(tag);
    },
  },
};
</script>
