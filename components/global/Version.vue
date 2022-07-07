<template>
  <span>{{ VERSION }}</span>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as VERSION } from "!raw-loader!../../VERSION";
</script>
