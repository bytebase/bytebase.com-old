<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mx-auto px-4">
      <Nuxt class="py-16" />
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <SubscribeSection :moduleName="'subscribe.blog-detail'" />
      </div>
      <ActionSection class="sm:justify-center" :moduleName="'deploy.blog'" />
    </main>
    <TheFooter />
  </div>
</template>
