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
              Schema System
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
            schema system
          </span>
          is the world's most popular open source database. Bytebase supports
          MySQL database natively to manage schema changes, backups, record
          migration history and etc.
        </h2>
        <div
          class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
        >
          <ActionButton
            :class-names="[
              'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700',
              'md:px-8 md:py-4 md:text-2xl',
            ]"
          >
            Create your schema guideline
          </ActionButton>
          <!-- <ActionSection :moduleName="'database'" /> -->
        </div>
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
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full rounded-lg lg:max-w-md">
          <img class="w-full" src="~/assets/bytebase_and_mysql.webp" alt="" />
        </div>
      </div>
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
      >
        <h1>
          <span
            class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
          >
            <span class="block text-gray-900">Bytebase</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-700">
              Schema System
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
            schema system
          </span>
          is the world's most popular open source database. Bytebase supports
          MySQL database natively to manage schema changes, backups, record
          migration history and etc.
        </h2>
        <div
          class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
        >
          <ActionSection :moduleName="'database'" />
        </div>
      </div>
    </div>
    <div class="flex mt-12 justify-center">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import ActionButton from "../../components/ActionButton.vue";

export default defineComponent({
  components: {
    ActionButton,
  },
  setup() {
    
  },
})
</script>
