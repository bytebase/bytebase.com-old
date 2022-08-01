<template>
  <div class="lg:mt-0 lg:col-span-3">
    <div class="mb-5">
      <h1 class="text-left text-3xl font-bold mb-2">
        {{ title }}
      </h1>
      <p id="preview-hidden" class="hidden">
        Made from
        <a
          href="https://www.bytebase.com/sql-review-guide"
          class="text-indigo-600 hover:underline ml-1"
        >
          https://www.bytebase.com/sql-review-guide
        </a>
      </p>
    </div>
    <div v-for="category in categoryList" :key="category.id" class="py-4">
      <a
        :id="category.id.replace(/\./g, '-')"
        :href="`#${category.id.replace(/\./g, '-')}`"
        class="text-left text-2xl text-indigo-600 font-semibold hover:underline"
      >
        {{ $t(`sql-review.category.${category.id.toLowerCase()}`) }}
      </a>
      <div
        v-for="rule in category.ruleList"
        :key="rule.type"
        class="py-4 group"
      >
        <div class="sm:flex sm:items-center sm:space-x-4">
          <a
            :id="rule.type.replace(/\./g, '-')"
            :href="`#${rule.type.replace(/\./g, '-')}`"
            class="text-left text-xl text-gray-600 hover:underline whitespace-nowrap"
          >
            {{
              $t(`sql-review.rule.${getRuleLocalizationKey(rule.type)}.title`)
            }}
          </a>
          <div class="mt-3 flex items-center space-x-4 sm:mt-0">
            <SchemaRuleLevelBadge :level="rule.level" />
            <img
              v-for="engine in rule.engineList"
              :key="engine"
              class="h-4 w-auto"
              :src="require(`~/assets/logo/db-${engine.toLowerCase()}.png`)"
            />
            <div @click="$emit('select', rule)">
              <Pencil
                class="w-5 h-5 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <p class="py-2 text-gray-400">
          {{
            $t(
              `sql-review.rule.${getRuleLocalizationKey(rule.type)}.description`
            )
          }}
        </p>
        <div v-if="rule.componentList" class="mt-1">
          <ul
            role="list"
            :class="[
              'space-y-2 list-disc list-inside',
              rule.componentList.length > 0 ? 'mt-3' : '',
            ]"
          >
            <li
              v-for="(config, index) in rule.componentList"
              :key="index"
              class="leading-8"
            >
              {{
                $t(
                  `sql-review.rule.${getRuleLocalizationKey(
                    rule.type
                  )}.component.${config.key}.title`
                )
              }}:
              <span
                v-if="
                  config.payload.type === 'STRING' ||
                  config.payload.type === 'NUMBER' ||
                  config.payload.type === 'TEMPLATE'
                "
                class="bg-gray-100 rounded text-sm p-2"
              >
                {{ config.payload.value || config.payload.default }}
              </span>
              <div
                v-else-if="config.payload.type === 'STRING_ARRAY'"
                class="flex flex-wrap gap-3 ml-5 mt-3"
              >
                <span
                  v-for="(val, i) in config.payload.value ||
                  config.payload.default"
                  :key="`${index}-${i}`"
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
    <div
      class="flex flex-row items-center gap-x-2 border-t border-gray-200 pt-8 text-gray-400"
    >
      Made by
      <a href="https://www.bytebase.com/sql-review-guide">
        <img class="h-5" src="~/assets/logo-full.svg" alt="Bytebase" />
      </a>
      at {{ today }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api";
import dayjs from "dayjs";
import { RuleCategory, getRuleLocalizationKey } from "../../common/sqlReview";
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
  setup() {
    const today = computed(() => {
      return dayjs().format("YYYY-MM-DD");
    });

    return {
      today,
      getRuleLocalizationKey,
    };
  },
});
</script>
