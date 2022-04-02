<template>
  <Badge
    :text="level"
    :canRemove="false"
    :theme="level === 'error' ? 'red' : 'yellow'"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { RuleLevel } from "../../common/schemaSystem";
import Badge from "../Badge.vue";

export default defineComponent({
  components: {
    Badge
  },
  props: {
    level: {
      required: true,
      type: String as PropType<RuleLevel>,
    },
  },
});
</script>
