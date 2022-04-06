<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
      >
        <h1>
          <span
            class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
          >
            <span class="block text-gray-900">Bytebase</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700">
              Database Review Guide
            </span>
          </span>
        </h1>
        <h2
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Bytebase
          <span
            class="text-blue-600"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >
            database review guide
          </span>
          is a online tool to create the schema review guideline for your database.
        </h2>
      </div>
      <div
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
          <img class="w-full" src="~/assets/illustration/instruction.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="flex gap-x-5">
      <div
        v-for="guideline in guidelines"
        :key="guideline.id"
        class="cursor-pointer bg-transparent hover:bg-gray-100 rounded-lg p-3 transition-all max-w-xs flex flex-col justify-center items-start relative"
        :class="state.guidelineId === guideline.id ? 'bg-gray-100' : ''"
        @click="onGuidelineChange(guideline)"
      >
        <img
          class="w-2/3"
          :src="
            require(`~/assets/schema-system/${guideline.id.toLowerCase()}.webp`)
          "
          alt=""
        />
        <div class="my-4">
          <span class="font-semibold text-lg lg:text-xl">MySQL Guideline</span>
          <span
            class="font-semibold text-blue-600 text-lg lg:text-xl"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >for {{ guideline.id.split("-").slice(-1)[0] }}</span>
        </div>
        <CheckCircleIcon
          v-if="state.guidelineId === guideline.id"
          class="w-7 h-7 text-gray-500 absolute right-3 top-3"
        />
      </div>

      <div class="hidden md:flex flex-1 flex-col justify-center items-center">
        <div class="flex text-base tracking-tight text-gray-400 mb-5">
          More is coming
        </div>
        <div class="flex flex-row space-x-6">
          <img class="h-12" src="~/assets/logo/db-postgres.png" alt="postgresql" />
          <img class="h-12" src="~/assets/logo/db-tidb.png" alt="tidb" />
          <img class="h-12" src="~/assets/logo/db-snowflake.png" alt="snowflake" />
          <img
            class="h-12"
            src="~/assets/logo/db-clickhouse.png"
            alt="clickhouse"
          />
        </div>
      </div>
    </div>
    <div class="mt-10 pt-10 border-t border-gray-200">
      <SchemaConfigurationPage
        :selected-rules="state.rules"
        :rule-changed="state.ruleChanged"
        :title="`Bytebase database review guide for MySQL`"
        @add="onRuleAdd"
        @remove="onRuleRemove"
        @change="onRuleChange"
        @reset="onRulesReset"
      />
    </div>
    <Modal
      :open="state.openWarningModal"
      title="Warning"
      @close="state.openWarningModal = false"
    >
      <div>
        Your changes will be reset.
        <ActionButton
          :class-names="[
            'text-white bg-red-600 hover:bg-red-700 ml-auto mt-5',
          ]"
          @click="reset"
        >
          Reset changes
        </ActionButton>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import ActionButton from "../../components/ActionButton.vue";
import CheckCircleIcon from "../../components/Icons/CheckCircle.vue";
import SchemaConfigurationPage from "../../components/SchemaSystem/SchemaConfigurationPage.vue";
import {
  Rule,
  RuleLevel,
  SelectedRule,
  rules,
} from "../../common/schemaSystem";
import Modal from "../../components/Modal.vue";

interface LocalState {
  guidelineId: string;
  rules: SelectedRule[];
  ruleChanged: boolean;
  openWarningModal: boolean;
}

interface GuidelineTemplate {
  id: string;
  rules: SelectedRule[];
}

const guidelines: GuidelineTemplate[] = [
  {
    id: "mysql-prod",
    rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
  },
  {
    id: "mysql-dev",
    rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
  }
];

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    CheckCircleIcon,
    SchemaConfigurationPage,
  },
  setup() {
    const state = reactive<LocalState>({
      guidelineId: guidelines[0].id,
      rules: guidelines[0].rules,
      ruleChanged: false,
      openWarningModal: false,
    });

    return {
      state,
      guidelines,
    };
  },
  methods: {
    onGuidelineChange(guideline: GuidelineTemplate) {
      this.state.guidelineId = guideline.id;
      this.state.rules = [...guideline.rules];
      this.state.ruleChanged = false;
    },
    onRuleAdd(rule: Rule) {
      this.state.rules.push({
        ...rule,
        level: RuleLevel.Error,
      });
      this.state.ruleChanged = true;
    },
    onRuleRemove(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        ...this.state.rules.slice(index + 1),
      ];
      this.state.ruleChanged = true;
    },
    onRuleChange(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        rule,
        ...this.state.rules.slice(index + 1),
      ];
      this.state.ruleChanged = true;
    },
    onRulesReset() {
      if (this.state.ruleChanged) {
        this.state.openWarningModal = true;
        return;
      }
      this.reset()
    },
    reset() {
      const guideline = this.guidelines.find((g) => g.id === this.state.guidelineId);
      if (guideline) {
        this.state.rules = [
          ...guideline.rules
        ];
      }
      this.state.ruleChanged = false;
      this.state.openWarningModal = false;
    }
  }
})
</script>
