<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center">
      <h1
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
      >
        {{ $t("sql-review-guide.title") }}
      </h1>
      <h2 class="mt-3 mx-auto text-2xl sm:text-3xl text-gray-500 sm:mt-4">
        {{ $t("sql-review-guide.description") }}
      </h2>
    </div>
    <div
      class="flex flex-col sm:flex-row justify-center items-center mt-10 gap-x-10 gap-y-10"
    >
      <div
        v-for="template in guidelineTemplateList"
        :key="template.id"
        class="cursor-pointer bg-transparent border border-gray-300 hover:bg-gray-100 rounded-lg p-6 transition-all flex flex-col justify-center items-center w-full sm:max-w-xs relative"
        :class="state.template.id === template.id ? 'bg-gray-100' : ''"
        @click="onGuidelineChange(template)"
      >
        <img class="h-24" src="~/assets/schema-system/mysql.webp" alt="" />
        <div class="mt-4">
          <span class="text-lg lg:text-xl">{{
            $t("sql-review-guide.guideline-for")
          }}</span>
          <span
            class="text-indigo-600 text-lg lg:text-xl"
            style="
              box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
            "
            >{{
              $t(
                `sql-review-guide.template.${template.id
                  .split(".")
                  .join("-")}.env`
              )
            }}</span
          >
        </div>
        <CheckCircleIcon
          v-if="state.template.id === template.id"
          class="w-7 h-7 text-gray-500 absolute top-3 left-3"
        />
      </div>

      <div class="rounded-lg p-6 flex flex-col justify-center items-center">
        <img class="h-24" src="~/assets/schema-system/postgres.webp" alt="" />
        <div class="mt-4 text-lg lg:text-xl">
          {{ $t("sql-review-guide.coming-soon") }}
        </div>
      </div>
    </div>
    <div class="mt-10 pt-10 border-t border-gray-200">
      <SchemaConfigurationPage
        :selected-rule-list="state.ruleList"
        :rule-changed="state.ruleChanged"
        :title="
          $t(
            `sql-review-guide.template.${state.template.id
              .split('.')
              .join('-')}.title`
          )
        "
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
        {{ $t("sql-review-guide.your-changes-will-be-reset") }}
        <ActionButton
          :class-names="['text-white bg-red-600 hover:bg-red-700 ml-auto mt-5']"
          @click="onReset"
        >
          {{ $t("sql-review-guide.reset-changes") }}
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
  RuleTemplate,
  GuidelineTemplate,
  guidelineTemplateList,
} from "../../common/schemaSystem";
import Modal from "../../components/Modal.vue";

interface LocalState {
  template: GuidelineTemplate;
  ruleList: RuleTemplate[];
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

    const onGuidelineChange = (guideline: GuidelineTemplate) => {
      state.template = guideline;
      state.ruleList = [...guideline.ruleList];
      state.ruleChanged = false;
    };

    const onRuleChange = (rule: RuleTemplate) => {
      const index = state.ruleList.findIndex((r) => r.type === rule.type);
      state.ruleList = [
        ...state.ruleList.slice(0, index),
        rule,
        ...state.ruleList.slice(index + 1),
      ];
      state.ruleChanged = true;
    };

    const onRulesReset = () => {
      if (state.ruleChanged) {
        state.openWarningModal = true;
        return;
      }
      onReset();
    };

    const onReset = () => {
      const guideline = guidelineTemplateList.find(
        (g) => g.id === state.template.id
      );
      if (guideline) {
        state.ruleList = [...guideline.ruleList];
      }
      state.ruleChanged = false;
      state.openWarningModal = false;
    };

    return {
      state,
      guidelineTemplateList,
      onGuidelineChange,
      onRuleChange,
      onRulesReset,
      onReset,
    };
  },
  head() {
    return {
      title: "Database Review Guide",
      meta: [
        {
          hid: "Database Review Guide",
          name: "Database Review Guide",
          content: "",
        },
      ],
    };
  },
});
</script>
