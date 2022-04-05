<template>
  <div class="max-w-7xl mx-auto px-4">
    <SchemaSystemHeader class="mt-1 text-4xl sm:text-5xl xl:text-6xl" />
    <div class="my-10">
      <ActionButton
        :class-names="[
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
        ]"
        @click="downConfiguration"
      >
        Download as image
      </ActionButton>
    </div>
    <SchemaSystemPreview
      id="preview"
      :rules="rules"
      :engine="engine"
      class="my-10"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import domtoimage from "dom-to-image";
import SchemaSystemHeader from "./SchemaSystemHeader.vue";
import SchemaSystemPreview from "./SchemaSystemPreview.vue";
import ActionButton from "../ActionButton.vue";
import {
  Engine,
  SelectedRule,
} from "../../common/schemaSystem";

export default defineComponent({
  components: {
    ActionButton,
    SchemaSystemHeader,
    SchemaSystemPreview,
  },
  props: {
    rules: {
      required: true,
      type: Array as PropType<SelectedRule[]>,
    },
    engine: {
      required: true,
      type: Object as PropType<Engine>,
    },
  },
  methods: {
    downConfiguration() {
      const node = document.getElementById("preview");
      if (!node) return;

      domtoimage
        .toPng(node, { bgcolor: "#fff" })
        .then((dataUrl) => {
          var link = document.createElement("a");
          link.download = `${this.engine.name}-Schema-System.png`;
          link.href = dataUrl;
          link.click();
        });
    },
  },
});
</script>
