<template>
  <div>
    <div class="flex justify-center items-center py-4 px-2">
      <div class="flex-1 flex flex-col">
        <div class="flex mb-2 items-center space-x-2">
          <h1 class="text-base font-semibold text-gray-900">
            {{
              $t(`sql-review.rule.${getRuleLocalizationKey(rule.type)}.title`)
            }}
          </h1>
          <Badge
            :text="$t(`sql-review.category.${rule.category.toLowerCase()}`)"
            :can-remove="false"
          />
        </div>
        <div class="text-sm text-gray-400">
          {{
            $t(
              `sql-review.rule.${getRuleLocalizationKey(rule.type)}.description`
            )
          }}
        </div>
      </div>
    </div>

    <div class="px-2 py-5 text-sm">
      <div class="mb-7">
        <p class="mb-3">
          {{ $t("sql-review.level.name") }}
        </p>
        <div class="flex gap-x-3">
          <div
            v-for="(level, index) in levelList"
            :key="index"
            class="flex items-center"
          >
            <input
              :id="`level-${level}`"
              :value="level"
              type="radio"
              :checked="level === state.level"
              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              @input="() => changeLevel(level)"
            />
            <label
              :for="`level-${level}`"
              class="ml-2 items-center text-sm text-gray-600"
            >
              {{ $t(`sql-review.level.${level.toLowerCase()}`) }}
            </label>
          </div>
        </div>
      </div>
      <div v-if="rule.componentList">
        <div
          v-for="(config, index) in rule.componentList"
          :key="index"
          class="mb-7"
        >
          <p class="mb-3">
            {{
              $t(
                `sql-review.rule.${getRuleLocalizationKey(
                  rule.type
                )}.component.${config.key}.title`
              )
            }}
          </p>
          <input
            v-if="config.payload.type === 'STRING'"
            v-model="state.payload[index]"
            type="text"
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            :placeholder="config.payload.default"
          />
          <input
            v-if="config.payload.type === 'NUMBER'"
            v-model="state.payload[index]"
            type="text"
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            :placeholder="`${config.payload.default}`"
          />
          <div v-else-if="config.payload.type === 'STRING_ARRAY'">
            <div class="flex flex-wrap gap-4 mb-4">
              <Badge
                v-for="(val, i) in state.payload[index]"
                :key="`${index}-${i}`"
                :text="`${val}`"
                @remove="() => removeFromList(index, val)"
              />
            </div>
            <input
              type="text"
              class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              :placeholder="$t('sql-review-guide.input-then-press-enter')"
              @keyup.enter="(e) => pushToList(index, e)"
            />
          </div>
          <InputWithTemplate
            v-else-if="config.payload.type === 'TEMPLATE'"
            :template-list="
              config.payload.templateList.map((id) => ({
                id,
                description: $t(
                  `sql-review.rule.${getRuleLocalizationKey(
                    rule.type
                  )}.component.${config.key}.template.${id}`
                ),
              }))
            "
            :value="getStringPayload(index)"
            @change="(val) => onPayloadChange(index, val)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  PropType,
  watch,
} from "@nuxtjs/composition-api";
import {
  LEVEL_LIST,
  RuleTemplate,
  RuleLevel,
  RuleConfigComponent,
  getRuleLocalizationKey,
} from "../../common/sqlReview";
import Badge from "../Badge.vue";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";
import InputWithTemplate from "../InputWithTemplate";

type PayloadValueList = (string | number | string[])[];

interface LocalState {
  level: RuleLevel;
  payload: PayloadValueList;
}

const initStatePayload = (
  componentList: RuleConfigComponent[] | undefined
): PayloadValueList => {
  return (componentList ?? []).reduce((res, component) => {
    res.push(component.payload.value ?? component.payload.default);
    return res;
  }, [] as PayloadValueList);
};

export default defineComponent({
  components: {
    Badge,
    SchemaRuleLevelBadge,
    InputWithTemplate,
  },
  props: {
    rule: {
      required: true,
      type: Object as PropType<RuleTemplate>,
    },
  },
  emits: ["payload-change", "level-change"],
  setup(props, { emit }) {
    const state = reactive<LocalState>({
      level: props.rule.level,
      payload: initStatePayload(props.rule.componentList),
    });

    watch(
      () => state.payload,
      (val) => emit("payload-change", val),
      { deep: true }
    );

    const changeLevel = (level: RuleLevel) => {
      state.level = level;
      emit("level-change", level);
    };

    const removeFromList = (i: number, val: any) => {
      if (!Array.isArray(state.payload[i])) {
        return;
      }

      const values = state.payload[i] as string[];
      const index = values.indexOf(val);
      state.payload[i] = [
        ...values.slice(0, index),
        ...values.slice(index + 1),
      ];
    };

    const pushToList = (i: number, e: any) => {
      if (!Array.isArray(state.payload[i])) {
        return;
      }

      const val = e.target.value.trim();
      (state.payload[i] as string[]).push(val);

      e.target.value = "";
    };

    const getStringPayload = (i: number): string => {
      return state.payload[i] as string;
    };

    const onPayloadChange = (i: number, val: string) => {
      state.payload = [
        ...state.payload.slice(0, i),
        val,
        ...state.payload.slice(i + 1),
      ];
    };

    return {
      state,
      levelList: LEVEL_LIST,
      changeLevel,
      removeFromList,
      pushToList,
      getStringPayload,
      onPayloadChange,
      getRuleLocalizationKey,
    };
  },
});
</script>

<style scoped>
/*  Removed the ticker in the number field  */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
