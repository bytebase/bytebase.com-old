<template>
  <main class="overflow-hidden space-y-8 px-4 sm:px-6 lg:px-8 py-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="max-w-4xl mx-auto">
      <SubscribeSection :module-name="'glossary-detail.header'" />
    </div>
    <nav class="flex max-w-4xl mx-auto" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center">
        <li>
          <div class="flex items-center">
            <NuxtLink
              to="/database-glossary"
              active-class=""
              class="ml-4 text-base font-medium text-gray-700 hover:text-gray-500"
              >Database Glossary</NuxtLink
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              class="text-base font-medium text-gray-700 hover:text-gray-500"
              aria-current="page"
              >{{ glossary.name }}</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="prose prose-xl prose-indigo mx-auto">
      <h1>📕 What is {{ glossary.name }}?</h1>
      <div class="justify-between flex">
        <div>
          <div
            v-for="(tag, tagIndex) in glossary.tagList"
            :key="tagIndex"
            class="inline-flex"
          >
            <span
              v-if="getTagStyle(tag)"
              class="items-center px-3 py-1.5 mr-2 rounded-full text-base font-medium"
              :class="getTagStyle(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <a
          v-if="glossary.reference"
          :href="glossary.reference"
          target="__blank"
          class="flex items-center"
          >External reference
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path></svg
        ></a>
      </div>
      <p>
        {{ glossary.description }}
      </p>
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300"></div>
        </div>
      </div>

      <h2 class="text-center">
        Safer and faster database change and version control for DBAs and
        Developers
      </h2>
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
      <div class="flex justify-center">
        <DatabaseBar />
      </div>
      <h2
        class="mt-16 text-center text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Features
      </h2>
      <FeatureSection />
      <div class="border mt-8">
        <SubscribeSection :module-name="'glossary-detail.footer'" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { glossaryTagStyle, GlossaryTag } from "../../../common/type";
import { glossaryForSlug } from "../../../common/glossary";

export default {
  async asyncData({ params }: any) {
    return { glossary: glossaryForSlug(params.slug) };
  },
  head() {
    const glossary = (this as any).glossary;

    return {
      title: `What is ${glossary.name}`,
      meta: [
        {
          hid: glossary.name,
          name: glossary.name,
          content: `Glossary for ${glossary.name}`,
        },
      ],
    };
  },
  methods: {
    getTagStyle(tag: GlossaryTag): string {
      return glossaryTagStyle(tag);
    },
  },
};
</script>
