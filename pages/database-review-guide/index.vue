<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        Database Review Guide
      </h1>
      <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
        An online tool for DBA to generate the database schema review / DDL guideline. Support MySQL now, PostgreSQL later.
      </h2>
    </div>
    <div class="flex flex-col sm:flex-row justify-center items-center mt-10 gap-x-10 gap-y-10">
      <div
        v-for="template in guidelineTemplateList"
        :key="template.id"
        class="cursor-pointer bg-transparent border border-gray-300 hover:bg-gray-100 rounded-lg p-6 transition-all flex flex-col justify-center items-center w-full sm:max-w-xs relative"
        :class="state.template.id === template.id ? 'bg-gray-100' : ''"
        @click="onGuidelineChange(template)"
      >
        <img
          class="h-24"
          src="~/assets/schema-system/mysql.webp"
          alt=""
        />
        <div class="mt-4">
          <span class="text-lg lg:text-xl">Guideline for</span>
          <span
            class="text-indigo-600 text-lg lg:text-xl"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >{{ template.tag }}</span>
        </div>
        <CheckCircleIcon
          v-if="state.template.id === template.id"
          class="w-7 h-7 text-gray-500 absolute top-3 left-3"
        />
      </div>

      <div
        class="rounded-lg p-6 flex flex-col justify-center items-center"
      >
        <img
          class="h-24"
          src="~/assets/schema-system/postgres.webp"
          alt=""
        />
        <div class="mt-4 text-lg lg:text-xl">
          coming soon
        </div>
      </div>
    </div>
    <div class="mt-10 pt-10 border-t border-gray-200">
      <SchemaConfigurationPage
        :selectedRuleList="state.ruleList"
        :ruleChanged="state.ruleChanged"
        :title="`Database Review Guide for ${state.template.database.name}`"
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
  SelectedRule,
  GuidelineTemplate,
  guidelineTemplateList
} from "../../common/schemaSystem";
import Modal from "../../components/Modal.vue";

interface LocalState {
  template: GuidelineTemplate;
  ruleList: SelectedRule[];
  ruleChanged: boolean;
  openWarningModal: boolean;
}

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    CheckCircleIcon,
    SchemaConfigurationPage,
  },
  setup() {
    const state = reactive<LocalState>({
      template: guidelineTemplateList[0],
      ruleList: guidelineTemplateList[0].ruleList,
      ruleChanged: false,
      openWarningModal: false,
    });

    return {
      state,
      guidelineTemplateList,
    };
  },
  methods: {
    onGuidelineChange(guideline: GuidelineTemplate) {
      this.state.template = guideline;
      this.state.ruleList = [...guideline.ruleList];
      this.state.ruleChanged = false;
    },
    onRuleChange(rule: SelectedRule) {
      const index = this.state.ruleList.findIndex((r) => r.id === rule.id);
      this.state.ruleList = [
        ...this.state.ruleList.slice(0, index),
        rule,
        ...this.state.ruleList.slice(index + 1),
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
      const guideline = this.guidelineTemplateList.find((g) => g.id === this.state.template.id);
      if (guideline) {
        this.state.ruleList = [
          ...guideline.ruleList
        ];
      }
      this.state.ruleChanged = false;
      this.state.openWarningModal = false;
    }
  }
})
</script>
