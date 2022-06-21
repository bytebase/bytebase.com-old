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
                  <nuxt-link
                    :to="localePath('/jobs#jobs')"
                    class="text-2xl font-semibold text-indigo-600 hover:text-indigo-500 hover:underline whitespace-nowrap"
                    >{{ person.role }}🎢</nuxt-link
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
import { shuffle, lowerCase } from "lodash";
import teammateList from "~/common/teammate";

export default defineComponent({
  setup() {
    const { app } = useContext();

    const people = teammateList.map((t) => {
      return {
        ...t,
        role: app.i18n.t(t.role),
        imageUrl: lowerCase(t.name) + ".webp",
      };
    });

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
