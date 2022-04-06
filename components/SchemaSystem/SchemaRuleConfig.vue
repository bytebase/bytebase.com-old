<template>
  <div>
    <div
      class="flex justify-center items-center py-4 px-2"
      @click="state.open = !state.open"
    >
      <div class="flex-1 flex flex-col">
        <div class="flex mb-2 items-center space-x-2">
          <h1 class="text-base font-semibold text-gray-900">{{ rule.id }}</h1>
          <Badge
            :text="rule.category"
            :canRemove="false"
          />
          <Badge
            :text="`DB version >= ${ rule.dbVersion }`"
            :canRemove="false"
          />
        </div>
        <div class="text-sm text-gray-400">
          {{ rule.description }}
        </div>
      </div>
    </div>

    <div v-if="state.open" class="px-2 py-5 text-sm">
      <div class="mb-7">
        <p class="mb-2">level</p>
        <div class="flex">
          <Selecter
            :options="levels"
            :selected="rule.level"
            class="w-32"
            @select="(val) => $emit('level-change', val)"
          />
        </div>
      </div>
      <div v-if="rule.payload">
        <div
          v-for="[key, payload] in Object.entries(rule.payload)"
          :key="key"
          class="mb-7"
        >
          <p class="mb-2">{{ key }}</p>
          <input
            v-if="payload.type === 'string'"
            v-model="state.payload[key]"
            type="text"
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            :placeholder="payload.default"
          />
          <div v-else-if="payload.type === 'string[]'">
            <div class="flex flex-wrap gap-4 mb-4">
              <Badge
                v-for="(val, index) in state.payload[key]"
                :key="index"
                :text="val"
                @remove="() => removeFromList(key, val)"
              />
            </div>
            <input
              type="text"
              class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              placeholder="Input the value then press enter to add"
              @keyup.enter="(e) => pushToList(key, e)"
            />
          </div>
          <InputWithTemplate
            v-else-if="payload.type === 'template'"
            :templates="payload.templates"
            :value="state.payload[key]"
            @change="(val) => (state.payload[key] = val)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, watch } from "@nuxtjs/composition-api";
import {
  SelectedRule,
  RuleLevel,
  RulePayload,
} from "../../common/schemaSystem";
import Badge from "../Badge.vue";
import Selecter from "../Selecter.vue";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";
import { InputWithTemplate } from "../InputWithTemplate";

interface LocalState {
  open: boolean;
  payload: {
    [val: string]: any;
  };
}

const levels = [
  { id: RuleLevel.Error, name: "Error" },
  { id: RuleLevel.Warning, name: "Warning" },
];

const initStatePayload = (
  payload: RulePayload | undefined
): { [val: string]: any } => {
  const target = payload || {};
  return Object.keys(target).reduce((res, key) => {
    res[key] = target[key].value || target[key].default;
    return res;
  }, {} as { [key: string]: any });
};

export default defineComponent({
  components: {
    Badge,
    Selecter,
    SchemaRuleLevelBadge,
    InputWithTemplate,
  },
  props: {
    rule: {
      required: true,
      type: Object as PropType<SelectedRule>,
    },
  },
  emits: ["payload-change", "level-change"],
  setup(props, { emit }) {
    const state = reactive<LocalState>({
      open: true,
      payload: initStatePayload(props.rule.payload),
    });

    watch(
      () => state.payload,
      (val) => emit("payload-change", val),
      { deep: true }
    );

    return {
      state,
      levels,
    };
  },
  methods: {
    removeFromList(key: string, val: any) {
      if (!Array.isArray(this.state.payload[key])) {
        return;
      }

      const values: Array<any> = this.state.payload[key];
      const index = values.indexOf(val);
      if (index < 0) {
        return;
      }

      this.state.payload[key] = [
        ...values.slice(0, index),
        ...values.slice(index + 1),
      ];
    },
    pushToList(key: string, e: any) {
      if (!Array.isArray(this.state.payload[key])) {
        return;
      }

      const val = e.target.value.trim();
      this.state.payload[key].push(val);

      e.target.value = "";
    },
  },
});
</script>
