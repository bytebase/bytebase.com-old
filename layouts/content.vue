<template>
  <div class="w-full h-auto flex flex-col relative overflow-hidden">
    <main id="docs-main-wrapper" class="w-full h-screen">
      <DocsSidebar />
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
#docs-main-wrapper {
  display: grid;
  grid-template-columns: 280px auto;
}
</style>
