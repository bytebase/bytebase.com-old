<template>
  <SchemaPreviewPage
    title="Bytebase Schema System for MySQL Prod"
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
      // TODO: update rules for MySQL prod
      rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
    }
  },
})
</script>
