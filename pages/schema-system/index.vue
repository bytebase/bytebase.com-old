<template>
  <div
    class="bg-white text-left border-1 border-gray-200 overflow-hidden sm:rounded-md"
  >
    <div class="px-6 py-6">
      <Steps :steps="steps" :current-step-id="currentStepId" />
      <div class="flex-1 mt-10">
        <div class="text-left mb-5">
          <h1 class="text-xl font-bold">
            {{ steps[state.stepIndex].title }}
          </h1>
          <p class="text-gray-500">
            {{ steps[state.stepIndex].description }}
          </p>
        </div>
        <transition appear name="slide-from-right" mode="out-in">
          <SchemaSystemEngine
            v-if="currentStepId === 'Step 1'"
            :engines="engines"
            :active-engine-id="state.engine.id"
            @on-select="(val) => (state.engine = val)"
          />
        </transition>
        <transition appear name="slide-from-right" mode="out-in">
          <SchemaSystemConfig
            v-if="currentStepId === 'Step 2'"
            :rules="rules"
            :select-rules="state.rules"
            @on-select="onRuleSelect"
            @on-remove="onRuleRemove"
            @on-change="onRuleChange"
          />
        </transition>
        <transition appear name="slide-from-right" mode="out-in">
          <SchemaSystemPreview
            v-if="currentStepId === 'Step 3'"
            id="preview"
            :rules="state.rules"
            :engine="state.engine"
          />
        </transition>
        <div class="flex justify-end items-center mt-10">
          <ActionButton
            v-if="state.stepIndex > 0"
            :class-names="['hover:bg-gray-200 focus:ring-gray-500', 'mr-5']"
            @on-click="preStep"
          >
            Previous
          </ActionButton>
          <ActionButton
            v-if="state.stepIndex < steps.length - 1"
            :class-names="[
              'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
            ]"
            @on-click="nextStep"
          >
            Next: {{ steps[state.stepIndex + 1].title }}
          </ActionButton>
          <ActionButton
            v-if="state.stepIndex === steps.length - 1"
            :class-names="[
              'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
            ]"
            :disabled="!configuration"
            @on-click="downConfiguration"
          >
            Download as image
          </ActionButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
// import { mapStores } from "pinia";
import domtoimage from "dom-to-image";
import Steps, { Step } from "../../components/Steps.vue";
import ActionButton from "../../components/ActionButton.vue";
import SchemaSystemEngine from "../../components/SchemaSystem/SchemaSystemEngine.vue";
import SchemaSystemPreview from "../../components/SchemaSystem/SchemaSystemPreview.vue";
import SchemaSystemConfig from "../../components/SchemaSystem/SchemaSystemConfig.vue";
// import { useNotificationStore } from "../store/notification";
import {
  Engine,
  Rule,
  RuleLevel,
  SelectedRule,
  SchemaConfiguration,
  engines,
  rules,
} from "../../common/schemaSystem";

const steps: Step[] = [
  {
    id: "Step 1",
    title: "Chose engine",
    description: "Select a DB engine to build your schema system",
  },
  {
    id: "Step 2",
    title: "Configure rules",
    description: "Select and configure rules for your schema system",
  },
  {
    id: "Step 3",
    title: "Download",
    description: "Preview and download the configuration",
  },
];

interface LocalState {
  stepIndex: number;
  engine: Engine;
  rules: SelectedRule[];
}

export default defineComponent({
  components: {
    Steps,
    ActionButton,
    SchemaSystemEngine,
    SchemaSystemConfig,
    SchemaSystemPreview,
  },
  setup() {
    const state = reactive<LocalState>({
      stepIndex: 0,
      engine: engines[0],
      rules: [],
    });

    return {
      steps,
      state,
      rules,
      engines,
    };
  },
  computed: {
    // ...mapStores(useNotificationStore),
    currentStepId(): string {
      return this.steps[this.state.stepIndex].id;
    },
    configuration(): SchemaConfiguration | undefined {
      if (!this.state.engine) {
        return;
      }

      return {
        version: "0.0.1",
        engine: {
          [this.state.engine.id]: {
            version: this.state.engine.version,
            rules: this.state.rules.map((rule) => ({
              id: rule.id,
              level: rule.level,
              payload: rule.payload
                ? Object.entries(rule.payload).reduce((res, [key, val]) => {
                    res[key] = val.value || val.default;
                    return res;
                  }, {} as { [key: string]: any })
                : undefined,
            })),
          },
        },
      };
    },
  },
  methods: {
    nextStep() {
      this.state.stepIndex = Math.min(
        this.steps.length - 1,
        this.state.stepIndex + 1
      );
    },
    preStep() {
      this.state.stepIndex = Math.max(0, this.state.stepIndex - 1);
    },
    onRuleSelect(rule: Rule) {
      this.state.rules.push({
        ...rule,
        level: RuleLevel.Error,
      });
    },
    onRuleRemove(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        ...this.state.rules.slice(index + 1),
      ];
    },
    onRuleChange(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        rule,
        ...this.state.rules.slice(index + 1),
      ];
    },
    downConfiguration() {
      const node = document.getElementById("preview");
      if (!node) return;

      domtoimage
        .toPng(node, { bgcolor: "#fff", style: { padding: "1.5rem" } })
        .then((dataUrl) => {
          var link = document.createElement("a");
          link.download = `${this.state.engine.name}-schema-system.png`;
          link.href = dataUrl;
          link.click();
        });
    },
  },
});
</script>

<style scoped>
.slide-from-right-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-from-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-from-right-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-from-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
