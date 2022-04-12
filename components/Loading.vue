<template>
  <div
    style="border-top-color: transparent"
    :class="`w-4 h-4 border-4 border-${$props.theme}-900 border-solid rounded-full animate-spin`"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    theme: {
      default: "indigo",
      type: String,
    },
  },
});
</script>
