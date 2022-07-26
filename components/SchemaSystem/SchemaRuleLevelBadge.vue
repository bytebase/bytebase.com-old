<template>
  <Badge
    :text="$t(`sql-review.level.${level.toLowerCase()}`)"
    :can-remove="false"
    :theme="theme"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api";
import { RuleLevel } from "../../common/sqlReview";
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
        case RuleLevel.ERROR:
          return "red";
        case RuleLevel.WARNING:
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
