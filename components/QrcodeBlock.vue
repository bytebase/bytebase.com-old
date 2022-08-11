<template>
  <div
    v-if="currentLocale === 'zh'"
    class="fixed right-0 top-72 z-50 flex flex-row"
  >
    <div
      class="w-6 h-10 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-l-full text-white pl-1"
      @click="open = !open"
    >
      <chevron-right v-show="open" />
      <chevron-left v-show="!open" />
    </div>
    <Transition name="slide">
      <div v-show="open" class="flex flex-row w-40 h-24 bg-white">
        <div class="qrcode">
          <img src="~/assets/wechat-official-qrcode.webp" alt="" /><span
            >公众号</span
          >
        </div>
        <div class="qrcode">
          <img src="~/assets/bb-helper-wechat-qrcode.webp" alt="" /><span
            >BB 小助手</span
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  computed,
} from "@nuxtjs/composition-api";
import ChevronLeft from "~/components/Icons/ChevronDoubleLeft.vue";
import ChevronRight from "~/components/Icons/ChevronDoubleRight.vue";

export default defineComponent({
  components: { ChevronLeft, ChevronRight },
  setup() {
    const { app } = useContext();
    const currentLocale = computed(() => app.i18n.locale);
    const open = ref(true);
    return {
      open,
      currentLocale,
    };
  },
});
</script>

<style scoped>
.qrcode img {
  @apply w-24;
}

.qrcode {
  @apply text-xs text-center m-1;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
