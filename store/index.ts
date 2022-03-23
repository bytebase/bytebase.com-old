import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => {
    return {
      showSearchDialogFlag: false,
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
  },
});
