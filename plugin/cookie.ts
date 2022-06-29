import {
  CookieOptions,
  isCookieEnabled,
  getCookie,
  setCookie,
} from "tiny-cookie";

export interface Cookie {
  set: (key: string, value: string, options?: CookieOptions) => void;
  get: (key: string) => string;
  setURLParams: (options?: CookieOptions) => void;
}

export const useCookie = (): Cookie => {
  const enabled = isCookieEnabled();

  return {
    set(key: string, value: string, options?: CookieOptions) {
      if (!enabled) {
        return;
      }

      setCookie(key, value, options);
    },
    get(key: string): string {
      if (!enabled) {
        return "";
      }
      return getCookie(key) || "";
    },
    setURLParams(options?: CookieOptions) {
      const params = new URLSearchParams(window.location.search);
      for (const [key, value] of params.entries()) {
        this.set(key, value, options);
      }
    },
  };
};
