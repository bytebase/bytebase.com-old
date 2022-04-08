<template>
  <Badge
    :text="`${level[0].toUpperCase()}${level.slice(1).toLowerCase()}`"
    :canRemove="false"
    :theme="theme"
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
  computed: {
    theme(): string {
      switch (this.$props.level) {
        case RuleLevel.Error:
          return "red";
        case RuleLevel.Warning:
          return "yellow";
        default:
          return "gray";
      }
    }
  }
});
</script>
