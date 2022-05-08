<template>
  <Badge
    :text="`${level[0].toUpperCase()}${level.slice(1).toLowerCase()}`"
    :can-remove="false"
    :theme="theme"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api";
import { RuleLevel } from "../../common/schemaSystem";
import Badge from "../Badge.vue";

export default defineComponent({
  components: {
    Badge,
  },
  props: {
    level: {
      required: true,
      type: String as PropType<RuleLevel>,
    },
  },
  setup(props) {
    const theme = computed((): string => {
      switch (props.level) {
        case RuleLevel.Error:
          return "red";
        case RuleLevel.Warning:
          return "yellow";
        default:
          return "gray";
      }
    });

    return {
      theme,
    };
  },
});
</script>
