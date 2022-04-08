<template>
  <div>
    <div class="flex justify-end mb-8 gap-x-5">
      <ActionButton
        v-if="ruleChanged"
        :class-names="[
          'bg-white hover:bg-gray-200',
        ]"
        @click="$emit('reset')"
      >
        Reset
      </ActionButton>
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
        <div class="space-y-6 mb-6 pb-6 border-b border-gray-300">
          <h1 class="text-left text-2xl font-semibold">Filter</h1>
          <div class="space-y-2">
            <div
              v-for="(filter, index) in state.filter"
              :key="index"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="filter.id"
                :value="filter.id"
                v-model="filter.checked"
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <label :for="filter.id" class="ml-3 items-center text-sm text-gray-600">
                {{ filter.name }}
                <span
                  class="ml-1 items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                >
                  {{ filterItemCount(filter) }}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <h1 class="text-left text-2xl font-semibold">Rules</h1>
          <fieldset
            v-for="(category, index) in categories"
            :key="index"
          >
            <div
              class="block text-sm font-medium text-gray-900"
            >
              {{ category.title }}
            </div>
            <div
              v-for="(rule, ruleIndex) in category.rules"
              :key="ruleIndex"
              class="pt-2 flex items-center text-sm group"
            >
              <a
                :href="`#${rule.id.replaceAll('.', '-')}`"
                class="text-gray-600 hover:underline cursor-pointer"
              >
                {{ rule.id }}
              </a>

              <div @click="$emit('remove', rule)">
                <TrashIcon
                  class="w-4 h-4 text-red-600 ml-2 cursor-pointer opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </fieldset>
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
  levels,
  Rule,
  RulePayload,
  RuleLevel,
  SelectedRule,
  RuleCategory,
  DatabaseType
} from "../../common/schemaSystem";
import Modal from "../Modal.vue";
import SchemaSystemRules from "./SchemaSystemRules.vue";
import TrashIcon from "../Icons/Trash.vue";
import SchemaRuleConfig from "./SchemaRuleConfig.vue";

interface FilterItem {
  id: string;
  name: string;
  type: "database" | "level";
  checked: boolean;
}

interface LocalState {
  openConfigModal: boolean;
  selectedRule?: SelectedRule;
  filter: FilterItem[];
}

const baseFilterOptions: FilterItem[] = levels.map((l) => ({
  id: l.id,
  name: l.name,
  type: "level",
  checked: false,
}));

const filterOptions: FilterItem[] = [
  {
    id: "common",
    name: "Common",
    type: "database",
    checked: false,
  },
  {
    id: "mysql",
    name: "MySQL",
    type: "database",
    checked: false,
  },
  ...baseFilterOptions,
];

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    TrashIcon,
    SchemaRuleConfig,
    SchemaSystemRules,
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
    ruleChanged: {
      required: true,
      type: Boolean,
    },
  },
  emits: ["add", "remove", "change", "reset"],
  setup() {
    const state = reactive<LocalState>({
      openConfigModal: false,
      filter: filterOptions
    });

    return {
      state,
    };
  },
  computed: {
    categories(): RuleCategory[] {
      const dict = this.$props.selectedRules.reduce((dict, rule) => {
        if (!this.isFilteredRule(rule)) {
          return dict;
        }

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
    isFilteredRule(rule: SelectedRule): boolean {
      if (this.state.filter.every((f) => !f.checked)) {
        return true;
      }

      return this.state.filter.some((filter) => {
        return (
          (filter.type === "level" && rule.level === filter.id && filter.checked) ||
          (filter.type === "database" && filter.checked && rule.database.includes(filter.id as DatabaseType))
        );
      });
    },
    filterItemCount(filter: FilterItem) {
      return this.$props.selectedRules.filter((r) => {
        return (
          (filter.type === "level" && filter.id === r.level) ||
          (filter.type === "database" && r.database.includes(filter.id as DatabaseType))
        )
      }).length;
    },
    onRuleSelect(rule: SelectedRule) {
      this.state.selectedRule = rule;
      this.state.openConfigModal = true;
    },
    onRuleAdd(rule: Rule) {
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
