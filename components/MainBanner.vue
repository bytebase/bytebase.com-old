<template>
  <div
    v-if="currentLocale === '简体中文'"
    class="w-full relative border-b border-gray-900"
    style="background-color: #ffd700"
  >
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <div class="text-center sm:px-16">
        <p class="font-medium text-slate-900">
          <span class="inline"
            >DevJoy 开发者游园会｜ 上海 WeWork 中国旗舰店 ｜ 2022.11.05 ~ 06
          </span>
          <span class="block sm:ml-2 sm:inline-block">
            <a
              href="https://app.ma.scrmtech.com/meetings/MeetingPc/Detail?pf_uid=14483_1648&sid=68471&source=2&pf_type=3&channel_id=4568&channel_name=Partner+WeChat+OA&tag_id=98362307a04a5e44&id=68471"
              target="__blank"
              class="text-slate-900 font-bold underline"
            >
              免费预约
              <span aria-hidden="true">&rarr;</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
  <div v-else class="w-full relative bg-indigo-500">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <div class="text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="inline">{{
            $t("banner.database-ci-cd-with-github")
          }}</span>
          <span class="block sm:ml-2 sm:inline-block">
            <nuxt-link
              :to="localePath('/blog/database-cicd-best-practice-with-github')"
              class="text-white font-bold underline"
            >
              {{ $t("banner.checkout-now") }}
              <span aria-hidden="true">&rarr;</span>
            </nuxt-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { app } = useContext();

    const currentLocale = computed(() => {
      return (app.i18n.locales as any).find(
        (i: any) => i.code === app.i18n.locale
      ).name;
    });

    return { currentLocale };
  },
});
</script>
