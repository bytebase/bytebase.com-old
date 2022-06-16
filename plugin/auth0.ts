import { Auth0Client } from "@auth0/auth0-spa-js";
import { reactive } from "@nuxtjs/composition-api";

let client: Auth0Client | undefined = undefined;

export interface IAtuhPlugin {
  loginWithRedirect: (options: { redirectUrl: string }) => Promise<void> | void;
  isAuthenticated: () => Promise<boolean>;
}

export const authPlugin: IAtuhPlugin = {
  loginWithRedirect: (options: { redirectUrl: string }) => {
    client?.loginWithRedirect({
      redirect_uri: options.redirectUrl,
    });
  },
  isAuthenticated: () => client?.isAuthenticated() ?? Promise.resolve(false),
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
