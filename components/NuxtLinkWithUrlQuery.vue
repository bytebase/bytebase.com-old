<template>
  <nuxt-link :to="{ path: to, query: $route.query }" @click="$emit('click')">
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  reactive,
  ref,
  watchEffect,
  nextTick,
} from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    to: {
      default: "",
      type: String,
    },
  },
  emits: ["click"],
});
</script>
