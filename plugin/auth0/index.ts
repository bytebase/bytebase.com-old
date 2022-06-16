import { Auth0Client } from "@auth0/auth0-spa-js";
import { reactive } from "@nuxtjs/composition-api";

import * as interfaces from "./interface";

let client: Auth0Client | undefined = undefined;

const loginWithRedirect: interfaces.ILoginWithRedirect = (options) =>
  client?.loginWithRedirect(options);

export interface IAtuhPlugin {
  loginWithRedirect: interfaces.ILoginWithRedirect;
}

export const authPlugin: IAtuhPlugin = {
  loginWithRedirect,
};

export const useAuth0 = () => {
  if (!client) {
    const auth0Conf = {
      domain: "bytebase-hub-prod.us.auth0.com",
      client_id: "7B2H1koNRkxPcJD70GyRDo5HmSM0b9WQ",
      audience: "https://bytebase-hub-backend-prod.onrender.com",
    };

    client = new Auth0Client({
      ...auth0Conf,
      cacheLocation: "localstorage",
      useRefreshTokens: true,
    });
  }

  return reactive(authPlugin);
};
