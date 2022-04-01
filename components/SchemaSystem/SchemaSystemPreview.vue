<template>
  <div class="py-6">
    <h1 class="text-left text-3xl font-bold mb-5">
      {{ engine.name }} Schema Rules
    </h1>
    <div v-for="category in categories" :key="category.id" class="py-4">
      <h2 class="text-left text-2xl font-semibold">
        {{ categoryName(category) }}
      </h2>
      <div v-for="rule in category.rules" :key="rule.id" class="py-4">
        <div class="flex items-center space-x-4">
          <h3 class="text-left text-2xl">{{ rule.id }}</h3>
          <SchemaRuleLevelBadge :level="rule.level" />
        </div>
        <p class="py-2 text-gray-400">{{ rule.description }}</p>
        <div v-if="rule.payload" class="mt-4">
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
import { Engine, SelectedRule } from "../../common/schemaSystem";
import SchemaRuleLevelBadge from "./SchemaRuleLevelBadge.vue";

interface RuleCategory {
  id: string;
  rules: SelectedRule[];
}

export default defineComponent({
  components: {
    SchemaRuleLevelBadge,
  },
  props: {
    rules: {
      required: true,
      type: Object as PropType<SelectedRule[]>,
    },
    engine: {
      required: true,
      type: Object as PropType<Engine>,
    },
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
