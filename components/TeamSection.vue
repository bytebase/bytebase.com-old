<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div
      class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <a
            id="team"
            href="#team"
            class="text-3xl font-extrabold tracking-tight sm:text-4xl hover:underline"
          >
            Meet our team
          </a>
        </div>
        <ul
          role="list"
          class="mx-auto space-y-8 sm:grid grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
        >
          <li v-for="person in people" :key="person.name">
            <img
              class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              :src="require(`~/assets/people/${person.imageUrl}`)"
              alt=""
            />
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <template v-if="person.name == 'You'">
                  <NuxtLink
                    to="/jobs#jobs"
                    class="text-2xl font-semibold text-indigo-600 hover:text-indigo-500 hover:underline whitespace-nowrap"
                  >
                    {{ person.role }}🎢
                  </NuxtLink>
                </template>
                <template v-else>
                  <h3>{{ person.name }}</h3>
                  <p class="text-indigo-600">{{ person.role }}</p>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

const people = [
  {
    name: "Tianzhou",
    role: "Founder",
    imageUrl: "tianzhou.webp",
  },
  {
    name: "Ningjing",
    role: "Community Manager",
    imageUrl: "ningjing.webp",
  },
  {
    name: "Zhe",
    role: "Engineering Intern",
    imageUrl: "xingzhe.webp",
  },
  {
    name: "Yaping",
    role: "Operation Specialist",
    imageUrl: "yaping.webp",
  },
  {
    name: "You",
    role: "Join us",
    imageUrl: "wantyou.webp",
  },
];

export default defineComponent({
  props: {},
  setup(props) {
    // TODO: Shuffle seems to mess up with require used by the <img :src="..." />
    // for (let i = people.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   const temp = people[i];
    //   people[i] = people[j];
    //   people[j] = temp;
    // }
    return { people };
  },
});
</script>
