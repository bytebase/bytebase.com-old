<template>
  <div class="lg:mt-0 lg:col-span-3">
    <h1 class="text-left text-3xl font-bold mb-5">
      {{ title }}
    </h1>
    <div v-for="category in categories" :key="category.id" class="py-4">
      <h2
        class="text-left text-2xl font-semibold"
      >
        {{ category.title }}
      </h2>
      <div v-for="rule in category.rules" :key="rule.id" class="py-4 group"
>
        <div class="sm:flex sm:items-center sm:space-x-4">
          <h3
            class="text-left text-xl text-gray-600"
          >
            {{ rule.id }}
          </h3>
          <div class="mt-3 flex items-center space-x-4 sm:mt-0">
            <Badge
              :text="`DB version >= ${ rule.dbVersion }`"
              :canRemove="false"
            />
            <SchemaRuleLevelBadge :level="rule.level" />
            <div @click="$emit('select', rule)">
              <Pencil
                class="w-5 h-5 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <p class="py-2 text-gray-400">{{ rule.description }}</p>
        <div v-if="rule.payload" class="mt-1">
          <ul role="list" class="space-y-4 list-disc list-inside">
            <li
              v-for="key in Object.keys(rule.payload)"
              :key="key"
              class="leading-8"
            >
              {{ key }}:
              <span
                v-if="rule.payload[key].type === 'string' || rule.payload[key].type === 'template'"
                class="bg-gray-100 rounded text-sm p-2"
              >
                {{ rule.payload[key].value || rule.payload[key].default }}
              </span>
              <div
                v-else-if="rule.payload[key].type === 'string[]'"
                class="flex flex-wrap gap-3 ml-5 mt-3"
              >
                <span
                  v-for="(val, i) in rule.payload[key].value || rule.payload[key].default"
                  :key="i"
                  class="bg-gray-100 rounded text-sm p-2"
                >
                  {{ val }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { RuleCategory } from "../../common/schemaSystem";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";
import Badge from "../Badge.vue";
import Pencil from "../Icons/Pencil.vue";

export default defineComponent({
  components: {
    Badge,
    Pencil,
    SchemaRuleLevelBadge,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    categories: {
      required: true,
      type: Array as PropType<RuleCategory[]>,
    },
  },
  emits: ["select"],
});
</script>
