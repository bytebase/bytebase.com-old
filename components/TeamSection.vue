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
            >{{ $t("team.meet-our-crew") }}</a
          >
        </div>
        <ul
          role="list"
          class="mx-auto space-y-8 sm:grid grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
        >
          <li v-for="person in shuffleList" :key="person.name">
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
                    >{{ person.role }}🎢</NuxtLink
                  >
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

      <div class="mt-16 space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <a
            id="backer"
            href="#backer"
            class="text-3xl font-extrabold tracking-tight sm:text-4xl hover:underline"
            >{{ $t("team.backed-by-the-best") }}</a
          >
        </div>
        <ul
          role="list"
          class="mx-auto space-y-8 sm:grid grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
        >
          <li v-for="person in backer" :key="person.name">
            <img
              class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              :src="require(`~/assets/people/${person.imageUrl}`)"
              alt=""
            />
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>{{ person.name }}</h3>
                <p class="text-indigo-600">{{ person.role }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  onMounted,
} from "@nuxtjs/composition-api";
import { shuffle } from "lodash";

export default defineComponent({
  setup() {
    const { app } = useContext();

    const people = [
      {
        name: "Tianzhou",
        role: "Chief Sketching Officer",
        imageUrl: "tianzhou.webp",
      },
      {
        name: "Danny",
        role: "CTO",
        imageUrl: "danny.webp",
      },
      {
        name: "Ningjing",
        role: app.i18n.t("team.roles.community-manager"),
        imageUrl: "ningjing.webp",
      },
      {
        name: "Zhe",
        role: app.i18n.t("team.roles.engineering-intern"),
        imageUrl: "xingzhe.webp",
      },
      {
        name: "Zilong",
        role: app.i18n.t("team.roles.engineering-intern"),
        imageUrl: "zilong.webp",
      },
      {
        name: "Ji",
        role: app.i18n.t("team.roles.engineering"),
        imageUrl: "ji.webp",
      },
      {
        name: "???",
        role: app.i18n.t("team.roles.special-agent"),
        imageUrl: "yaping.webp",
      },
      {
        name: "Edward",
        role: app.i18n.t("team.roles.engineering"),
        imageUrl: "edward.webp",
      },
      {
        name: "Steven",
        role: app.i18n.t("team.roles.engineering-intern"),
        imageUrl: "steven.webp",
      },
      {
        name: "Ray",
        role: app.i18n.t("team.roles.community-intern"),
        imageUrl: "ray.webp",
      },
      {
        name: "Qiaosheng",
        role: app.i18n.t("team.roles.engineering-intern"),
        imageUrl: "qiaosheng.webp",
      },
      {
        name: "Lucy",
        role: app.i18n.t("team.roles.community-intern"),
        imageUrl: "lucy.webp",
      },
      {
        name: "Elon",
        role: app.i18n.t("team.roles.engineering"),
        imageUrl: "elon.webp",
      },
      {
        name: "Zipeng",
        role: app.i18n.t("team.roles.engineering-intern"),
        imageUrl: "zipeng.webp",
      },
      {
        name: "Junyi",
        role: app.i18n.t("team.roles.engineering"),
        imageUrl: "junyi.webp",
      },
      {
        name: "Changyu",
        role: app.i18n.t("team.roles.solution-architect"),
        imageUrl: "changyu.webp",
      },
      {
        name: "Candy",
        role: app.i18n.t("team.roles.product-manager"),
        imageUrl: "candy.webp",
      },
      {
        name: "Mila",
        role: app.i18n.t("team.roles.community"),
        imageUrl: "mila.webp",
      },
    ];

    const YOU = {
      name: "You",
      role: app.i18n.t("team.join-us"),
      imageUrl: "wantyou.webp",
    };

    const backer = [
      {
        name: "Matrix Partners China",
        role: "",
        imageUrl: "matrix.webp",
      },
      {
        name: "Dongxu Huang",
        role: "Co-Founder & CTO - PingCAP",
        imageUrl: "dongxu.webp",
      },
    ];

    const shuffleList = ref<any[]>([]);

    onMounted(() => {
      shuffleList.value = shuffle(people).concat(YOU);
    });

    return { shuffleList, backer };
  },
});
</script>
