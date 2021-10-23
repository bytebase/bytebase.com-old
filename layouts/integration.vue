<template>
  <div class="relative overflow-hidden">
    <TheHeader />
    <main class="mt-8 sm:mt-16 max-w-7xl mx-auto px-4">
      <Nuxt />
      <div class="flex mt-6 justify-center">
        <DatabaseBar />
      </div>
      <h2
        class="mt-16 text-center text-3xl sm:text-5xl font-extrabold text-gray-900"
      >
        Features
      </h2>
      <FeatureSection />
    </main>
    <TheFooter />
  </div>
</template>
