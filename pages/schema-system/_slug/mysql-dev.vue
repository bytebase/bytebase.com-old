<template>
  <SchemaPreviewPage
    v-if="engine"
    :rules="rules"
    :engine="engine"
  />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import SchemaPreviewPage from "../../../components/SchemaSystem/SchemaPreviewPage.vue";
import {
  engines,
  RuleLevel,
  rules,
} from "../../../common/schemaSystem";

export default defineComponent({
  components: {
    SchemaPreviewPage
  },
  setup() {
    return {
      // TODO: update rules for MySQL dev
      rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
      engine: engines.find(e => e.id === "mysql"),
    }
  },
})
</script>
