import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => {
    return {
      hasRedirectLocale: false,
      showQrcode: true,
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
