<template>
  <div class="flex flex-col space-y-6">
    <div
      class="flex flex-row space-x-3 sm:space-x-6 items-center justify-center"
    >
      <img class="h-10 sm:h-16" src="~/assets/logo/db-mysql.png" alt="mysql" />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/db-postgres.png"
        alt="postgresql"
      />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/db-clickhouse.png"
        alt="clickhouse"
      />
      <img class="h-10 sm:h-16" src="~/assets/logo/db-tidb.png" alt="tidb" />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/db-snowflake.png"
        alt="snowflake"
      />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/db-mongodb.png"
        alt="mongodb"
      />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/db-spanner.png"
        alt="spanner"
      />
    </div>
    <div
      class="flex flex-row space-x-3 sm:space-x-6 items-center justify-start"
    >
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/gitlab-logo.svg"
        alt="gitlab"
      />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/github-logo.svg"
        alt="github"
      />
      <img
        class="h-10 sm:h-16"
        src="~/assets/logo/terraform-logo.svg"
        alt="terraform"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // do nth
  },
});
</script>
