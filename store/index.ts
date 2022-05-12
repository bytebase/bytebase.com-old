import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => {
    return {
      showSearchDialogFlag: false,
      hasRedirectLocale: false,
    };
  },
  actions: {
    showSearchDialog() {
      this.showSearchDialogFlag = true;
    },
    hideSearchDialog() {
      this.showSearchDialogFlag = false;
    },
    toggleSearchDialog() {
      this.showSearchDialogFlag = !this.showSearchDialogFlag;
    },
    setHasRedirectLocale() {
      this.hasRedirectLocale = true;
    },
  },
});
