<template>
  <div class="lg:mt-0 lg:col-span-3">
    <div class="mb-5">
      <h1 class="text-left text-3xl font-bold mb-2">
        {{ title }}
      </h1>
      <p class="hidden" id="preview-hidden">
        Made from
        <a href="https://bytebase.com/database-review-guide" class="text-indigo-600 hover:underline ml-1">
          https://bytebase.com/database-review-guide
        </a>
      </p>
    </div>
    <div v-for="category in categoryList" :key="category.id" class="py-4">
      <a
        :href="`#${category.id.replace(/\./g, '-')}`"
        :id="category.id.replace(/\./g, '-')"
        class="text-left text-2xl text-indigo-600 font-semibold hover:underline"
      >
        {{ category.name }}
      </a>
      <div v-for="rule in category.ruleList" :key="rule.id" class="py-4 group">
        <div class="sm:flex sm:items-center sm:space-x-4">
          <a
            :href="`#${rule.id.replace(/\./g, '-')}`"
            :id="rule.id.replace(/\./g, '-')"
            class="text-left text-xl text-gray-600 hover:underline whitespace-nowrap"
          >
            {{ rule.id }}
          </a>
          <div class="mt-3 flex items-center space-x-4 sm:mt-0">
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
    <div class="flex-row items-center gap-x-2 border-t border-gray-200 pt-8 text-gray-400">
      Made by
      <a href="https://bytebase.com/database-review-guide">
        <img class="h-5" src="~/assets/logo-full.svg" alt="Bytebase" />
      </a>
      at {{ today }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import { RuleCategory } from "../../common/schemaSystem";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";
import Pencil from "../Icons/Pencil.vue";

export default defineComponent({
  components: {
    Pencil,
    SchemaRuleLevelBadge,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    categoryList: {
      required: true,
      type: Array as PropType<RuleCategory[]>,
    },
  },
  emits: ["select"],
  computed: {
    today(): string {
      return dayjs().format("YYYY-MM-DD");
    }
  }
});
</script>
