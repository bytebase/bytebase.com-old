<template>
  <select
    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    v-model="current"
  >
    <option v-for="option in options" :key="option.id" v-bind:value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "@nuxtjs/composition-api";

export interface SelectOption {
  id: string;
  name: string;
}

export default defineComponent({
  props: {
    selected: {
      required: true,
      type: String,
    },
    options: {
      required: true,
      type: Object as PropType<SelectOption[]>,
    },
  },
  emits: ["on-select"],
  setup(props, { emit }) {
    const current = ref(props.options.find((o) => o.id === props.selected)?.id);

    watch(
      () => current.value,
      (val) => emit("on-select", val)
    );

    watch(
      () => props.selected,
      (val) => (current.value = props.options.find((o) => o.id === val)?.id)
    );

    return {
      current,
    };
  },
});
</script>
