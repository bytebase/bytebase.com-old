import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => {
    return {
      hasRedirectLocale: false,
      showQrcode: false,
    };
  },
  actions: {
    setHasRedirectLocale() {
      this.hasRedirectLocale = true;
    },
    toggleQrcode() {
      this.showQrcode = !this.showQrcode;
    },
  },
});
