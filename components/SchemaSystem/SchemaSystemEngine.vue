<template>
  <div class="">
    <div
      v-for="engine in engines"
      :key="engine.id"
      class="border-2 rounded-lg flex p-4 w-full h-24 items-center cursor-pointer hover:bg-gray-50"
      :class="
        activeEngineId === engine.id ? 'border-indigo-500' : 'border-gray-300'
      "
      @click="$emit('select', engine)"
    >
      <img
        :src="
          require(`~/assets/schema-system/engine-${engine.id.toLowerCase()}.webp`)
        "
        class="h-full"
      />
      <div class="flex-1 flex flex-col justify-center ml-5">
        <h1 class="text-xl">{{ engine.name }}</h1>
        <p class="text-gray-500">
          Minimum support version: {{ engine.version }}
        </p>
      </div>
      <CheckCircleIcon
        v-if="activeEngineId === engine.id"
        class="w-7 h-7 text-indigo-500"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import CheckCircleIcon from "../Icons/CheckCircle.vue";
import { Engine } from "../../common/schemaSystem";

export default defineComponent({
  components: {
    CheckCircleIcon,
  },
  props: {
    engines: {
      required: true,
      type: Array as PropType<Engine[]>,
    },
    activeEngineId: {
      default: "",
      required: false,
      type: String,
    },
  },
  emits: ["select"],
});
</script>
