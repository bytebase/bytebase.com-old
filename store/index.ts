import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => {
    return {
      hasRedirectLocale: false,
    };
  },
  actions: {
    setHasRedirectLocale() {
      this.hasRedirectLocale = true;
    },
  },
});
