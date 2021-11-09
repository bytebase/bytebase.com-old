<template>
  <div class="flex flex-row space-x-4">
    <div class="flex mt-6 text-base tracking-tight text-gray-400">
      With
    </div>
    <div class="flex flex-row space-x-6">
      <img class="h-12" src="~/assets/logo/db-mysql.png" alt="mysql" />
      <img class="h-12" src="~/assets/logo/db-postgres.png" alt="postgresql" />
      <img class="h-12" src="~/assets/logo/db-tidb.png" alt="tidb" />
      <img
        class="h-12"
        src="~/assets/logo/db-clickhouse.png"
        alt="clickhouse"
      />
      <img class="h-12" src="~/assets/logo/gitlab-logo.svg" alt="gitlab" />
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
