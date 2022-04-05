<template>
  <div
    class="max-w-7xl mx-auto text-left overflow-hidden"
  >
    <SchemaSystemHeader class="mt-1 text-4xl sm:text-5xl xl:text-6xl m-6" />
    <!-- <div
      class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl m-6"
    >
      <span class="text-gray-900">Bytebase</span>
      <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700">
        Schema System
      </span>
    </div> -->
    <div class="px-6 py-6">
      <Steps :steps="steps" :current-step-id="currentStepId" />
      <div class="flex-1 mt-10">
        <div class="text-left">
          <h1 class="text-xl font-bold">
            {{ steps[state.stepIndex].title }}
          </h1>
          <p class="text-gray-500">
            {{ steps[state.stepIndex].description }}
          </p>
        </div>
        <div class="my-5 border border-gray-100"></div>
        <transition appear name="slide-from-right" mode="out-in">
          <SchemaSystemEngine
            v-if="currentStepId === 'Step 1'"
            :engines="engines"
            :active-engine-id="state.engine.id"
            @select="(val) => (state.engine = val)"
          />
          <SchemaSystemConfig
            v-else-if="currentStepId === 'Step 2'"
            :rules="rules"
            :select-rules="state.rules"
            @select="onRuleSelect"
            @remove="onRuleRemove"
            @change="onRuleChange"
          />
          <SchemaSystemPreview
            v-else-if="currentStepId === 'Step 3'"
            id="preview"
            :rules="state.rules"
            :engine="state.engine"
          />
        </transition>
        <div class="flex justify-end items-center mt-10">
          <ActionButton
            v-if="state.stepIndex > 0"
            :class-names="['hover:bg-gray-200 focus:ring-gray-500', 'mr-5']"
            @click="preStep"
          >
            Previous
          </ActionButton>
          <ActionButton
            v-if="state.stepIndex < steps.length - 1"
            :class-names="[
              'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
            ]"
            :disabled="nextStepDisabled"
            @click="nextStep"
          >
            Next: {{ steps[state.stepIndex + 1].title }}
          </ActionButton>
          <ActionButton
            v-if="state.stepIndex === steps.length - 1"
            :class-names="[
              'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
            ]"
            @click="downConfiguration"
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
import domtoimage from "dom-to-image";
import Steps, { Step } from "../../components/Steps.vue";
import ActionButton from "../../components/ActionButton.vue";
import SchemaSystemHeader from "../../components/SchemaSystem/SchemaSystemHeader.vue";
import SchemaSystemEngine from "../../components/SchemaSystem/SchemaSystemEngine.vue";
import SchemaSystemPreview from "../../components/SchemaSystem/SchemaSystemPreview.vue";
import SchemaSystemConfig from "../../components/SchemaSystem/SchemaSystemConfig.vue";
import {
  Engine,
  Rule,
  RuleLevel,
  SelectedRule,
  engines,
  rules,
  PayloadType,
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
    title: "Preview and download",
    description: "Preview and download the configuration",
  },
];

const validRule = (rule: SelectedRule): boolean => {
  if (!rule.payload) {
    return true;
  }

  for (const key of Object.keys(rule.payload)) {
    const target = rule.payload[key].value;
    // undefined value means user didn't use custom config.
    // will use the default value for schema system.
    if (target === undefined) {
      continue;
    }

    switch (rule.payload[key].type) {
      case PayloadType.String:
        // string payload can use default value
        continue;
      case PayloadType.Template:
        if (!target) {
          return false;
        }
        continue;
      case PayloadType.StringArray:
        if (!Array.isArray(target) || !target.length) {
          return false;
        }
        continue;
      default:
        return false;
    }
  }

  return true;
}

interface LocalState {
  stepIndex: number;
  engine: Engine;
  rules: SelectedRule[];
}

export default defineComponent({
  components: {
    Steps,
    ActionButton,
    SchemaSystemHeader,
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
    currentStepId(): string {
      return this.steps[this.state.stepIndex].id;
    },
    nextStepDisabled(): boolean {
      switch (this.state.stepIndex) {
        case 0:
          return !this.state.engine;
        case 1:
          return !this.state.rules.length || !this.validRules;
        default:
          return false;
      }
    },
    validRules(): boolean {
      for (const rule of this.state.rules) {
        if (!validRule(rule)) {
          return false;
        }
      }
      return true;
    }
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
        .toPng(node, { bgcolor: "#fff" })
        .then((dataUrl) => {
          var link = document.createElement("a");
          link.download = `${this.state.engine.name}-Schema-System.png`;
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

.slide-from-right-enter {
  transform: translateX(20px);
  opacity: 0;
}
.slide-from-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
