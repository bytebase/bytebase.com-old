<template>
  <div class="lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 p-5">
    <aside class="hidden mt-2 lg:block lg:col-span-1">
      <div class="space-y-6">
        <fieldset
          v-for="(category, index) in categories"
          :key="index"
        >
          <a
            :href="`#${category.id}`"
            class="block text-sm font-medium text-gray-900 hover:underline"
          >
            {{ categoryName(category) }}
          </a>
          <div
            v-for="(rule, ruleIndex) in category.rules"
            :key="ruleIndex"
            class="pt-2"
          >
            <a
              :href="`#${slug(rule.id)}`"
              class="flex items-center text-sm text-gray-600 hover:underline"
            >
              {{ rule.id }}
            </a>
          </div>
        </fieldset>
      </div>
    </aside>
    <div class="lg:mt-0 lg:col-span-2 xl:col-span-3">
      <h1 class="text-left text-3xl font-bold mb-5">
        Bytebase Schema System for {{ engine.name }}
      </h1>
      <div v-for="category in categories" :key="category.id" class="py-4">
        <a
          :href="`#${category.id}`"
          :id="category.id"
          class="text-left text-2xl font-semibold text-indigo-600 hover:underline"
        >
          {{ categoryName(category) }}
        </a>
        <div v-for="rule in category.rules" :key="rule.id" class="py-4">
          <div class="flex items-center space-x-4">
            <a
              :href="`#${slug(rule.id)}`"
              :id="slug(rule.id)"
              class="text-left text-xl text-gray-600 hover:underline"
            >
              {{ rule.id }}
            </a>
            <Badge
              :text="`DB version >= ${ rule.dbVersion }`"
              :canRemove="false"
            />
            <SchemaRuleLevelBadge :level="rule.level" />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Engine, SelectedRule } from "../../common/schemaSystem";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";
import Badge from "../Badge.vue";
import slug from "slug";

interface RuleCategory {
  id: string;
  rules: SelectedRule[];
}

export default defineComponent({
  components: {
    Badge,
    SchemaRuleLevelBadge,
  },
  props: {
    rules: {
      required: true,
      type: Array as PropType<SelectedRule[]>,
    },
    engine: {
      required: true,
      type: Object as PropType<Engine>,
    },
  },
  setup() {
    return {
      slug
    };
  },
  computed: {
    categories(): RuleCategory[] {
      const dict = this.$props.rules.reduce((dict, rule) => {
        if (!dict[rule.category]) {
          dict[rule.category] = {
            id: rule.category,
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
    categoryName(category: RuleCategory): string {
      const id = category.id.toLowerCase();
      return `${id[0].toUpperCase()}${id.slice(1)}`;
    },
  },
});
</script>
