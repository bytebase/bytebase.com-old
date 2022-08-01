<template>
  <div>
    <div class="flex justify-end mb-8 gap-x-5">
      <ActionButton
        v-if="ruleChanged"
        :class-names="['bg-white hover:bg-gray-200']"
        @click="$emit('reset')"
      >
        {{ $t("sql-review-guide.reset-changes") }}
      </ActionButton>
      <ActionButton
        :class-names="[
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
        ]"
        @click="downConfiguration"
      >
        {{ $t("sql-review-guide.download-as-image") }}
      </ActionButton>
    </div>
    <div class="lg:grid lg:grid-cols-6 lg:gap-x-8">
      <aside class="hidden mt-2 lg:block lg:col-span-2 p-5">
        <div class="space-y-6 mb-6 pb-6 border-b border-gray-300">
          <h1 class="text-left text-2xl font-semibold">
            {{ $t("sql-review-guide.filter") }}
          </h1>
          <div class="space-y-2">
            <div
              v-for="(filter, index) in state.filterOptionList"
              :key="index"
              class="flex items-center"
            >
              <input
                :id="filter.id"
                v-model="filter.checked"
                type="checkbox"
                :value="filter.id"
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <label
                :for="filter.id"
                class="ml-3 items-center text-sm text-gray-600"
              >
                {{ $t(`sql-review.${filter.type}.${filter.id.toLowerCase()}`) }}
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
          <h1 class="text-left text-2xl font-semibold">
            {{ $t("sql-review-guide.rules") }}
          </h1>
          <fieldset v-for="(category, index) in categoryList" :key="index">
            <div class="block text-sm font-medium text-gray-900">
              {{ $t(`sql-review.category.${category.id.toLowerCase()}`) }}
            </div>
            <div
              v-for="(rule, ruleIndex) in category.ruleList"
              :key="ruleIndex"
              class="pt-2 flex items-center text-sm group"
            >
              <a
                :href="`#${rule.type.replace(/\./g, '-')}`"
                class="text-gray-600 hover:underline cursor-pointer"
              >
                {{
                  $t(
                    `sql-review.rule.${getRuleLocalizationKey(rule.type)}.title`
                  )
                }}
              </a>
            </div>
          </fieldset>
        </div>
      </aside>
      <SchemaSystemPreview
        id="preview"
        :title="title"
        :category-list="categoryList"
        class="lg:col-span-4 p-5"
        @select="(rule) => onRuleSelect(rule)"
      />
    </div>
    <Modal
      :open="state.openConfigModal && !!state.selectedRule"
      :title="$t('sql-review-guide.configure-rule')"
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
import {
  defineComponent,
  PropType,
  reactive,
  nextTick,
  computed,
} from "@nuxtjs/composition-api";
import domtoimage from "dom-to-image";
import SchemaSystemPreview from "./SchemaSystemPreview.vue";
import ActionButton from "../ActionButton.vue";
import {
  LEVEL_LIST,
  RuleLevel,
  RuleTemplate,
  RuleCategory,
  RuleConfigComponent,
  convertToCategoryList,
  getRuleLocalizationKey,
} from "../../common/sqlReview";
import Modal from "../Modal.vue";
import SchemaRuleConfig from "./SchemaRuleConfig.vue";

interface FilterItem {
  id: string;
  type: "engine" | "level";
  checked: boolean;
}

interface LocalState {
  openConfigModal: boolean;
  selectedRule?: RuleTemplate;
  filterOptionList: FilterItem[];
}

const baseFilterOptionList: FilterItem[] = LEVEL_LIST.map((level) => ({
  id: level,
  type: "level",
  checked: false,
}));

const filterOptionList: FilterItem[] = [
  {
    id: "MYSQL",
    type: "engine",
    checked: false,
  },
  {
    id: "TIDB",
    type: "engine",
    checked: false,
  },
  {
    id: "POSTGRES",
    type: "engine",
    checked: false,
  },
  ...baseFilterOptionList,
];

export default defineComponent({
  components: {
    Modal,
    ActionButton,
    SchemaRuleConfig,
    SchemaSystemPreview,
  },
  props: {
    selectedRuleList: {
      required: true,
      type: Array as PropType<RuleTemplate[]>,
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
  emits: ["change", "reset"],
  setup(props, { emit }) {
    const state = reactive<LocalState>({
      openConfigModal: false,
      filterOptionList,
    });

    const isFilteredRule = (rule: RuleTemplate): boolean => {
      if (state.filterOptionList.every((f) => !f.checked)) {
        return true;
      }

      return state.filterOptionList.some((filter) => {
        return (
          (filter.type === "level" &&
            rule.level === filter.id &&
            filter.checked) ||
          (filter.type === "engine" &&
            filter.checked &&
            rule.engineList.some((engine) => engine === filter.id))
        );
      });
    };
    const categoryList = computed((): RuleCategory[] =>
      convertToCategoryList(props.selectedRuleList.filter(isFilteredRule))
    );

    const filterItemCount = (filter: FilterItem) => {
      return props.selectedRuleList.filter((r) => {
        return (
          (filter.type === "level" && filter.id === r.level) ||
          (filter.type === "engine" &&
            r.engineList.some((engine) => engine === filter.id))
        );
      }).length;
    };

    const onRuleSelect = (rule: RuleTemplate) => {
      state.selectedRule = rule;
      state.openConfigModal = true;
    };

    const onPayloadChange = (data: { [val: string]: any }) => {
      if (!state.selectedRule || !state.selectedRule.componentList) {
        return;
      }

      const newRule: RuleTemplate = {
        ...state.selectedRule,
        componentList: state.selectedRule.componentList.reduce(
          (list, component, index) => {
            let val = data[index];
            switch (component.payload.type) {
              case "STRING_ARRAY":
                list.push({
                  ...component,
                  payload: {
                    ...component.payload,
                    value: data[index] as string[],
                  },
                });
                break;
              case "NUMBER":
                list.push({
                  ...component,
                  payload: {
                    ...component.payload,
                    value: data[index] as number,
                  },
                });
                break;
              default:
                list.push({
                  ...component,
                  payload: {
                    ...component.payload,
                    value: data[index] as string,
                  },
                });
                break;
            }
            return list;
          },
          [] as RuleConfigComponent[]
        ),
      };

      emit("change", newRule);
    };

    const onLevelChange = (level: RuleLevel) => {
      if (!state.selectedRule) {
        return;
      }
      emit("change", {
        ...state.selectedRule,
        level,
      });
    };

    const downConfiguration = () => {
      const node = document.getElementById("preview");
      if (!node) return;

      const element = document.getElementById("preview-hidden");
      if (element) {
        element.style.display = "flex";
      }

      nextTick(() =>
        domtoimage
          .toPng(node, { bgcolor: "#fff" })
          .then((dataUrl) => {
            var link = document.createElement("a");
            link.download = `${props.title}.png`;
            link.href = dataUrl;
            link.click();
          })
          .finally(() => {
            if (element) {
              element.style.removeProperty("display");
            }
          })
      );
    };

    return {
      state,
      categoryList,
      filterItemCount,
      onRuleSelect,
      onPayloadChange,
      onLevelChange,
      downConfiguration,
      getRuleLocalizationKey,
    };
  },
});
</script>
