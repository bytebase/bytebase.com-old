<template>
  <nav class="overflow-y-auto" aria-label="rules" style="max-height: 50vh;">
    <div v-for="category in categories" :key="category.id" class="relative">
      <div
        class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-2 py-1 text-base font-medium text-gray-500"
      >
        <h3>{{ categoryName(category) }}</h3>
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li v-for="rule in category.rules" :key="rule.id" class="bg-white">
          <div
            class="cursor-pointer relative px-2 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            @click="$emit('select', rule)"
          >
            <div class="flex-1 min-w-0">
              <div class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-lg font-medium text-gray-900">
                  {{ rule.id }}
                  <Badge
                    :text="`DB version >= ${ rule.dbVersion }`"
                    :canRemove="false"
                  />
                </p>
                <p class="text-sm text-gray-500 truncate mt-2">
                  {{ rule.description }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Rule } from "../../common/schemaSystem";
import Badge from "../Badge.vue";

interface RuleCategory {
  id: string;
  rules: Rule[];
}

export default defineComponent({
  components: {
    Badge
  },
  props: {
    rules: {
      required: true,
      type: Array as PropType<Rule[]>,
    },
  },
  emits: ["select"],
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
