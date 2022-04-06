<template>
  <select
    class="select-reset select text-base bg-gray-100 border-gray-300 focus:outline-none sm:text-sm rounded-md"
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
      type: Array as PropType<SelectOption[]>,
    },
  },
  emits: ["select"],
  setup(props, { emit }) {
    const current = ref(props.options.find((o) => o.id === props.selected)?.id);

    watch(
      () => current.value,
      (val) => emit("select", val)
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

<style scoped>

.select-reset {
  /* styling */
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select {
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}
</style>
