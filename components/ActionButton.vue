<template>
  <button
    :disabled="disabled"
    :class="[
      ...classNames,
      disabled ? 'cursor-not-allowed' : '',
      'block py-2 px-2.5 border border-transparent rounded-md text-center text-sm font-medium',
    ]"
    @click="() => $emit('click')"
  >
    <div class="flex row justify-center items-center">
      <LoadingComponent v-if="loading" class="mr-3" :theme="$props.theme" />
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import LoadingComponent from "./Loading.vue";

export default defineComponent({
  components: {
    LoadingComponent,
  },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    classNames: {
      default: () => [],
      type: Array as PropType<string[]>,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    theme: {
      default: "indigo",
      type: String,
    },
  },
  emits: ["click"],
});
</script>
