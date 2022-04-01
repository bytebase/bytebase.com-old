<template>
  <div>
    <div
      class="mb-5"
      :class="selectRules.length > 0 ? 'border-b-1 border-gray-200' : ''"
    >
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="rule in selectRules" :key="rule.id" class="">
          <SchemaRuleConfig
            :rule="rule"
            @on-remove="(val) => $emit('on-remove', val)"
            @on-level-change="(level) => onLevelChange(rule, level)"
            @on-payload-change="(val) => onPayloadChange(rule, val)"
          />
        </li>
      </ul>
    </div>

    <ActionButton
      :class-names="[
        'bg-indigo-100 text-indigo-800 hover:bg-indigo-100',
        'py-3 px-6 w-64',
      ]"
      @click="state.openModal = true"
    >
      <div class="flex">
        <PlusCircleIcon class="w-5 h-5" />
        &nbsp; Add rule
      </div>
    </ActionButton>

    <Modal
      v-if="state.openModal"
      title="Select rule"
      @on-close="state.openModal = false"
    >
      <SchemaSystemRuleModal :rules="rules" @on-select="onRuleSelect" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "@nuxtjs/composition-api";
import PlusCircleIcon from "../Icons/PlusCircle.vue";
import Modal from "../Modal.vue";
import SchemaSystemRuleModal from "./SchemaSystemRuleModal.vue";
import SchemaRuleConfig from "./SchemaRuleConfig.vue";
import ActionButton from "../ActionButton.vue";
import {
  Rule,
  SelectedRule,
  RulePayload,
  RuleLevel,
} from "../../common/schemaSystem";

interface LocalState {
  openModal: boolean;
}

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    PlusCircleIcon,
    SchemaRuleConfig,
    SchemaSystemRuleModal,
  },
  props: {
    rules: {
      required: true,
      type: Object as PropType<Rule[]>,
    },
    selectRules: {
      required: true,
      type: Object as PropType<SelectedRule[]>,
    },
  },
  emits: ["on-select", "on-remove", "on-change"],
  setup() {
    const state = reactive<LocalState>({
      openModal: false,
    });

    return {
      state,
    };
  },
  methods: {
    onRuleSelect(rule: Rule) {
      this.state.openModal = false;
      this.$emit("on-select", rule);
    },
    onPayloadChange(rule: SelectedRule, data: { [val: string]: any }) {
      if (!rule.payload) {
        return;
      }

      const newRule = {
        ...rule,
        payload: Object.entries(rule.payload).reduce((dict, [key, val]) => {
          dict[key] = { ...val };
          dict[key].value = data[key];
          return dict;
        }, {} as RulePayload),
      };

      this.$emit("on-change", newRule);
    },
    onLevelChange(rule: SelectedRule, level: RuleLevel) {
      this.$emit("on-change", {
        ...rule,
        level,
      });
    },
  },
});
</script>
