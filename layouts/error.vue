<template>
  <div class="flex justify-center">
    <img
      v-if="error.statusCode == 404"
      src="~/assets/illustration/404.webp"
      alt=""
    />
    <img
      v-else-if="error.statusCode == 500"
      src="~/assets/illustration/500.webp"
      alt=""
    />
  </div>
</template>

<script lang="ts">
export default {
  props: ["error"],
};
</script>
