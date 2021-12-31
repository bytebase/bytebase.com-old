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
import {
    defineComponent, onMounted
} from "@nuxtjs/composition-api";

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
    {
        name: "baba",
        imageUrl: require(`~/assets/emoji/baba.gif`),
    },
    {
        name: "badhaha",
        imageUrl: require(`~/assets/emoji/badhaha.gif`),
    },
    {
        name: "cheat",
        imageUrl: require(`~/assets/emoji/cheat.gif`),
    },
    {
        name: "cheerup",
        imageUrl: require(`~/assets/emoji/cheerup.gif`),
    },
    {
        name: "chigua",
        imageUrl: require(`~/assets/emoji/chigua.gif`),
    },
    {
        name: "cry",
        imageUrl: require(`~/assets/emoji/cry.gif`),
    },
    {
        name: "dog",
        imageUrl: require(`~/assets/emoji/dog.gif`),
    },
    {
        name: "launch",
        imageUrl: require(`~/assets/emoji/launch.gif`),
    },
    {
        name: "puzzle",
        imageUrl: require(`~/assets/emoji/puzzle.gif`),
    },
    {
        name: "run",
        imageUrl: require(`~/assets/emoji/run.gif`),
    },
    {
        name: "split",
        imageUrl: require(`~/assets/emoji/split.gif`),
    },
    {
        name: "thank",
        imageUrl: require(`~/assets/emoji/thank.gif`),
    },
];

export default defineComponent({
    props: {},
    setup(props) {
        onMounted(() => {
        })
        return { emojiList };
    },
});
</script>
