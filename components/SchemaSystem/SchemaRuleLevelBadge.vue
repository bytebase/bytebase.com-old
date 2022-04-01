<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-sm font-normal"
    :class="
      level === 'error'
        ? 'bg-red-100 text-red-800'
        : 'bg-yellow-100 text-yellow-800'
    "
  >
    {{ level }}
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { RuleLevel } from "../../common/schemaSystem";

export default defineComponent({
  props: {
    level: {
      required: true,
      type: String as PropType<RuleLevel>,
    },
  },
});
</script>
