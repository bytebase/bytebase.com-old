<template>
  <SchemaPreviewPage
    title="Bytebase Schema System for MySQL Dev"
    :rules="rules"
  />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import SchemaPreviewPage from "../../../components/SchemaSystem/SchemaPreviewPage.vue";
import {
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
    }
  },
})
</script>
