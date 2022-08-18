<template>
  <div
    v-if="currentLocale === 'zh'"
    class="fixed right-0 top-72 z-50 flex flex-row"
  >
    <div
      class="w-6 h-10 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-l-full text-white pl-1 shadow-xl"
      @click="store.toggleQrcode"
    >
      <chevron-right v-show="store.showQrcode" />
      <chevron-left v-show="!store.showQrcode" />
    </div>
    <Transition name="slide">
      <div
        v-show="store.showQrcode"
        class="flex flex-row justify-center w-32 h-36 bg-indigo-600 shadow-xl"
      >
        <div class="qrcode">
          <img src="~/assets/bb-helper-wechat-qrcode.webp" alt="qrcode" />
          <span class="w-full text-white">加入社区，领取周边</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";
import ChevronLeft from "~/components/Icons/ChevronDoubleLeft.vue";
import ChevronRight from "~/components/Icons/ChevronDoubleRight.vue";
import { useStore } from "~/store";

export default defineComponent({
  components: { ChevronLeft, ChevronRight },
  setup() {
    const { app } = useContext();
    const store = useStore();
    const currentLocale = computed(() => app.i18n.locale);
    onMounted(() => {
      setTimeout(() => {
        if (!store.$state.showQrcode) {
          store.toggleQrcode();
        }
      }, 1000);
    });

    return {
      currentLocale,
      store,
    };
  },
});
</script>

<style scoped>
.qrcode img {
  @apply w-28 mb-1;
}

.qrcode {
  @apply flex flex-col items-center text-xs text-center m-2;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
