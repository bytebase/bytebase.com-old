<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
      >
        <h1>
          <span
            class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
          >
            <span class="block text-gray-900">Bytebase</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700">
              Database Review Guide
            </span>
          </span>
        </h1>
        <h2
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Bytebase
          <span
            class="text-blue-600"
            style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
          >
            database review guide
          </span>
          is a online tool to create the schema review guideline for your database.
        </h2>
      </div>
      <div
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
          <img class="w-full" src="~/assets/illustration/instruction.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-3/4 rounded-lg lg:max-w-md">
          <img class="w-full" src="~/assets/bytebase_and_mysql.webp" alt="" />
        </div>
      </div>
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left w-full flex md:gap-x-2 lg:gap-x-6"
      >
        <NuxtLink
          :to="{ path: '/schema-system/mysql-prod' }"
          class="bg-transparent hover:bg-gray-100 rounded-lg p-3 flex-1 transition-all"
        >
          <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
            <img class="w-2/3" src="~/assets/schema-system/mysql-prod.webp" alt="" />
          </div>
          <div class="my-4">
            <span class="font-semibold text-lg lg:text-xl">MySQL Guideline</span>
            <span
              class="font-semibold text-blue-600 text-lg lg:text-xl"
              style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
            >for Prod</span>
          </div>
          <p>
            Get the Bytebase schema system guideline for MySQL in production environment <ArrowNarrowRight class="w-6 h-6 inline"/>
          </p>
          <div>
          </div>
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/schema-system/mysql-dev' }"
          class="bg-transparent hover:bg-gray-100 rounded-lg p-3 flex-1 transition-all"
        >
          <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
            <img class="w-2/3" src="~/assets/schema-system/mysql-dev.webp" alt="" />
          </div>
          <div class="my-4">
            <span class="font-semibold text-lg lg:text-xl">MySQL Guideline</span>
            <span
              class="font-semibold text-blue-600 text-lg lg:text-xl"
              style="box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset, rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;"
            >for Dev</span>
          </div>
          <p>
            Get the Bytebase schema system guideline for MySQL in development environment
            <ArrowNarrowRight class="w-6 h-6 inline"/>
          </p>
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="flex mt-12 justify-center">
      <div class="flex flex-row space-x-4">
        <div class="flex mt-6 text-base tracking-tight text-gray-400">
          More is coming
        </div>
        <div class="flex flex-row space-x-6">
          <img class="h-12" src="~/assets/logo/db-postgres.png" alt="postgresql" />
          <img class="h-12" src="~/assets/logo/db-tidb.png" alt="tidb" />
          <img class="h-12" src="~/assets/logo/db-snowflake.png" alt="snowflake" />
          <img
            class="h-12"
            src="~/assets/logo/db-clickhouse.png"
            alt="clickhouse"
          />
        </div>
      </div>
    </div> -->
    <div class="mt-12 pt-10 border-t border-gray-200">
      <SchemaConfigurationPage
        :rules="rules"
        :selected-rules="state.rules"
        :title="`Bytebase Schema System for MySQL`"
        @add="onRuleAdd"
        @remove="onRuleRemove"
        @change="onRuleChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import ActionButton from "../../components/ActionButton.vue";
import ArrowNarrowRight from "../../components/Icons/ArrowNarrowRight.vue";
import SchemaConfigurationPage from "../../components/SchemaSystem/SchemaConfigurationPage.vue";
import {
  Rule,
  RuleLevel,
  SelectedRule,
  rules,
} from "../../common/schemaSystem";

interface LocalState {
  rules: SelectedRule[];
}

export default defineComponent({
  components: {
    ActionButton,
    ArrowNarrowRight,
    SchemaConfigurationPage,
  },
  setup() {
    const state = reactive<LocalState>({
      rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
    });

    return {
      state,
      rules,
    };
  },
  methods: {
    onRuleAdd(rule: Rule) {
      this.state.rules.push({
        ...rule,
        level: RuleLevel.Error,
      });
    },
    onRuleRemove(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        ...this.state.rules.slice(index + 1),
      ];
    },
    onRuleChange(rule: SelectedRule) {
      const index = this.state.rules.findIndex((r) => r.id === rule.id);
      this.state.rules = [
        ...this.state.rules.slice(0, index),
        rule,
        ...this.state.rules.slice(index + 1),
      ];
    },
  }
})
</script>
