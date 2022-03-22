<template>
  <div
    class="w-full p-4 flex flex-row justify-start items-start border rounded-lg my-4 bg-gray-50"
    :class="type === 'info' ? 'border-blue-600' : 'border-yellow-600'"
  >
    <span
      class="text-lg w-7 h-7 leading-6 flex-shrink-0 mr-2 font-bold inline-block text-center border-2 rounded-full"
      :class="
        type === 'info'
          ? 'text-blue-600 border-blue-600'
          : 'text-yellow-600 border-yellow-600'
      "
    >
      !
    </span>
    <div
      class="hint-content-container flex-grow flex flex-col justify-start items-start"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "info",
    },
  },
  setup() {
    // do nth
  },
});
</script>

<style scoped>
.hint-content-container {
  margin-top: 2px;
}
</style>
