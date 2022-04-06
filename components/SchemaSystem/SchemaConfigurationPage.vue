<template>
  <div>
    <div class="flex justify-end mb-8">
      <ActionButton
        :class-names="[
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
        ]"
        @click="downConfiguration"
      >
        Download as image
      </ActionButton>
    </div>
    <div class="lg:grid lg:grid-cols-6 lg:gap-x-8">
      <aside class="hidden mt-2 lg:block lg:col-span-2 p-5">
        <div class="space-y-6">
          <h1 class="text-left text-2xl font-semibold">Configuration</h1>
          <fieldset
            v-for="(category, index) in categories"
            :key="index"
          >
            <a
              :href="`#${category.id}`"
              class="block text-sm font-medium text-gray-900 hover:underline"
            >
              {{ category.title }}
            </a>
            <div
              v-for="(rule, ruleIndex) in category.rules"
              :key="ruleIndex"
              class="pt-2 flex items-center text-sm group"
            >
              <div
                class="text-indigo-600 hover:underline cursor-pointer"
                @click="onRuleSelect(rule)"
              >
                {{ rule.id }}
              </div>

              <div @click="$emit('remove', rule)">
                <TrashIcon
                  class="w-4 h-4 text-red-600 ml-2 cursor-pointer opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </fieldset>
          <ActionButton
            :class-names="[
              'border text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-700',
            ]"
            @click="state.openSelectModal = true"
          >
            <PlusCircleIcon class="w-5 h-5" />
            &nbsp; Add rule
          </ActionButton>
        </div>
      </aside>
      <SchemaSystemPreview
        id="preview"
        :title="title"
        :categories="categories"
        class="lg:col-span-4 p-5"
        @select="(rule) => onRuleSelect(rule)"
      />
    </div>
    <Modal
      :open="state.openSelectModal"
      title="Select rule"
      @close="state.openSelectModal = false"
    >
      <SchemaSystemRuleModal :rules="rules" @select="onRuleAdd" />
    </Modal>
    <Modal
      :open="state.openConfigModal && !!state.selectedRule"
      :title="state.selectedRule ? state.selectedRule.id : ''"
      @close="state.openConfigModal = false"
    >
      <SchemaRuleConfig
        v-if="state.selectedRule"
        :rule="state.selectedRule"
        @level-change="(level) => onLevelChange(level)"
        @payload-change="(val) => onPayloadChange(val)"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "@nuxtjs/composition-api";
import domtoimage from "dom-to-image";
import SchemaSystemPreview from "./SchemaSystemPreview.vue";
import ActionButton from "../ActionButton.vue";
import {
  rules,
  Rule,
  RulePayload,
  RuleLevel,
  SelectedRule,
  RuleCategory
} from "../../common/schemaSystem";
import Modal from "../Modal.vue";
import SchemaSystemRuleModal from "./SchemaSystemRuleModal.vue";
import TrashIcon from "../Icons/Trash.vue";
import PlusCircleIcon from "../Icons/PlusCircle.vue";
import SchemaRuleConfig from "./SchemaRuleConfig.vue";

interface LocalState {
  openSelectModal: boolean;
  openConfigModal: boolean;
  selectedRule?: SelectedRule;
}

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    TrashIcon,
    PlusCircleIcon,
    SchemaRuleConfig,
    SchemaSystemRuleModal,
    SchemaSystemPreview,
  },
  props: {
    selectedRules: {
      required: true,
      type: Array as PropType<SelectedRule[]>,
    },
    title: {
      required: true,
      type: String,
    },
  },
  emits: ["add", "remove", "change"],
  setup() {
    const state = reactive<LocalState>({
      openSelectModal: false,
      openConfigModal: false,
    });

    return {
      state,
      rules,
    };
  },
  computed: {
    categories(): RuleCategory[] {
      const dict = this.$props.selectedRules.reduce((dict, rule) => {
        if (!dict[rule.category]) {
          const id = rule.category.toLowerCase();
          const title = `${id[0].toUpperCase()}${id.slice(1)}`;
          dict[rule.category] = {
            id: rule.category,
            title,
            rules: [],
          };
        }
        dict[rule.category].rules.push(rule);
        return dict;
      }, {} as { [key: string]: RuleCategory });

      return Object.values(dict);
    },
  },
  methods: {
    onRuleSelect(rule: SelectedRule) {
      this.state.selectedRule = rule;
      this.state.openConfigModal = true;
    },
    onRuleAdd(rule: Rule) {
      this.state.openSelectModal = false;
      this.$emit("add", rule);
    },
    onPayloadChange(data: { [val: string]: any }) {
      if (!this.state.selectedRule || !this.state.selectedRule.payload) {
        return;
      }

      const newRule = {
        ...this.state.selectedRule,
        payload: Object.entries(this.state.selectedRule.payload).reduce((dict, [key, val]) => {
          dict[key] = { ...val };
          dict[key].value = data[key];
          return dict;
        }, {} as RulePayload),
      };

      this.$emit("change", newRule);
    },
    onLevelChange(level: RuleLevel) {
      if (!this.state.selectedRule) {
        return;
      }
      this.$emit("change", {
        ...this.state.selectedRule,
        level,
      });
    },
    downConfiguration() {
      const node = document.getElementById("preview");
      if (!node) return;

      domtoimage
        .toPng(node, { bgcolor: "#fff" })
        .then((dataUrl) => {
          var link = document.createElement("a");
          link.download = `${this.$props.title}.png`;
          link.href = dataUrl;
          link.click();
        });
    },
  },
})
</script>
