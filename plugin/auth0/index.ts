import { User, Auth0Client } from "@auth0/auth0-spa-js";
import { computed, reactive, ComputedRef } from "@nuxtjs/composition-api";

import * as interfaces from "./interface";

let client: Auth0Client | undefined = undefined;

const state: interfaces.IState = reactive({
  loading: true,
  isAuthenticated: false,
  user: {},
  error: null,
});

const loginWithRedirect: interfaces.ILoginWithRedirect =
  function loginWithRedirect(options) {
    return client?.loginWithRedirect(options);
  };

async function getTokenSilently(): Promise<string> {
  try {
    const token = await client?.getTokenSilently();
    return token || "";
  } catch (e) {
    console.error(e);
    return "";
  }
}

export interface IAtuhPlugin {
  isAuthenticated: ComputedRef<boolean>;
  loading: ComputedRef<boolean>;
  user: ComputedRef<User>;
  getTokenSilently: () => Promise<string | undefined>;
  loginWithRedirect: interfaces.ILoginWithRedirect;
  readonly client?: Auth0Client;
}

export const authPlugin: IAtuhPlugin = {
  isAuthenticated: computed(() => state.isAuthenticated),
  loading: computed(() => state.loading),
  user: computed(() => state.user || {}),
  getTokenSilently,
  loginWithRedirect,
  client,
};

export const useAuth0 = () => {
  if (!client) {
    const auth0Conf = {
      domain: "bytebase-hub-local.us.auth0.com",
      client_id: "uroQOcGr4oNNASvd4losYszqncf0Dm75",
      audience: "localhost:3010",
    };

    client = new Auth0Client({
      ...auth0Conf,
      cacheLocation: "localstorage",
      useRefreshTokens: true,
    });
  }

  return reactive(authPlugin);
};
