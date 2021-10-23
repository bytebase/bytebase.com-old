<template>
  <div class="flex flex-row h-12 space-x-4">
    <div class="flex items-center mt-6 text-base tracking-tight text-gray-400">
      Work with
    </div>
    <div class="flex flex-row space-x-6">
      <img src="~/assets/logo/db-mysql.png" alt="mysql" />
      <img src="~/assets/logo/db-postgres.png" alt="postgresql" />
      <img src="~/assets/logo/db-tidb.png" alt="tidb" />
      <img src="~/assets/logo/db-clickhouse.png" alt="clickhouse" />
      <img src="~/assets/logo/gitlab-logo.svg" alt="gitlab" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {},
  setup(props) {},
});
</script>
