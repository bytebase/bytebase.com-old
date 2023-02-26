<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <ul
      role="list"
      class="mx-auto space-y-8 sm:grid grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
    >
      <li v-for="emoji in emojiList" :key="emoji.name">
        <img class="mx-auto w-56 h-56" :src="emoji.imageUrl" alt />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

const emojiList = [
  {
    name: "ok",
    imageUrl: require(`~/assets/emoji/ok.gif`),
  },
  {
    name: "lgtm",
    imageUrl: require(`~/assets/emoji/lgtm.gif`),
  },
  {
    name: "laughtear",
    imageUrl: require(`~/assets/emoji/laughtear.gif`),
  },
  {
    name: "666",
    imageUrl: require(`~/assets/emoji/666.gif`),
  },
];

export default defineComponent({
  props: {},
  setup() {
    return { emojiList };
  },
});
</script>
