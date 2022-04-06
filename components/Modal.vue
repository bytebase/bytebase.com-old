<template>
  <transition name="modal" mode="out-in">
    <div
      v-if="open"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center"
    >
      <div
        @click="$emit('close')"
        class="absolute top-0 bottom-0 right-0 left-0 bg-gray-100 bg-opacity-70"></div>
      <div
        class="relative p-4 w-full max-w-2xl h-full md:h-auto"
      >
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg dark:bg-gray-700 shadow-2xl">
          <!-- Modal header -->
          <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              {{ title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="$emit('close')"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    open: {
      required: true,
      type: Boolean,
    },
    title: {
      required: true,
      type: String,
    },
  },
  emits: ["close"],
})
</script>

<style scoped>
.modal-enter-active {
  transition: all 0.2s ease;
}

.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter {
  opacity: 0;
}
.modal-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>