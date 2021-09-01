<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mx-auto px-4">
      <Nuxt class="py-16" />
      <ActionSection class="sm:justify-center" :moduleName="'deploy.blog'" />
    </main>
    <TheFooter />
  </div>
</template>
