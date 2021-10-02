<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mt-8 mx-auto">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
