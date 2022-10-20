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
      <div class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          @click="downloadAsYAML"
        >
          {{ $t("sql-review-guide.download-as-yaml") }}
          <span class="tooltip-wrapper ml-1">
            <QuestionIcon class="h-5 w-5" />
            <div class="tooltip-container whitespace-nowrap">
              <i18n
                path="sql-review-guide.download-as-yaml-tooltip"
                tag="span"
                class="tooltip-content w-full flex flex-row justify-start items-center"
              >
                <template #link>
                  <a
                    href="https://github.com/marketplace/actions/sql-review"
                    class="ml-1 flex flex-row justify-start items-center underline hover:opacity-80"
                    target="_blank"
                    @click.stop
                    >SQL Review GitHub Action<svg
                      class="w-4 h-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      /></svg
                  ></a>
                </template>
              </i18n>
            </div>
          </span>
        </button>
        <div class="-ml-px relative block">
          <button
            id="option-menu-button"
            type="button"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            aria-expanded="true"
            aria-haspopup="true"
            @click="state.openDownloadMenu = !state.openDownloadMenu"
          >
            <span class="sr-only">Open options</span>
            <!-- Heroicon name: solid/chevron-down -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="state.openDownloadMenu"
            class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="option-menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <button
                class="text-gray-700 block px-4 py-2 w-full text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                @click="downloadAsImage"
              >
                {{ $t("sql-review-guide.download-as-image") }}
              </button>
            </div>
          </div>
        </div>
      </div>
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
import QuestionIcon from "~/components/QuestionIcon.vue";

interface FilterItem {
  id: string;
  type: "engine" | "level";
  checked: boolean;
}

interface LocalState {
  openConfigModal: boolean;
  selectedRule?: RuleTemplate;
  filterOptionList: FilterItem[];
  openDownloadMenu: boolean;
}

const baseFilterOptionList: FilterItem[] = LEVEL_LIST.map((level) => ({
  id: level,
  type: "level",
  checked: false,
}));

export default defineComponent({
  components: {
    Modal,
    QuestionIcon,
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
    templateId: {
      required: true,
      type: String,
    },
  },
  emits: ["change", "reset"],
  setup(props, { emit }) {
    const engineSet = new Set<string>();
    for (const rule of props.selectedRuleList) {
      for (const engine of rule.engineList) {
        engineSet.add(engine);
      }
    }
    const engineFilterOptionList: FilterItem[] = [...engineSet.keys()].map(
      (engine) => ({
        id: engine,
        type: "engine",
        checked: false,
      })
    );
    const state = reactive<LocalState>({
      openConfigModal: false,
      filterOptionList: [...engineFilterOptionList, ...baseFilterOptionList],
      openDownloadMenu: false,
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
              case "BOOLEAN":
                list.push({
                  ...component,
                  payload: {
                    ...component.payload,
                    value: data[index] as boolean,
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

    const downloadAsImage = () => {
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
            state.openDownloadMenu = false;
          })
      );
    };

    const downloadAsYAML = () => {
      const content = [
        `# This file is generated on https://www.bytebase.com/sql-review-guide#${props.templateId}`,
        "# You can use it with the SQL Review Action https://github.com/marketplace/actions/sql-review",
        `template: ${props.templateId}`,
        "ruleList:",
      ];

      for (const rule of props.selectedRuleList) {
        const type = `  - type: ${rule.type} # Doc: https://www.bytebase.com/docs/sql-review/review-rules/supported-rules#${rule.type}`;
        const level = `    level: ${rule.level}`;
        content.push(type, level);

        if (rule.componentList.length > 0) {
          content.push("    payload:");
          for (const component of rule.componentList) {
            const value = component.payload.value ?? component.payload.default;
            if (component.payload.type === "STRING_ARRAY") {
              content.push(`      ${component.key}:`);
              for (const data of value as string[]) {
                content.push(`        - ${data}`);
              }
            } else {
              content.push(`      ${component.key}: ${value}`);
            }
          }
        }
      }

      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," +
          encodeURIComponent(content.join("\n"))
      );
      element.setAttribute("download", "sql-review.yml");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };

    return {
      state,
      categoryList,
      filterItemCount,
      onRuleSelect,
      onPayloadChange,
      onLevelChange,
      downloadAsYAML,
      downloadAsImage,
      getRuleLocalizationKey,
    };
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  @apply relative;
}

.tooltip-container {
  @apply hidden absolute -top-12 -right-4 pb-5 bg-transparent;
}

.tooltip-container > .tooltip-content {
  @apply px-2 py-2 rounded bg-black bg-opacity-80 text-white whitespace-nowrap;
}

.tooltip-wrapper:hover .tooltip-container,
.tooltip-container:hover {
  @apply block z-50;
}
</style>
