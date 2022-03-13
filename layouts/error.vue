<template>
  <div class="flex justify-center">
    <img
      v-if="error.statusCode == 404"
      src="~/assets/illustration/404.webp"
      alt="404"
    />
    <img
      v-else-if="error.statusCode == 500"
      src="~/assets/illustration/500.webp"
      alt="500"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<{
        statusCode: number;
      }>,
      required: true,
    },
  },
});
</script>
