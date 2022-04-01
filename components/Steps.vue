<template>
  <nav aria-label="Progress">
    <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li v-for="(step, stepIdx) in steps" :key="step.title" class="md:flex-1">
        <div
          v-if="stepIdx < currentIndex"
          class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800"
            >{{ step.id }}</span
          >
          <span class="text-sm font-medium">{{ step.title }}</span>
        </div>
        <div
          v-else-if="stepIdx === currentIndex"
          class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          aria-current="step"
        >
          <span
            class="text-xs text-indigo-600 font-semibold tracking-wide uppercase"
            >{{ step.id }}</span
          >
          <span class="text-sm font-medium">{{ step.title }}</span>
        </div>
        <div
          v-else
          class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
            >{{ step.id }}</span
          >
          <span class="text-sm font-medium">{{ step.title }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import CheckIcon from "./CheckIcon.vue";

export interface Step {
  id: string;
  title: string;
  description: string;
}

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    steps: {
      required: true,
      type: Array as PropType<Step[]>,
    },
    currentStepId: {
      required: true,
      type: String,
    },
  },
  computed: {
    currentIndex(): number {
      const index = this.$props.steps.findIndex(
        (s) => s.id === this.$props.currentStepId
      );
      return Math.max(index, 0);
    },
  },
});
</script>
