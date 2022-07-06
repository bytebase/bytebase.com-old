<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="0.4"
  >
    <component :is="currentIcon" />
  </svg>
</template>

<script>
import { defineComponent, shallowRef } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // use shallowRef to remove unnecessary optimizations
    const currentIcon = shallowRef("");

    import(`./Icons/${props.name}.vue`).then((val) => {
      // val is a Module has default
      currentIcon.value = val.default;
    });

    return {
      currentIcon,
    };
  },
});
</script>
