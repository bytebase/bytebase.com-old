<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mt-16 mx-auto px-4">
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
